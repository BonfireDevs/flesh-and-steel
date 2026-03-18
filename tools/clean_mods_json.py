"""
Cleans and deduplicates the mods.json for v4 build.
- Strips JS-style comments
- Removes duplicate slugs
- Outputs valid JSON
"""
import json
import re

def strip_comments(text):
    # Strip // line comments (but not URLs like http://)
    text = re.sub(r'(?<!:)//.*', '', text)
    return text

with open(r'd:\home_clone\flesh-and-steel\pack-config\mods.json', 'r', encoding='utf-8') as f:
    raw = f.read()

cleaned = strip_comments(raw)

# Parse
data = json.loads(cleaned)

# Deduplicate per section
for section in ['common', 'client', 'server']:
    seen = set()
    deduped = []
    for mod in data['mods'].get(section, []):
        slug = mod.get('slug', '')
        if slug not in seen:
            seen.add(slug)
            deduped.append(mod)
        else:
            print(f"[DEDUP] Removed duplicate: {slug} ({mod.get('name')}) from {section}")
    data['mods'][section] = deduped

with open(r'd:\home_clone\flesh-and-steel\pack-config\mods.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

# Count totals
total = sum(len(v) for v in data['mods'].values())
print(f"\nDone! mods.json cleaned and written.")
print(f"  Common: {len(data['mods']['common'])}")
print(f"  Client: {len(data['mods']['client'])}")
print(f"  Server: {len(data['mods']['server'])}")
print(f"  Total:  {total}")
