import cv2
import numpy as np
import fitz
from PIL import Image

doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
pix = fitz.Pixmap(doc, img_xref)
img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
img_np = np.array(img)

# Center of the problematic block
# Let's say X=730, Y=580
sample = img_np[580, 730]
print(f"Original color at 580, 730: {sample}")

# Let's see what happens if we just wipe it
img_np[550:610, 700:760] = [255, 255, 255]
Image.fromarray(img_np).save("public/test_wipe.png")
print("Saved test_wipe.png with a white square at 550-610, 700-760")

doc.close()
