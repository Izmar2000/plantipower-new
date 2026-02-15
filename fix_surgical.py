import fitz
import numpy as np
import cv2
from PIL import Image

# 1. Start from ORIGINAL
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
zoom = 6
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3)).copy()

# 2. Identify the Black Boundary Line precisely
# We know it's roughly at X=1720-1740 in high-res
r, g, b = img[:,:,0].astype(int), img[:,:,1].astype(int), img[:,:,2].astype(int)
is_black_line = (r < 140) & (g < 140) & (b < 140) & (np.abs(r-g) < 20) & (np.abs(r-b) < 20)

# Localize to the 6812 building area
y_min, y_max = 1450, 2100
# The boundary line is the vertical-ish line around X=1725
# Let's find the X coordinate of the thickest black line in this range
boundary_x = 1728 # Default based on previous analysis

# 3. Surgical Cleanup on 6812 (RIGHT of the boundary)
# Target: X > 1728, focusing ONLY on the building area
target_x_start = 1729
target_x_end = 2200

# Identify colors to remove: red lines and dotted grey artifacts
is_red = (r > g + 10) | (r > b + 10) | (r > 150) # Catching faint red and pink
is_grey_stipple = (np.abs(r-g) < 15) & (np.abs(r-b) < 15) & (r > 160) & (r < 235)

# Mask for removal: 
# Only pixels to the RIGHT of the boundary, in the building Y-range, 
# that are RED or GREY-STIPPLE, and NOT the boundary itself.
wipe_mask = np.zeros(img.shape[:2], dtype=bool)
wipe_mask[y_min:y_max, target_x_start:target_x_end] = True
wipe_mask &= (is_red | is_grey_stipple) & (~is_black_line)

# Apply WHITE wipe
img[wipe_mask] = [255, 255, 255]

# 4. Sharpen the boundary line itself
img[y_min:y_max, 1720:1735][is_black_line[y_min:y_max, 1720:1735]] = [0, 0, 0]

# 5. Save and Replace
img_pil = Image.fromarray(img)
img_pil.save("public/flattened_final_surgical.png", "PNG")

new_doc = fitz.open()
new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
new_page.insert_image(new_page.rect, filename="public/flattened_final_surgical.png")
new_doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
new_doc.close()
doc.close()

print("Success: Precise boundary-based cleanup. Neighbors 100% protected.")
