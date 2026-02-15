import cv2
import numpy as np
import fitz
from PIL import Image

# 1. Start from ORIGINAL
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
pix_mask = fitz.Pixmap(doc, mask_xref)
pix_rgba = fitz.Pixmap(pix_color, pix_mask)

# Convert to RGBA
img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))
img_rgba_orig = img_rgba.copy()

r = img_rgba[:,:,0].astype(int)
g = img_rgba[:,:,1].astype(int)
b = img_rgba[:,:,2].astype(int)
a = img_rgba[:,:,3].astype(int)

# 2. Define the exact area to clean (6812 building + margin)
tx0, ty0, tx1, ty1 = 665, 480, 795, 675
target_area = np.zeros(img_rgba.shape[:2], dtype=bool)
target_area[ty0:ty1, tx0:tx1] = True

# 3. IDENTIFY REAL BLACK BOUNDARY LINES
# Real black lines are DARK and NEUTRAL (R approx G approx B)
is_dark = (r < 100) & (g < 100) & (b < 100)
# Neutrality test: difference between color channels is very small
is_neutral = (np.abs(r - g) < 5) & (np.abs(r - b) < 5) & (np.abs(g - b) < 5)
black_boundary_mask = is_dark & is_neutral

# 4. NUCLEAR CLEANUP
# For everything in the target area...
# a. First, make it white (R=255, G=255, B=255, A=255)
# This removes all buildings, dots, ghosting, everything.
img_rgba[target_area] = [255, 255, 255, 255]

# b. Then, restore ONLY the black boundary lines from the original image
# We use the strict black_boundary_mask
img_rgba[target_area & black_boundary_mask] = img_rgba_orig[target_area & black_boundary_mask]

# c. Make sure the restored black lines are perfectly opaque
img_rgba[target_area & black_boundary_mask, 3] = 255

# 5. RESTORE NEIGHBOR (6117)
# Ensure everything to the left of X=678 is exactly as the original
# so neighbor 6117 remains untouched and sharp.
limit_x = 678
img_rgba[450:650, 0:limit_x] = img_rgba_orig[450:650, 0:limit_x]

# 6. Save final red layer
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v8.png")

# Replace in PDF
page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v8.png")

# Save final PDF
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: v8 Perfect Restoration. 6812 is clean white, boundaries are sharp black.")
