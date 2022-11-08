function trimLeadingSlash(path: string) {
  return path.replace(/^\//, "");
}
export function parsePath(path: string) {
  path = trimLeadingSlash(path);
  const base = path.split("/").at(-1) ?? "";
  const ext = path.split(".").at(-1)?.replace(/^/, ".") ?? "";
  const name = base.slice(0, base.length - ext.length);
  const dir = path.slice(0, path.length - base.length);
  return { ext, base, dir, name };
}
export function relativePath(from: string, to: string) {
  const fromFragments = from.split("/");
  const toFragments = to.split("/");
  let i = 0;
  while (fromFragments[i] && toFragments[i] && fromFragments[i] === toFragments[i]) i++;
  const goBackPart = fromFragments
    .slice(i)
    .map(() => "../")
    .join("");
  const goForwardPart = toFragments.slice(i).join("/");
  return `${goBackPart}${goForwardPart}`;
}
export function resolvePath(path: string) {
  const fragments = path.split("/");
  const result: string[] = [];
  for (const fragment of fragments) {
    if (fragment === "." || !fragment) {
      continue;
    }
    if (fragment === "..") {
      result.pop();
      continue;
    }
    result.push(fragment);
  }
  return result.join("/");
}
