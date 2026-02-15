import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
images = page.get_images()
print(f"Found {len(images)} images")
for i, img in enumerate(images):
    xref = img[0]
    pix = fitz.Pixmap(doc, xref)
    # Convert to RGB if needed
    if pix.colorspace.n > 3:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    elif pix.colorspace.n < 3:
        pix = fitz.Pixmap(fitz.csRGB, pix)
    
    # Check for mask
    smask = img[1]
    if smask > 0:
        mask = fitz.Pixmap(doc, smask)
        pix = fitz.Pixmap(pix, mask)
        
    pix.save(f"public/layer_{xref}.png")
    print(f"Saved layer_{xref}.png")
doc.close()
