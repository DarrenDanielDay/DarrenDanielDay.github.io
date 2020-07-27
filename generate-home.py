import lxml.etree
from pathlib import Path
from typing import Dict
import os

class Page:
    def __init__(self, root_path: Path, index: Path = Path('index.html')):
        self.path = root_path / index
        with open(root_path / index, 'r', encoding='utf-8') as file:
            content = file.read()
            self.title = next(iter(lxml.etree.HTML(content).xpath('/html/head/title/text()')))

class HomeWriter:
    with open('./index-template.html', 'r', encoding='utf-8') as f:
        template = f.read()

    def write(self, data: Dict[str, str], path: Path = Path('./index.html')):
        with open(path, 'w+', encoding='utf-8') as output:
            output.write(self.template.format(**data))

def tag(s: str, text: str): return f'<{s}>{text}</{s}>'    

def link(href: str, text: str): return f'<a href="{href}">{text}</a>'


def main():
    writer = HomeWriter()
    page_root = Path('./pages')
    *pages, = *map(lambda path: page_root / path, os.listdir(page_root)),
    data = {}
    page_lists = []
    for page in map(Page, pages):
        page_lists.append(tag('li', link(str(page.path), str(page.title))))
    data['pages'] = tag('ul',''.join(page_lists))
    writer.write(data)
    
if __name__ == "__main__":
    main()
        
        