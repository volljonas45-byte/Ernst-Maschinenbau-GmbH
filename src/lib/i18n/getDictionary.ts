import type { Locale } from "./config";
import { de, type Dictionary } from "./dictionaries/de";
import { en } from "./dictionaries/en";

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizedHref(locale: Locale, path: string): string {
  if (path === "/") return `/${locale}`;
  if (path.startsWith(`/${locale}/`) || path === `/${locale}`) return path;
  if (!path.startsWith("/")) return `/${locale}/${path}`;
  return `/${locale}${path}`;
}

export type { Dictionary } from "./dictionaries/de";
