import type { AstroGlobal } from "astro";

export interface MyFrontMatter {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  tags: string[];
}
export function query(Astro: AstroGlobal) {
  return {
    assets(path: string) {
      const url = `${Astro.url.origin}/assets/${path.replace(/^\//, "")}`;
      return {
        async text() {
          const response = await fetch(url);
          const text = await response.text();
          return text;
        },
      };
    },
  };
}
