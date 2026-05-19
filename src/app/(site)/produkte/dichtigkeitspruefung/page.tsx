"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";

const artikel = [
  { label: "Flaschen",      src: "/S-LT-5-2-c840a74d.webp" },
  { label: "Kanister",      src: "/S-LT-30-1-W-09d3499c.webp" },
  { label: "Fässer",        src: "/S-LT-60-3-dd546831.webp" },
  { label: "Großbehälter",  src: "/S-LT-1000-1-ZH-be1c6458.webp" },
];
const automobilartikel = [
  { label: "Schlüsselanlage", src: "/Schluessel-3ec153ba.webp" },
  { label: "Sonderbehälter", src: "/Sonderbehaelter-028ea93a.webp" },
  { label: "S-TB 10-1", src: "/S-TB-10-1-ce1276b8.webp" },
];

const features = [
  { title: "Druckabfall-Messung", desc: "Präzise Erkennung auch kleinster Leckagen durch hochauflösende Drucksensoren." },
  { title: "Differenzdruck-Messung", desc: "Vergleichsmessung für maximale Genauigkeit bei schwierigen Prüfaufgaben." },
  { title: "Durchflussmessung", desc: "Schnelle Prüfverfahren für hohen Durchsatz in der Serienfertigung." },
  { title: "STANDARD & ECO Modellreihe", desc: "Von der hochwertigen STANDARD- bis zur preiswerten ECO-Lösung." },
];

export default function DichtigkeitspruefungPage() {
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
        badge="Produkte · Dichtigkeitsprüfung"
        title="Qualitätssicherung durch Dichtigkeitsprüfung"
        subtitle="Vollautomatische Prüfgeräte für Druckabfall, Differenzdruck und Durchflussmessung – für Prüfvolumen von 5 ml bis 5.000 l."
        imageSrc="/35331_19_04-BZ-000-3-c82b16ed.webp"
        breadcrumbs={[{ label: "Produkte", href: "/produkte/dichtigkeitspruefung" }, { label: "Dichtigkeitsprüfung" }]}
      />

      {/* Intro + Features */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Unsere Stärke</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Dichtigkeitsprüfung für jedes Volumen
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                Diese Prüfmethoden zählen zu unseren Stärken und werden in unterschiedlichsten Maschinen eingesetzt. Wir fertigen Dichtigkeitsprüfgeräte für Augentropfenfläschchen mit 5 ml oder Wasserbehälter mit 5.000 l.
              </p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Wir bieten voll- und teilautomatische Dichtigkeitsprüfgeräte sowie Inlineprüfgeräte für Langhubblasmaschinen und Sondermaschinen.
              </p>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {features.map((f, i) => (
                <div key={f.title} className={`reveal delay-${i * 100}`} style={{
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

      {/* Artikel-Galerie */}
      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Artikel</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            Für diverse Behältertypen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="four-col-stack">
            {artikel.map((a, i) => (
              <div key={a.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={a.label} src={a.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automobilartikel */}
      <section style={{ background: "#fff", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Industrie</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 8 }}>
            Automobil-, Pharma- & Chemieindustrie
          </h2>
          <p className="reveal delay-200" style={{ fontSize: 15, color: "#6e6e73", marginBottom: 28 }}>Sonderbehälter in allen Ausführungen</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="three-col-stack">
            {automobilartikel.map((a, i) => (
              <div key={a.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={a.label} imageSrc={a.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Wiegesysteme", description: "Vollautomatische Waagelösungen für Flaschen, Kanister und Fässer.", href: "/produkte/wiegesysteme", icon: "produkte" },
        { title: "Sammelstationen", description: "Automatische Blockbildung und Transport – abgestimmt auf Ihre Linie.", href: "/produkte/sammelstationen", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
