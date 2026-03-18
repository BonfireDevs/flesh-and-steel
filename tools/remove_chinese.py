import os
import re

with open('chinese_files.txt', 'r', encoding='utf-8') as f:
    files = [line.strip() for line in f if line.strip()]

deleted_count = 0
cleaned_count = 0

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    filename = os.path.basename(file_path).lower()
    
    # 1. Delete localization files
    if filename in ['zh_cn.json', 'zh_tw.json', 'zh_hk.json', 'ja_jp.json']:
        try:
            os.remove(file_path)
            deleted_count += 1
        except Exception as e:
            print(f'Error deleting {file_path}: {e}')
        continue
        
    # 2. Clean other files (scripts, configs, data json)
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
        new_lines = []
        modified = False
        
        for line in lines:
            if re.search(r'[\u4e00-\u9fff]', line):
                modified = True
                
                # Try to find a comment marker before the Chinese text
                comment_match = re.search(r'(//|#).*[\u4e00-\u9fff]', line)
                
                if comment_match:
                    # Strip everything from the comment marker to the end of the line
                    comment_idx = line.find(comment_match.group(1))
                    # Keep everything before the comment, preserve newline
                    line = line[:comment_idx].rstrip() + '\n'
                else:
                    # Not in a recognizable comment, just strip the Chinese characters directly
                    line = re.sub(r'[\u4e00-\u9fff]+', '', line)
            
            # Don't add if it's completely empty now and it wasn't before
            new_lines.append(line)
                
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            cleaned_count += 1
            
    except Exception as e:
        print(f'Error processing {file_path}: {e}')

print(f'\nSuccess! Deleted {deleted_count} translation files.')
print(f'Stripped Chinese characters from {cleaned_count} configuration/data files.')
