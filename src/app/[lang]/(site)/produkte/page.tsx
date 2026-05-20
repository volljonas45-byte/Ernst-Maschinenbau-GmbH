"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import Link from "@/components/LocalizedLink";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

type Produkt = {
  title: string;
  subtitle: string;
  desc: string;
  href: string;
  img: string;
  specs: string[];
};

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumb: string };
  cta: string;
  produkte: Produkt[];
  related: { title: string; description: string; href: string; icon: "leistungen" | "unternehmen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Produkte · Ernst Maschinenbau GmbH", title: "Unsere Produktlinien", subtitle: "Fünf Produktbereiche – entwickelt und gefertigt in Neidenstein.", crumb: "Produkte" },
    cta: "Mehr erfahren",
    produkte: [
      { title: "Dichtigkeitsprüfung", subtitle: "Druckabfall · Differenzdruck · Durchfluss", desc: "Vollautomatische Prüfgeräte für Prüfvolumen von 5 ml bis 5.000 l – für Flaschen, Kanister, Fässer und Sonderbehälter.", href: "/produkte/dichtigkeitspruefung", img: "/35331_19_04-BZ-000-3-c82b16ed.webp", specs: ["Druckabfall-Messung", "Differenzdruck-Messung", "Durchflussmessung", "STANDARD & ECO Modellreihe"] },
      { title: "Wiegesysteme", subtitle: "Statisch · Dynamisch · Inline", desc: "Präzise Waagelösungen für Flaschen, Kanister und Fässer – nahtlos in bestehende Produktionslinien integrierbar.", href: "/produkte/wiegesysteme", img: "/Musteroberflaeche-Waage-e2e9f6b5.webp", specs: ["Statische Waagen", "Dynamische Waagen", "100 % Inline-Kontrolle", "Vollautomatisch"] },
      { title: "Sammelstationen", subtitle: "Blockbildung · Tray · Foliensack", desc: "Automatische Blockbildung und Transport für Viertel-, Halb- und Volltray-Verpackung – auch als Kombianlage.", href: "/produkte/sammelstationen", img: "/S-AST-T-T-a71bdadb.webp", specs: ["Viertel-, Halb-, Volltray", "Foliensack-Ausführung", "Kombinierbar", "Drehstation integrierbar"] },
      { title: "Förderbänder", subtitle: "Gurt · Vakuum · Kettenglieder", desc: "Qualitativ hochwertige Förderbänder und komplette Transportsysteme aus eigener Produktion mit kompakter Bauweise.", href: "/produkte/foerderbaender", img: "/Verkettung-e7d2d599.webp", specs: ["Gurtförderer", "Vakuumförderer", "Kettenglieder-Systeme", "50 mm Umlenkkopf min."] },
      { title: "Systemergänzungen", subtitle: "Tastpinole · Kamera · Daten", desc: "Tastpinolen, Kamerasysteme, Datenausgabe und weitere Optionen – einzeln nachrüstbar für maximale Flexibilität.", href: "/produkte/systemergaenzungen", img: "/Tastpinole-b1f40afb.webp", specs: ["Tastpinolen", "Kamerasysteme", "Datenausgabe / OPC-UA", "Einzeln nachrüstbar"] },
    ],
    related: [
      { title: "Leistungen", description: "Sondermaschinenbau, Präzisionsfertigung und mehr aus einer Hand.", href: "/leistungen", icon: "leistungen" },
      { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns kennen.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Products · Ernst Maschinenbau GmbH", title: "Our product lines", subtitle: "Five product areas — developed and built in Neidenstein, Germany.", crumb: "Products" },
    cta: "Learn more",
    produkte: [
      { title: "Leak testing", subtitle: "Pressure decay · Differential pressure · Flow", desc: "Fully automatic test systems for test volumes from 5 ml to 5,000 l — for bottles, canisters, drums and special containers.", href: "/produkte/dichtigkeitspruefung", img: "/35331_19_04-BZ-000-3-c82b16ed.webp", specs: ["Pressure-decay measurement", "Differential-pressure measurement", "Flow measurement", "STANDARD & ECO series"] },
      { title: "Weighing systems", subtitle: "Static · Dynamic · Inline", desc: "Precise weighing solutions for bottles, canisters and drums — seamlessly integrated into existing production lines.", href: "/produkte/wiegesysteme", img: "/Musteroberflaeche-Waage-e2e9f6b5.webp", specs: ["Static scales", "Dynamic scales", "100 % inline control", "Fully automatic"] },
      { title: "Collection stations", subtitle: "Block forming · Tray · Foil bag", desc: "Automatic block forming and transport for quarter, half and full-tray packaging — also as a combination system.", href: "/produkte/sammelstationen", img: "/S-AST-T-T-a71bdadb.webp", specs: ["Quarter, half, full tray", "Foil-bag variant", "Combinable", "Rotary station integrable"] },
      { title: "Conveyor belts", subtitle: "Belt · Vacuum · Chain link", desc: "High-quality conveyor belts and complete transport systems from our own production, in a compact design.", href: "/produkte/foerderbaender", img: "/Verkettung-e7d2d599.webp", specs: ["Belt conveyors", "Vacuum conveyors", "Chain-link systems", "50 mm minimum return-head"] },
      { title: "System add-ons", subtitle: "Probe · Camera · Data", desc: "Probes, camera systems, data output and further options — individually retrofittable for maximum flexibility.", href: "/produkte/systemergaenzungen", img: "/Tastpinole-b1f40afb.webp", specs: ["Probes", "Camera systems", "Data output / OPC-UA", "Individually retrofittable"] },
    ],
    related: [
      { title: "Services", description: "Custom machinery, precision manufacturing and more from a single source.", href: "/leistungen", icon: "leistungen" },
      { title: "About us", description: "Family business since 1965 — get to know us.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Get in touch", description: "Submit an enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function ProdukteUebersichtPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge={c.hero.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageSrc="/35331_19_04-BZ-000-3-c82b16ed.webp"
        breadcrumbs={[{ label: c.hero.crumb }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)", display: "flex", flexDirection: "column", gap: 20 }}>
          {c.produkte.map((p, i) => (
            <Link
              key={p.href}
              href={p.href}
              className={`reveal delay-${Math.min(i * 100, 400)}`}
              style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                borderRadius: 20,
                overflow: "hidden",
                textDecoration: "none",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.25s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "rgba(28,110,52,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              <div style={{ position: "relative", overflow: "hidden", minHeight: 220 }}>
                <Image src={asset(p.img)} alt={p.title} fill style={{ objectFit: "cover", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }} />
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#1c6e34", zIndex: 2 }} />
              </div>

              <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 6 }}>
                    {p.subtitle}
                  </p>
                  <h2 style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                    {p.title}
                  </h2>
                </div>

                <p style={{ fontSize: 14.5, color: "#424245", lineHeight: 1.7, marginBottom: 20, maxWidth: 540 }}>
                  {p.desc}
                </p>

                <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 16 }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 32px" }}>
                    {p.specs.map(s => (
                      <span key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#6e6e73" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1c6e34", flexShrink: 0 }} />
                        {s}
                      </span>
                    ))}
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#1c6e34", flexShrink: 0, whiteSpace: "nowrap" }}>
                    {c.cta}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
