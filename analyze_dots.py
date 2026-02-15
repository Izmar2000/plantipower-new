import cv2
import numpy as np
import fitz
from PIL import Image

doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
pix_mask = fitz.Pixmap(doc, mask_xref)
pix_rgba = fitz.Pixmap(pix_color, pix_mask)

img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))

# Extract the crop that definitely contains 6812 dots
# Based on previous coordinates
crop = img_rgba[520:640, 680:780]

# Find unique colors that are not white (255,255,255) and not black (0,0,0)
# Flatten and filter
pixels = crop.reshape(-1, 4)
# non-white, non-black, non-transparent
opaque = pixels[pixels[:, 3] > 10]
interesting = opaque[~((opaque[:,0] > 240) & (opaque[:,1] > 240) & (opaque[:,2] > 240))]
interesting = interesting[~((interesting[:,0] < 50) & (interesting[:,1] < 50) & (interesting[:,2] < 50))]

if len(interesting) > 0:
    unique_colors = np.unique(interesting[:, :3], axis=0)
    print(f"Found {len(unique_colors)} intermediate colors in 6812 area")
    print(f"Sample colors: {unique_colors[:5]}")
else:
    print("No intermediate colors found in 6812 crop. This suggests the dots might be in the mask or another layer.")

doc.close()
