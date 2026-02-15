import cv2
import numpy as np
import fitz
from PIL import Image

# 1. Baseline
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
pix_mask = fitz.Pixmap(doc, mask_xref)
pix_rgba = fitz.Pixmap(pix_color, pix_mask)

img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))

# Broad Target for 6812: 
# minX: 665, minY: 500, maxX: 785, maxY: 665
tx0, ty0, tx1, ty1 = 665, 500, 785, 665

# Create a slice for processing
r = img_rgba[:,:,0].astype(int)
g = img_rgba[:,:,1].astype(int)
b = img_rgba[:,:,2].astype(int)
a = img_rgba[:,:,3].astype(int)

# Identify VERY black pixels (to protect)
# These are likely the cadastral boundary lines
# Strict threshold for "strakke" lines
black_mask = (r < 110) & (g < 110) & (b < 110) & (a > 100)

# Identify Building Pixels (Red, Pink, Gray Dots)
# In the 6812 box:
target_area = np.zeros(img_rgba.shape[:2], dtype=bool)
target_area[ty0:ty1, tx0:tx1] = True

# We want to kill anything in the target area that is NOT a black boundary line
# but we must stay away from the neighbor parcel (6117)
# Subagent says 6117 ends at X=676. 
# Let's use X=678 as the hard safety border for 6117.
safety_x = 678

# Pixels to kill: 
# 1. Everything inside 6812 area (X > 678) that is NOT extremely black.
kill_mask_broad = target_area & (np.indices(img_rgba.shape[:2])[1] >= safety_x) & (~black_mask)

# 2. In the junction/overlap area (665 <= X < 678):
# Only kill pixels that are definitely part of the 6812 house (RED-ish)
# or are that "light gray dotted" color.
overlap_area = target_area & (np.indices(img_rgba.shape[:2])[1] < safety_x) & (np.indices(img_rgba.shape[:2])[1] >= 665)
r_overlap = r[overlap_area]
g_overlap = g[overlap_area]
b_overlap = b[overlap_area]
# Red-ish or Gray-ish (but not black)
red_or_gray_overlap = (r_overlap > g_overlap + 15) | ((r_overlap > 130) & (g_overlap > 130) & (b_overlap > 130))
kill_mask_overlap = np.zeros(img_rgba.shape[:2], dtype=bool)
kill_mask_overlap[overlap_area] = red_or_gray_overlap

# combine
final_kill = kill_mask_broad | kill_mask_overlap

# APPLY KILL
img_rgba[final_kill, 3] = 0

# ENSURE BLACK LINES ARE SOLID (strak)
# In the target area, if a pixel is VERY black in the ORIGINAL, it MUST be OPAQUE in the result.
img_rgba[target_area & black_mask, 3] = 255

# Optional: Slightly dilate the black lines to make them "strakker" if they were eaten by anti-aliasing?
# No, let's keep them original first.

# EXTRA: Wipe the names/numbers? No, user only said building.
# But wait, is there any red text on 6812? Subagent didn't find any.

# Save
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v6.png")

page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v6.png")
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: Aggressive cleanup of 6812 area. Black lines restored.")
