from PIL import Image
import os

path = 'public/images/products/jerrycan-all12-nl.png'
output_path = 'public/images/products/jerrycan-all12-nl-transparent.png'

if os.path.exists(path):
    img = Image.open(path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    for item in datas:
        # If the pixel is very white, make it transparent
        if item[0] > 250 and item[1] > 250 and item[2] > 250:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")
else:
    print(f"File not found: {path}")
