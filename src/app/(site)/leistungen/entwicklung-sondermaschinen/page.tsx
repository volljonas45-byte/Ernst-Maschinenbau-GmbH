"use client";

import { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";

const staerken = [
  { title: "Jahrzehntelange Erfahrung", desc: "Über 60 Jahre Sondermaschinenkonstruktion – internationaler Erfahrungsschatz in 50+ Ländern." },
  { title: "Internationale Projekterfahrung", desc: "Erfolgreiche Projekte für Kunden aus Automobilindustrie, Pharma, Chemie und mehr." },
  { title: "Modernste CAD/CAM-Technologie", desc: "Konstruktion und Simulation mit aktueller Software für maximale Präzision vor der Fertigung." },
  { title: "Enge Kundenzusammenarbeit", desc: "Von der ersten Idee bis zur Inbetriebnahme: transparente Kommunikation in jedem Schritt." },
  { title: "Wirtschaftlich & technisch ausgereift", desc: "Lösungen außerhalb eingefahrener Wege – profitabel und langlebig zugleich." },
  { title: "Familiengeführt & verlässlich", desc: "Persönliche Verantwortung und direkte Ansprechpartner von Anfang bis Ende." },
];

export default function EntwicklungPage() {
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
        badge="Leistungen · Sondermaschinenbau"
        title="Entwicklung von Sondermaschinen & Maschinenkonstruktion"
        subtitle="Seit über 60 Jahren entwickeln und fertigen wir maßgeschneiderte Sondermaschinen – für Kunden in über 50 Ländern weltweit."
        imageSrc="/sonder-maschinenbau-c3482bd2.webp"
        breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }, { label: "Sondermaschinenbau" }]}
      />

      {/* Konstruktion + Sondermaschinen */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Konstruktion</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Maßgeschneiderte Lösungen von Anfang an
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                Unsere erfahrenen Konstrukteure entwickeln maßgeschneiderte Lösungen für Ihre spezifischen Anforderungen. Von der ersten Idee bis zur fertigen Maschine begleiten wir Sie in jedem Schritt des Entwicklungsprozesses.
              </p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Als erfahrener Hersteller von Sondermaschinen sind wir als Familienunternehmen seit über 60 Jahren international erfolgreich am Markt.
              </p>
            </div>
            <div className="reveal-right" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/sonder-maschinenbau-c3482bd2.webp")} alt="Sondermaschinenbau" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sondermaschinen – dunkel */}
      <section className="section-fade-from-white" style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/bild2-27805c5e.webp")} alt="Sondermaschinen" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 12 }}>Sondermaschinen</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                Individuell für jede Branche
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                Wir entwickeln und fertigen Sondermaschinen für verschiedenste Industriebranchen – von der Automobilindustrie über die Pharmabranche bis hin zur Chemieindustrie. Jede Maschine wird individuell auf die Bedürfnisse des Kunden abgestimmt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stärken-Grid */}
      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Unsere Stärken</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 36 }}>
            Warum Ernst Maschinenbau?
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {staerken.map((s, i) => (
              <div key={s.title} className={`reveal delay-${Math.min(i * 80, 400)}`} style={{
                background: "#fff", borderRadius: 14, padding: "24px 22px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(28,110,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1d1d1f", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#6e6e73", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Präzisionsfertigung", description: "Höchste Fertigungstoleranzen durch qualifizierte Fachkräfte und modernen Maschinenpark.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
        { title: "Unsere Produkte", description: "Dichtigkeitsprüfung, Wiegesysteme, Förderbänder und mehr.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Projektanfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
