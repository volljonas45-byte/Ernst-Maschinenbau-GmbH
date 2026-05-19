"use client";

import { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";

const leistungen = [
  {
    title: "Maschinenservice (Instandsetzung)",
    desc: "Schnelle und professionelle Reparatur – minimale Ausfallzeiten für Ihre Produktion.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "Wartung & Inspektion",
    desc: "Regelmäßige Wartung sichert Langlebigkeit und verhindert kostspielige Ausfälle.",
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
      </svg>
    ),
  },
];

export default function ServicePage() {
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
        badge="Leistungen · Service"
        title="Individueller Service ist besser"
        subtitle="Ausführliche Beratung, schnelle Instandsetzung und regelmäßige Wartung – für minimale Ausfallzeiten in Ihrer Produktion."
        imageSrc="/service-2.jpg"
        breadcrumbs={[{ label: "Leistungen", href: "/leistungen" }, { label: "Service" }]}
      />

      {/* Intro */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Unser Ansatz</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 20, lineHeight: 1.2 }}>
                Allgemeiner Service ist gut.<br />Individueller Service ist besser.
              </h2>
              <p style={{ fontSize: 15.5, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                Dazu gehört eine ausführliche Beratung als Grundlage einer fairen, intensiven Zusammenarbeit. Wir kennen unsere Maschinen – und sorgen dafür, dass sie auch nach Jahren noch zuverlässig laufen.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 24 }}>
                {leistungen.map((l) => (
                  <div key={l.title} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(26,138,60,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: "#1a8a3c", flexShrink: 0 }}>
                      {l.icon}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: 4 }}>{l.title}</h3>
                      <p style={{ fontSize: 13.5, color: "#6e6e73", lineHeight: 1.55 }}>{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", position: "relative" }}>
              <Image src={asset("/service-2.jpg")} alt="Service Ernst Maschinenbau" fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA dunkel */}
      <section style={{ background: "#0c1a30", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)", textAlign: "center" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#22c55e", marginBottom: 16 }}>Service anfragen</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.4rem,2.5vw,2.2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 16 }}>
            Wartung oder Reparatur nötig?
          </h2>
          <p className="reveal delay-200" style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            Kontaktieren Sie uns direkt – wir finden schnell eine Lösung für Ihre Maschine.
          </p>
          <a href="/kontakt" className="reveal delay-300 btn-pill btn-green" style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none" }}>
            Jetzt Kontakt aufnehmen
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Sondermaschinenbau", description: "Entwicklung und Konstruktion maßgeschneiderter Sondermaschinen.", href: "/leistungen/entwicklung-sondermaschinen", icon: "leistungen" },
        { title: "Präzisionsfertigung", description: "Höchste Fertigungstoleranzen durch qualifizierte Fachkräfte.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
        { title: "Kontakt aufnehmen", description: "Service-Anfrage stellen oder Termin vereinbaren.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
