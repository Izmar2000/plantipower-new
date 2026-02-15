import cv2
import numpy as np
import fitz
from PIL import Image

# 1. Start from ORIGINAL baseline
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
pix_mask = fitz.Pixmap(doc, mask_xref)
pix_rgba = fitz.Pixmap(pix_color, pix_mask)

# Convert to RGBA
img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))
# Make a copy of the original to restore neighbor pixels
img_rgba_orig = img_rgba.copy()

# Boundary definitions
# 6117 building (neighbor) ends around X=676
# 6812 building (target) starts around X=665 (they overlap/touch)
# Junction point is very sensitive.

# Step A: Identify Black Lines (to protect them)
# Dark pixels should stay opaque
r, g, b, a = img_rgba[:,:,0], img_rgba[:,:,1], img_rgba[:,:,2], img_rgba[:,:,3]
black_mask = (r < 120) & (g < 120) & (b < 120) & (a > 100)

# Step B: Identify the 6812 building area more broadly to kill the 'ghost'
# We expand the box slightly
tx0, ty0, tx1, ty1 = 665, 500, 785, 665

# Create a mask for ALL red-ish pixels in the target area
# Even very light pink/gray-red
# Red-ish: R is the dominant channel
red_pink_mask = (r > g + 5) & (r > b + 5) & (r > 50)

# Target mask for 6812 building ONLY
target_mask = np.zeros(img_rgba.shape[:2], dtype=bool)
target_mask[ty0:ty1, tx0:tx1] = True
# Only pixels that are red-ish AND NOT part of the neighbor's main body
# Neighbor is mostly X < 665, but can go slightly right.
# We'll use a hard cut at X=678 for the 6812 removal to be safe for the neighbor
limit_x = 678
kill_mask = target_mask & red_pink_mask & (np.indices(img_rgba.shape[:2])[1] >= limit_x)

# Also handle the immediate overlap 665-678
overlap_mask = target_mask & red_pink_mask & (np.indices(img_rgba.shape[:2])[1] < limit_x) & (np.indices(img_rgba.shape[:2])[1] >= 665)
# In overlap, we only kill if it's NOT black
kill_mask |= (overlap_mask & (~black_mask))

# Step C: Apply the kill
img_rgba[kill_mask, 3] = 0

# Step D: Restore the neighbor's building (6117) 1:1 from original
# Everything to the left of the junction should be PERFECT
neighbor_box = (0, 0, 678, img_rgba.shape[0]) # Restore all left side? 
# No, let's just restore the specific neighbor building area
nx0, ny0, nx1, ny1 = 500, 480, 678, 620
img_rgba[ny0:ny1, nx0:nx1] = img_rgba_orig[ny0:ny1, nx0:nx1]

# Step E: Handle the "ghost" more aggressively in the main 6812 body
# Any leftovers in the center of 6812 building should be gone
img_rgba[520:640, 685:770, 3] = 0 # Wiping the interior regardless of color
# But put black lines back
img_rgba[black_mask, 3] = img_rgba_orig[black_mask, 3]

# Save
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v5.png")

page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v5.png")
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: Ghost removed, Neighbor restored, Junctions preserved.")
