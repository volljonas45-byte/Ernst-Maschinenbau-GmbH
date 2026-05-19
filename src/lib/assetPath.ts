export const ASSET_PREFIX =
  process.env.NODE_ENV === "production" ? "/Ernst-Maschinenbau-GmbH" : "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return ASSET_PREFIX + path;
}
