"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import FaqAccordion from "@/components/FaqAccordion";

/* ════════════════════════════════════════════════════════════════
   HOOKS
════════════════════════════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function useCountUp(target: number, trigger: boolean, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, trigger, duration]);
  return val;
}

/* ════════════════════════════════════════════════════════════════
   ICONS
════════════════════════════════════════════════════════════════ */
const IconArrow = ({ size = 16, color = "currentColor" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconCheck = () => (
  <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
    <circle cx="9" cy="9" r="9" fill="#e8f5ee"/>
    <path d="M5.5 9.5l2.5 2.5 4.5-5" stroke="#1a8a3c" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconGear = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
    <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
  </svg>
);

/* ════════════════════════════════════════════════════════════════
   DATA
════════════════════════════════════════════════════════════════ */
const heroSlides = [
  { src: "/besprechung_1.jpg",                 pos: "center center" },
  { src: "/Download.jpg",                       pos: "center 40%"   },
  { src: "/sonder-maschinenbau-c3482bd2.webp", pos: "center center" },
  { src: "/Download (1).jpg",                   pos: "center 60%"   },
  { src: "/service-2.jpg",                      pos: "center center" },
  { src: "/produktbeispiele-c7c56065.jpg",      pos: "center center" },
];

const branchen = [
  "Automobilindustrie","Pharmaindustrie","Medizintechnik","Luft- & Raumfahrt",
  "Chemie & Petrochemie","Maschinenbau","Energietechnik","Elektronik",
  "Lebensmittelindustrie","Verpackungstechnik",
];

const produkte = [
  {
    title: "Dichtigkeitsprüfung",
    sub: "Druckabfall · Differenzdruck · Durchfluss",
    body: "Voll- und teilautomatische Prüfanlagen für Flaschen, Kanister, Fässer und Großbehälter — vom 5‑ml-Augentropfenfläschchen bis zum 5.000-l-Wasserbehälter.",
    img: "/35331_19_04-BZ-000-3-c82b16ed.webp",
    href: "/produkte/dichtigkeitspruefung",
    tags: ["Pharma","Automobil","Chemie"],
  },
  {
    title: "Wiegesysteme",
    sub: "Hochpräzise Wägetechnik",
    body: "Industrielle Wiegesysteme für vollautomatische Produktionslinien. Präzise, robust und auf Ihre Prozesse abgestimmt.",
    img: "/Musteroberflaeche-Waage-e2e9f6b5.webp",
    href: "/produkte/wiegesysteme",
    tags: ["Lebensmittel","Pharma","Logistik"],
  },
  {
    title: "Sammelstationen",
    sub: "Automatisierte Verkettung",
    body: "Automatisierte Sammel- und Verkettungssysteme für moderne Produktionslinien — zuverlässig, wartungsarm und skalierbar.",
    img: "/S-AST-T-T-a71bdadb.webp",
    href: "/produkte/sammelstationen",
    tags: ["Automobil","Industrie"],
  },
  {
    title: "Förderbänder",
    sub: "Robuste Fördertechnik",
    body: "Maßgeschneiderte Förderbänder für jeden Einsatzbereich — von der Einzelkomponente bis zur vollverketteten Linie.",
    img: "/S-B-50-100-2950-SO-d5251ddc.webp",
    href: "/produkte/foerderbaender",
    tags: ["Alle Branchen"],
  },
  {
    title: "Systemergänzungen",
    sub: "Tastpinole · Kamera · Daten",
    body: "Tastpinolen, Kamerasysteme, Datenausgabe und weitere Optionen — einzeln nachrüstbar für maximale Flexibilität.",
    img: "/Tastpinole-b1f40afb.webp",
    href: "/produkte/systemergaenzungen",
    tags: ["Modular","Nachrüstbar"],
  },
];

const leistungen = [
  {
    num: "01", id: "sondermaschinen",
    title: "Sondermaschinenbau",
    sub: "Von der Idee zur Serienanlage",
    body: "Wir entwickeln vollständige Sondermaschinen für anspruchsvollste Fertigungsaufgaben — von der Konzeptentwicklung bis zur schlüsselfertigen Inbetriebnahme weltweit.",
    points: ["Entwicklung & Konstruktion aus einer Hand","SPS-Steuerung, Pneumatik, Hydraulik","Inbetriebnahme vor Ort weltweit","Vollständige CE-Dokumentation"],
    href: "/leistungen/entwicklung-sondermaschinen",
    img: "/sonder-maschinenbau-c3482bd2.webp",
    accent: "#1a8a3c",
  },
  {
    num: "02", id: "praezision",
    title: "Präzisionsfertigung",
    sub: "CNC-Bearbeitung auf höchstem Niveau",
    body: "Modernste CNC-Dreh- und Fräszentren erlauben Toleranzen im Mikrometerbereich. Ob Einzelteil oder Kleinserie — wir fertigen Bauteile für anspruchsvollste Anwendungen.",
    points: ["CNC-Drehen, Fräsen, Schleifen","Toleranzen bis IT5","Stahl, Edelstahl, Aluminium, Kunststoff","3D-Messtechnik und Prüfprotokoll"],
    href: "/leistungen/praezisionsfertigung",
    img: "/produktbeispiele-c7c56065.jpg",
    accent: "#0f6b2e",
  },
  {
    num: "03", id: "lohnarbeit",
    title: "Lohnfertigung",
    sub: "Ihr flexibler Fertigungspartner",
    body: "Als Lohnfertiger übernehmen wir Ihre Fertigungsaufgaben — zuverlässig, termingerecht und in reproduzierbarer Qualität. Drehen, Fräsen, Rundschleifen — alles aus einer Hand.",
    points: ["Drehteile bis ø 500 mm","Frästeile bis 1.000 × 600 mm","Rundschleifarbeiten","Einzelstück bis Serie"],
    href: "/leistungen/lohnarbeit",
    img: "/produktbeispiele2-798a9da0.webp",
    accent: "#146830",
  },
  {
    num: "04", id: "service",
    title: "Service & Wartung",
    sub: "Maximale Verfügbarkeit Ihrer Anlagen",
    body: "Schneller Reaktionsdienst, präventive Wartungspläne und kompetente Instandsetzung halten Ihre Produktion am Laufen — wir kennen unsere Maschinen in- und auswendig.",
    points: ["Wartungsverträge & Inspektionspläne","Schnelle Reaktionszeiten","Ersatzteilversorgung","Retrofit und Modernisierung"],
    href: "/leistungen/service",
    img: "/service-2.jpg",
    accent: "#1a8a3c",
  },
];

const timeline = [
  { year: "1965", event: "Gründung als Gebrüder Ernst in Neidenstein" },
  { year: "2000", event: "Umfirmierung zur Ernst Maschinenbau GmbH" },
  { year: "2003", event: "Armin Ernst verstärkt die Entwicklungsabteilung" },
  { year: "2011", event: "Große Erweiterung der Produktionshalle" },
  { year: "2020", event: "Übernahme des Steffes-Lieferprogramms" },
  { year: "Heute", event: "500+ Sondermaschinen in 50+ Ländern weltweit" },
];

/* ════════════════════════════════════════════════════════════════
   HERO CAROUSEL
════════════════════════════════════════════════════════════════ */
const FADE_MS = 1800;
const HOLD_MS = 6000;

function HeroCarousel() {
  const [current, setCurrent]     = useState(0);
  const [next, setNext]           = useState<number | null>(null);
  const [crossfading, setCrossfading] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (idx === current || crossfading) return;
    setNext(idx);
    requestAnimationFrame(() => requestAnimationFrame(() => setCrossfading(true)));
    setTimeout(() => { setCurrent(idx); setNext(null); setCrossfading(false); }, FADE_MS);
  }, [current, crossfading]);

  useEffect(() => {
    const t = setInterval(() => goTo((current + 1) % heroSlides.length), HOLD_MS + FADE_MS);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <>
      <Image key={`base-${current}`} src={heroSlides[current].src} alt="Ernst Maschinenbau" fill priority={current === 0}
        style={{ objectFit: "cover", objectPosition: heroSlides[current].pos, zIndex: 1 }} sizes="100vw" />
      {next !== null && (
        <Image key={`next-${next}`} src={heroSlides[next].src} alt="" fill
          style={{ objectFit: "cover", objectPosition: heroSlides[next].pos, zIndex: 2, opacity: crossfading ? 1 : 0, transition: `opacity ${FADE_MS}ms cubic-bezier(0.4,0,0.2,1)` }}
          sizes="100vw" />
      )}
      <div style={{ position: "absolute", top: "clamp(16px,3vw,28px)", right: "clamp(16px,3vw,28px)", display: "flex", gap: 6, zIndex: 20 }}>
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} aria-label={`Slide ${i + 1}`}
            style={{ width: current === i ? 20 : 6, height: 6, borderRadius: 999, border: "none", cursor: "pointer", background: current === i ? "#fff" : "rgba(255,255,255,0.4)", padding: 0, transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)" }} />
        ))}
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════
   STAT COUNTER
