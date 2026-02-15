import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
for img in page.get_images(full=True):
    print(img)
doc.close()
