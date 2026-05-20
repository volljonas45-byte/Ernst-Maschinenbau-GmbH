"use client";

import { use } from "react";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

export default function DatenschutzPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang as Locale);
  const d = dict.datenschutz;

  const sections: Array<{ title: string; body: string }> = [
    { title: d.sections.intro, body: d.sections.introBody },
    { title: d.sections.controller, body: d.sections.controllerBody },
    { title: d.sections.data, body: d.sections.dataBody },
    { title: d.sections.contactForm, body: d.sections.contactFormBody },
    { title: d.sections.cookies, body: d.sections.cookiesBody },
    { title: d.sections.rights, body: d.sections.rightsBody },
  ];

  return (
    <div style={{ background: "#f5f5f7", minHeight: "60vh", padding: "80px 0" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 10 }}>
          {lang === "de" ? "Rechtliches" : "Legal"}
        </p>
        <h1 style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 48, lineHeight: 1.15 }}>{d.title}</h1>

        <div style={{ background: "#fff", borderRadius: 18, padding: "40px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)", display: "flex", flexDirection: "column", gap: 32 }}>
          {sections.map((s, idx) => (
            <div key={s.title} style={idx === 0 ? {} : { borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 28 }}>
              <h2 style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6e6e73", marginBottom: 10 }}>{s.title}</h2>
              <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.75, whiteSpace: "pre-line" }}>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
