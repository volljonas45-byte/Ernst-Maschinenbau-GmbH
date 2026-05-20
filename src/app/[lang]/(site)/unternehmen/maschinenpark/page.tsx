"use client";

import { use, useEffect } from "react";
import PageHero from "@/components/PageHero";
import RelatedLinks from "@/components/RelatedLinks";
import { hasLocale, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";

const content: Record<Locale, {
  hero: { badge: string; title: string; subtitle: string; crumbCompany: string; crumbSelf: string };
  millingTitle: string;
  millingSub: string;
  turningTitle: string;
  turningSub: string;
  fraesmaschinen: { name: string; specs: string[][] }[];
  drehmaschinen: { name: string; specs: string[][] }[];
  related: { title: string; description: string; href: string; icon: "leistungen" | "kontakt" }[];
}> = {
  de: {
    hero: { badge: "Unternehmen · Maschinenpark", title: "Unser Maschinenpark", subtitle: "Modernste CNC-Fräs- und Drehmaschinen für höchste Präzision und Qualität.", crumbCompany: "Über uns", crumbSelf: "Maschinenpark" },
    millingTitle: "Fräsmaschinen",
    millingSub: "CNC-gesteuertes 5-Achs-Fräsen",
    turningTitle: "Drehmaschinen",
    turningSub: "CNC-Drehen für Präzisionsbauteile",
    fraesmaschinen: [
      { name: "Deckel FP 50 UC", specs: [["X-Achse", "max. 1200 mm"], ["Y-Achse", "max. 450 mm"], ["Z-Achse", "max. 450 mm"]] },
      { name: "Deckel FP 50 CC/T (2×)", specs: [["X-Achse", "max. 1200 mm"], ["Y-Achse", "max. 600 mm"], ["Z-Achse", "max. 500 mm"]] },
    ],
    drehmaschinen: [
      { name: "Magdeburger D 30", specs: [["Dreh-Ø", "max. 200 mm"], ["Drehlänge", "max. 500 mm"]] },
      { name: "VDF 800 CNC", specs: [["Dreh-Ø", "max. 800 mm"], ["Drehlänge", "max. 1500 mm"]] },
      { name: "MAHO Graziano GR 400 CNC", specs: [] },
    ],
    related: [
      { title: "Präzisionsfertigung", description: "Erfahren Sie mehr über unsere Fertigungsverfahren und Qualitätsstandards.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
      { title: "Lohnarbeit", description: "Nutzen Sie unseren Maschinenpark für Ihre Fertigungsaufträge.", href: "/leistungen/lohnarbeit", icon: "leistungen" },
      { title: "Kontakt aufnehmen", description: "Sprechen Sie uns direkt an – wir beraten Sie gerne.", href: "/kontakt", icon: "kontakt" },
    ],
  },
  en: {
    hero: { badge: "Company · Machine park", title: "Our machine park", subtitle: "State-of-the-art CNC milling and turning machines for maximum precision and quality.", crumbCompany: "About us", crumbSelf: "Machine park" },
    millingTitle: "Milling machines",
    millingSub: "CNC-controlled 5-axis milling",
    turningTitle: "Lathes",
    turningSub: "CNC turning for precision components",
    fraesmaschinen: [
      { name: "Deckel FP 50 UC", specs: [["X axis", "max. 1200 mm"], ["Y axis", "max. 450 mm"], ["Z axis", "max. 450 mm"]] },
      { name: "Deckel FP 50 CC/T (2×)", specs: [["X axis", "max. 1200 mm"], ["Y axis", "max. 600 mm"], ["Z axis", "max. 500 mm"]] },
    ],
    drehmaschinen: [
      { name: "Magdeburger D 30", specs: [["Turning ø", "max. 200 mm"], ["Turning length", "max. 500 mm"]] },
      { name: "VDF 800 CNC", specs: [["Turning ø", "max. 800 mm"], ["Turning length", "max. 1500 mm"]] },
      { name: "MAHO Graziano GR 400 CNC", specs: [] },
    ],
    related: [
      { title: "Precision manufacturing", description: "Learn more about our manufacturing processes and quality standards.", href: "/leistungen/praezisionsfertigung", icon: "leistungen" },
      { title: "Contract manufacturing", description: "Use our machine park for your manufacturing orders.", href: "/leistungen/lohnarbeit", icon: "leistungen" },
      { title: "Get in touch", description: "Contact us directly — we're happy to advise.", href: "/kontakt", icon: "kontakt" },
    ],
  },
};

function MachineCard({ name, specs, delay = 0 }: { name: string; specs: string[][]; delay?: number }) {
  return (
    <div className={`reveal delay-${delay}`} style={{
      background: "#fff",
      border: "1px solid rgba(0,0,0,0.06)",
      borderLeft: "4px solid #1c6e34",
      borderRadius: "0 12px 12px 0",
      padding: "20px 24px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
    }}>
      <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1d1d1f", marginBottom: specs.length ? 14 : 0, letterSpacing: "-0.01em" }}>
        {name}
      </h3>
      {specs.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px 16px" }}>
          {specs.map(([key, val]) => (
            <div key={key} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "1px solid #f0f0f0" }}>
              <span style={{ fontSize: 12, color: "#6e6e73", fontWeight: 500 }}>{key}</span>
              <span style={{ fontSize: 12, color: "#1d1d1f", fontWeight: 600 }}>{val}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function MaschinenparkPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = use(params);
  if (!hasLocale(lang)) notFound();
  const c = content[lang as Locale];
  const dict = getDictionary(lang as Locale);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal, .reveal-left, .reveal-scale");
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
        imageSrc="/bild2-27805c5e.webp"
        breadcrumbs={[{ label: c.hero.crumbCompany, href: "/unternehmen" }, { label: c.hero.crumbSelf }]}
        homeHref={`/${lang}`}
        homeLabel={dict.nav.home}
      />

      <section style={{ background: "#f5f5f7", padding: "80px 0" }}>
        <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="two-col-stack">

            <div>
              <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.millingTitle}</h2>
                  <p style={{ fontSize: 13, color: "#6e6e73" }}>{c.millingSub}</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.fraesmaschinen.map((m, i) => <MachineCard key={m.name} {...m} delay={i * 100} />)}
              </div>
            </div>

            <div>
              <div className="reveal" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(28,110,52,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="22" height="22" fill="none" stroke="#1c6e34" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                  </svg>
                </div>
                <div>
                  <h2 style={{ fontSize: 20, fontWeight: 800, color: "#1d1d1f", letterSpacing: "-0.02em" }}>{c.turningTitle}</h2>
                  <p style={{ fontSize: 13, color: "#6e6e73" }}>{c.turningSub}</p>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {c.drehmaschinen.map((m, i) => <MachineCard key={m.name} {...m} delay={i * 100} />)}
              </div>
            </div>

          </div>
        </div>
      </section>

      <RelatedLinks items={c.related} />
    </>
  );
}
