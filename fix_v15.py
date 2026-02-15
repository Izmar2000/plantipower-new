import fitz
import numpy as np
import cv2
from PIL import Image

# 1. Start from ORIGINAL to ensure we have the best starting point
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
zoom = 6 # High resolution
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3)).copy()

# 2. Identify RED pixels (Very Aggressive)
r, g, b = img[:,:,0].astype(int), img[:,:,1].astype(int), img[:,:,2].astype(int)
# Red building of neighbors is strong red
is_strong_red = (r > g + 40) & (r > b + 40)
# Faint red/dots for 6812
is_faint_red = (r > g + 2) & (r > b + 2) & (r > 100)
# Grey dots/stipples
is_grey_dots = (np.abs(r-g) < 15) & (np.abs(r-b) < 15) & (r > 150) & (r < 230)

# 3. Targeted Wipe with Coordinate Guidance
h, w_img = img.shape[:2]
# We want to wipe everything in the parcel 6812 area.
# In 6x zoom:
# X boundaries: 6117/6812 line is around 1700-1750. 
# 6813 is to the right. 
# Let's target X from 1730 up to 2500 (covers 6812 and 6813 phantom building).
# Y boundaries: from top to bottom of the map area.
target_y_min, target_y_max = int(h*0.1), int(h*0.7)
target_x_min, target_x_max = 1720, 2700

wipe_zone = np.zeros((h, w_img), dtype=bool)
wipe_zone[target_y_min:target_y_max, target_x_min:target_x_max] = True

# Detect solid black lines to PROTECT them
is_black_line = (r < 160) & (g < 160) & (b < 160) & (np.abs(r-g) < 20) & (np.abs(r-b) < 20)

# NUCLEAR WIPE in the target zone:
# If it's NOT a black line, and it's in the target zone, make it WHITE.
# This will catch all red dots, grey dots, ghosting etc.
img[wipe_zone & (~is_black_line)] = [255, 255, 255]

# 4. Final Sharpen of black lines in the wipe zone
img[wipe_zone & is_black_line] = [0, 0, 0]

# 5. Save and Replace
img_pil = Image.fromarray(img)
img_pil.save("public/flattened_final_v15.png", "PNG")

new_doc = fitz.open()
new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
new_page.insert_image(new_page.rect, filename="public/flattened_final_v15.png")
new_doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
new_doc.close()
doc.close()
print("Success: v15 Nuclear White Wipe. Targeted all non-black pixels in 6812 zone.")
