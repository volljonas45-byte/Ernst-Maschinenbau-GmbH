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
  intro: { p1: string; p2Pre: string; p2Role: string; p2Post: string };
  aufgabenTitle: string;
  aufgaben: string[];
  anforderungenTitle: string;
  anforderungen: string[];
  benefitsTitle: string;
  benefits: string[];
  cta: { eyebrow: string; headline: string; body: string };
  contactBoxTitle: string;
  backLabel: string;
  related: { title: string; description: string; href: string; icon: "karriere" | "unternehmen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Karriere · Festanstellung", title: "Elektrotechniker (m/w/d)", subtitle: "Verstärkung für unser Team zur Montage von Baugruppen und Sondermaschinen – unbefristet, mit Entwicklungsperspektive.", crumbJobs: "Stellenangebote", crumbSelf: "Elektrotechniker" },
    intro: { p1: "Als Hersteller von Sondermaschinen sind wir als Familienunternehmen seit über 60 Jahren international erfolgreich am Markt.", p2Pre: "Zur Verstärkung unseres Teams suchen wir einen ", p2Role: "Elektrotechniker (m/w/d)", p2Post: " zur Montage von Baugruppen und Sondermaschinen." },
    aufgabenTitle: "Ihre Aufgabenbereiche",
    aufgaben: [
      "Erstellen von Schaltplänen mit EPLAN-Software",
      "Installation von elektrischen Anlagen und Maschinen",
      "Verdrahtung von Schaltschränken, elektrischen Anlagen und Maschinen",
      "Überprüfung von Maschinen und Betriebsmitteln auf Funktionstüchtigkeit und Betriebssicherheit",
    ],
    anforderungenTitle: "Das zeichnet Sie aus",
    anforderungen: [
      "Erfolgreich abgeschlossene Berufsausbildung zum Elektroniker",
      "Kenntnisse im Schaltschrankbau",
      "Selbstständiges Erstellen von Schaltplänen",
      "Selbstständiges Planen von Steuerungen (Arbeitsabläufe)",
      "Grundkenntnisse in computerunterstützter Schaltplanerstellung",
      "Grundkenntnisse in S7-Programmierung von Vorteil",
    ],
    benefitsTitle: "Wir bieten Ihnen",
    benefits: [
      "Abwechslungsreiches und anspruchsvolles Aufgabengebiet",
      "Spannende Projekte in einem erfahrenen und motivierten Team",
      "Rahmenbedingungen eines innovativen und erfolgreichen Unternehmens",
      "Unbefristetes Arbeitsverhältnis mit besten Chancen für persönliche Entwicklung",
    ],
    cta: { eyebrow: "Bewerbung", headline: "Haben wir Ihr Interesse geweckt?", body: "Dann senden Sie uns Ihre Bewerbung per Mail. Wir freuen uns auf Sie!" },
    contactBoxTitle: "Kontakt",
    backLabel: "Zurück zur Übersicht",
    related: [
      { title: "Azubi Feinwerkmechaniker", description: "Weitere offene Stelle in unserem Team.", href: "/stellenangebote/azubi-feinwerkmechaniker", icon: "karriere" },
      { title: "Über uns", description: "Familienunternehmen seit 1965 – lernen Sie uns kennen.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Kontakt", description: "Direkt Kontakt aufnehmen oder Bewerbung senden.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Careers · Permanent position", title: "Electrical engineer (m/f/d)", subtitle: "Reinforcement for our team in the assembly of sub-assemblies and custom machines — permanent, with room for growth.", crumbJobs: "Careers", crumbSelf: "Electrical engineer" },
    intro: { p1: "As a manufacturer of custom machinery, we have been a successful family business on the international market for over 60 years.", p2Pre: "To strengthen our team we are looking for an ", p2Role: "electrical engineer (m/f/d)", p2Post: " to assemble sub-assemblies and custom machines." },
    aufgabenTitle: "Your responsibilities",
    aufgaben: [
      "Creating circuit diagrams with EPLAN software",
      "Installation of electrical systems and machines",
      "Wiring of control cabinets, electrical systems and machines",
      "Inspection of machines and equipment for functionality and operational safety",
    ],
    anforderungenTitle: "What sets you apart",
    anforderungen: [
      "Successfully completed apprenticeship as an electronics technician",
      "Knowledge of control cabinet construction",
      "Independent creation of circuit diagrams",
      "Independent planning of control systems (workflows)",
      "Basic skills in computer-aided circuit diagram creation",
      "Basic knowledge of Siemens S7 programming is a plus",
    ],
    benefitsTitle: "What we offer",
    benefits: [
      "A varied and demanding range of tasks",
      "Exciting projects in an experienced and motivated team",
      "The framework of an innovative and successful company",
      "Permanent employment with the best opportunities for personal development",
    ],
    cta: { eyebrow: "Application", headline: "Have we caught your interest?", body: "Then send us your application by email. We look forward to hearing from you!" },
    contactBoxTitle: "Contact",
    backLabel: "Back to overview",
    related: [
      { title: "Apprentice precision mechanic", description: "Another open position in our team.", href: "/stellenangebote/azubi-feinwerkmechaniker", icon: "karriere" },
      { title: "About us", description: "Family business since 1965 — get to know us.", href: "/unternehmen", icon: "unternehmen" },
      { title: "Contact", description: "Get in touch directly or send your application.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function ElektrotechnikerPage({ params }: { params: Promise<{ lang: string }> }) {
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
            <p className="reveal delay-100" style={{ fontSize: 16, color: "#424245", lineHeight: 1.75 }}>
              {c.intro.p2Pre}<strong style={{ color: "#1c6e34" }}>{c.intro.p2Role}</strong>{c.intro.p2Post}
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "56px 0 56px" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="two-col-stack">
            <div className="reveal-left" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="8" y="3" width="8" height="4" rx="1"/><path d="M16 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"/><path d="M9 14l2 2 4-4"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.aufgabenTitle}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.aufgaben.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1, width: 18, height: 18, borderRadius: "50%", background: "#e9f1ec", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ background: "#fff", borderRadius: 18, padding: "32px", border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.anforderungenTitle}</h2>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.anforderungen.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <span style={{ flexShrink: 0, marginTop: 1, width: 18, height: 18, borderRadius: "50%", background: "#e9f1ec", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#1c6e34" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                    <p style={{ fontSize: 14, color: "#424245", lineHeight: 1.55 }}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal" style={{ background: "#0c1a30", borderRadius: 18, padding: "32px", marginTop: 24 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(42,141,74,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" fill="none" stroke="#2a8d4a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>
              </div>
              <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: "-0.02em" }}>{c.benefitsTitle}</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {c.benefits.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 1, width: 18, height: 18, borderRadius: "50%", background: "rgba(42,141,74,0.18)", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="11" height="11" fill="none" viewBox="0 0 24 24" stroke="#5fce82" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.55 }}>{b}</p>
                </div>
              ))}
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
