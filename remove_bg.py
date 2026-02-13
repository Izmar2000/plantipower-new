from PIL import Image, ImageOps
import os

path = 'public/images/products/jerrycan-all12-nl.png'
output_path = 'public/images/products/jerrycan-all12-nl-transparent.png'

if os.path.exists(path):
    img = Image.open(path).convert("RGBA")
    
    # Create a mask where white is transparent
    # We use the grayscale version as a base for the alpha channel
    grayscale = ImageOps.grayscale(img)
    
    # Invert it: black (0) becomes white (255)
    # We want white areas (bg) to be transparent (0 alpha)
    # and dark areas (content) to be opaque (255 alpha)
    # But the bottle is white/light gray... so we need a different approach.
    
    datas = img.getdata()
    newData = []
    for item in datas:
        # Calculate how "white" the pixel is
        avg = (item[0] + item[1] + item[2]) / 3
        if avg > 245:
            # Scale transparency: 255 (pure white) -> 0 alpha
            # 245 -> 255 alpha (or close to it)
            alpha = int((255 - avg) * (255 / (255 - 245)))
            if alpha < 0: alpha = 0
            if alpha > 255: alpha = 255
            newData.append((item[0], item[1], item[2], alpha))
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Optional: Crop to content
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved smoothed transparent image to {output_path}")
else:
    print(f"File not found: {path}")
