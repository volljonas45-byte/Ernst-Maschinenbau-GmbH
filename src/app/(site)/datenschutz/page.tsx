"use client";

export default function DatenschutzPage() {
  return (
    <div style={{ background: "#f5f5f7", minHeight: "60vh", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>

        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 10 }}>Rechtliches</p>
        <h1 style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 48, lineHeight: 1.15 }}>Datenschutzerklärung</h1>

        <div style={{ background: "#fff", borderRadius: 18, padding: "40px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: 32 }}>

          <div>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>1. Datenschutz auf einen Blick</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75 }}>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>2. Verantwortliche Stelle</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75 }}>
              Ernst Maschinenbau GmbH<br />
              Industriestrasse 1A, 74933 Neidenstein<br />
              E-Mail:{" "}
              <a href="mailto:info@ernstmaschinen.de" style={{ color: "#1c6e34", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.textDecoration = "underline"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.textDecoration = "none"}
              >info@ernstmaschinen.de</a>
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>3. Datenerfassung auf unserer Website</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75, marginBottom: 12 }}>
              <strong style={{ color: "#1d1d1f" }}>Cookies:</strong> Unsere Internetseiten verwenden so genannte „Cookies". Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren.
            </p>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75 }}>
              <strong style={{ color: "#1d1d1f" }}>Kontaktformular:</strong> Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </div>

          <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>4. Ihre Rechte</h2>
            <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75 }}>
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
