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
  intro: { eyebrow: string; headline: string; body: string };
  ergaenzungen: { name: string; desc: string }[];
  examplesEyebrow: string;
  examplesHeadline: string;
  exampleLabel1: string;
  exampleLabel2: string;
  related: { title: string; description: string; href: string; icon: "produkte" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Produkte · Systemergänzungen", title: "Systemergänzungen", subtitle: "Erweitern Sie Ihre Maschinen mit unseren Systemergänzungen – von der Tastpinole bis zur Konturkontrolle.", crumbProducts: "Produkte", crumbSelf: "Systemergänzungen" },
    intro: { eyebrow: "Flexibel erweiterbar", headline: "Passende Ergänzungen für Ihre Produktionslinie", body: "Folgende Systemergänzungen sind für diverse Maschinen erhältlich – einzeln nachrüstbar oder bereits bei der Erstinbetriebnahme integrierbar." },
    ergaenzungen: [
      { name: "Tastpinole", desc: "Präzise Positionierungshilfe für exakte Werkstückausrichtung." },
      { name: "Wechselpinole", desc: "Schneller Werkzeugwechsel für flexible Produktion." },
      { name: "Butzenkontrolle", desc: "Automatische Erkennung von Butzen und Ausschussteilen." },
      { name: "Hydraulische Höhenverstellung", desc: "Ergonomische Anpassung der Arbeitshöhe auf Knopfdruck." },
      { name: "Datenausgabe (USB)", desc: "Prüfergebnisse direkt per USB exportieren und archivieren." },
      { name: "Dateneinlesen (Barcode)", desc: "Automatische Chargenerfassung via Barcodescanner." },
      { name: "Konturkontrolle (Kamera)", desc: "Bildverarbeitung für 100-%-Qualitätskontrolle der Kontur." },
      { name: "Auswurfüberwachung", desc: "Zuverlässige Überwachung des Ausschussauswurfs." },
      { name: "Abwurf liegender Artikel", desc: "Automatisches Aufstellen und Sortieren liegender Teile." },
      { name: "Vakuumbänder", desc: "Sichere Förderung empfindlicher oder leichter Artikel." },
      { name: "Vakuumpumpen", desc: "Leistungsstarke Pumpen für Vakuumanwendungen in der Linie." },
    ],
    examplesEyebrow: "Beispiele",
    examplesHeadline: "Ausgewählte Systemergänzungen",
    exampleLabel1: "Tastpinole",
    exampleLabel2: "Griffbutzenkontrolle",
    related: [
      { title: "Förderbänder", description: "Qualitativ hochwertige Förderbänder und komplette Transportsysteme.", href: "/produkte/foerderbaender", icon: "produkte" },
      { title: "Dichtigkeitsprüfung", description: "Vollautomatische Prüfgeräte für alle Behältertypen.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Products · System add-ons", title: "System add-ons", subtitle: "Extend your machines with our system add-ons — from the probe to contour inspection.", crumbProducts: "Products", crumbSelf: "System add-ons" },
    intro: { eyebrow: "Flexibly extensible", headline: "Matching add-ons for your production line", body: "The following system add-ons are available for various machines — retrofittable individually or integrated at initial commissioning." },
    ergaenzungen: [
      { name: "Probe (Tastpinole)", desc: "Precise positioning aid for exact workpiece alignment." },
      { name: "Swap probe", desc: "Fast tool change for flexible production." },
      { name: "Flash control", desc: "Automatic detection of flash and reject parts." },
      { name: "Hydraulic height adjustment", desc: "Ergonomic working-height adjustment at the push of a button." },
      { name: "Data output (USB)", desc: "Export and archive test results directly via USB." },
      { name: "Data input (barcode)", desc: "Automatic batch capture via barcode scanner." },
      { name: "Contour control (camera)", desc: "Image processing for 100 % contour quality control." },
      { name: "Reject monitoring", desc: "Reliable monitoring of reject ejection." },
      { name: "Drop-off of lying parts", desc: "Automatic uprighting and sorting of parts lying flat." },
      { name: "Vacuum belts", desc: "Safe conveying of delicate or lightweight items." },
      { name: "Vacuum pumps", desc: "Powerful pumps for vacuum applications in the line." },
    ],
    examplesEyebrow: "Examples",
    examplesHeadline: "Selected system add-ons",
    exampleLabel1: "Probe",
    exampleLabel2: "Handle flash control",
    related: [
      { title: "Conveyor belts", description: "High-quality conveyor belts and complete transport systems.", href: "/produkte/foerderbaender", icon: "produkte" },
      { title: "Leak testing", description: "Fully automatic test systems for all container types.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Get in touch", description: "Submit an enquiry or arrange a consultation.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function SystemergaenzungenPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-scale");
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
        imageSrc="/Tastpinole-b1f40afb.webp"
        breadcrumbs={[{ label: c.hero.crumbProducts, href: "/produkte/dichtigkeitspruefung" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "72px 0 56px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ maxWidth: 680 }} className="reveal">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.intro.eyebrow}</p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 16, lineHeight: 1.2 }}>
              {c.intro.headline}
            </h2>
            <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>{c.intro.body}</p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {c.ergaenzungen.map((e, i) => (
              <div key={e.name} className={`reveal delay-${Math.min(i * 60, 500)}`} style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderLeft: "3px solid #1c6e34",
                borderRadius: "0 12px 12px 0",
                padding: "18px 20px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1d1d1f", marginBottom: 6 }}>{e.name}</h3>
                <p style={{ fontSize: 12.5, color: "#6e6e73", lineHeight: 1.55 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.examplesEyebrow}</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            {c.examplesHeadline}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 640 }}>
            <div className="reveal"><ProductImageCard label={c.exampleLabel1} imageSrc="/Tastpinole-b1f40afb.webp" /></div>
            <div className="reveal delay-100"><ProductImageCard label={c.exampleLabel2} imageSrc="/Griffbutzenkontrolle-7e6fec16.webp" /></div>
          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
