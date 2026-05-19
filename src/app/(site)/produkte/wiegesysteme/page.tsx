"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";

const produkte = [
  { label: "Wiegesystem für Flaschen", src: "/S-BW-S-54d56aa1.webp" },
  { label: "Wiegesystem für Kanister", src: "/Musteroberflaeche-Waage-e2e9f6b5.webp" },
  { label: "Wiegesystem für Fässer", src: "" },
];

const features = [
  { title: "Dynamisches Wiegen", desc: "Vollautomatisch im laufenden Produktionsprozess, ohne Stopp der Linie." },
  { title: "Statisches Wiegen", desc: "Hochpräzise Gewichtsmessung für maximale Genauigkeitsanforderungen." },
  { title: "Flexibel skalierbar", desc: "Für Flaschen, Kanister, Fässer – passend zu Ihrer Produktlinie." },
  { title: "Systemintegration", desc: "Nahtlose Einbindung in bestehende Produktions- und Prüflinien." },
];

export default function WiegesystemePage() {
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
        badge="Produkte · Wiegesysteme"
        title="Vollautomatische Wiegesysteme"
        subtitle="Dynamische und statische Waagelösungen für Flaschen, Kanister und Fässer – präzise, schnell und zuverlässig."
        imageSrc="/Musteroberflaeche-Waage-e2e9f6b5.webp"
        breadcrumbs={[{ label: "Produkte", href: "/produkte/dichtigkeitspruefung" }, { label: "Wiegesysteme" }]}
      />

      {/* Intro + Features */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Präzision & Geschwindigkeit</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Wiegen im laufenden Betrieb
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                Wir bieten vollautomatische Waagen – sowohl dynamisch als auch statisch – für diverse Artikel. Die Systeme lassen sich nahtlos in bestehende Produktionslinien integrieren.
              </p>
              <p style={{ fontSize: 15.5, color: "#1c6e34", lineHeight: 1.75 }}>
                Ob Flaschen, Kanister oder Fässer – wir finden die passende Waagelösung für Ihren Produktionsprozess.
              </p>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {features.map((f, i) => (
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

      {/* Produkt-Galerie */}
      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Produktübersicht</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            Unsere Wiegesysteme
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="three-col-stack">
            {produkte.map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src || undefined} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Dichtigkeitsprüfung", description: "Vollautomatische Prüfgeräte für Druckabfall und Durchflussmessung.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
        { title: "Sammelstationen", description: "Automatische Blockbildung und Transport – perfekt kombinierbar.", href: "/produkte/sammelstationen", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
