"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Was macht die Ernst Maschinenbau GmbH?",
    a: "Wir entwickeln und fertigen Sondermaschinen, Präzisionsteile und komplette Maschinensysteme für internationale Industriekunden. Als Familienunternehmen seit 1965 verbinden wir langjährige Erfahrung mit modernster Fertigungstechnologie.",
  },
  {
    q: "Für welche Branchen fertigt Ernst Maschinenbau?",
    a: "Wir bedienen eine breite Palette von Branchen: Automobilindustrie, Pharmaindustrie, Chemieindustrie, Verpackungstechnik, Holzbearbeitung, Kunststoffindustrie, Metallverarbeitung und Automatisierungstechnik.",
  },
  {
    q: "Ist Ernst Maschinenbau auch international tätig?",
    a: "Ja. Wir produzieren und liefern für Kunden auf der ganzen Welt. Unsere Maschinen und Produkte werden in über 50 Ländern eingesetzt – ein Ergebnis jahrzehntelanger internationaler Projekterfahrung.",
  },
  {
    q: "Was sind die Steffes Dichtigkeitsprüfanlagen?",
    a: "Im Februar 2020 hat die Ernst Maschinenbau GmbH alle Rechte an der Produktion, dem Vertrieb und dem Service für das gesamte Lieferprogramm der STEFFES Dichtigkeitsprüfanlagen übernommen. Diese Prüfgeräte werden in der Pharma-, Automobil- und Chemieindustrie eingesetzt.",
  },
  {
    q: "Wie kann ich Kontakt aufnehmen oder ein Angebot anfragen?",
    a: "Nutzen Sie unser Kontaktformular oder erreichen Sie uns direkt per Telefon unter +49 (0)7263 / 9199-0 oder per E-Mail an info@ernstmaschinen.de. Wir melden uns zeitnah bei Ihnen.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: 16,
              border: `1.5px solid ${isOpen ? "#1a8a3c" : "rgba(0,0,0,0.08)"}`,
              background: isOpen ? "#f0faf4" : "#fff",
              overflow: "hidden",
              transition: "border-color 0.2s, background 0.2s",
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "18px 22px",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span style={{ fontSize: 15, fontWeight: 600, color: isOpen ? "#1a8a3c" : "#1d1d1f", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                {faq.q}
              </span>
              <span style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: isOpen ? "#1a8a3c" : "rgba(0,0,0,0.06)",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s, transform 0.3s cubic-bezier(0.22,1,0.36,1)",
                transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1v10M1 6h10" stroke={isOpen ? "#fff" : "#6e6e73"} strokeWidth={1.8} strokeLinecap="round"/>
                </svg>
              </span>
            </button>

            <div style={{
              maxHeight: isOpen ? 300 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#424245", padding: "0 22px 20px", borderTop: "1px solid rgba(26,138,60,0.12)", paddingTop: 14 }}>
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
