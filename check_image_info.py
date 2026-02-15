import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
for info in page.get_image_info():
    print(info)
doc.close()
