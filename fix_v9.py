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

# Color is RGB
img_rgb = Image.frombytes("RGB", [pix_color.width, pix_color.height], pix_color.samples)
img_rgb_np = np.array(img_rgb)

# Mask is Gray
img_mask = Image.frombytes("L", [pix_mask.width, pix_mask.height], pix_mask.samples)
img_mask_np = np.array(img_mask)

# 2. Area 6812
tx0, ty0, tx1, ty1 = 665, 480, 795, 675
limit_x = 678 

# Identify black lines
r, g, b = img_rgb_np[:,:,0], img_rgb_np[:,:,1], img_rgb_np[:,:,2]
is_blackish = (r < 120) & (g < 120) & (b < 120)
is_neutral = (np.abs(r.astype(int) - g.astype(int)) < 15) & (np.abs(r.astype(int) - b.astype(int)) < 15)
black_line_mask = is_blackish & is_neutral

# 3. Cleanup
target_area = np.zeros(img_rgb_np.shape[:2], dtype=bool)
target_area[ty0:ty1, tx0:tx1] = True
wipe_mask = target_area & (np.indices(img_rgb_np.shape[:2])[1] >= limit_x) & (~black_line_mask)
img_rgb_np[wipe_mask] = [255, 255, 255]

# Junction cleanup
red_residue = (r > g + 10) | (r > b + 10) | ((r > 150) & (g > 150) & (b > 150) & (~black_line_mask))
wipe_junction = target_area & (np.indices(img_rgb_np.shape[:2])[1] < limit_x) & (np.indices(img_rgb_np.shape[:2])[1] >= 665) & red_residue
img_rgb_np[wipe_junction] = [255, 255, 255]

# Ensure mask is opaque for new white areas and black lines
img_mask_np[wipe_mask] = 255
img_mask_np[wipe_junction] = 255
img_mask_np[target_area & black_line_mask] = 255

# Combine to RGBA
img_rgb_mod = Image.fromarray(img_rgb_np)
img_mask_mod = Image.fromarray(img_mask_np)
img_rgba_mod = img_rgb_mod.convert("RGBA")
img_rgba_mod.putalpha(img_mask_mod)

# Save as PNG
img_rgba_mod.save("public/temp_v9.png")

# Replace using filename
page = doc[0]
page.replace_image(img_xref, filename="public/temp_v9.png")

doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: v9 Clean white restoration using PIL save.")
