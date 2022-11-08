/// <reference types="astro/astro-jsx" />
import type { Validator } from "taio/esm/utils/validator/common.mjs";
import { noCheck } from "taio/esm/utils/validator/utils.mjs";
import { isString } from "taio/esm/utils/validator/primitive.mjs";
import { isFunction, isObject } from "taio/esm/utils/validator/object.mjs";
export interface MyFrontMatter {
  title: string;
  pubDate: string;
  description: string;
  author: string;
  tags: string[];
}

export const isPromise: Validator<Promise<any>> = isObject({
  then: isFunction,
  catch: isFunction,
  finally: isFunction,
  [Symbol.toStringTag]: isString,
});

export const isModuleWithDefaultExport = isObject({
  default: noCheck,
});

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
