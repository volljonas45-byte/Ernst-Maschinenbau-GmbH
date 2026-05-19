"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";

const leistungen = [
  {
    title: "Entwicklung von Sondermaschinen",
    subtitle: "Konstruktion · SPS · Inbetriebnahme",
    desc: "Von der Idee bis zur schlüsselfertigen Anlage: Wir entwickeln und fertigen vollständige Sondermaschinen für anspruchsvollste Fertigungsaufgaben – weltweit einsatzbereit.",
    href: "/leistungen/entwicklung-sondermaschinen",
    img: "/sonder-maschinenbau-c3482bd2.webp",
    specs: ["Entwicklung & Konstruktion", "SPS-Steuerung & Pneumatik", "Inbetriebnahme weltweit", "CE-Dokumentation"],
  },
  {
    title: "Präzisionsfertigung",
    subtitle: "CNC-Drehen · Fräsen · Schleifen",
    desc: "Hochpräzise Bearbeitung von Einzelteilen und Kleinserien auf modernen CNC-Maschinen – für Toleranzen im Mikrometerbereich.",
    href: "/leistungen/praezisionsfertigung",
    img: "/bild2-27805c5e.webp",
    specs: ["CNC-Drehen & Fräsen", "Kleinserien & Einzelteile", "Mikrometergenauigkeit", "Verschiedene Werkstoffe"],
  },
  {
    title: "Lohnarbeit",
    subtitle: "Fertigung · Montage · Baugruppen",
    desc: "Flexible Lohnfertigung für externe Auftraggeber – von der Einzelkomponente bis zur kompletten Baugruppe, termingerecht und in gleichbleibender Qualität.",
    href: "/leistungen/lohnarbeit",
    img: "/Verkettung-e7d2d599.webp",
    specs: ["Einzelteile & Baugruppen", "Flexible Losgrößen", "Termingerechte Lieferung", "Qualitätssicherung"],
  },
  {
    title: "Service & Wartung",
    subtitle: "Reparatur · Umbau · Support",
    desc: "Schneller Service vor Ort oder im Werk: Reparatur, Umbau und Wartung Ihrer Anlagen – auch für Maschinen anderer Hersteller.",
    href: "/leistungen/service",
    img: "/Tastpinole-b1f40afb.webp",
    specs: ["Reparatur & Umbau", "Wartungsverträge", "Ersatzteilservice", "Auch Fremdmaschinen"],
  },
];

export default function LeistungenUebersichtPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge="Leistungen · Ernst Maschinenbau GmbH"
        title="Unsere Leistungen"
        subtitle="Sondermaschinenbau, Präzisionsfertigung, Lohnarbeit und Service – alles aus einer Hand in Neidenstein."
        imageSrc="/sonder-maschinenbau-c3482bd2.webp"
        breadcrumbs={[{ label: "Leistungen" }]}
      />

      <section style={{ background: "#f5f5f7", padding: "72px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)", display: "flex", flexDirection: "column", gap: 20 }}>
          {leistungen.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className={`reveal delay-${Math.min(i * 100, 300)}`}
              style={{
                display: "grid",
                gridTemplateColumns: "340px 1fr",
                borderRadius: 20,
                overflow: "hidden",
                textDecoration: "none",
                background: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                transition: "box-shadow 0.25s cubic-bezier(0.22,1,0.36,1), transform 0.25s cubic-bezier(0.22,1,0.36,1), border-color 0.25s",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 12px 40px rgba(0,0,0,0.1)";
                el.style.transform = "translateY(-3px)";
                el.style.borderColor = "rgba(28,110,52,0.2)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                el.style.transform = "translateY(0)";
                el.style.borderColor = "rgba(0,0,0,0.06)";
              }}
            >
              {/* Bild */}
              <div style={{ position: "relative", overflow: "hidden", minHeight: 220 }}>
                <Image src={asset(l.img)} alt={l.title} fill sizes="340px" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#1c6e34", zIndex: 2 }} />
              </div>

              {/* Inhalt */}
              <div style={{ padding: "32px 36px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ marginBottom: 12 }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 6 }}>
                    {l.subtitle}
                  </p>
                  <h2 style={{ fontSize: "clamp(1.2rem,1.8vw,1.6rem)", fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.025em", lineHeight: 1.2 }}>
                    {l.title}
                  </h2>
                </div>

                <p style={{ fontSize: 14.5, color: "#424245", lineHeight: 1.7, marginBottom: 20, maxWidth: 540 }}>
                  {l.desc}
                </p>

                <div style={{ height: 1, background: "rgba(0,0,0,0.06)", marginBottom: 16 }} />

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 32px" }}>
                    {l.specs.map(s => (
                      <span key={s} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: "#6e6e73" }}>
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#1c6e34", flexShrink: 0 }} />
                        {s}
                      </span>
                    ))}
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#1c6e34", flexShrink: 0, whiteSpace: "nowrap" }}>
                    Mehr erfahren
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Produkte", description: "Dichtigkeitsprüfung, Wiegesysteme, Förderbänder und mehr aus dem Hause Ernst.", href: "/produkte", icon: "produkte" },
        { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns und unseren Maschinenpark kennen.", href: "/unternehmen", icon: "unternehmen" },
        { title: "Kontakt aufnehmen", description: "Anfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
