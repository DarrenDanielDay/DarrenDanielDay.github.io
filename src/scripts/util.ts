/// <reference types="astro/astro-jsx" />

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

export function forwardProps<T extends astroHTML.JSX.HTMLAttributes>(passed: T, defined: T): T {
  const { style: pStyle, class: pClass } = passed;
  const { style: dStyle, class: dClass } = defined;
  function trimSemi(s: string) {
    return s.trim().replace(/;$/, "");
  }
  function toStyleStr(style: astroHTML.JSX.HtmlHTMLAttributes["style"]) {
    if (typeof style === "string") {
      return style;
    }
    if (!style) {
      return "";
    }
    throw new Error("Not supported");
  }
  return {
    ...passed,
    ...defined,
    style: `${trimSemi(toStyleStr(pStyle))};${trimSemi(toStyleStr(dStyle))}`,
    class: `${pClass} ${dClass}`,
  };
}

export const constants = {
  DarrenDanielDay: "DarrenDanielDay",
  MyName: "Darren Daniel Day",
} as const;
