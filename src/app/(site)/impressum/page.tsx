"use client";

export default function ImpressumPage() {
  return (
    <div style={{ background: "#f5f5f7", minHeight: "60vh", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>

        {/* Minimal header */}
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 10 }}>Rechtliches</p>
        <h1 style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 48, lineHeight: 1.15 }}>Impressum</h1>

        <div style={{ background: "#fff", borderRadius: 18, padding: "40px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: 32 }}>

          <div>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Angaben gemäß § 5 TMG</h2>
            <p style={{ fontSize: 15, color: "#1d1d1f", fontWeight: 600, marginBottom: 4 }}>Ernst Maschinenbau GmbH</p>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.7 }}>Industriestrasse 1A<br />74933 Neidenstein</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Kontakt</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.8 }}>
              Telefon: +49 (0)7263 / 9199-0<br />
              Telefax: +49 (0)7263 / 9199-29<br />
              E-Mail:{" "}
              <a href="mailto:info@ernstmaschinen.de" style={{ color: "#1c6e34", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.textDecoration = "underline"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.textDecoration = "none"}
              >info@ernstmaschinen.de</a>
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Geschäftsführer</h2>
            <p style={{ fontSize: 14, color: "#424245" }}>Martin Ernst, Armin Ernst</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Registereintrag</h2>
            <p style={{ fontSize: 14, color: "#424245" }}>Eintragung im Handelsregister.</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Umsatzsteuer-ID</h2>
            <p style={{ fontSize: 14, color: "#424245" }}>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: bitte erfragen</p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>Haftungsausschluss</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75 }}>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
