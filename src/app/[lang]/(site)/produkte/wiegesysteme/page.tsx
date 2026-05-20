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
  features: { title: string; desc: string }[];
  galleryEyebrow: string;
  galleryHeadline: string;
  produkte: { label: string; src: string }[];
  related: { title: string; description: string; href: string; icon: "produkte" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Produkte · Wiegesysteme", title: "Vollautomatische Wiegesysteme", subtitle: "Dynamische und statische Waagelösungen für Flaschen, Kanister und Fässer – präzise, schnell und zuverlässig.", crumbProducts: "Produkte", crumbSelf: "Wiegesysteme" },
    intro: { eyebrow: "Präzision & Geschwindigkeit", headline: "Wiegen im laufenden Betrieb", p1: "Wir bieten vollautomatische Waagen – sowohl dynamisch als auch statisch – für diverse Artikel. Die Systeme lassen sich nahtlos in bestehende Produktionslinien integrieren.", p2: "Ob Flaschen, Kanister oder Fässer – wir finden die passende Waagelösung für Ihren Produktionsprozess." },
    features: [
      { title: "Dynamisches Wiegen", desc: "Vollautomatisch im laufenden Produktionsprozess, ohne Stopp der Linie." },
      { title: "Statisches Wiegen", desc: "Hochpräzise Gewichtsmessung für maximale Genauigkeitsanforderungen." },
      { title: "Flexibel skalierbar", desc: "Für Flaschen, Kanister, Fässer – passend zu Ihrer Produktlinie." },
      { title: "Systemintegration", desc: "Nahtlose Einbindung in bestehende Produktions- und Prüflinien." },
    ],
    galleryEyebrow: "Produktübersicht",
    galleryHeadline: "Unsere Wiegesysteme",
    produkte: [
      { label: "Wiegesystem für Flaschen", src: "/S-BW-S-54d56aa1.webp" },
      { label: "Wiegesystem für Kanister", src: "/Musteroberflaeche-Waage-e2e9f6b5.webp" },
      { label: "Wiegesystem für Fässer", src: "" },
    ],
    related: [
      { title: "Dichtigkeitsprüfung", description: "Vollautomatische Prüfgeräte für Druckabfall und Durchflussmessung.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Sammelstationen", description: "Automatische Blockbildung und Transport – perfekt kombinierbar.", href: "/produkte/sammelstationen", icon: "produkte" },
      { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Products · Weighing systems", title: "Fully automatic weighing systems", subtitle: "Dynamic and static weighing solutions for bottles, canisters and drums — precise, fast and reliable.", crumbProducts: "Products", crumbSelf: "Weighing systems" },
    intro: { eyebrow: "Precision & speed", headline: "Weighing during ongoing operation", p1: "We offer fully automatic scales — both dynamic and static — for a wide range of items. The systems integrate seamlessly into existing production lines.", p2: "Whether bottles, canisters or drums — we find the right weighing solution for your production process." },
    features: [
      { title: "Dynamic weighing", desc: "Fully automatic during ongoing production, without stopping the line." },
      { title: "Static weighing", desc: "High-precision weight measurement for maximum accuracy requirements." },
      { title: "Flexibly scalable", desc: "For bottles, canisters, drums — matched to your product line." },
      { title: "System integration", desc: "Seamless integration into existing production and inspection lines." },
    ],
    galleryEyebrow: "Product overview",
    galleryHeadline: "Our weighing systems",
    produkte: [
      { label: "Weighing system for bottles", src: "/S-BW-S-54d56aa1.webp" },
      { label: "Weighing system for canisters", src: "/Musteroberflaeche-Waage-e2e9f6b5.webp" },
      { label: "Weighing system for drums", src: "" },
    ],
    related: [
      { title: "Leak testing", description: "Fully automatic test systems for pressure-decay and flow measurement.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Collection stations", description: "Automatic block forming and transport — perfectly combinable.", href: "/produkte/sammelstationen", icon: "produkte" },
      { title: "Get in touch", description: "Submit an enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function WiegesystemePage({ params }: { params: Promise<{ lang: string }> }) {
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
        imageSrc="/Musteroberflaeche-Waage-e2e9f6b5.webp"
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
              <p style={{ fontSize: 15.5, color: "#1c6e34", lineHeight: 1.75 }}>{c.intro.p2}</p>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {c.features.map((f) => (
                <div key={f.title} style={{
                  background: "#f5f5f7", borderRadius: 14, padding: "20px 18px",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(28,110,52,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h3 style={{ fontSize: 13, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ fontSize: 12, color: "#6e6e73", lineHeight: 1.55 }}>{f.desc}</p>
                </div>
              ))}
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="three-col-stack">
            {c.produkte.map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src || undefined} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
