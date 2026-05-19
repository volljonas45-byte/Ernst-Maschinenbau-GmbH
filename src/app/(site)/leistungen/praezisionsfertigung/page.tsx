"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

const sektionen = [
  {
    badge: "Maschinenbau",
    title: "Ausgebildete Fachkräfte für höchste Präzision",
    text: "Ausgebildete Fachkräfte an unseren Bearbeitungsmaschinen garantieren das Optimum an Präzision. Jedes Teil wird mit größter Sorgfalt gefertigt und kontrolliert.",
    img: "/bild2-27805c5e.webp",
    dark: false,
  },
  {
    badge: "Präzisionsfertigung",
    title: "Flexibler Maschinenpark, enge Toleranzen",
    text: null,
    textNode: (
      <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
        Ein flexibler, leistungsfähiger{" "}
        <Link href="/unternehmen/maschinenpark" style={{ color: "#22c55e", textDecoration: "none", borderBottom: "1px solid rgba(34,197,94,0.4)" }}>
          Maschinenpark
        </Link>{" "}
        von hoher Kapazität ermöglicht die Einhaltung notwendiger Fertigungstoleranzen – auch bei komplexen Bauteilen mit anspruchsvoller Geometrie.
      </p>
    ),
    img: "/sonder-maschinenbau-c3482bd2.webp",
    dark: true,
  },
];

const qualitaet = [
  "Hochwertige Messtechnik für präzise Qualitätskontrolle",
  "Versiertes und qualifiziertes Fachpersonal",
  "Qualitative Vorgaben bereits in der Konstruktionsphase",
  "Regelmäßige Kontrollen über den gesamten Produktionsprozess",
  "Strenge Überwachung aller Fertigungsschritte",
];

export default function PraezisionsfertigungPage() {
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
        badge="Leistungen · Präzisionsfertigung"
        title="Präzisionsfertigung"
        subtitle="Höchste Fertigungstoleranzen durch qualifizierte Fachkräfte, modernen Maschinenpark und lückenlose Qualitätssicherung."
        imageSrc="/bild2-27805c5e.webp"
        breadcrumbs={[{ label: "Leistungen", href: "/leistungen/entwicklung-sondermaschinen" }, { label: "Präzisionsfertigung" }]}
      />

      {/* Sektion 1 – hell */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Maschinenbau</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Ausgebildete Fachkräfte für höchste Präzision
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Ausgebildete Fachkräfte an unseren Bearbeitungsmaschinen garantieren das Optimum an Präzision. Jedes Teil wird mit größter Sorgfalt gefertigt und kontrolliert.
              </p>
            </div>
            <div className="reveal-right" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src="/bild2-27805c5e.webp" alt="Präzisionsfertigung" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Sektion 2 – dunkel */}
      <section style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src="/sonder-maschinenbau-c3482bd2.webp" alt="Maschinenpark" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="reveal-right">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#22c55e", marginBottom: 12 }}>Präzisionsfertigung</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>
                Flexibler Maschinenpark, enge Toleranzen
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.75 }}>
                Ein flexibler, leistungsfähiger{" "}
                <Link href="/unternehmen/maschinenpark" style={{ color: "#22c55e", textDecoration: "none", borderBottom: "1px solid rgba(34,197,94,0.4)" }}>
                  Maschinenpark
                </Link>{" "}
                von hoher Kapazität ermöglicht die Einhaltung notwendiger Fertigungstoleranzen – auch bei komplexen Bauteilen mit anspruchsvoller Geometrie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualitätssicherung */}
      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Qualitätssicherung</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Qualität von Anfang an – nicht erst am Ende
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 14 }}>
                Hochwertige Messtechnik und qualifiziertes Personal sichern den hohen Qualitätsstandard. Die Qualitätssicherung beginnt bereits bei der Konstruktion – jedem Teil werden qualitative Vorgaben mitgegeben.
              </p>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75 }}>
                Durch strenge regelmäßige Kontrollen über den gesamten Produktionsprozess wird die Einhaltung ständig überwacht.
              </p>
            </div>
            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {qualitaet.map((q, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", borderRadius: 12, padding: "14px 18px", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <svg style={{ flexShrink: 0, marginTop: 2 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1a8a3c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.5 }}>{q}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Maschinenpark", description: "Einblick in unsere CNC-Fräs- und Drehmaschinen.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
        { title: "Lohnarbeit", description: "Nutzen Sie unsere Kapazitäten für Ihre Fertigungsaufträge.", href: "/leistungen/lohnarbeit", icon: "leistungen" },
        { title: "Kontakt aufnehmen", description: "Projektanfrage stellen oder Beratungstermin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
