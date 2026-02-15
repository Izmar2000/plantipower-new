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
is_red = (r > g + 25) & (r > b + 25)

# Binary image for connected components
red_binary = is_red.astype(np.uint8) * 255
num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(red_binary, connectivity=8)

# 3. Analyze and Filter Components
# We want to PROTECT components that belong to parcel 6117.
# 6117 is on the LEFT. Its building is roughly at X < 1720 in high-res.
# Parcel 6812 is to the RIGHT. X > 1750.

protected_mask = np.zeros_like(is_red)
for i in range(1, num_labels):
    x, y, w, h_comp, area = stats[i]
    # If the component is significantly to the left of the 6812 area, protect it.
    # The neighbor's building (6117) is around X=1600.
    if x + w < 1740:
        protected_mask[labels == i] = True
    # Also protect the logo/text at bottom if it's red (usually not)

# 4. Wipe everything else RED or PINK or GHOSTY in the target area
# Target area for 6812
h, w_img = img.shape[:2]
target_y_min, target_y_max = int(h*0.1), int(h*0.6)
target_x_min, target_x_max = 1740, int(w_img*0.8)

is_reddish_ghost = (r > g + 5) & (r > b + 5) & (r > 120)

# The "Dotted Lines" are black dashes in the original but might be reddish in layers? 
# Subagent said "black gestippeld". If they are black, we need to target them too.
# But they are part of the building footprint.
is_building_footprint_dots = (r < 180) & (g < 180) & (b < 180) # General dark/neutral

# Let's use the coordinates to wipe the building footprint area completely.
# Building footprint 6812 area:
# X: 1750 to 2050
# Y: 1550 to 1950 (high res pixels)
building_footprint_mask = np.zeros((h, w_img), dtype=bool)
building_footprint_mask[1500:2000, 1750:2100] = True # Broader area for 6812 building

# WIPE:
# Any pixel in building_footprint_mask that is NOT a major cadastral line
# Major cadastral lines are usually very long and black.
# We will wipe everything except pixels that look like the boundary line.
is_boundary_line = (r < 80) & (g < 80) & (b < 80) & (np.abs(r-g) < 10) & (np.abs(r-b) < 10)

img[building_footprint_mask & (~is_boundary_line)] = [255, 255, 255]

# Also ensure all RED in the wipe zone is gone
img[target_x_min:target_x_max, target_y_min:target_y_max] = img[target_x_min:target_x_max, target_y_min:target_y_max] # No-op just to be sure of indices
# (Wait, indices are y, x)
img[target_y_min:target_y_max, target_x_min:target_x_max][is_red[target_y_min:target_y_max, target_x_min:target_x_max] & (~protected_mask[target_y_min:target_y_max, target_x_min:target_x_max])] = [255, 255, 255]

# Final sharpen of boundaries
img[building_footprint_mask & is_boundary_line] = [0, 0, 0]

# 5. Save final
img_pil = Image.fromarray(img)
img_pil.save("public/flattened_final.png", "PNG")

new_doc = fitz.open()
new_page = new_doc.new_page(width=page.rect.width, height=page.rect.height)
new_page.insert_image(new_page.rect, filename="public/flattened_final.png")
new_doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
new_doc.close()
doc.close()
print("Success: v14 The Absolute Clean Version.")
