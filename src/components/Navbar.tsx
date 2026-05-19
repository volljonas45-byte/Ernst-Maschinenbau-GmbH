"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { asset } from "@/lib/assetPath";

const navItems = [
  { label: "Home",            href: "/" },
  { label: "Über uns",        href: "/unternehmen" },
  { label: "Produkte",        href: "/produkte" },
  { label: "Leistungen",      href: "/leistungen" },
  { label: "Stellenangebote", href: "/stellenangebote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname                = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.98)",
      backdropFilter: "blur(20px) saturate(180%)",
      WebkitBackdropFilter: "blur(20px) saturate(180%)",
      borderBottom: "1px solid rgba(0,0,0,0.06)",
      boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.05)" : "none",
      transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
    }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "0 clamp(16px,3vw,48px)", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* ── Logo ── */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image src={asset("/EMB_logo.png")} alt="Ernst Maschinenbau GmbH" width={120} height={48} style={{ objectFit: "contain", height: 40, width: "auto" }} priority />
        </Link>

        {/* ── Desktop nav ── */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="hidden lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 15,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: active ? "#1a8a3c" : "#1d1d1f",
                  textDecoration: "none",
                  transition: "all 0.18s",
                  background: active ? "rgba(26,138,60,0.08)" : "transparent",
                  fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
                }}
                onMouseEnter={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "rgba(0,0,0,0.05)"; }}
                onMouseLeave={(e) => { if (!active) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* ── Actions ── */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a
            href="tel:+4972639199-0"
            className="hidden lg:flex"
            style={{ alignItems: "center", gap: 6, fontSize: 14, fontWeight: 500, color: "#6e6e73", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.color = "#1a8a3c"}
            onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.color = "#6e6e73"}
          >
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            +49 7263 9199-0
          </a>

          <Link
            href="/kontakt"
            className="hidden md:inline-flex"
            style={{
              alignItems: "center", gap: 6,
              background: "#1a8a3c",
              color: "#fff",
              padding: "8px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "-0.01em",
              textDecoration: "none",
              transition: "all 0.2s cubic-bezier(0.22,1,0.36,1)",
              boxShadow: "0 2px 12px rgba(26,138,60,0.3)",
              fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#146830"; (e.currentTarget as HTMLElement).style.transform = "scale(1.03)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#1a8a3c"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            Kontakt
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </Link>

          {/* Mobile burger – only visible below lg (1024px) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menü"
            style={{
              width: 36, height: 36, borderRadius: 8,
              background: open ? "rgba(0,0,0,0.06)" : "transparent",
              border: "none", cursor: "pointer",
              flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5,
              transition: "background 0.2s",
            }}
            className="burger-btn"
          >
            <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "#1d1d1f", transition: "all 0.3s", transform: open ? "rotate(45deg) translate(0, 5px)" : "none" }} />
            <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "#1d1d1f", transition: "all 0.3s", opacity: open ? 0 : 1 }} />
            <span style={{ display: "block", width: 18, height: 1.5, borderRadius: 2, background: "#1d1d1f", transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(0, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div style={{
        overflow: "hidden",
        maxHeight: open ? "380px" : "0",
        transition: "max-height 0.35s cubic-bezier(0.22,1,0.36,1)",
        borderTop: open ? "1px solid rgba(0,0,0,0.06)" : "none",
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(20px)",
      }}>
        <nav style={{ padding: "12px 20px 20px" }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: "block",
                padding: "12px 14px",
                borderRadius: 12,
                fontSize: 15,
                fontWeight: 500,
                color: pathname === item.href ? "#1a8a3c" : "#1d1d1f",
                textDecoration: "none",
                background: pathname === item.href ? "rgba(26,138,60,0.08)" : "transparent",
                marginBottom: 2,
                letterSpacing: "-0.01em",
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              marginTop: 8, padding: "13px",
              background: "#1a8a3c", color: "#fff",
              borderRadius: 14, fontSize: 15, fontWeight: 600,
              textDecoration: "none", letterSpacing: "-0.01em",
            }}
          >
            Kontakt aufnehmen
            <svg width="14" height="14" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}
