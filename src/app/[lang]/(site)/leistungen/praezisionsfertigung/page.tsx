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

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumbServices: string; crumbSelf: string };
  s1: { eyebrow: string; headline: string; body: string };
  s2: { eyebrow: string; headline: string; bodyLead: string; linkLabel: string; bodyTail: string };
  qs: { eyebrow: string; headline: string; p1: string; p2: string; items: string[] };
  related: { title: string; description: string; href: string; icon: "unternehmen" | "leistungen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Leistungen · Präzisionsfertigung", title: "Präzisionsfertigung", subtitle: "Höchste Fertigungstoleranzen durch qualifizierte Fachkräfte, modernen Maschinenpark und lückenlose Qualitätssicherung.", crumbServices: "Leistungen", crumbSelf: "Präzisionsfertigung" },
    s1: { eyebrow: "Maschinenbau", headline: "Ausgebildete Fachkräfte für höchste Präzision", body: "Ausgebildete Fachkräfte an unseren Bearbeitungsmaschinen garantieren das Optimum an Präzision. Jedes Teil wird mit größter Sorgfalt gefertigt und kontrolliert." },
    s2: { eyebrow: "Präzisionsfertigung", headline: "Flexibler Maschinenpark, enge Toleranzen", bodyLead: "Ein flexibler, leistungsfähiger ", linkLabel: "Maschinenpark", bodyTail: " von hoher Kapazität ermöglicht die Einhaltung notwendiger Fertigungstoleranzen – auch bei komplexen Bauteilen mit anspruchsvoller Geometrie." },
    qs: {
      eyebrow: "Qualitätssicherung",
      headline: "Qualität von Anfang an – nicht erst am Ende",
      p1: "Hochwertige Messtechnik und qualifiziertes Personal sichern den hohen Qualitätsstandard. Die Qualitätssicherung beginnt bereits bei der Konstruktion – jedem Teil werden qualitative Vorgaben mitgegeben.",
      p2: "Durch strenge regelmäßige Kontrollen über den gesamten Produktionsprozess wird die Einhaltung ständig überwacht.",
      items: [
        "Hochwertige Messtechnik für präzise Qualitätskontrolle",
        "Versiertes und qualifiziertes Fachpersonal",
        "Qualitative Vorgaben bereits in der Konstruktionsphase",
        "Regelmäßige Kontrollen über den gesamten Produktionsprozess",
        "Strenge Überwachung aller Fertigungsschritte",
      ],
    },
    related: [
      { title: "Maschinenpark", description: "Einblick in unsere CNC-Fräs- und Drehmaschinen.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
      { title: "Lohnarbeit", description: "Nutzen Sie unsere Kapazitäten für Ihre Fertigungsaufträge.", href: "/leistungen/lohnarbeit", icon: "leistungen" },
      { title: "Kontakt aufnehmen", description: "Projektanfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Services · Precision manufacturing", title: "Precision manufacturing", subtitle: "Tightest manufacturing tolerances thanks to skilled staff, a modern machine park and seamless quality assurance.", crumbServices: "Services", crumbSelf: "Precision manufacturing" },
    s1: { eyebrow: "Mechanical engineering", headline: "Trained specialists for maximum precision", body: "Trained specialists at our machining centres guarantee the optimum in precision. Every part is manufactured and inspected with the utmost care." },
    s2: { eyebrow: "Precision manufacturing", headline: "Flexible machine park, tight tolerances", bodyLead: "A flexible, high-capacity ", linkLabel: "machine park", bodyTail: " allows us to meet the required manufacturing tolerances — even for complex components with demanding geometry." },
    qs: {
      eyebrow: "Quality assurance",
      headline: "Quality from the start — not just at the end",
      p1: "High-quality metrology and qualified staff secure our high quality standard. Quality assurance begins during engineering — every part is given its quality targets up front.",
      p2: "Strict regular inspections across the entire production process continuously verify compliance.",
      items: [
        "High-quality metrology for precise quality control",
        "Experienced and qualified specialists",
        "Quality targets defined at the engineering stage",
        "Regular inspections across the entire production process",
        "Strict monitoring of all manufacturing steps",
      ],
    },
    related: [
      { title: "Machine park", description: "A look at our CNC milling and turning machines.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
      { title: "Contract manufacturing", description: "Use our capacity for your manufacturing orders.", href: "/leistungen/lohnarbeit", icon: "leistungen" },
      { title: "Get in touch", description: "Submit a project enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function PraezisionsfertigungPage({ params }: { params: Promise<{ lang: string }> }) {
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
        breadcrumbs={[{ label: c.hero.crumbServices, href: "/leistungen/entwicklung-sondermaschinen" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.s1.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                {c.s1.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.s1.body}</p>
            </div>
            <div className="reveal-right" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/bild2-27805c5e.webp")} alt={c.hero.crumbSelf} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-fade-from-white" style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/sonder-maschinenbau-c3482bd2.webp")} alt={c.s2.linkLabel} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 12 }}>{c.s2.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                {c.s2.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                {c.s2.bodyLead}
                <Link href="/unternehmen/maschinenpark" style={{ color: "#2a8d4a", textDecoration: "none", borderBottom: "1px solid rgba(42,141,74,0.4)" }}>
                  {c.s2.linkLabel}
                </Link>
                {c.s2.bodyTail}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.qs.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                {c.qs.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 14 }}>{c.qs.p1}</p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.qs.p2}</p>
            </div>
            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {c.qs.items.map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.5 }}>{q}</p>
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
