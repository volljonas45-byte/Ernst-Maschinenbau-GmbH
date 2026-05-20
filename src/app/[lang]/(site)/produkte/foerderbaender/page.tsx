"use client";

import { use, useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumbProducts: string; crumbSelf: string };
  intro: { eyebrow: string; headline: string; p1: string; p2: string };
  variantsLabel: string;
  ausfuehrungen: string[];
  galleryEyebrow: string;
  galleryHeadline: string;
  produkte: { label: string; src: string }[];
  integration: { eyebrow: string; headline: string };
  handling: string[];
  related: { title: string; description: string; href: string; icon: "produkte" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Produkte · Förderbänder", title: "Förderbänder & Transportsysteme", subtitle: "Qualitativ hochwertige Förderbänder aus eigener Produktion – kompakt, präzise und in jeder Ausführung erhältlich.", crumbProducts: "Produkte", crumbSelf: "Förderbänder" },
    intro: { eyebrow: "Kerngeschäft", headline: "Kompakte Bauweise, einzigartige Lösung", p1: "Unsere Förderbänder zeichnen sich durch qualitativ hochwertige und kompakte Ausführung aus – nur 50 mm Umlenkkopfdurchmesser und sehr kompakte Antriebe. Die einzigartige konstruktive Lösung der Bandumlenkungen ermöglicht saubere Band-zu-Band-Übergänge.", p2: "Das Spektrum an verschiedensten Lösungen, das sich im Laufe der Jahrzehnte gesammelt hat, ist unübertroffen." },
    variantsLabel: "Erhältliche Ausführungen:",
    ausfuehrungen: [
      "Gurtförderer ab einer Breite von 50 mm",
      "Vakuumgurtförderer ab einer Breite von 120 mm",
      "Knick- und Steiggurtförderer",
      "Doppelstrangbänder (z. B. für Bodenbutzenkontrolle oder Waageneinsatz)",
      "Kettengliederbänder",
    ],
    galleryEyebrow: "Produktübersicht",
    galleryHeadline: "Unsere Förderbänder",
    produkte: [
      { label: "Gurtförderer 650 × 200 mm", src: "/S-B-50-650-200-TG-9fdad5dd.webp" },
      { label: "Doppelstrangband 2950 × 200 mm", src: "/S-B-50-100-2950-SO-d5251ddc.webp" },
      { label: "Verkettung", src: "/Verkettung-e7d2d599.webp" },
      { label: "Verkettung + Sammelstation", src: "/Verkettung_Draufsicht-cafa11e5.webp" },
    ],
    integration: { eyebrow: "Systemintegration", headline: "Handling & Verkettungen für Blasformanlagen" },
    handling: [
      "Transport aus dem Blasautomaten (Flach- oder Kettengliederbänder)",
      "Artikelzusammenführung",
      "Drehstationen",
      "Butzenkontrollsysteme",
      "Kamerasysteme",
      "Butzenbänder",
      "Artikel-Lifte",
      "Artikel-Aufrichter",
      "Fallschächte u.v.m.",
    ],
    related: [
      { title: "Sammelstationen", description: "Vollautomatische Blockbildung – ideal kombinierbar mit Förderbändern.", href: "/produkte/sammelstationen", icon: "produkte" },
      { title: "Systemergänzungen", description: "Tastpinolen, Kamerasysteme und weitere Ergänzungen für Ihre Linie.", href: "/produkte/systemergaenzungen", icon: "produkte" },
      { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Products · Conveyor belts", title: "Conveyor belts & transport systems", subtitle: "High-quality conveyor belts from our own production — compact, precise and available in every variant.", crumbProducts: "Products", crumbSelf: "Conveyor belts" },
    intro: { eyebrow: "Core business", headline: "Compact design, unique solution", p1: "Our conveyor belts are characterised by a high-quality and compact design — only 50 mm return-head diameter and very compact drives. The unique structural solution of the belt return ensures clean belt-to-belt transitions.", p2: "The range of different solutions that has been built up over the decades is unmatched." },
    variantsLabel: "Available variants:",
    ausfuehrungen: [
      "Belt conveyors from a width of 50 mm",
      "Vacuum belt conveyors from a width of 120 mm",
      "Bent and inclined belt conveyors",
      "Double-strand belts (e.g. for bottom-flash control or scale use)",
      "Chain-link conveyors",
    ],
    galleryEyebrow: "Product overview",
    galleryHeadline: "Our conveyor belts",
    produkte: [
      { label: "Belt conveyor 650 × 200 mm", src: "/S-B-50-650-200-TG-9fdad5dd.webp" },
      { label: "Double-strand belt 2950 × 200 mm", src: "/S-B-50-100-2950-SO-d5251ddc.webp" },
      { label: "Line chaining", src: "/Verkettung-e7d2d599.webp" },
      { label: "Chaining + collection station", src: "/Verkettung_Draufsicht-cafa11e5.webp" },
    ],
    integration: { eyebrow: "System integration", headline: "Handling & line chaining for blow-moulding systems" },
    handling: [
      "Transport out of the blow-moulding machine (flat or chain-link belts)",
      "Article merging",
      "Rotary stations",
      "Flash-control systems",
      "Camera systems",
      "Flash belts",
      "Article lifts",
      "Article uprighters",
      "Drop chutes and more",
    ],
    related: [
      { title: "Collection stations", description: "Fully automatic block forming — ideally combinable with conveyor belts.", href: "/produkte/sammelstationen", icon: "produkte" },
      { title: "System add-ons", description: "Probes, camera systems and further add-ons for your line.", href: "/produkte/systemergaenzungen", icon: "produkte" },
      { title: "Get in touch", description: "Submit an enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function FoerderbaenderPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge={c.hero.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageSrc="/Verkettung-e7d2d599.webp"
        breadcrumbs={[{ label: c.hero.crumbProducts, href: "/produkte/dichtigkeitspruefung" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.intro.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                {c.intro.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>{c.intro.p1}</p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.intro.p2}</p>
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#6e6e73", marginBottom: 14 }}>{c.variantsLabel}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.ausfuehrungen.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14.5, color: "#424245", lineHeight: 1.5 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.galleryEyebrow}</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            {c.galleryHeadline}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="two-col-stack">
            {c.produkte.slice(0, 2).map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-fade-from-off" style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 12 }}>{c.integration.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                {c.integration.headline}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
                {c.handling.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2a8d4a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {c.produkte.slice(2).map((p, i) => (
                <div key={p.label} className={`reveal delay-${i * 100}`}>
                  <ProductImageCard label={p.label} imageSrc={p.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
