"use client";

import { useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { asset } from "@/lib/assetPath";

const inputStyle = {
  width: "100%",
  border: "1px solid rgba(0,0,0,0.12)",
  borderRadius: 10,
  padding: "11px 14px",
  fontSize: 14,
  color: "#1d1d1f",
  background: "#fafafa",
  outline: "none",
  transition: "border-color 0.2s, box-shadow 0.2s",
  boxSizing: "border-box" as const,
};

export default function KontaktPage() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge="Kontakt · Ernst Maschinenbau GmbH"
        title="Sprechen Sie uns an"
        subtitle="Wir beraten Sie gerne zu Ihrem Projekt – persönlich, direkt und auf Augenhöhe."
        imageSrc="/besprechung_1.jpg"
        breadcrumbs={[{ label: "Kontakt" }]}
        height={320}
      />

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 32, alignItems: "start" }} className="two-col-stack">

            {/* Formular */}
            <div className="reveal-left" style={{ background: "#fff", borderRadius: 20, padding: "40px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 28 }}>Kontaktformular</h2>
              <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col-stack">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>Name *</label>
                    <input type="text" style={inputStyle} placeholder="Ihr Name"
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>Firma</label>
                    <input type="text" style={inputStyle} placeholder="Ihre Firma"
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col-stack">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>E-Mail *</label>
                    <input type="email" style={inputStyle} placeholder="ihre@email.de"
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>Telefon</label>
                    <input type="tel" style={inputStyle} placeholder="+49 ..."
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>Nachricht *</label>
                  <textarea rows={5} style={{ ...inputStyle, resize: "none" as const }} placeholder="Wie können wir Ihnen helfen?"
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <p style={{ fontSize: 11, color: "#6e6e73" }}>* Pflichtfelder</p>
                  <button type="submit" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#1c6e34", color: "#fff",
                    padding: "12px 28px", borderRadius: 999,
                    fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(28,110,52,0.3)",
                    transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#155228"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "#1c6e34"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
                  >
                    Nachricht senden
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </button>
                </div>
              </form>
            </div>

            {/* Kontaktinfos */}
            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Adresse */}
              <div style={{ background: "#0c1a30", borderRadius: 20, padding: "32px", color: "#fff" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 16 }}>Anschrift</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Ernst Maschinenbau GmbH</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                  Industriestrasse 1A<br />74933 Neidenstein<br />Deutschland
                </p>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:+4972639199-0" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(28,110,52,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="#2a8d4a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    +49 (0)7263 / 9199-0
                  </a>
                  <p style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 6 12 13 2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </div>
                    Fax: +49 (0)7263 / 9199-29
                  </p>
                  <a href="mailto:info@ernstmaschinen.de" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(28,110,52,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="#2a8d4a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    info@ernstmaschinen.de
                  </a>
                </div>
              </div>

              {/* Ansprechpartner */}
              <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 20 }}>Direkte Ansprechpartner</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { name: "Martin Ernst", title: "Geschäftsführer · Maschinenbaumeister", email: "martin.ernst@ernstmaschinen.de", img: "/martin_ernst.jpg" },
                    { name: "Armin Ernst Dipl. Ing. (FH)", title: "Geschäftsführer", email: "armin.ernst@ernstmaschinen.de", img: "/armin_ernst.jpg" },
                  ].map(p => (
                    <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px", background: "#f5f5f7", borderRadius: 14 }}>
                      <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0, position: "relative", border: "2px solid rgba(28,110,52,0.15)" }}>
                        <Image src={asset(p.img)} alt={p.name} fill style={{ objectFit: "cover" }} />
                      </div>
                      <div style={{ minWidth: 0 }}>
                        <p style={{ fontSize: 14, fontWeight: 700, color: "#1d1d1f", marginBottom: 2 }}>{p.name}</p>
                        <p style={{ fontSize: 12, color: "#6e6e73", marginBottom: 6 }}>{p.title}</p>
                        <a href={`mailto:${p.email}`} style={{ fontSize: 12, color: "#1c6e34", textDecoration: "none", fontWeight: 500 }}>{p.email}</a>
                      </div>
                    </div>
                  ))}
                  <a href="tel:+4972639199-0" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#424245", textDecoration: "none", paddingTop: 4 }}>
                    <svg width="13" height="13" fill="none" stroke="#1c6e34" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    Telefon: 07263 / 9199-0
                  </a>
                </div>
              </div>

              {/* Map */}
              <div style={{ borderRadius: 20, overflow: "hidden", background: "#e8e8ed", height: 220, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.5!2d8.8956!3d49.2436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797bc1b1b1b1b1b%3A0x0!2sIndustriestrasse+1A%2C+74933+Neidenstein!5e0!3m2!1sde!2sde!4v1620000000000!5m2!1sde!2sde"
                  width="100%"
                  height="220"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ernst Maschinenbau GmbH Standort"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
