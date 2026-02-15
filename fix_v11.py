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

# Color is RGB
img_rgb_np = np.frombuffer(pix_color.samples, dtype=np.uint8).reshape((pix_color.height, pix_color.width, 3)).copy()
# Mask is GRAY
img_mask_np = np.frombuffer(pix_mask.samples, dtype=np.uint8).reshape((pix_mask.height, pix_mask.width)).copy()

# 2. Define Target Area 6812
tx0, ty0, tx1, ty1 = 665, 480, 795, 675
limit_x = 678

# 3. Identify Cadastral Boundary Lines in the MASK
# In extract_3, these were white lines on black.
# We want to keep these WHITE in the mask so they are painted.
is_structural_line = (img_mask_np > 100) 

# But wait, the buildings are also white outlines in the mask.
# We need to distinguish boundary lines from building outlines.
# Boundary lines are "structural" and usually part of the parcel grid.
# Building outlines are what we want to remove.

# Strategy: 
# a. In the target area, FIRST make the mask completely BLACK (transparent).
# b. THEN, restore ONLY the lines that are neutral (black) in the color layer? No.
# c. Restore lines that are NOT reddish.

r, g, b = img_rgb_np[:,:,0].astype(int), img_rgb_np[:,:,1].astype(int), img_rgb_np[:,:,2].astype(int)
is_red_building = (r > g + 10) | (r > b + 10) | ((r > 50) & (g < 40) & (b < 40))

# 4. RE-PROCESS MASK (xref 3)
# For the target area: if it's a red building pixel, make it BLACK in the mask (transparent)
target_mask = np.zeros(img_mask_np.shape, dtype=bool)
target_mask[ty0:ty1, tx0:tx1] = True
wipe_mask_area = target_mask & (np.indices(img_mask_np.shape)[1] >= limit_x)

# Kill the building in the mask
img_mask_np[wipe_mask_area & is_red_building] = 0

# Also kill ANY non-boundary white pixels in that area to be safe (ghosting)
# Boundary lines are usually perfectly neutral dark in the color layer
is_neutral_dark = (r < 100) & (g < 100) & (b < 100) & (np.abs(r-g) < 15) & (np.abs(r-b) < 15)
# Keep only neutral dark lines in the mask
img_mask_np[wipe_mask_area & (~is_neutral_dark)] = 0

# 5. RE-PROCESS COLOR (xref 4)
# Ensure any remaining lines in the mask (boundaries) are painted BLACK
img_rgb_np[wipe_mask_area & is_neutral_dark] = [0, 0, 0]

# 6. Junction Protection (665 <= X < 678)
junction_mask = target_mask & (np.indices(img_mask_np.shape)[1] < limit_x) & (np.indices(img_mask_np.shape)[1] >= 665)
img_mask_np[junction_mask & is_red_building] = 0
img_rgb_np[junction_mask & is_neutral_dark] = [0, 0, 0]

# 7. Apply and SAVE
new_color_pix = fitz.Pixmap(fitz.csRGB, [pix_color.width, pix_color.height], img_rgb_np.tobytes())
new_mask_pix = fitz.Pixmap(fitz.csGRAY, [pix_mask.width, pix_mask.height], img_mask_np.tobytes())

page = doc[0]
page.replace_image(img_xref, pixmap=new_color_pix)
page.replace_image(mask_xref, pixmap=new_mask_pix)

doc.save("public/Kadastralekaart-20260212113344-s11230699290.pdf")
doc.close()
print("Success: v11 Dual-layer surgical fix. Mask transparency and Color correction.")
