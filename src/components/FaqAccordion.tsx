"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            style={{
              borderRadius: 16,
              border: `1.5px solid ${isOpen ? "#1c6e34" : "rgba(0,0,0,0.08)"}`,
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
              <span style={{ fontSize: 15, fontWeight: 600, color: isOpen ? "#1c6e34" : "#1d1d1f", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
                {faq.q}
              </span>
              <span style={{
                width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                background: isOpen ? "#1c6e34" : "rgba(0,0,0,0.06)",
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
              maxHeight: isOpen ? 320 : 0,
              overflow: "hidden",
              transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: "#424245", padding: "0 22px 20px", borderTop: "1px solid rgba(28,110,52,0.12)", paddingTop: 14 }}>
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
