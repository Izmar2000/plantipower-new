import os

def fix_layout(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # 1. Expand container width
    new_content = content.replace('max-w-6xl mx-auto px-6 relative z-10', 'max-w-7xl mx-auto px-6 relative z-10')
    
    # 2. Fix Shield title line break
    if 'plantipower-shield' in filepath:
        new_content = new_content.replace(
            'to-blue-600">INVISIBLE FORCE.',
            'to-blue-600 whitespace-nowrap">INVISIBLE FORCE.'
        )
    
    with open(filepath, 'w') as f:
        f.write(new_content)

if __name__ == "__main__":
    fix_layout('src/app/[lang]/plantipower-all12/page.tsx')
    fix_layout('src/app/[lang]/plantipower-shield/page.tsx')
