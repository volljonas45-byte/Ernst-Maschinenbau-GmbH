"use client";

import { useEffect } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";

const stellen = [
  {
    title: "Azubi Feinwerkmechaniker (m/w/d)",
    href: "/stellenangebote/azubi-feinwerkmechaniker",
    beschreibung: "Ausbildung zum Feinwerkmechaniker in unserem Familienbetrieb – von der Fertigung bis zum Maschinenbau.",
    badge: "Ausbildung · ab 01.09.2024",
    punkte: ["Fertigung & CNC-Bearbeitung", "Technische Zeichnungen", "Sofortige Eingliederung"],
  },
  {
    title: "Elektrotechniker (m/w/d)",
    href: "/stellenangebote/elektrotechniker",
    beschreibung: "Verstärkung für unser Team zur Montage von Baugruppen und Sondermaschinen.",
    badge: "Festanstellung · Unbefristet",
    punkte: ["Schaltplanerstellung (EPLAN)", "Schaltschrankbau", "S7-Kenntnisse von Vorteil"],
  },
];

export default function StellenangebotePage() {
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
        badge="Karriere · Ernst Maschinenbau GmbH"
        title="Wir suchen Verstärkung!"
        subtitle="Familienunternehmen mit internationalem Umfeld, modernem Maschinenpark und echten Entwicklungschancen."
        imageSrc="/stellenangebote-e14feb92.webp"
        breadcrumbs={[{ label: "Stellenangebote" }]}
      />

      {/* Intro */}
      <section style={{ background: "#fff", padding: "72px 0 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="two-col-stack">
            <div className="reveal">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1a8a3c", marginBottom: 12 }}>Offene Stellen</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", lineHeight: 1.2 }}>
                {stellen.length} offene Positionen
              </h2>
            </div>
            <p className="reveal delay-100" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, paddingTop: 4 }}>
              Als Hersteller von Sondermaschinen sind wir als Familienunternehmen seit über 60 Jahren international erfolgreich am Markt. Zur Verstärkung unseres Teams suchen wir motivierte Fachkräfte und Auszubildende.
            </p>
          </div>
        </div>
      </section>

      {/* Stellenangebote Cards */}
      <section style={{ background: "#f5f5f7", padding: "48px 0 80px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {stellen.map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`reveal-scale delay-${i * 100}`}
                style={{
                  display: "block",
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  borderRadius: 18,
                  padding: "32px",
                  textDecoration: "none",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
                  transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(-6px)";
                  el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.1)";
                  el.style.borderColor = "rgba(26,138,60,0.3)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.05)";
                  el.style.borderColor = "rgba(0,0,0,0.06)";
                }}
              >
                <span style={{
                  display: "inline-block", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#1a8a3c", background: "rgba(26,138,60,0.08)",
                  borderRadius: 999, padding: "4px 12px", marginBottom: 18,
                }}>
                  {s.badge}
                </span>
                <h2 style={{ fontSize: "clamp(1.1rem,1.6vw,1.3rem)", fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 10 }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.6, marginBottom: 20 }}>{s.beschreibung}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.punkte.map(p => (
                    <li key={p} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#424245" }}>
                      <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#1a8a3c" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#1a8a3c" }}>
                  Mehr erfahren
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={[
        { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns kennen.", href: "/unternehmen", icon: "unternehmen" },
        { title: "Maschinenpark", description: "Moderne CNC-Maschinen, an denen Sie arbeiten werden.", href: "/unternehmen/maschinenpark", icon: "unternehmen" },
        { title: "Kontakt aufnehmen", description: "Bewerben Sie sich direkt bei uns.", href: "/kontakt", icon: "kontakt" },
      ]} />
    </>
  );
}
