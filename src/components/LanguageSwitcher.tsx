"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

/* Tiny SVG flags — kept inline so we don't ship extra images.
   DE: black/red/gold horizontal stripes.
   EN/UK Union Jack: simplified. */
function FlagDE({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size * (3 / 5)} viewBox="0 0 5 3" aria-hidden style={{ display: "block", borderRadius: 2 }}>
      <rect width="5" height="1" y="0" fill="#000" />
      <rect width="5" height="1" y="1" fill="#DD0000" />
      <rect width="5" height="1" y="2" fill="#FFCE00" />
    </svg>
  );
}

function FlagGB({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size * (3 / 5)} viewBox="0 0 60 36" aria-hidden style={{ display: "block", borderRadius: 2 }}>
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#fff" strokeWidth="6" />
      <path d="M0 0L60 36M60 0L0 36" stroke="#C8102E" strokeWidth="3" clipPath="url(#st)" />
      <path d="M30 0V36M0 18H60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0V36M0 18H60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

const FLAGS: Record<Locale, () => React.ReactElement> = {
  de: () => <FlagDE />,
  en: () => <FlagGB />,
};

const LABELS: Record<Locale, string> = {
  de: "DE",
  en: "EN",
};

function switchPath(pathname: string, target: Locale): string {
  // pathname like /de/leistungen → /en/leistungen
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${target}`;
  if ((locales as readonly string[]).includes(parts[0])) {
    parts[0] = target;
  } else {
    parts.unshift(target);
  }
  return "/" + parts.join("/");
}

export default function LanguageSwitcher({ currentLang }: { currentLang: Locale }) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        padding: "3px 4px",
        borderRadius: 999,
        background: "rgba(0,0,0,0.04)",
      }}
    >
      {locales.map((l, i) => {
        const active = l === currentLang;
        const target = switchPath(pathname, l);
        const Flag = FLAGS[l];
        return (
          <Link
            key={l}
            href={target}
            aria-label={`Switch to ${LABELS[l]}`}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              if (typeof window !== "undefined") {
                window.localStorage.setItem("locale", l);
              }
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 9px",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.04em",
              textDecoration: "none",
              color: active ? "#1c6e34" : "#6e6e73",
              background: active ? "#fff" : "transparent",
              boxShadow: active ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.18s",
              marginLeft: i === 0 ? 0 : 0,
            }}
            onMouseEnter={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.color = "#1c6e34";
            }}
            onMouseLeave={(e) => {
              if (!active) (e.currentTarget as HTMLElement).style.color = "#6e6e73";
            }}
          >
            <Flag />
            <span>{LABELS[l]}</span>
          </Link>
        );
      })}
    </div>
  );
}
