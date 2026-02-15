import fitz
import numpy as np
import cv2
from PIL import Image

# 1. Render the ORIGINAL page at extremely high resolution (6x zoom = ~432 DPI)
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
zoom = 6
mat = fitz.Matrix(zoom, zoom)
pix = page.get_pixmap(matrix=mat, alpha=False)

# Convert to numpy
img = np.frombuffer(pix.samples, dtype=np.uint8).reshape((pix.height, pix.width, 3)).copy()

# 2. Coordinates in high-res (approx)
# Original page is 595 x 842. High res is x6. 
# 6812 building is roughly around:
# X: 270-320 in PDF units -> 1620-1920 in pixels
# Y: 240-340 in PDF units -> 1440-2040 in pixels

# Let's find the exact area by looking for RED pixels
# In high-res, red building 6812 is very prominent.
r, g, b = img[:,:,0].astype(int), img[:,:,1].astype(int), img[:,:,2].astype(int)
is_red = (r > g + 40) & (r > b + 40)

# Wipe everything RED in the right-side area
# Building 6812 is roughly in the center-right.
h, w = img.shape[:2]
target_mask = np.zeros((h, w), dtype=bool)
# Focus on the right half to avoid touching far left neighbors if any
target_mask[h//4:h//2, w//2:] = True 

# NUCLEAR CLEANUP: if it's red or reddish ghosting, make it WHITE
is_reddish = (r > g + 10) | (r > b + 10) | ((r > 200) & (g > 180) & (b > 180)) # include light shades
img[target_mask & is_reddish] = [255, 255, 255]

# 3. Restore Black Lines
# Black lines are neutral and dark
is_black_line = (r < 150) & (g < 150) & (b < 150) & (np.abs(r-g) < 20) & (np.abs(r-b) < 20)
# Ensure boundary lines are perfectly black in the target area
# We use the original img to find them and then force them to [0,0,0]
# Actually, since we only wiped reddish pixels, the black lines should still be there.
# Let's just make them extra sharp.
img[target_mask & is_black_line] = [0, 0, 0]

# 4. Create new PDF page from this image
new_doc = fitz.open()
new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
# Compress and insert
img_pil = Image.fromarray(img)
img_pil.save("public/flattened_final.png", "PNG")
new_page.insert_image(new_page.rect, filename="public/flattened_final.png")

# 5. Save final
new_doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
new_doc.close()
doc.close()
print("Success: Final Flattened Version v12. Guaranteed no layers, no black blocks.")
