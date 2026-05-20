"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import { asset } from "@/lib/assetPath";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

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

export default function KontaktPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const k = dict.kontakt;

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const required = lang === "de" ? "Pflichtfelder" : "Required fields";

  return (
    <>
      <PageHero
        badge={`${k.hero.eyebrow} · Ernst Maschinenbau GmbH`}
        title={k.hero.title}
        subtitle={k.hero.subtitle}
        imageSrc="/besprechung_1.jpg"
        breadcrumbs={[{ label: k.hero.eyebrow }]}
        height={320}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 32, alignItems: "start" }} className="two-col-stack">

            <div className="reveal-left" style={{ background: "#fff", borderRadius: 20, padding: "40px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 8 }}>{k.form.title}</h2>
              <p style={{ fontSize: 13, color: "#6e6e73", marginBottom: 28 }}>{k.form.intro}</p>
              <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col-stack">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>{k.form.name} *</label>
                    <input type="text" style={inputStyle} placeholder={k.form.name}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>{k.form.company}</label>
                    <input type="text" style={inputStyle} placeholder={k.form.company}
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="two-col-stack">
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>{k.form.email} *</label>
                    <input type="email" style={inputStyle} placeholder="name@email.com"
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>{k.form.phone}</label>
                    <input type="tel" style={inputStyle} placeholder="+49 ..."
                      onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                      onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "#424245", marginBottom: 6 }}>{k.form.message} *</label>
                  <textarea rows={5} style={{ ...inputStyle, resize: "none" as const }} placeholder={k.form.message}
                    onFocus={e => { (e.target as HTMLElement).style.borderColor = "#1c6e34"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(28,110,52,0.1)"; }}
                    onBlur={e => { (e.target as HTMLElement).style.borderColor = "rgba(0,0,0,0.12)"; (e.target as HTMLElement).style.boxShadow = "none"; }}
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
                  <p style={{ fontSize: 11, color: "#6e6e73" }}>* {required}</p>
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
                    {k.form.send}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                  </button>
                </div>
                <p style={{ fontSize: 11, color: "#6e6e73", marginTop: 4 }}>{k.form.privacy}</p>
              </form>
            </div>

            <div className="reveal-right" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ background: "#0c1a30", borderRadius: 20, padding: "32px", color: "#fff" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2a8d4a", marginBottom: 16 }}>{k.cards.addressTitle}</p>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Ernst Maschinenbau GmbH</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>
                  {k.cards.addressLine1}<br />{k.cards.addressLine2}<br />{k.cards.addressLine3}
                </p>
                <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:+4972639199-0" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(28,110,52,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="#2a8d4a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    </div>
                    {k.cards.phoneValue}
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.5)" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 6 12 13 2 6"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    </div>
                    {dict.common.fax}: {k.cards.faxValue}
                  </div>
                  <a href="mailto:info@ernstmaschinen.de" style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.8)", textDecoration: "none" }}>
                    <div style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(28,110,52,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" fill="none" stroke="#2a8d4a" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    {k.cards.emailValue}
                  </a>
                </div>
                <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 6 }}>{k.cards.hoursTitle}</p>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)" }}>{k.cards.hoursValue}</p>
                </div>
              </div>

              <div style={{ background: "#fff", borderRadius: 20, padding: "28px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 20 }}>
                  {lang === "de" ? "Direkte Ansprechpartner" : "Direct contacts"}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[
                    { name: "Martin Ernst", title: lang === "de" ? "Geschäftsführer · Maschinenbaumeister" : "Managing Director · Master Mechanical Engineer", email: "martin.ernst@ernstmaschinen.de", img: "/martin_ernst.jpg" },
                    { name: "Armin Ernst Dipl. Ing. (FH)", title: lang === "de" ? "Geschäftsführer" : "Managing Director", email: "armin.ernst@ernstmaschinen.de", img: "/armin_ernst.jpg" },
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
                </div>
              </div>

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