════════════════════════════════════════════════════════════════ */
function StatCounter({ value, suffix, trigger }: { value: number; suffix: string; label: string; trigger: boolean }) {
  const n = useCountUp(value, trigger);
  return <>{n}{suffix}</>;
}

/* ════════════════════════════════════════════════════════════════
   PAGE
════════════════════════════════════════════════════════════════ */
export default function Home() {
  const statsRef     = useRef<HTMLDivElement>(null);
  const [statsOn, setStatsOn] = useState(false);
  const kennzahlenRef = useReveal(0.2);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsOn(true); }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right,.reveal-scale").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ══════════════════════════════════════════════════════
          §1  HERO
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", paddingTop: 20 }}>
        <div style={{ maxWidth: "min(1600px,100%)", margin: "0 auto", padding: "0 clamp(12px,2vw,20px)" }}>
          <div style={{ position: "relative", borderRadius: "clamp(20px,3vw,44px)", overflow: "hidden", height: "clamp(520px,60vw,760px)" }}>
            <HeroCarousel />
            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg,rgba(6,14,26,0.90) 0%,rgba(6,14,26,0.65) 45%,rgba(6,14,26,0.22) 100%)", zIndex: 3, pointerEvents: "none" }} />

            {/* Headline */}
            <div style={{ position: "absolute", top: "clamp(40px,7vw,88px)", left: "clamp(28px,5vw,64px)", maxWidth: "clamp(300px,48%,620px)", zIndex: 10 }}>
              <p className="reveal" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "#22c55e", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                Ernst Maschinenbau GmbH · Seit 1965
              </p>
              <h1 className="reveal delay-100" style={{ fontSize: "clamp(2rem,4.6vw,4.4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.08, color: "#fff" }}>
                Sondermaschinen<br/>
                <span style={{ color: "#22c55e" }}>und </span>Präzisionsfertigung
              </h1>
              <p className="reveal delay-200" style={{ marginTop: "clamp(14px,2vw,24px)", fontSize: "clamp(14px,1.4vw,16px)", lineHeight: 1.75, color: "rgba(255,255,255,0.58)", maxWidth: 420 }}>
                Familienunternehmen aus dem Kraichgau —<br/>international tätig in über 50 Ländern.
              </p>
              <div className="reveal delay-300" style={{ marginTop: "clamp(24px,3vw,40px)", display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/leistungen" className="btn-pill btn-green" style={{ fontSize: "clamp(13px,1.2vw,15px)" }}>Leistungen entdecken <IconArrow color="#fff" /></Link>
                <Link href="/kontakt" className="btn-pill" style={{ fontSize: "clamp(13px,1.2vw,15px)", background: "rgba(255,255,255,0.10)", color: "#fff", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.18)" }}>Kontakt aufnehmen</Link>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div ref={statsRef} className="reveal delay-400"
              style={{ position: "absolute", bottom: "clamp(20px,3vw,40px)", left: "clamp(16px,3vw,36px)", right: "clamp(16px,3vw,36px)", zIndex: 10 }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "rgba(255,255,255,0.10)", backdropFilter: "blur(20px) saturate(160%)", WebkitBackdropFilter: "blur(20px) saturate(160%)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 20, overflow: "hidden" }}>
                {[
                  { v: 60,  s: "+", l: "Jahre Erfahrung",  sub: "Seit 1965" },
                  { v: 500, s: "+", l: "Sondermaschinen",  sub: "Weltweit geliefert" },
                  { v: 50,  s: "+", l: "Länder weltweit",  sub: "Export & Service" },
                ].map((st, i) => (
                  <div key={st.l} style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ flex: 1, textAlign: "center", padding: "clamp(16px,2vw,24px) clamp(8px,1.5vw,16px)" }}>
                      <div style={{ fontSize: "clamp(1.6rem,3.2vw,2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.04em", lineHeight: 1 }}>
                        <StatCounter value={st.v} suffix={st.s} label="" trigger={statsOn} />
                      </div>
                      <div style={{ marginTop: 6, fontSize: "clamp(12px,1.1vw,14px)", fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{st.l}</div>
                      <div style={{ marginTop: 2, fontSize: "clamp(10px,0.9vw,11px)", color: "rgba(255,255,255,0.45)" }}>{st.sub}</div>
                    </div>
                    {i < 2 && <div style={{ width: 1, height: 44, background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §2  TICKER
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "20px 0", overflow: "hidden", marginTop: 40 }}>
        <div className="ticker-track">
          {[...branchen,...branchen].map((b,i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", padding: "0 28px", whiteSpace: "nowrap" }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#6e6e73" }}>{b}</span>
              <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#1a8a3c", margin: "0 28px", display: "inline-block", flexShrink: 0 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          §3  LEISTUNGEN — 4 cards, alternating layout
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="reveal" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap", marginBottom: "clamp(40px,5vw,64px)" }}>
            <div>
              <p className="caption" style={{ marginBottom: 12 }}>Leistungsumfang</p>
              <h2 className="headline-md" style={{ color: "var(--text)", maxWidth: 560 }}>Vier Kernkompetenzen — alles aus einer Hand</h2>
            </div>
            <Link href="/leistungen" className="btn-pill btn-ghost" style={{ whiteSpace: "nowrap", fontSize: 14 }}>
              Alle Leistungen <IconArrow />
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(20px,3vw,32px)" }}>
            {leistungen.map((l, i) => (
              <div key={l.id} className={i % 2 === 0 ? "reveal-left" : "reveal-right"}
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 0, borderRadius: 28, overflow: "hidden", background: "var(--off)", minHeight: 320 }}>

                {/* Text — swaps sides on odd */}
                <div style={{ padding: "clamp(32px,4vw,56px) clamp(24px,4vw,52px)", display: "flex", flexDirection: "column", justifyContent: "center", order: i % 2 === 0 ? 0 : 1 }}>
                  <p className="caption" style={{ marginBottom: 10 }}>{l.num} — {l.sub}</p>
                  <h3 className="headline-sm" style={{ color: "var(--text)", marginBottom: 14 }}>{l.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--text-2)", marginBottom: 24, maxWidth: 440 }}>{l.body}</p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 32 }}>
                    {l.points.map(pt => (
                      <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <IconCheck />
                        <span style={{ fontSize: 14, color: "var(--text-2)", lineHeight: 1.5 }}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={l.href} className="btn-pill btn-green" style={{ fontSize: 14, alignSelf: "flex-start" }}>
                    Mehr erfahren <IconArrow color="#fff" />
                  </Link>
                </div>

                {/* Photo */}
                <div style={{ position: "relative", minHeight: 280, order: i % 2 === 0 ? 1 : 0 }}>
                  <Image src={l.img} alt={l.title} fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg,${l.accent}22 0%,transparent 55%)` }} />
                  <div style={{ position: "absolute", top: 20, left: 20, background: "rgba(0,0,0,0.45)", backdropFilter: "blur(10px)", borderRadius: 12, padding: "8px 14px", border: "1px solid rgba(255,255,255,0.1)" }}>
                    <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "#fff", letterSpacing: "-0.04em", opacity: 0.9 }}>{l.num}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §4  PRODUKTE — prominent grid
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,64px)" }}>
            <p className="caption" style={{ marginBottom: 12 }}>Steffes-Produktlinie</p>
            <h2 className="headline-md" style={{ color: "var(--text)" }}>Exklusiv bei Ernst — das Steffes-Sortiment</h2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--text-2)", maxWidth: 600, margin: "16px auto 0" }}>
              Seit 2020 sind wir exklusiver Hersteller und Vertreiber des gesamten Steffes-Lieferprogramms — bewährte Qualität, weiterentwickelt.
            </p>
          </div>

          {/* 2×2 product grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(16px,2vw,24px)" }}>
            {produkte.map((p, i) => (
              <Link key={p.href} href={p.href} className="reveal card-hover"
                style={{ display: "flex", flexDirection: "column", background: "#fff", borderRadius: 24, overflow: "hidden", textDecoration: "none", border: "1px solid rgba(0,0,0,0.06)", transitionDelay: `${i * 60}ms` }}>
                {/* Image */}
                <div style={{ position: "relative", height: 200, background: "#f0f0f0", flexShrink: 0 }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: "contain", padding: 20 }} sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                {/* Content */}
                <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a8a3c", background: "#e8f5ee", borderRadius: 999, padding: "3px 8px" }}>{t}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 6 }}>{p.sub}</p>
                  <h3 style={{ fontSize: "clamp(1.1rem,1.5vw,1.3rem)", fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-2)", flex: 1 }}>{p.body}</p>
                  <div style={{ marginTop: 20, display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#1a8a3c" }}>
                    Mehr erfahren <IconArrow size={14} color="#1a8a3c" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: 48 }}>
            <Link href="/produkte" className="btn-pill btn-green" style={{ fontSize: 15 }}>
              Alle Produkte ansehen <IconArrow color="#fff" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §5  ÜBER UNS — portraits + text
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#0c1a30", backgroundImage: "none", isolation: "isolate" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "center" }}>

            {/* Left: photo collage */}
            <div className="reveal-left" style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {/* Wide team photo */}
                <div style={{ gridColumn: "1 / -1", borderRadius: 22, overflow: "hidden", aspectRatio: "16/9", position: "relative" }}>
                  <Image src="/besprechung_1.jpg" alt="Team Ernst Maschinenbau" fill style={{ objectFit: "cover" }} sizes="(max-width:768px) 100vw, 50vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top,rgba(0,0,0,0.4) 0%,transparent 50%)" }} />
                  <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(26,138,60,0.15)", border: "1px solid rgba(26,138,60,0.35)", borderRadius: 999, padding: "6px 12px", display: "flex", alignItems: "center", gap: 7 }}>
                    <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: "50%", background: "#1a8a3c", display: "inline-block" }} />
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#4ade80" }}>Aktiv in 50+ Ländern</span>
                  </div>
                </div>
                {/* Portrait Armin */}
                <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                  <Image src="/armin_ernst.jpg" alt="Armin Ernst" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="25vw" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", background: "linear-gradient(to top,rgba(0,0,0,0.75),transparent)" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>Armin Ernst</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", margin: 0 }}>Dipl.-Ing.</p>
                  </div>
                </div>
                {/* Portrait Martin */}
                <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                  <Image src="/martin_ernst.jpg" alt="Martin Ernst" fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="25vw" />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px", background: "linear-gradient(to top,rgba(0,0,0,0.75),transparent)" }}>
                    <p style={{ fontSize: 12, fontWeight: 700, color: "#fff", margin: 0 }}>Martin Ernst</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.65)", margin: 0 }}>Geschäftsführung</p>
                  </div>
                </div>
              </div>
              {/* Floating gear badge */}
              <div style={{ position: "absolute", bottom: -20, left: -16, width: 72, height: 72, borderRadius: 20, background: "linear-gradient(135deg,#1a8a3c,#146830)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 40px rgba(26,138,60,0.4)", zIndex: 10 }}>
                <IconGear />
              </div>
            </div>

            {/* Right: text */}
            <div className="reveal-right">
              <p className="caption" style={{ marginBottom: 14, color: "#4ade80" }}>Über uns</p>
              <h2 className="headline-md" style={{ color: "#fff", marginBottom: 22 }}>
                Sechs Jahrzehnte Engineering —<br/>ein Familienversprechen
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
                Durch langjährige internationale Erfahrungen sind wir ein idealer Partner in allen Bereichen des Maschinenbaus. Als leistungsfähiger Betrieb im Maschinen- und Werkzeugbau setzen wir immer wieder neue Maßstäbe.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: 32 }}>
                Ganz im Sinne des Kunden entstehen wirtschaftlich sinnvolle, technisch anspruchsvolle und ausgereifte Lösungen — seit Generationen.
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
                {["Über 60 Jahre Erfahrung im Sondermaschinenbau","International tätig in mehr als 50 Ländern","Familienunternehmen — persönlich, verlässlich, direkt","Modernster Maschinenpark, ISO-konforme Fertigung"].map(s => (
                  <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <svg width={18} height={18} viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}>
                      <circle cx="9" cy="9" r="9" fill="rgba(26,138,60,0.25)"/>
                      <path d="M5.5 9.5l2.5 2.5 4.5-5" stroke="#4ade80" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{s}</span>
                  </li>
                ))}
              </ul>
              <Link href="/unternehmen" className="btn-pill btn-green" style={{ fontSize: 14 }}>
                Unternehmen kennenlernen <IconArrow color="#fff" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §6  KENNZAHLEN
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="container reveal" ref={kennzahlenRef as React.RefObject<HTMLDivElement>}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", padding: "clamp(40px,5vw,72px) 0" }}>
            {[{v:60,s:"+",l:"Jahre Erfahrung",sub:"Seit 1965"},{v:500,s:"+",l:"Sondermaschinen",sub:"Weltweit geliefert"},{v:50,s:"+",l:"Länder",sub:"Export & Service"},{v:100,s:"%",l:"Kundenzufriedenheit",sub:"Familienversprechen"}].map((st,i,arr) => (
              <div key={st.l} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ flex: 1, textAlign: "center", padding: "0 clamp(12px,2vw,20px)" }}>
                  <div style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)", fontWeight: 800, color: "#1a8a3c", letterSpacing: "-0.04em", lineHeight: 1 }}>{st.v}{st.s}</div>
                  <div style={{ marginTop: 8, fontSize: "clamp(12px,1.2vw,14px)", fontWeight: 600, color: "var(--text)" }}>{st.l}</div>
                  <div style={{ marginTop: 4, fontSize: "clamp(11px,1vw,12px)", color: "var(--text-3)" }}>{st.sub}</div>
                </div>
                {i < arr.length - 1 && <div style={{ width: 1, height: 56, background: "rgba(0,0,0,0.08)", flexShrink: 0 }} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §7  TIMELINE
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "var(--off)" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(40px,5vw,56px)" }}>
            <p className="caption" style={{ marginBottom: 12 }}>Unsere Geschichte</p>
            <h2 className="headline-md" style={{ color: "var(--text)" }}>60 Jahre Präzision und Fortschritt</h2>
          </div>
          <div className="reveal" style={{ overflowX: "auto", paddingBottom: 4 }} >
            <div style={{ display: "flex", gap: 0, minWidth: 600, position: "relative" }}>
              {/* Connecting line */}
              <div style={{ position: "absolute", top: 18, left: 28, right: 28, height: 1, background: "rgba(0,0,0,0.1)", zIndex: 0 }} />
              {timeline.map((t, i) => {
                const isLast = i === timeline.length - 1;
                return (
                  <div key={t.year} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
                    {/* Dot */}
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: isLast ? "#1a8a3c" : "#fff",
                      border: `2px solid ${isLast ? "#1a8a3c" : "rgba(0,0,0,0.12)"}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: isLast ? "0 0 0 5px rgba(26,138,60,0.15)" : "0 1px 6px rgba(0,0,0,0.08)",
                      marginBottom: 14, flexShrink: 0,
                    }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: isLast ? "#fff" : "#1a8a3c" }} />
                    </div>
                    {/* Year */}
                    <p style={{ fontSize: 14, fontWeight: 800, color: isLast ? "#1a8a3c" : "#1d1d1f", marginBottom: 5, letterSpacing: "-0.02em" }}>{t.year}</p>
                    {/* Event */}
                    <p style={{ fontSize: 12, color: "#6e6e73", lineHeight: 1.55, maxWidth: 140, padding: "0 8px" }}>{t.event}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §8  FAQ + CONTACT
      ══════════════════════════════════════════════════════ */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(40px,6vw,80px)", alignItems: "start" }}>
          <div className="reveal-left" style={{ position: "sticky", top: 96 }}>
            <p className="caption" style={{ marginBottom: 14 }}>Support</p>
            <h2 className="headline-md" style={{ color: "var(--text)", marginBottom: 14 }}>Haben Sie Fragen?</h2>
            <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--text-2)", marginBottom: 32 }}>Wir antworten auf die häufigsten Fragen. Für ein persönliches Gespräch stehen wir jederzeit zur Verfügung.</p>
            <div style={{ background: "var(--off)", borderRadius: 22, padding: "clamp(20px,3vw,28px)", border: "1px solid rgba(0,0,0,0.06)" }}>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>Direkter Kontakt</p>
              <p style={{ fontSize: 13, color: "var(--text-3)", marginBottom: 18 }}>Martin Ernst · Geschäftsführung</p>
              <a href="tel:+4972639199-0" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#1a8a3c", textDecoration: "none", marginBottom: 10 }}>
                <svg width="16" height="16" fill="none" stroke="#1a8a3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                +49 7263 / 9199-0
              </a>
              <a href="mailto:info@ernstmaschinen.de" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 600, color: "#1a8a3c", textDecoration: "none", marginBottom: 22 }}>
                <svg width="16" height="16" fill="none" stroke="#1a8a3c" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                info@ernstmaschinen.de
              </a>
              <Link href="/kontakt" className="btn-pill btn-green" style={{ fontSize: 14, width: "100%", justifyContent: "center" }}>
                Kontaktformular öffnen <IconArrow color="#fff" />
              </Link>
            </div>
          </div>
          <div className="reveal-right"><FaqAccordion /></div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          §9  KARRIERE CTA
      ══════════════════════════════════════════════════════ */}
      <section style={{ background: "var(--off)", padding: "clamp(40px,5vw,64px) 0" }}>
        <div className="container">
          <div className="reveal-scale" style={{ borderRadius: "clamp(20px,3vw,32px)", overflow: "hidden", position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32, flexWrap: "wrap", padding: "clamp(36px,5vw,56px) clamp(24px,4vw,56px)" }}>
            <Image src="/stellenangebote-e14feb92.webp" alt="Karriere" fill style={{ objectFit: "cover" }} sizes="100vw" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg,rgba(22,104,48,0.95) 0%,rgba(26,138,60,0.82) 55%,rgba(26,138,60,0.55) 100%)" }} />
            <div style={{ position: "relative" }}>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 8 }}>Karriere</p>
              <h2 style={{ fontSize: "clamp(1.4rem,2.5vw,2.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", marginBottom: 6 }}>Wir suchen Verstärkung!</h2>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>Azubi Feinwerkmechaniker (m/w/d) · Elektrotechniker (m/w/d)</p>
            </div>
            <Link href="/stellenangebote" className="btn-pill" style={{ background: "#fff", color: "#1a8a3c", fontSize: 14, flexShrink: 0, boxShadow: "0 4px 24px rgba(0,0,0,0.2)", position: "relative" }}>
              Stellenangebote ansehen <IconArrow color="#1a8a3c" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
