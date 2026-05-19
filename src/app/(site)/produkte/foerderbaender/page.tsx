"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";

const ausfuehrungen = [
  "Gurtförderer ab einer Breite von 50 mm",
  "Vakuumgurtförderer ab einer Breite von 120 mm",
  "Knick- und Steiggurtförderer",
  "Doppelstrangbänder (z. B. für Bodenbutzenkontrolle oder Waageneinsatz)",
  "Kettengliederbänder",
];

const handling = [
  "Transport aus dem Blasautomaten (Flach- oder Kettengliederbänder)",
  "Artikelzusammenführung",
  "Drehstationen",
  "Butzenkontrollsysteme",
  "Kamerasysteme",
  "Butzenbänder",
  "Artikel-Lifte",
  "Artikel-Aufrichter",
  "Fallschächte u.v.m.",
];

const produkte = [
  { label: "Gurtförderer 650 × 200 mm", src: "/S-B-50-650-200-TG-9fdad5dd.webp" },
  { label: "Doppelstrangband 2950 × 200 mm", src: "/S-B-50-100-2950-SO-d5251ddc.webp" },
  { label: "Verkettung", src: "/Verkettung-e7d2d599.webp" },
  { label: "Verkettung + Sammelstation", src: "/Verkettung_Draufsicht-cafa11e5.webp" },
];

export default function FoerderbaenderPage() {
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
        badge="Produkte · Förderbänder"
        title="Förderbänder & Transportsysteme"
        subtitle="Qualitativ hochwertige Förderbänder aus eigener Produktion – kompakt, präzise und in jeder Ausfiihrung erhältlich."
        imageSrc="/Verkettung-e7d2d599.webp"
        breadcrumbs={[{ label: "Produkte", href: "/produkte/dichtigkeitspruefung" }, { label: "Förderbänder" }]}
      />

      {/* Intro */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Kerngeschäft</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Kompakte Bauweise, einzigartige Lösung
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                Unsere Förderbänder zeichnen sich durch qualitativ hochwertige und kompakte Ausführung aus – nur 50 mm Umlenkkopfdurchmesser und sehr kompakte Antriebe. Die einzigartige konstruktive Lösung der Bandumlenkungen ermöglicht saubere Band-zu-Band-Übergänge.
              </p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Das Spektrum an verschiedensten Lösungen, das sich im Laufe der Jahrzehnte gesammelt hat, ist unübertroffen.
              </p>
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#6e6e73", marginBottom: 14 }}>Erhältliche Ausführungen:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {ausfuehrungen.map((a, i) => (
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

      {/* Produkt-Galerie */}
      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Produktübersicht</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            Unsere Förderbänder
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="two-col-stack">
            {produkte.slice(0, 2).map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling */}
      <section className="section-fade-from-off" style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 12 }}>Systemintegration</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                Handling & Verkettungen für Blasformanlagen
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 8 }}>
                {handling.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#2a8d4a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {produkte.slice(2).map((p, i) => (
                <div key={p.label} className={`reveal delay-${i * 100}`}>
                  <ProductImageCard label={p.label} imageSrc={p.src} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Sammelstationen", description: "Vollautomatische Blockbildung – ideal kombinierbar mit Förderbändern.", href: "/produkte/sammelstationen", icon: "produkte" },
        { title: "Systemergänzungen", description: "Tastpinolen, Kamerasysteme und weitere Ergänzungen für Ihre Linie.", href: "/produkte/systemergaenzungen", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
