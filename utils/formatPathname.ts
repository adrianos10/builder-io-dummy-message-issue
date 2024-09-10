export function formatPathname(...segments: string[]) {
  return `/${segments.join("/")}`;
}
