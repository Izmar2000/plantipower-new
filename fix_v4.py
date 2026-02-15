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

# We want to identify the red building on 6812
# Area: [minX: 665, minY: 502, maxX: 774, maxY: 653]
tx0, ty0, tx1, ty1 = 665, 502, 774, 653

# Logic: Only remove pixels in this area that are RED.
# Red test: R > 120 and (R > G + 30) and (R > B + 30)
# Black test: R < 100 and G < 100 and B < 100

# Extract the crop for processing
crop = img_rgba[ty0:ty1, tx0:tx1].copy()
r = crop[:,:,0].astype(float)
g = crop[:,:,1].astype(float)
b = crop[:,:,2].astype(float)

# Identify red pixels (high R, relatively low G/B)
red_mask = (r > 120) & (r > g + 40) & (r > b + 40)

# But wait, we want to keep anything that looks like a black line.
# Black lines might have some reddish tint due to compression but are overall dark.
blackish_mask = (r < 110) & (g < 110) & (b < 110)

# We ONLY erase if it is Red AND NOT Blackish
erase_mask = red_mask & (~blackish_mask)

# Set alpha to 0 for identified red pixels
crop[erase_mask, 3] = 0

# Put the crop back
img_rgba[ty0:ty1, tx0:tx1] = crop

# Save modified image
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v4.png")

# Replace in PDF
page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v4.png")

# Save final PDF
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: Red removed from 6812, black lines preserved at junctions.")
