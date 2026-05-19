"use client";

import { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";

const branchen = [
  {
    name: "Holzbearbeitung",
    produkte: ["Z201", "Profilieranlagen", "Längsfaltanlagen", "Sondersägen", "Abstapelung"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M17 8l4 4-4 4M7 8l-4 4 4 4M14 4l-4 16"/>
      </svg>
    ),
  },
  {
    name: "Kunststoffindustrie",
    produkte: ["Montageanlagen", "Schweißanlagen", "Fasshandling", "Entbutzungen"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    name: "Verpackungstechnik",
    produkte: ["Halbautom. Kartuschenverpacker", "IBC-Gitterkorbherstellung"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
  },
  {
    name: "Metallverarbeitung",
    produkte: ["Biegemaschinen", "Clinchanlagen", "Schneide-/Prägestationen (Hydr./Pneum.)"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    name: "Automatisierungstechnik",
    produkte: ["Fördern", "Stapeln", "Drehen", "Wenden", "Sortieren"],
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
];

export default function ProduktbeispielePage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-scale");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge="Unternehmen · Produktbeispiele"
        title="Unsere Produktbeispiele"
        subtitle="Ein Einblick in realisierte Projekte – von der Holzbearbeitung bis zur Automatisierungstechnik."
        imageSrc="/produktbeispiele-c7c56065.jpg"
        breadcrumbs={[{ label: "Über uns", href: "/unternehmen" }, { label: "Produktbeispiele" }]}
      />

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 0 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ maxWidth: 720 }}>
            <p className="reveal" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, marginBottom: 14 }}>
              Bekommen Sie einen Eindruck von unserem Produktionsbereich, dem Herzstück unseres Unternehmens.
            </p>
            <p className="reveal delay-100" style={{ fontSize: 16, color: "#1c6e34", lineHeight: 1.75 }}>
              Unsere Fertigung verbindet modernste Fertigungstechnologie wie CNC-Maschinen mit der Flexibilität und Qualitätskontrolle durch manuellen Arbeitseinsatz.
            </p>
          </div>
        </div>
      </section>

      {/* Foto-Galerie */}
      <section style={{ background: "#fff", padding: "0 0 72px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col-stack">
            <div className="reveal" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/produktbeispiele-c7c56065.jpg")} alt="Produktbeispiele" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal delay-100" style={{ borderRadius: 16, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/produktbeispiele2-798a9da0.webp")} alt="Produktbeispiele 2" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Branchen-Cards */}
      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>Branchen</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 36 }}>
            Sortierung nach Branchen
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {branchen.map((b, i) => (
              <div key={b.name} className={`reveal delay-${i * 100}`} style={{
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                borderRadius: 16,
                padding: "28px 24px",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: "rgba(28,110,52,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#1c6e34", marginBottom: 18,
                }}>
                  {b.icon}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#1d1d1f", marginBottom: 14, letterSpacing: "-0.01em" }}>
                  {b.name}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {b.produkte.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 13.5, color: "#424245" }}>
                      <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Produkte", description: "Entdecken Sie unsere Produktlinien – von Dichtigkeitsprüfung bis Förderbänder.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
        { title: "Leistungen", description: "Von der Entwicklung bis zur Wartung – alles aus einer Hand.", href: "/leistungen", icon: "leistungen" },
        { title: "Kontakt", description: "Sprechen Sie uns an – wir beraten Sie gerne zu Ihrem Projekt.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
