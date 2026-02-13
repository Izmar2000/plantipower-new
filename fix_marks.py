import os

def remove_trademark(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.json', '.css')):
                path = os.path.join(root, file)
                with open(path, 'rb') as f:
                    content = f.read()
                
                # Check for UTF-8 registered symbol (0xC2 0xAE)
                if b'\xc2\xae' in content:
                    print(f"Found \xc2\xae in {path}")
                    new_content = content.replace(b'\xc2\xae', b'')
                    with open(path, 'wb') as f:
                        f.write(new_content)
                
                # Check for &reg;
                if b'&reg;' in content:
                    print(f"Found &reg; in {path}")
                    new_content = content.replace(b'&reg;', b'')
                    with open(path, 'wb') as f:
                        f.write(new_content)

                # Check for \u00ae
                if b'\\u00ae' in content:
                    print(f"Found \\u00ae in {path}")
                    new_content = content.replace(b'\\u00ae', b'')
                    with open(path, 'wb') as f:
                        f.write(new_content)

if __name__ == "__main__":
    remove_trademark('src')
