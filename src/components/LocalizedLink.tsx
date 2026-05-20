"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ReactNode, type AnchorHTMLAttributes } from "react";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

function currentLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

function localize(href: string, lang: Locale): string {
  if (!href.startsWith("/")) return href;
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) return href;
  const first = href.split("/").filter(Boolean)[0];
  if ((locales as readonly string[]).includes(first)) return href;
  if (href === "/") return `/${lang}`;
  return `/${lang}${href}`;
}

type Props = Omit<LinkProps, "href"> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    children?: ReactNode;
  };

const LocalizedLink = forwardRef<HTMLAnchorElement, Props>(function LocalizedLink(
  { href, children, ...rest },
  ref
) {
  const pathname = usePathname();
  const lang = currentLocale(pathname);
  return (
    <Link ref={ref} href={localize(href, lang)} {...rest}>
      {children}
    </Link>
  );
});

export default LocalizedLink;
