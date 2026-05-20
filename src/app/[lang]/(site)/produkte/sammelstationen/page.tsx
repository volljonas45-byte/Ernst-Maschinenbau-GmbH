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
  varianten: string[];
  boldKeywords: RegExp;
  galleryEyebrow: string;
  galleryHeadline: string;
  produkte: { label: string; src: string }[];
  related: { title: string; description: string; href: string; icon: "produkte" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Produkte · Sammelstationen", title: "Vollautomatische Sammelstationen", subtitle: "Intelligente Blockbildung für Viertel-, Halb- und Volltray-Verpackung – in diversen Ausführungen und Sonderlösungen.", crumbProducts: "Produkte", crumbSelf: "Sammelstationen" },
    intro: { eyebrow: "Verpackungsautomatisierung", headline: "Sammelstationen für jede Anforderung", p1: "Sammelstationen helfen beim Verpacken. Diese Maschinen bilden sogenannte Blöcke, welche in Viertel-, Halb- oder Volltray's geschoben werden.", p2: "Auch Sonderlösungen, die den Kundenwünschen angepasst werden, sind möglich – zum Beispiel das Schieben von Blöcken in Foliensäcke." },
    variantsLabel: "Erhältliche Ausführungen:",
    varianten: [
      "Kombianlage als Sammeltisch mit integrierter Dichtigkeitsprüfung",
      "Kombianlage als Sammeltisch mit integrierter Drehstation zum Blockbilden",
      "Sammeltische mit Blockbilden auf einem Tisch und Transport aufs Tray oder in Foliensack",
      "Sammeltische mit Blockbilden auf einem Transportband und Transport aufs Tray oder in Foliensack",
    ],
    boldKeywords: /(integrierter?|Blockbilden|Tisch|Tray|Foliensack|Transportband)/g,
    galleryEyebrow: "Produktübersicht",
    galleryHeadline: "Unsere Sammelstationen",
    produkte: [
      { label: "Sammelstation S-AST-T-T", src: "/S-AST-T-T-a71bdadb.webp" },
      { label: "Sammelstation S-AST-T", src: "/S-AST-T-1d3c6c92.webp" },
    ],
    related: [
      { title: "Förderbänder", description: "Qualitativ hochwertige Förderbänder und komplette Transportsysteme.", href: "/produkte/foerderbaender", icon: "produkte" },
      { title: "Dichtigkeitsprüfung", description: "Kombinierbar mit Sammelstationen – Prüfen und Verpacken in einem.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Products · Collection stations", title: "Fully automatic collection stations", subtitle: "Intelligent block forming for quarter, half and full-tray packaging — in various designs and custom solutions.", crumbProducts: "Products", crumbSelf: "Collection stations" },
    intro: { eyebrow: "Packaging automation", headline: "Collection stations for every requirement", p1: "Collection stations help with packaging. These machines form so-called blocks which are pushed into quarter, half or full trays.", p2: "Custom solutions tailored to customer requirements are also possible — for example pushing blocks into foil bags." },
    variantsLabel: "Available variants:",
    varianten: [
      "Combination system as a collection table with integrated leak testing",
      "Combination system as a collection table with integrated rotary station for block forming",
      "Collection tables with block forming on one table and transport onto a tray or into a foil bag",
      "Collection tables with block forming on a conveyor belt and transport onto a tray or into a foil bag",
    ],
    boldKeywords: /(integrated|block forming|table|tray|foil bag|conveyor belt)/gi,
    galleryEyebrow: "Product overview",
    galleryHeadline: "Our collection stations",
    produkte: [
      { label: "Collection station S-AST-T-T", src: "/S-AST-T-T-a71bdadb.webp" },
      { label: "Collection station S-AST-T", src: "/S-AST-T-1d3c6c92.webp" },
    ],
    related: [
      { title: "Conveyor belts", description: "High-quality conveyor belts and complete transport systems.", href: "/produkte/foerderbaender", icon: "produkte" },
      { title: "Leak testing", description: "Combinable with collection stations — test and pack in one.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Get in touch", description: "Submit an enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function SammelstationenPage({ params }: { params: Promise<{ lang: string }> }) {
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
        imageSrc="/S-AST-T-T-a71bdadb.webp"
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
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 14 }}>{c.intro.p1}</p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.intro.p2}</p>
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#6e6e73", marginBottom: 16 }}>{c.variantsLabel}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.varianten.map((v, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    background: "#f5f5f7", borderRadius: 12, padding: "16px 18px",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}>
                    <div style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 6, background: "rgba(28,110,52,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: v.replace(c.boldKeywords, '<strong>$1</strong>') }} />
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 760 }} className="two-col-stack">
            {c.produkte.map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
