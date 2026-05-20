import Link from "next/link";

const ASSET_PREFIX = process.env.NODE_ENV === "production" ? "/Ernst-Maschinenbau-GmbH" : "";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  badge: string;
  title: string;
  subtitle?: string;
  imageSrc?: string;
  breadcrumbs?: Crumb[];
  height?: number;
  homeHref?: string;
  homeLabel?: string;
}

export default function PageHero({
  badge,
  title,
  subtitle,
  imageSrc,
  breadcrumbs = [],
  height = 380,
  homeHref = "/",
  homeLabel = "Home",
}: PageHeroProps) {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height,
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#0c1a30",
        backgroundImage: "none",
        isolation: "isolate",
      }}
    >
      {/* Background image */}
      {imageSrc && (
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${imageSrc.startsWith("/") ? ASSET_PREFIX + imageSrc : imageSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(105deg, rgba(12,26,48,0.92) 0%, rgba(12,26,48,0.70) 50%, rgba(12,26,48,0.40) 100%)",
      }} />

      {/* Soft bottom fade for smooth transition to next section */}
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 120,
        background: "linear-gradient(to bottom, transparent 0%, rgba(12,26,48,0.55) 100%)",
        pointerEvents: "none", zIndex: 1,
      }} />

      {/* Content */}
      <div style={{
        position: "relative", zIndex: 2,
        maxWidth: 1440, margin: "0 auto",
        padding: "0 clamp(16px,3vw,48px)",
        paddingBottom: 48,
        width: "100%",
      }}>
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
            <Link href={homeHref} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
            >{homeLabel}</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)" }}>›</span>
                {crumb.href ? (
                  <Link href={crumb.href} style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.8)"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)"}
                  >{crumb.label}</Link>
                ) : (
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Badge */}
        <p style={{
          fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#2a8d4a", marginBottom: 12,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{
            display: "inline-block", width: 6, height: 6, borderRadius: "50%",
            background: "#2a8d4a", boxShadow: "0 0 0 3px rgba(42,141,74,0.25)",
          }} />
          {badge}
        </p>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "#fff",
          margin: 0,
          maxWidth: 760,
        }}>
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p style={{
            marginTop: 14,
            fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 560,
            lineHeight: 1.6,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
