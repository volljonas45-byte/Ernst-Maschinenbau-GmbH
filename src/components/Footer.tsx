"use client";

import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/assetPath";

const quickLinks = [
  { label: "Über Ernst Maschinenbau", href: "/unternehmen" },
  { label: "Unsere Produkte",         href: "/produkte" },
  { label: "Engineering-Leistungen",  href: "/leistungen" },
  { label: "Produktbeispiele",        href: "/unternehmen/produktbeispiele" },
  { label: "Stellenangebote",         href: "/stellenangebote" },
];

const leistungLinks = [
  { label: "Sondermaschinenbau",   href: "/leistungen/entwicklung-sondermaschinen" },
  { label: "Präzisionsfertigung",  href: "/leistungen/praezisionsfertigung" },
  { label: "Lohnfertigung",        href: "/leistungen/lohnarbeit" },
  { label: "Service & Wartung",    href: "/leistungen/service" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#0c1a30", color: "#fff", backgroundImage: "none", isolation: "isolate", overflow: "hidden", position: "relative", zIndex: 0 }}>

      {/* Main grid */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "clamp(56px,7vw,96px) clamp(16px,3vw,48px) clamp(40px,5vw,64px)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "clamp(36px,5vw,64px)" }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{ display: "inline-block", textDecoration: "none", marginBottom: 20, background: "#fff", borderRadius: 8, padding: "6px 10px" }}>
              <Image src={asset("/EMB_logo.png")} alt="Ernst Maschinenbau GmbH" width={120} height={40} style={{ objectFit: "contain", display: "block", height: 36, width: "auto" }} />
            </Link>
            <p style={{ fontSize: 13, lineHeight: 1.75, color: "rgba(255,255,255,0.45)", marginBottom: 24, maxWidth: 240 }}>
              Führend in industrieller Präzision und Engineering-Exzellenz seit über sechs Jahrzehnten. Ihr verlässlicher Partner im globalen Maschinenbau.
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: 8 }}>
              {[
                { href: "https://linkedin.com", label: "LinkedIn", d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", fill: true },
                { href: "mailto:info@ernstmaschinen.de", label: "E-Mail", d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", fill: false },
              ].map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.4)", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#1a8a3c"; (e.currentTarget as HTMLElement).style.color = "#4ade80"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)"; }}
                >
                  <svg width="14" height="14" fill={s.fill ? "currentColor" : "none"} stroke={s.fill ? "none" : "currentColor"} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d={s.d}/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>Quick Links</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.18s" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>Leistungen</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {leistungLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.18s" }}
                    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#fff"}
                    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)"}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 18 }}>Kontakt</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg style={{ flexShrink: 0, marginTop: 1 }} width="15" height="15" fill="none" stroke="#1a8a3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>Industriestrasse 1A<br/>74933 Neidenstein</span>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg style={{ flexShrink: 0 }} width="15" height="15" fill="none" stroke="#1a8a3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@ernstmaschinen.de"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#4ade80"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >info@ernstmaschinen.de</a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <svg style={{ flexShrink: 0 }} width="15" height="15" fill="none" stroke="#1a8a3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+4972639199-0"
                  style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", textDecoration: "none", transition: "color 0.18s" }}
                  onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#4ade80"}
                  onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"}
                >+49 7263 / 9199-0</a>
              </li>
            </ul>

            {/* CTA */}
            <Link href="/kontakt"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 24, fontSize: 13, fontWeight: 600, color: "#fff", background: "#1a8a3c", borderRadius: 999, padding: "9px 18px", textDecoration: "none", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#146830"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "#1a8a3c"}
            >
              Kontakt aufnehmen
              <svg width="12" height="12" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "20px clamp(16px,3vw,48px)", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.25)", fontWeight: 500 }}>
            © {new Date().getFullYear()} Ernst Maschinenbau GmbH · Alle Rechte vorbehalten
          </p>
          <div style={{ display: "flex", gap: 28 }}>
            {[
              { label: "Datenschutz", href: "/datenschutz" },
              { label: "Impressum",   href: "/impressum" },
              { label: "Kontakt",     href: "/kontakt" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)", textDecoration: "none", transition: "color 0.18s" }}
                onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)"}
                onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.25)"}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
