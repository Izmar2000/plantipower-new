import fitz
doc = fitz.open("public/Kadastralekaart_ORIGINAL.pdf")
page = doc[0]
drawings = page.get_drawings()
d0 = drawings[0]
print(f"D0 Items: {len(d0.get('items', []))}")
# Look for paths in D0
for i, item in enumerate(d0.get('items', [])[:10]):
     print(f"Item {i}: {item}")
doc.close()
