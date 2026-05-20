"use client";

import { use, useEffect } from "react";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumbServices: string; crumbSelf: string };
  allgemeinEyebrow: string;
  allgemeinHeadline: string;
  allgemeinBody: string;
  allgemein: string[];
  recyclingEyebrow: string;
  recyclingHeadline: string;
  recyclingBody: string;
  recycling: string[];
  related: { title: string; description: string; href: string; icon: "unternehmen" | "leistungen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Leistungen · Lohnarbeit", title: "Lohnarbeit & Auftragsfertigung", subtitle: "Nutzen Sie unseren Maschinenpark und unser Fachwissen für Ihre Fertigungsaufträge – von Drehteilen bis zu Maschinen-Überholungen.", crumbServices: "Leistungen", crumbSelf: "Lohnarbeit" },
    allgemeinEyebrow: "Allgemeine Lohnarbeit",
    allgemeinHeadline: "Ihr Fertigungsauftrag in erfahrenen Händen",
    allgemeinBody: "Profitieren Sie von unserem leistungsfähigen Maschinenpark und unserem erfahrenen Team für Ihre Lohnfertigungsaufträge – schnell, präzise und zuverlässig.",
    allgemein: [
      "Drehteile bis zu einem Ø 800 mm und einer Länge von 2 m",
      "Frästeile",
      "Reparaturen und Überholungen von Gebrauchtmaschinen jeglicher Art (Dreh-, Fräs-, Schleifmaschinen etc.)",
      "Rundschleifarbeiten",
      "Flachschleifen",
      "Umbau / Modernisierung / Optimierung vorhandener Produktionsanlagen",
      "Anfertigung von Baugruppen, Vorrichtungen und Maschinen nach Zeichnungsdaten",
      "Kennzeichnung und Beschriftung von Maschinenteilen durch Nadelbeschriftung",
    ],
    recyclingEyebrow: "Spezialisierung",
    recyclingHeadline: "Für Recyclingbetriebe",
    recyclingBody: "Spezialisierte Lohnarbeit für die Recyclingindustrie – von Rotoren und Mühlengehäusen bis zu Sonderanfertigungen.",
    recycling: [
      "Fertigen und bearbeiten von Rotoren und Mühlengehäusen jeglicher Art",
      "Überholung und Reparatur von gebrauchten Rotoren und Mühlengehäusen (Wellenbruch, Nacharbeit der Messerauflagen)",
      "Neuherstellung von Messerabdeckleisten, Ableitkeilen und Sonderanfertigungen für Mühlenhandling",
      "Nacharbeiten von Messern und Messerauflagen (Messerabdeckleisten)",
    ],
    related: [
      { title: "Maschinenpark", description: "Einblick in unsere CNC-Fräs- und Drehmaschinen.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
      { title: "Präzisionsfertigung", description: "Höchste Fertigungstoleranzen für anspruchsvolle Bauteile.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
      { title: "Kontakt aufnehmen", description: "Fertigungsanfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Services · Contract manufacturing", title: "Contract manufacturing & job work", subtitle: "Use our machine park and expertise for your manufacturing orders — from turned parts to machine overhauls.", crumbServices: "Services", crumbSelf: "Contract manufacturing" },
    allgemeinEyebrow: "General contract work",
    allgemeinHeadline: "Your production order in experienced hands",
    allgemeinBody: "Benefit from our high-performance machine park and our experienced team for your contract manufacturing orders — fast, precise and reliable.",
    allgemein: [
      "Turned parts up to ø 800 mm and 2 m in length",
      "Milled parts",
      "Repair and overhaul of used machines of all kinds (turning, milling, grinding machines etc.)",
      "Cylindrical grinding work",
      "Surface grinding",
      "Retrofit / modernisation / optimisation of existing production equipment",
      "Manufacture of assemblies, fixtures and machines from drawing data",
      "Marking and labelling of machine parts by dot-peen marking",
    ],
    recyclingEyebrow: "Specialisation",
    recyclingHeadline: "For recycling companies",
    recyclingBody: "Specialised contract work for the recycling industry — from rotors and mill housings to custom-built parts.",
    recycling: [
      "Manufacture and machining of rotors and mill housings of all kinds",
      "Overhaul and repair of used rotors and mill housings (shaft fracture, rework of blade supports)",
      "New production of blade cover strips, deflector wedges and custom parts for mill handling",
      "Rework of blades and blade supports (blade cover strips)",
    ],
    related: [
      { title: "Machine park", description: "A look at our CNC milling and turning machines.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
      { title: "Precision manufacturing", description: "Tightest manufacturing tolerances for demanding parts.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
      { title: "Get in touch", description: "Submit a manufacturing enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function LohnarbeitPage({ params }: { params: Promise<{ lang: string }> }) {
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
        imageSrc="/bild2-27805c5e.webp"
        breadcrumbs={[{ label: c.hero.crumbServices, href: "/leistungen" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.allgemeinEyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                {c.allgemeinHeadline}
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.allgemeinBody}</p>
            </div>
            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.allgemein.map((l, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "12px 0", borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p style={{ fontSize: 14.5, color: "#424245", lineHeight: 1.5 }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade-from-white" style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 12 }}>{c.recyclingEyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                {c.recyclingHeadline}
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>{c.recyclingBody}</p>
            </div>
            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.recycling.map((l, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 18px", background: "rgba(255,255,255,0.05)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                  <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2a8d4a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{l}</p>
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
