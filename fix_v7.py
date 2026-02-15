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

img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))
img_rgba_orig = img_rgba.copy()

r = img_rgba[:,:,0].astype(int)
g = img_rgba[:,:,1].astype(int)
b = img_rgba[:,:,2].astype(int)
a = img_rgba[:,:,3].astype(int)

# 2. Strict Black Mask (Cadastral Lines)
# Cadastral lines are dark AND neutral (R, G, B are close)
diff_rg = np.abs(r - g)
diff_rb = np.abs(r - b)
diff_gb = np.abs(g - b)
# Black criteria: R,G,B < 110 AND balanced
is_blackish = (r < 110) & (g < 110) & (b < 110)
is_balanced = (diff_rg < 12) & (diff_rb < 12) & (diff_gb < 12)
black_mask = is_blackish & is_balanced

# 3. Target Area for 6812 (The one to wipe)
tx0, ty0, tx1, ty1 = 665, 490, 790, 670 # Slightly wider box
target_area = np.zeros(img_rgba.shape[:2], dtype=bool)
target_area[ty0:ty1, tx0:tx1] = True

# 4. Wipe Logic
# In the target area, everything should be gone EXCEPT the strict black lines
# But we must NOT touch neighbor 6117
limit_x = 678 
pure_target = target_area & (np.indices(img_rgba.shape[:2])[1] >= limit_x)
overlap_area = target_area & (np.indices(img_rgba.shape[:2])[1] < limit_x) & (np.indices(img_rgba.shape[:2])[1] >= 665)

# Clear 6812 pure area (except black)
kill_pure = pure_target & (~black_mask)
img_rgba[kill_pure, 3] = 0

# Clear 6812 overlap area (only if it's red-ish)
# Red-ish: R > G+10 or R > B+10 (since dark red was [50,0,0])
is_reddish = (r > g + 8) | (r > b + 8)
kill_overlap = overlap_area & is_reddish & (~black_mask)
img_rgba[kill_overlap, 3] = 0

# 5. Restore Neighbor 6117
# Any red pixels on the left of limit_x should be restored to original
# to ensure the neighbor is perfect and "strak"
nx0, ny0, nx1, ny1 = 400, 450, 678, 650
img_rgba[ny0:ny1, nx0:nx1] = img_rgba_orig[ny0:ny1, nx0:nx1]

# 6. Sharpen Black Lines (Strak maken)
# For the black lines in the target area, make them solid black to remove any red anti-aliasing remnants
restore_black = target_area & black_mask
# If original was a black line, make it 100% opaque and neutral dark
img_rgba[restore_black, 0] = r[restore_black]
img_rgba[restore_black, 1] = g[restore_black]
img_rgba[restore_black, 2] = b[restore_black]
img_rgba[restore_black, 3] = 255

# 7. Final Polish: Set very high transparency for anything remaining in the 6812 rectangle that isn't black
# to kill the "vlak" (ghost fill)
final_interior_kill = target_area & (np.indices(img_rgba.shape[:2])[1] >= limit_x) & (~black_mask)
img_rgba[final_interior_kill, 3] = 0

# Save
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v7.png")

page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v7.png")
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: v7 Nuclear cleanup. Dotted lines removed, Black lines sharpened, Neighbor restored.")
