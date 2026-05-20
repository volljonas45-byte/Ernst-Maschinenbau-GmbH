"use client";

import { use, useEffect } from "react";
import Link from "@/components/LocalizedLink";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumbJobs: string; crumbSelf: string };
  intro: { p1: string; p2Pre: string; p2Date: string; p2Post: string };
  aufgabenTitle: string;
  aufgaben: string[];
  anforderungenTitle: string;
  anforderungen: string[];
  cta: { eyebrow: string; headline: string; body: string };
  contactBoxTitle: string;
  backLabel: string;
  related: { title: string; description: string; href: string; icon: "karriere" | "unternehmen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Karriere · Ausbildung", title: "Azubi Feinwerkmechaniker (m/w/d)", subtitle: "Starte deine Ausbildung in einem erfolgreichen Familienbetrieb mit internationalem Umfeld und modernem Maschinenpark.", crumbJobs: "Stellenangebote", crumbSelf: "Azubi Feinwerkmechaniker" },
    intro: { p1: "Als Hersteller von Sondermaschinen sind wir als Familienunternehmen seit über 60 Jahren international erfolgreich am Markt.", p2Pre: "Zur Verstärkung unseres Teams suchen wir ab dem ", p2Date: "01. September 2024", p2Post: " einen Auszubildenden zum Feinwerkmechaniker (m/w/d)." },
    aufgabenTitle: "Was erwartet dich",
    aufgaben: [
      "Fertigung von Einzelteilen und Komponenten bis hin zum Zusammenbau zu Maschinen und Anlagen",
      "Lesen und Anwenden technischer Zeichnungen",
      "Zerspanende Bearbeitung von Bauteilen",
      "Sofortige Eingliederung in den Produktionsprozess",
      "Arbeit an verschiedenen Bearbeitungscentren (auch in Sondergröße)",
    ],
    anforderungenTitle: "Das bringst du mit",
    anforderungen: [
      "Mindestens einen guten Hauptschulabschluss",
      "Begeisterung für Werkzeuge und Maschinen",
      "Technisches Verständnis und handwerkliches Geschick",
      "Sorgfalt, Genauigkeit & Zuverlässigkeit",
      "Teamfähigkeit",
    ],
    cta: { eyebrow: "Bewerbung", headline: "Haben wir dein Interesse geweckt?", body: "Dann sende deine Bewerbung per Mail an uns. Wir freuen uns auf dich!" },
    contactBoxTitle: "Kontakt",
    backLabel: "Zurück zur Übersicht",
    related: [
      { title: "Elektrotechniker (m/w/d)", description: "Weitere offene Stelle in unserem Team.", href: "/stellenangebote/elektrotechniker", icon: "karriere" },
      { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns kennen.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Kontakt", description: "Direkt Kontakt aufnehmen oder Bewerbung senden.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Careers · Apprenticeship", title: "Apprentice precision mechanic (m/f/d)", subtitle: "Start your apprenticeship in a successful family business with an international setting and modern machine park.", crumbJobs: "Careers", crumbSelf: "Apprentice precision mechanic" },
    intro: { p1: "As a manufacturer of custom machinery, we have been a successful family business on the international market for over 60 years.", p2Pre: "To strengthen our team we are looking for an apprentice precision mechanic (m/f/d) starting on ", p2Date: "01 September 2024", p2Post: "." },
    aufgabenTitle: "What awaits you",
    aufgaben: [
      "Manufacturing single parts and components through to assembling them into machines and systems",
      "Reading and applying technical drawings",
      "Machining of components",
      "Immediate integration into the production process",
      "Work at various machining centres (including in special sizes)",
    ],
    anforderungenTitle: "What you bring",
    anforderungen: [
      "At least a good lower secondary school certificate (Hauptschulabschluss)",
      "Enthusiasm for tools and machines",
      "Technical understanding and manual skill",
      "Care, accuracy & reliability",
      "Team spirit",
    ],
    cta: { eyebrow: "Application", headline: "Have we caught your interest?", body: "Then send us your application by email. We look forward to hearing from you!" },
    contactBoxTitle: "Contact",
    backLabel: "Back to overview",
    related: [
      { title: "Electrical engineer (m/f/d)", description: "Another open position in our team.", href: "/stellenangebote/elektrotechniker", icon: "karriere" },
      { title: "About us", description: "Family business since 1965 — get to know us.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Contact", description: "Get in touch directly or send your application.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function AzubiFeinwerkmechanikerPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

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
        badge={c.hero.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageSrc="/stellenangebote-e14feb92.webp"
        breadcrumbs={[{ label: c.hero.crumbJobs, href: "/stellenangebote" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "72px 0 48px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ maxWidth: 720 }}>
            <p className="reveal" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, marginBottom: 12 }}>
              {c.intro.p1}
            </p>
            <p className="reveal delay-100" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, marginBottom: 20 }}>
              {c.intro.p2Pre}<strong style={{ color: "#1c6e34" }}>{c.intro.p2Date}</strong>{c.intro.p2Post}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "56px 0 72px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="two-col-stack">
            <div className="reveal-left" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.aufgabenTitle}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.aufgaben.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.anforderungenTitle}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.anforderungen.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <svg style={{ flexShrink: 0, marginTop: 3 }} width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#1c6e34", padding: "72px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>{c.cta.eyebrow}</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.2vw,2rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#fff", marginBottom: 16, lineHeight: 1.2 }}>
                {c.cta.headline}
              </h2>
              <p style={{ fontSize: 15.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.75, marginBottom: 24 }}>
                {c.cta.body}
              </p>
              <a href="mailto:info@ernstmaschinen.de" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "#fff", color: "#1c6e34",
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
              <p style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14 }}>{c.contactBoxTitle}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>Ernst Maschinenbau GmbH</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>Industriestrasse 1A</p>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>74933 Neidenstein</p>
              <a href="tel:+4972639199-0" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.9)", textDecoration: "none", marginBottom: 4 }}>+49 (0)7263 / 9199-0</a>
              <a href="mailto:info@ernstmaschinen.de" style={{ display: "block", fontSize: 14, color: "rgba(255,255,255,0.9)", textDecoration: "none" }}>info@ernstmaschinen.de</a>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#fff", padding: "40px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <Link href="/stellenangebote" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontSize: 14, fontWeight: 600, color: "#1c6e34", textDecoration: "none",
          }}>
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            {c.backLabel}
          </Link>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
