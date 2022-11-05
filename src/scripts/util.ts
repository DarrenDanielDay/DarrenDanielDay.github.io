export interface MyFrontMatter {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  tags: string[];
}

export function assets(path: string) {
  return `/assets/${path}`;
}
