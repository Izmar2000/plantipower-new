import fitz
import numpy as np
import cv2
from PIL import Image

# 1. Render at HIGH RES
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
zoom = 6
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3)).copy()

# 2. Identify RED pixels (Aggressive)
r, g, b = img[:,:,0].astype(int), img[:,:,1].astype(int), img[:,:,2].astype(int)
# Red building or text: R is significantly higher than G and B
is_red = (r > g + 30) & (r > b + 30)

# 3. Targeted Wipe
h, w = img.shape[:2]
# Parcel 6812 is roughly in this box (normalized 0-1): X:[0.5, 0.7], Y:[0.2, 0.4]
# Let's use a safe box that contains 6812 but NOT most of 6117
# 6117 is to the LEFT of 6812.
# 6812 center in PDF units was ~450, 250? No, let's look at the image.
# Image is ~3570 wide. 6812 is around X=1800-2200.
# 6117 is around X=1500-1800.

# Boundary between 6117 and 6812 is roughly at X_highres = 1750
x_limit_highres = 1755 

# Everything reddish to the RIGHT of x_limit_highres in the middle band should be wiped.
wipe_zone = np.zeros((h, w), dtype=bool)
wipe_zone[int(h*0.1):int(h*0.6), x_limit_highres:int(w*0.8)] = True

# Also reddish things that are "faint" (ghosting/dots)
is_reddish_ghost = (r > g + 5) & (r > b + 5) & (r > 150) # Light reddish/pink

img[wipe_zone & (is_red | is_reddish_ghost)] = [255, 255, 255]

# 4. Sharpen Black Lines
is_black = (r < 180) & (g < 180) & (b < 180) & (np.abs(r-g) < 30) & (np.abs(r-b) < 30)
# Make all black lines in the wipe zone PURE BLACK and opaque
img[wipe_zone & is_black] = [0, 0, 0]

# 5. Neighbor Protection
# Ensure 6117 is exactly as original
# (We didn't touch it because we stayed right of 1755, but just in case)

# 6. Save final
img_pil = Image.fromarray(img)
img_pil.save("public/flattened_final.png", "PNG")

new_doc = fitz.open()
new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
new_page.insert_image(new_page.rect, filename="public/flattened_final.png")
new_doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
new_doc.close()
doc.close()
print("Success: v13 Final Surgical Sharpened Version.")
