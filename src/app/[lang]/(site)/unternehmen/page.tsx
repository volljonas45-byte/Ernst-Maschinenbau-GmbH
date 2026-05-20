"use client";

import { use, useEffect } from "react";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { asset } from "@/lib/assetPath";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumb: string };
  intro: { eyebrow: string; headline: string; p1: string; p2: string };
  stats: { num: string; lbl: string }[];
  managerTitle: string;
  historyEyebrow: string;
  historyHeadline: string;
  historieSteps: { year: string; title: string; text: string; img: string | null }[];
  teaserCta: string;
  teaser: { title: string; desc: string; href: string; img: string }[];
  related: { title: string; description: string; href: string; icon: "leistungen" | "produkte" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Unternehmen · Ernst Maschinenbau GmbH", title: "Familienunternehmen mit über 60 Jahren Erfahrung", subtitle: "Seit 1965 entwickeln und fertigen wir Sondermaschinen und Präzisionsbauteile für Kunden auf der ganzen Welt.", crumb: "Über uns" },
    intro: { eyebrow: "Über uns", headline: "Leistungsfähig. Innovativ. Verlässlich.", p1: "Die Firma Ernst Maschinenbau GmbH hat seit ihrem Bestehen eine beispielhafte Entwicklung erfahren, die durch unternehmerische Tatkraft und Innovationsfreude gekennzeichnet ist. Jahrelange, vertrauensvolle Zusammenarbeit mit unseren Kunden ist bis auf den heutigen Tag die Basis der anhaltend positiven Entwicklung.", p2: "Als leistungsfähiger Betrieb im Maschinen- und Werkzeugbau setzen wir immer wieder neue Maßstäbe. Herausforderungen annehmen und Lösungen auch außerhalb eingefahrener Wege zu finden ist gängige Praxis." },
    stats: [
      { num: "60+", lbl: "Jahre Erfahrung" },
      { num: "500+", lbl: "Sondermaschinen" },
      { num: "50+", lbl: "Länder weltweit" },
    ],
    managerTitle: "Geschäftsführer",
    historyEyebrow: "Geschichte",
    historyHeadline: "Über 60 Jahre Unternehmensgeschichte",
    historieSteps: [
      { year: "1965", title: "Gründung", text: "Grundsteinlegung durch Günter Ernst. Die Firma Gebrüder Ernst entstand als familiengeführter Präzisionsbetrieb in Neidenstein.", img: "/historie_firmengebaeude_1975-1.jpg" },
      { year: "2000", title: "GmbH-Gründung & Gebäudeerweiterung", text: "Umfirmierung zur Ernst Maschinenbau GmbH. Martin Ernst stieg als Maschinenbaumeister ein. Die Produktionsfläche wurde erstmals deutlich erweitert.", img: "/historie_gebauederweiterung_2000-1.jpg" },
      { year: "2003", title: "Verstärkung der Entwicklung", text: "Armin Ernst trat nach erfolgreichem Studium als Dipl.-Ing. in den Maschinenbaubetrieb ein und stärkte die Entwicklungsabteilung.", img: null },
      { year: "2008", title: "Anbau Bürogebäude", text: "Erweiterung des Firmenstandorts um einen modernen Bürotrakt für Konstruktion, Verwaltung und Kundenkontakt.", img: "/historie_anbau_buero_2008-1-535d7904.jpg" },
      { year: "2011", title: "Große Hallenerweiterung", text: "Erweiterung der Produktionshalle – die Fertigungsfläche mehr als verdoppelt, um der wachsenden internationalen Nachfrage gerecht zu werden.", img: "/historie_anbau_halle_2011-1-a83d324a.jpg" },
      { year: "2017", title: "Moderner Firmenstandort", text: "Der Standort Neidenstein präsentiert sich mit modernem Fuhrpark, gewachsener Belegschaft und internationaler Ausrichtung.", img: "/historie_gebaeude-2017-f05e2047.jpg" },
      { year: "2020", title: "Übernahme Steffes-Lieferprogramm", text: "Übernahme des gesamten Steffes-Lieferprogramms und Ausbau des Produktportfolios um weitere Systemlösungen.", img: null },
      { year: "Heute", title: "Weltweiter Einsatz", text: "Über 500 Sondermaschinen im Einsatz – in mehr als 50 Ländern. Ernst Maschinenbau steht für Verlässlichkeit, Präzision und Innovation.", img: null },
    ],
    teaserCta: "Mehr erfahren",
    teaser: [
      { title: "Maschinenpark", desc: "Moderne CNC-Fräs- und Drehmaschinen für höchste Präzision.", href: "/unternehmen/maschinenpark", img: "/bild2-27805c5e.webp" },
      { title: "Produktbeispiele", desc: "Einblick in realisierte Projekte aus verschiedenen Branchen.", href: "/unternehmen/produktbeispiele", img: "/produktbeispiele-c7c56065.jpg" },
    ],
    related: [
      { title: "Leistungen", description: "Sondermaschinenbau, Präzisionsfertigung, Lohnarbeit und Service aus einer Hand.", href: "/leistungen", icon: "leistungen" },
      { title: "Produkte", description: "Dichtigkeitsprüfung, Wiegesysteme, Förderbänder und mehr aus dem Hause Ernst.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Kontakt", description: "Sprechen Sie uns an – wir beraten Sie gerne zu Ihrem Projekt.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Company · Ernst Maschinenbau GmbH", title: "Family business with over 60 years of experience", subtitle: "Since 1965 we have developed and built custom machinery and precision components for customers around the world.", crumb: "About us" },
    intro: { eyebrow: "About us", headline: "Capable. Innovative. Reliable.", p1: "Ernst Maschinenbau GmbH has undergone exemplary development since its founding — driven by entrepreneurial energy and a passion for innovation. Many years of trustful cooperation with our customers remain, to this day, the basis for our continued positive development.", p2: "As a high-performance company in machine and tool construction, we continuously set new standards. Taking on challenges and finding solutions outside the beaten path is part of our daily routine." },
    stats: [
      { num: "60+", lbl: "Years of experience" },
      { num: "500+", lbl: "Custom machines" },
      { num: "50+", lbl: "Countries worldwide" },
    ],
    managerTitle: "Managing Director",
    historyEyebrow: "History",
    historyHeadline: "Over 60 years of company history",
    historieSteps: [
      { year: "1965", title: "Founding", text: "The foundation stone laid by Günter Ernst. The Gebrüder Ernst company was created as a family-run precision workshop in Neidenstein.", img: "/historie_firmengebaeude_1975-1.jpg" },
      { year: "2000", title: "GmbH founding & building extension", text: "Renamed Ernst Maschinenbau GmbH. Martin Ernst joined as a master mechanical engineer. The production area was significantly expanded for the first time.", img: "/historie_gebauederweiterung_2000-1.jpg" },
      { year: "2003", title: "Reinforcement of the engineering team", text: "Armin Ernst, holding a Dipl.-Ing. degree, joined the engineering company and strengthened the engineering department.", img: null },
      { year: "2008", title: "Office building extension", text: "Expansion of the company site with a modern office wing for engineering, administration and customer contact.", img: "/historie_anbau_buero_2008-1-535d7904.jpg" },
      { year: "2011", title: "Major hall extension", text: "Expansion of the production hall — the manufacturing area more than doubled to meet growing international demand.", img: "/historie_anbau_halle_2011-1-a83d324a.jpg" },
      { year: "2017", title: "Modern company site", text: "The Neidenstein location presents itself with a modern vehicle fleet, a grown workforce and international orientation.", img: "/historie_gebaeude-2017-f05e2047.jpg" },
      { year: "2020", title: "Takeover of the Steffes product range", text: "Takeover of the entire Steffes product range and expansion of the product portfolio with additional system solutions.", img: null },
      { year: "Today", title: "Worldwide use", text: "More than 500 custom machines in operation — in over 50 countries. Ernst Maschinenbau stands for reliability, precision and innovation.", img: null },
    ],
    teaserCta: "Learn more",
    teaser: [
      { title: "Machine park", desc: "Modern CNC milling and turning machines for maximum precision.", href: "/unternehmen/maschinenpark", img: "/bild2-27805c5e.webp" },
      { title: "Product examples", desc: "A look at realised projects from various industries.", href: "/unternehmen/produktbeispiele", img: "/produktbeispiele-c7c56065.jpg" },
    ],
    related: [
      { title: "Services", description: "Custom machinery, precision manufacturing, contract work and service from a single source.", href: "/leistungen", icon: "leistungen" },
      { title: "Products", description: "Leak testing, weighing systems, conveyor belts and more from Ernst.", href: "/produkte/dichtigkeitspruefung", icon: "produkte" },
      { title: "Contact", description: "Get in touch — we're happy to advise you on your project.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

export default function UnternehmenPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { (e.target as HTMLElement).classList.add("visible"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageHero
        badge={c.hero.badge}
        title={c.hero.title}
        subtitle={c.hero.subtitle}
        imageSrc="/besprechung_1.jpg"
        breadcrumbs={[{ label: c.hero.crumb }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="two-col-stack">
            <div className="reveal-left">
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 14 }}>
                {c.intro.eyebrow}
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 24, lineHeight: 1.15 }}>
                {c.intro.headline}
              </h2>
              <p style={{ fontSize: 16, color: "#424245", lineHeight: 1.75, marginBottom: 16 }}>
                {c.intro.p1}
              </p>
              <p style={{ fontSize: 16, color: "#424245", lineHeight: 1.75 }}>
                {c.intro.p2}
              </p>
              <div style={{ display: "flex", gap: 40, marginTop: 36 }}>
                {c.stats.map((s) => (
                  <div key={s.lbl}>
                    <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#1c6e34", letterSpacing: "-0.04em" }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: "#6e6e73", marginTop: 2 }}>{s.lbl}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <div style={{ gridColumn: "1 / -1", borderRadius: 16, overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
                <Image src={asset("/besprechung_1.jpg")} alt="Ernst Maschinenbau management" fill style={{ objectFit: "cover" }} />
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                <Image src={asset("/armin_ernst.jpg")} alt="Armin Ernst" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "24px 14px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>Armin Ernst</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", margin: 0 }}>{c.managerTitle}</p>
                </div>
              </div>
              <div style={{ borderRadius: 12, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                <Image src={asset("/martin_ernst.jpg")} alt="Martin Ernst" fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent, rgba(0,0,0,0.7))", padding: "24px 14px 12px" }}>
                  <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>Martin Ernst</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", margin: 0 }}>{c.managerTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1c6e34", marginBottom: 12 }}>{c.historyEyebrow}</p>
          <h2 className="reveal delay-100" style={{ fontSize: "clamp(1.6rem,2.8vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#1d1d1f", marginBottom: 56, lineHeight: 1.15 }}>
            {c.historyHeadline}
          </h2>

          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 19, top: 8, bottom: 8, width: 2, background: "linear-gradient(to bottom, rgba(28,110,52,0.15), rgba(28,110,52,0.5) 50%, rgba(28,110,52,0.15))" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {c.historieSteps.map((step, i) => {
                const isLast = i === c.historieSteps.length - 1;
                return (
                  <div key={step.year} className={`reveal delay-${Math.min(i * 100, 500)}`} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
                    <div style={{ flexShrink: 0, width: 40, display: "flex", justifyContent: "center", paddingTop: 2 }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: "50%",
                        background: isLast ? "#1c6e34" : "#fff",
                        border: `2px solid ${isLast ? "#1c6e34" : "rgba(0,0,0,0.12)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        boxShadow: isLast ? "0 0 0 5px rgba(28,110,52,0.15)" : "0 1px 6px rgba(0,0,0,0.08)",
                        position: "relative", zIndex: 1,
                      }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: isLast ? "#fff" : "#1c6e34" }} />
                      </div>
                    </div>

                    <div style={{
                      flex: 1,
                      background: "#fff",
                      borderRadius: 16,
                      border: "1px solid rgba(0,0,0,0.06)",
                      overflow: "hidden",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    }}>
                      {step.img && (
                        <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                          <Image src={asset(step.img)} alt={step.title} fill sizes="(max-width: 768px) 100vw, 860px" style={{ objectFit: "cover", objectPosition: "center" }} quality={90} />
                          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent 60%)" }} />
                        </div>
                      )}
                      <div style={{ padding: "22px 26px" }}>
                        <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff", background: "#1c6e34", borderRadius: 999, padding: "3px 12px", marginBottom: 12 }}>
                          {step.year}
                        </span>
                        <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1d1d1f", letterSpacing: "-0.02em", marginBottom: 8 }}>
                          {step.title}
                        </h3>
                        <p style={{ fontSize: 14, color: "#6e6e73", lineHeight: 1.65 }}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="two-col-stack">
            {c.teaser.map((card, i) => (
              <a key={card.href} href={`/${lang}${card.href}/`} className={`reveal-scale delay-${i * 100}`} style={{
                display: "block", position: "relative", borderRadius: 18, overflow: "hidden",
                aspectRatio: "16/9", textDecoration: "none",
                boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
                transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1)",
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = "translateY(0)"}
              >
                <Image src={asset(card.img)} alt={card.title} fill style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 30%, rgba(12,26,48,0.8))" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 6, letterSpacing: "-0.02em" }}>{card.title}</h3>
                  <p style={{ fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{card.desc}</p>
                  <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#2a8d4a" }}>
                    {c.teaserCta}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
