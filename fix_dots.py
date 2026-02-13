import os
import re

def fix_dots(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Update All12 Hero Title (Specific)
    if 'plantipower-all12/page.tsx' in filepath:
        # All12 heroTitle
        # Match current: <><span className="text-white">ALL12</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORT TECH.</span></>
        all12_hero_regex = r'heroTitle:\s*<><span className="text-white">ALL12</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORT TECH\.</span></>,'
        replacement = """heroTitle: isNL 
            ? <><span className="text-white">ALL12</span><br /><span className="text-white">NUTRIËNTEN</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORTEUR</span></>
            : <><span className="text-white">ALL12</span><br /><span className="text-white">NUTRIENT</span><br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600">TRANSPORTER</span></>,"""
        content = re.sub(all12_hero_regex, replacement, content)

    # 2. General Dot Removal from titles in TSX
    if filepath.endswith('.tsx'):
        # Matches patterns like <span>something.</span> or <>something.</span>
        content = re.sub(r'<span>([^<]+)\.</span>', r'<span>\1</span>', content)
        # Matches patterns like <span ...>something.</span>
        content = re.sub(r'<span ([^>]+)>([^<]+)\.</span>', r'<span \1>\2</span>', content)
        # Matches dots at the end of hardcoded strings in dictionaries or objects inside TSX
        # e.g. title: isNL ? "Something." : "Something."
        content = re.sub(r'Title: isNL \? ["\']([^"\']+)\.["\'] : ["\']([^"\']+)\.["\']', r'Title: isNL ? "\1" : "\2"', content)
        # Matches heroTitle dot in Shield (specific fix from previous fix_layout)
        content = content.replace('FORCE.</span>', 'FORCE</span>')

    # 3. Dictionary Dot Removal
    if filepath.endswith('.json'):
        # For dictionaries, only remove dots for keys that contain "title" (case insensitive)
        data = content
        lines = data.split('\n')
        new_lines = []
        for line in lines:
            if '"title' in line.lower() and line.strip().endswith('.",'):
                # Handle standard json format "key": "Value.",
                line = line.replace('.",', '",')
            elif '"title' in line.lower() and line.strip().endswith('."'):
                # Handle last item without comma "key": "Value."
                line = line.replace('."', '"')
            new_lines.append(line)
        content = '\n'.join(new_lines)

    with open(filepath, 'w') as f:
        f.write(content)

if __name__ == "__main__":
    files = [
        'src/app/[lang]/plantipower-all12/page.tsx',
        'src/app/[lang]/plantipower-shield/page.tsx',
        'src/dictionaries/nl.json',
        'src/dictionaries/en.json'
    ]
    for f in files:
        if os.path.exists(f):
            print(f"Fixing {f}")
            fix_dots(f)
