import Link from "next/link";

interface RelatedItem {
  title: string;
  description: string;
  href: string;
  icon: "leistungen" | "produkte" | "unternehmen" | "kontakt" | "karriere";
}

interface RelatedLinksProps {
  items: RelatedItem[];
}

const icons: Record<RelatedItem["icon"], React.ReactNode> = {
  leistungen: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  produkte: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
      <line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  ),
  unternehmen: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  kontakt: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
    </svg>
  ),
  karriere: (
    <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
    </svg>
  ),
};

export default function RelatedLinks({ items }: RelatedLinksProps) {
  return (
    <section style={{ background: "#0c1a30", backgroundImage: "none", isolation: "isolate", padding: "72px 0" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)" }}>
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#22c55e", marginBottom: 12,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#22c55e", boxShadow: "0 0 0 3px rgba(34,197,94,0.25)",
          }} />
          Weiterführende Informationen
        </p>
        <h2 style={{
          fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
          fontWeight: 800, letterSpacing: "-0.03em",
          color: "#fff", marginBottom: 40,
        }}>
          Das könnte Sie auch interessieren
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${items.length}, 1fr)`,
          gap: 20,
        }}
          className="related-grid"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 16,
                padding: "28px 28px 24px",
                textDecoration: "none",
                transition: "all 0.25s cubic-bezier(0.22,1,0.36,1)",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(26,138,60,0.12)";
                el.style.borderColor = "rgba(26,138,60,0.4)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(255,255,255,0.05)";
                el.style.borderColor = "rgba(255,255,255,0.08)";
                el.style.transform = "translateY(0)";
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: "rgba(26,138,60,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#1a8a3c", marginBottom: 18,
              }}>
                {icons[item.icon]}
              </div>
              <h3 style={{
                fontSize: 16, fontWeight: 700, color: "#fff",
                letterSpacing: "-0.02em", marginBottom: 8,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: 13.5, color: "rgba(255,255,255,0.5)",
                lineHeight: 1.6, marginBottom: 20,
              }}>
                {item.description}
              </p>
              <div style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 13, fontWeight: 600, color: "#1a8a3c",
              }}>
                Mehr erfahren
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
