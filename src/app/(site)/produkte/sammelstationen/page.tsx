"use client";

import { useEffect } from "react";
import PageHero from "@/components/PageHero";
import ProductImageCard from "@/components/ProductImageCard";
import RelatedLinks from "@/components/RelatedLinks";

const varianten = [
  "Kombianlage als Sammeltisch mit integrierter Dichtigkeitsprüfung",
  "Kombianlage als Sammeltisch mit integrierter Drehstation zum Blockbilden",
  "Sammeltische mit Blockbilden auf einem Tisch und Transport aufs Tray oder in Foliensack",
  "Sammeltische mit Blockbilden auf einem Transportband und Transport aufs Tray oder in Foliensack",
];

const produkte = [
  { label: "Sammelstation S-AST-T-T", src: "/S-AST-T-T-a71bdadb.webp" },
  { label: "Sammelstation S-AST-T", src: "/S-AST-T-1d3c6c92.webp" },
];

export default function SammelstationenPage() {
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
        badge="Produkte · Sammelstationen"
        title="Vollautomatische Sammelstationen"
        subtitle="Intelligente Blockbildung für Viertel-, Halb- und Volltray-Verpackung – in diversen Ausführungen und Sonderlösungen."
        imageSrc="/S-AST-T-T-a71bdadb.webp"
        breadcrumbs={[{ label: "Produkte", href: "/produkte/dichtigkeitspruefung" }, { label: "Sammelstationen" }]}
      />

      {/* Intro + Varianten */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Verpackungsautomatisierung</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Sammelstationen für jede Anforderung
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 14 }}>
                Sammelstationen helfen beim Verpacken. Diese Maschinen bilden sogenannte Blöcke, welche in Viertel-, Halb- oder Volltray's geschoben werden.
              </p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Auch Sonderlösungen, die den Kundenwünschen angepasst werden, sind möglich – zum Beispiel das Schieben von Blöcken in Foliensäcke.
              </p>
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 13, fontWeight: 600, color: "#6e6e73", marginBottom: 16 }}>Erhältliche Ausführungen:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {varianten.map((v, i) => (
                  <div key={i} style={{
                    display: "flex", gap: 14, alignItems: "flex-start",
                    background: "#f5f5f7", borderRadius: 12, padding: "16px 18px",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}>
                    <div style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 6, background: "rgba(26,138,60,0.1)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#1a8a3c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.5 }} dangerouslySetInnerHTML={{ __html: v.replace(/(integrierter?|Blockbilden|Tisch|Tray|Foliensack|Transportband)/g, '<strong>$1</strong>') }} />
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
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Produktübersicht</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 800, letterSpacing: "-0.02em", color: "#1d1d1f", marginBottom: 28 }}>
            Unsere Sammelstationen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20, maxWidth: 760 }} className="two-col-stack">
            {produkte.map((p, i) => (
              <div key={p.label} className={`reveal delay-${i * 100}`}>
                <ProductImageCard label={p.label} imageSrc={p.src} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Förderbänder", description: "Qualitativ hochwertige Förderbänder und komplette Transportsysteme.", href: "/produkte/foerderbaender", icon: "produkte" },
        { title: "Dichtigkeitsprüfung", description: "Kombinierbar mit Sammelstationen – Prüfen und Verpacken in einem.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
