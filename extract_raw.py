import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
for img in page.get_images():
    xref = img[0]
    pix = doc.extract_image(xref)
    print(f"XRef {xref}: size {len(pix['image'])}, ext {pix['ext']}, colorspace {pix['colorspace']}")
    with open(f"public/extract_{xref}.{pix['ext']}", "wb") as f:
        f.write(pix["image"])
doc.close()
