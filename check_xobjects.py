import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
for x in page.get_xobjects():
    print(x)
doc.close()
