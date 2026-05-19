"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";

const ergaenzungen = [
  { name: "Tastpinole", desc: "Präzise Positionierungshilfe für exakte Werkstückausrichtung.", src: "/Tastpinole-b1f40afb.webp" },
  { name: "Wechselpinole", desc: "Schneller Werkzeugwechsel für flexible Produktion." },
  { name: "Butzenkontrolle", desc: "Automatische Erkennung von Butzen und Ausschussteilen.", src: "/Griffbutzenkontrolle-7e6fec16.webp" },
  { name: "Hydraulische Höhenverstellung", desc: "Ergonomische Anpassung der Arbeitshöhe auf Knopfdruck." },
  { name: "Datenausgabe (USB)", desc: "Prüfergebnisse direkt per USB exportieren und archivieren." },
  { name: "Dateneinlesen (Barcode)", desc: "Automatische Chargenerfassung via Barcodescanner." },
  { name: "Konturkontrolle (Kamera)", desc: "Bildverarbeitung für 100-%-Qualitätskontrolle der Kontur." },
  { name: "Auswurfüberwachung", desc: "Zuverlässige Überwachung des Ausschussauswurfs." },
  { name: "Abwurf liegender Artikel", desc: "Automatisches Aufstellen und Sortieren liegender Teile." },
  { name: "Vakuumbänder", desc: "Sichere Förderung empfindlicher oder leichter Artikel." },
  { name: "Vakuumpumpen", desc: "Leistungsstarke Pumpen für Vakuumanwendungen in der Linie." },
];

export default function SystemergaenzungenPage() {
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
        badge="Produkte · Systemergänzungen"
        title="Systemergänzungen"
        subtitle="Erweitern Sie Ihre Maschinen mit unseren Systemergänzungen – von der Tastpinole bis zur Konturkontrolle."
        imageSrc="/Tastpinole-b1f40afb.webp"
        breadcrumbs={[{ label: "Produkte", href: "/produkte/dichtigkeitspruefung" }, { label: "Systemergänzungen" }]}
      />

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 0 56px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ maxWidth: 680 }} className="reveal">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Flexibel erweiterbar</p>
            <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 16, lineHeight: 1.2 }}>
              Passende Ergänzungen für Ihre Produktionslinie
            </h2>
            <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
              Folgende Systemergänzungen sind für diverse Maschinen erhältlich – einzeln nachrüstbar oder bereits bei der Erstinbetriebnahme integrierbar.
            </p>
          </div>
        </div>
      </section>

      {/* Ergänzungen-Grid */}
      <section style={{ background: "#f5f5f7", padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            {ergaenzungen.map((e, i) => (
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

      {/* Produkt-Bilder */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Beispiele</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            Ausgewählte Systemergänzungen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16, maxWidth: 640 }}>
            <div className="reveal"><ProductImageCard label="Tastpinole" imageSrc="/Tastpinole-b1f40afb.webp" /></div>
            <div className="reveal delay-100"><ProductImageCard label="Griffbutzenkontrolle" imageSrc="/Griffbutzenkontrolle-7e6fec16.webp" /></div>
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Förderbänder", description: "Qualitativ hochwertige Förderbänder und komplette Transportsysteme.", href: "/produkte/foerderbaender", icon: "produkte" },
        { title: "Dichtigkeitsprüfung", description: "Vollautomatische Prüfgeräte für alle Behältertypen.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
