import cv2
import numpy as np
import fitz
from PIL import Image

# 1. Start from ORIGINAL
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
# Since extract_4.png showed red on black, let's treat it as RGB
img_rgb = Image.frombytes("RGB", [pix_color.width, pix_color.height], pix_color.samples)
img_rgb_np = np.array(img_rgb)

# 2. Area 6812
# The subagent confirms extract_4 has red outlines on black.
# We want to make those red outlines BLACK (0,0,0) in the 6812 area.
tx0, ty0, tx1, ty1 = 665, 480, 795, 675
# Safety: stay away from neighbor 6117
limit_x = 678

# Identify RED in extract_4
r, g, b = img_rgb_np[:,:,0], img_rgb_np[:,:,1], img_rgb_np[:,:,2]
is_red = (r > g + 10) | (r > b + 10) | ((r > 30) & (g < 20) & (b < 20))

# 3. Wipe 6812 red outlines
target_area = np.zeros(img_rgb_np.shape[:2], dtype=bool)
target_area[ty0:ty1, tx0:tx1] = True
wipe_mask = target_area & (np.indices(img_rgb_np.shape[:2])[1] >= limit_x) & is_red

# Junction cleanup (665 <= X < 678)
wipe_junction = target_area & (np.indices(img_rgb_np.shape[:2])[1] < limit_x) & (np.indices(img_rgb_np.shape[:2])[1] >= 665) & is_red

img_rgb_np[wipe_mask] = [0, 0, 0]
img_rgb_np[wipe_junction] = [0, 0, 0]

# 4. Save and REPLACE
# This replaces the COLOR image. 
# Since it was already mostly black, making more things black is safe.
new_pix = fitz.Pixmap(fitz.csRGB, [pix_color.width, pix_color.height], img_rgb_np.tobytes())
page = doc[0]
page.replace_image(img_xref, pixmap=new_pix)

# We do NOT touch xref 3 (the mask) because it contains the white lines on black.
# The PDF blends them. If we keep xref 3 original, the black lines stay sharp.

doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: v10 Outline removal only. This should be the final fix.")
