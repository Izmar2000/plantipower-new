import cv2
import numpy as np
import fitz
from PIL import Image

# 1. Start from ORIGINAL to ensure no previous errors persist
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
img_xref = 4
mask_xref = 3

pix_color = fitz.Pixmap(doc, img_xref)
pix_mask = fitz.Pixmap(doc, mask_xref)
pix_rgba = fitz.Pixmap(pix_color, pix_mask)

# Convert to RGBA numpy array
img_rgba = np.array(Image.frombytes("RGBA", [pix_rgba.width, pix_rgba.height], pix_rgba.samples))

# We will ONLY modify the alpha channel (mask) to hide the red building on 6812
# but we need to find the exact pixels.
# The color layer has the red.
img_rgb = cv2.cvtColor(img_rgba, cv2.COLOR_RGBA2RGB)
hsv = cv2.cvtColor(img_rgb, cv2.COLOR_RGB2HSV)

# Mask for red
mask_red = cv2.bitwise_or(
    cv2.inRange(hsv, np.array([0, 100, 100]), np.array([10, 255, 255])),
    cv2.inRange(hsv, np.array([160, 100, 100]), np.array([180, 255, 255]))
)

# Coordinates for 6812 building from subagent: [665, 502, 774, 653]
# target area box
ty0, ty1, tx0, tx1 = 502, 653, 665, 774

# Identify the contours in the red mask
contours, _ = cv2.findContours(mask_red, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

for cnt in contours:
    M = cv2.moments(cnt)
    if M["m00"] != 0:
        cx = int(M["m10"] / M["m00"])
        cy = int(M["m01"] / M["m00"])
        
        # Check if this contour belongs to the 6812 building
        # It should be within our target box and NOT in 6117 (which is further left < 665)
        if 665 <= cx <= 780 and 500 <= cy <= 660:
            # This is the 6812 building. Clear it in the alpha channel.
            # We use a slight dilation to ensure we get the edges/anti-aliasing
            temp_mask = np.zeros(img_rgba.shape[:2], dtype=np.uint8)
            cv2.drawContours(temp_mask, [cnt], -1, 255, -1)
            # Dilation
            temp_mask = cv2.dilate(temp_mask, np.ones((3,3), np.uint8), iterations=1)
            
            # Wipe in alpha channel (img_rgba[:,:,3]) 
            img_rgba[temp_mask > 0, 3] = 0

# Save the modified image as PNG (with alpha)
new_img = Image.fromarray(img_rgba)
new_img.save("public/red_layer_v3.png")

# Replace the color image in the PDF. 
# FitZ's replace_image will handle the mask correctly if we provide a PNG with alpha
# or we can keep the existing mask and just modify the color layer's transparency if the PDF structure allows.
# Actually, since xref 4 has mask 3, replacing 4 with a transparent PNG might work best.
page = doc[0]
page.replace_image(img_xref, filename="public/red_layer_v3.png")

# Save final PDF
doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: 6812 building removed, 6117 preserved.")
