"use client";

import Link from "@/components/LocalizedLink";
import { usePathname } from "next/navigation";
import { locales, defaultLocale, type Locale } from "@/lib/i18n/config";

function currentLocale(pathname: string): Locale {
  const first = pathname.split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(first) ? (first as Locale) : defaultLocale;
}

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon: "leistungen" | "produkte" | "unternehmen" | "kontakt" | "karriere";
}

interface RelatedLinksProps {
  items: RelatedItem[];
}

const S = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", viewBox: "0 0 24 24", width: 24, height: 24 } as const;

/* Spezifische Icons je Zielseite (aus dem letzten Pfadsegment abgeleitet) */
const glyphs: Record<string, React.ReactNode> = {
  // Produkte
  dichtigkeitspruefung: <svg {...S}><path d="m12 14 3.5-3.5"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>,
  wiegesysteme: <svg {...S}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h4c2 0 5-1 5-2 0 1 3 2 5 2h4"/></svg>,
  sammelstationen: <svg {...S}><rect x="3" y="3" width="7" height="7" rx="1.2"/><rect x="14" y="3" width="7" height="7" rx="1.2"/><rect x="3" y="14" width="7" height="7" rx="1.2"/><rect x="14" y="14" width="7" height="7" rx="1.2"/></svg>,
  foerderbaender: <svg {...S}><rect x="2" y="9" width="20" height="6" rx="3"/><circle cx="6.5" cy="12" r="1.1"/><circle cx="12" cy="12" r="1.1"/><circle cx="17.5" cy="12" r="1.1"/><path d="M8 6h8l-2 3H10z"/></svg>,
  systemergaenzungen: <svg {...S}><rect x="3" y="3" width="18" height="18" rx="2.5"/><path d="M12 8v8M8 12h8"/></svg>,
  // Leistungen
  "entwicklung-sondermaschinen": <svg {...S}><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M22 12h-3M5 12H2M19.07 4.93l-2.12 2.12M7.05 16.95l-2.12 2.12M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93"/></svg>,
  praezisionsfertigung: <svg {...S}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/></svg>,
  lohnarbeit: <svg {...S}><path d="m15 12-8.5 8.5a2.12 2.12 0 1 1-3-3L12 9"/><path d="M17.64 15 22 10.64"/><path d="m20.9 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h.86c.85 0 1.65.33 2.25.93l1.25 1.25"/></svg>,
  service: <svg {...S}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  // Übergeordnete Seiten
  produkte: <svg {...S}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>,
  leistungen: <svg {...S}><path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/></svg>,
  unternehmen: <svg {...S}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M9 6h6M9 10h6M9 14h6"/><path d="M2 22h20"/></svg>,
  maschinenpark: <svg {...S}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h.01M12 18h.01M7 18h.01"/></svg>,
  stellenangebote: <svg {...S}><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
  kontakt: <svg {...S}><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
};

/* Fallback je Kategorie, falls kein spezifisches Icon greift */
const categoryFallback: Record<RelatedItem["icon"], string> = {
  leistungen: "leistungen",
  produkte: "produkte",
  unternehmen: "unternehmen",
  kontakt: "kontakt",
  karriere: "stellenangebote",
};

function iconFor(item: RelatedItem): React.ReactNode {
  const seg = item.href.replace(/\/+$/, "").split("/").pop() ?? "";
  return glyphs[seg] ?? glyphs[categoryFallback[item.icon]] ?? glyphs.produkte;
}

const labels = {
  de: { eyebrow: "Weiterführende Informationen", headline: "Das könnte Sie auch interessieren", cta: "Mehr erfahren" },
  en: { eyebrow: "Further information", headline: "You may also be interested in", cta: "Learn more" },
} as const;

export default function RelatedLinks({ items }: RelatedLinksProps) {
  const pathname = usePathname();
  const lang = currentLocale(pathname);
  const t = labels[lang];
  return (
    <section style={{ background: "#0c1a30", backgroundImage: "none", isolation: "isolate", padding: "72px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#2a8d4a", marginBottom: 12,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#2a8d4a", boxShadow: "0 0 0 3px rgba(42,141,74,0.25)",
          }} />
          {t.eyebrow}
        </p>
        <h2 style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 800, letterSpacing: "-0.03em",
          color: "#fff", marginBottom: 40,
        }}>
          {t.headline}
        </h2>

        <div
          style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: 20 }}
          className="related-grid"
        >
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="related-card">
              <div className="related-card-icon">{iconFor(item)}</div>
              <h3 className="related-card-title">{item.title}</h3>
              <p className="related-card-desc">{item.description}</p>
              <div className="related-card-cta">
                {t.cta}
                <svg className="related-card-arrow" width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
