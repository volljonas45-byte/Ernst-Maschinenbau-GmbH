"use client";

import { useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

const aufgaben = [
  "Erstellen von Schaltplänen mit EPLAN-Software",
  "Installation von elektrischen Anlagen und Maschinen",
  "Verdrahtung von Schaltschränken, elektrischen Anlagen und Maschinen",
  "Überprüfung von Maschinen und Betriebsmitteln auf Funktionstüchtigkeit und Betriebssicherheit",
];

const anforderungen = [
  "Erfolgreich abgeschlossene Berufsausbildung zum Elektroniker",
  "Kenntnisse im Schaltschrankbau",
  "Selbstständiges Erstellen von Schaltplänen",
  "Selbstständiges Planen von Steuerungen (Arbeitsabläufe)",
  "Grundkenntnisse in computerunterstützter Schaltplanerstellung",
  "Grundkenntnisse in S7-Programmierung von Vorteil",
];

const benefits = [
  "Abwechslungsreiches und anspruchsvolles Aufgabengebiet",
  "Spannende Projekte in einem erfahrenen und motivierten Team",
  "Rahmenbedingungen eines innovativen und erfolgreichen Unternehmens",
  "Unbefristetes Arbeitsverhältnis mit besten Chancen für persönliche Entwicklung",
];

export default function ElektrotechnikerPage() {
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
        badge="Karriere · Festanstellung"
        title="Elektrotechniker (m/w/d)"
        subtitle="Verstärkung für unser Team zur Montage von Baugruppen und Sondermaschinen – unbefristet, mit Entwicklungsperspektive."
        imageSrc="/stellenangebote-e14feb92.webp"
        breadcrumbs={[{ label: "Stellenangebote", href: "/stellenangebote" }, { label: "Elektrotechniker" }]}
      />

      {/* Einleitung */}
      <section style={{ background: "#fff", padding: "72px 0 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ maxWidth: 720 }}>
            <p className="reveal" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, marginBottom: 12 }}>
              Als Hersteller von Sondermaschinen sind wir als Familienunternehmen seit über 60 Jahren international erfolgreich am Markt.
            </p>
            <p className="reveal delay-100" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75 }}>
              Zur Verstärkung unseres Teams suchen wir einen <strong style={{ color: "#1a8a3c" }}>Elektrotechniker (m/w/d)</strong> zur Montage von Baugruppen und Sondermaschinen.
            </p>
          </div>
        </div>
      </section>

      {/* Aufgaben + Anforderungen */}
      <section style={{ background: "#f5f5f7", padding: "56px 0 56px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="two-col-stack">
            <div className="reveal-left" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(26,138,60,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1a8a3c" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>Ihre Aufgabenbereiche</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {aufgaben.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1a8a3c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(26,138,60,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1a8a3c" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>Das zeichnet Sie aus</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {anforderungen.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1a8a3c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="reveal" style={{ background: "#0c1a30", borderRadius: 18, padding: "32px", marginTop: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(34,197,94,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" fill="none" stroke="#22c55e" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>Wir bieten Ihnen</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#22c55e" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt CTA */}
      <section style={{ background: "#1a8a3c", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>Bewerbung</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
                Haben wir Ihr Interesse geweckt?
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 24 }}>
                Dann senden Sie uns Ihre Bewerbung per Mail. Wir freuen uns auf Sie!
              </p>
              <a href="mailto:info@ernstmaschinen.de" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: "#1a8a3c",
                padding: "12px 24px", borderRadius: 999,
                fontSize: 14, fontWeight: 700, textDecoration: "none",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "scale(1)"}
              >
                info@ernstmaschinen.de
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>
            <div className="reveal-right" style={{ background: "rgba(255,255,255,0.1)", borderRadius: 16, padding: "28px 28px" }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>Kontakt</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Ernst Maschinenbau GmbH</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>Industriestrasse 1A</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>74933 Neidenstein</p>
              <a href="tel:+4972639199-0" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.9)", textDecoration: "none", marginBottom: 4 }}>+49 (0)7263 / 9199-0</a>
              <a href="mailto:info@ernstmaschinen.de" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>info@ernstmaschinen.de</a>
            </div>
          </div>
        </div>
      </section>

      {/* Zurück-Button */}
      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <Link href="/stellenangebote" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 600, color: "#1a8a3c", textDecoration: "none",
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            Zurück zur Übersicht
          </Link>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Azubi Feinwerkmechaniker", description: "Weitere offene Stelle in unserem Team.", href: "/stellenangebote/azubi-feinwerkmechaniker", icon: "karriere" },
        { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns kennen.", href: "/unternehmen", icon: "unternehmen" },
        { title: "Kontakt", description: "Direkt Kontakt aufnehmen oder Bewerbung senden.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
