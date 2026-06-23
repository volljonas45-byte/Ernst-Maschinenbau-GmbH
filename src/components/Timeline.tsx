"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  year: string;
  event: string;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const n = items.length;
  const inset = `${50 / n}%`;                 // line starts/ends at first/last dot centre
  const lineDur = 700 + n * 160;              // total draw time of the connecting line

  return (
    <div ref={ref} style={{ overflowX: "auto", overflowY: "hidden", padding: "20px 4px 8px" }}>
      <div style={{ display: "flex", minWidth: 640, position: "relative", padding: "0 8px" }}>
        {/* base line (grey) */}
        <div style={{ position: "absolute", top: 19, left: inset, right: inset, height: 2, background: "rgba(0,0,0,0.08)", borderRadius: 2, zIndex: 0 }} />
        {/* progress line (green, draws in) */}
        <div style={{
          position: "absolute", top: 19, left: inset, right: inset, height: 2,
          background: "linear-gradient(90deg,#1c6e34,#34a85b)", borderRadius: 2, zIndex: 1,
          transformOrigin: "left", transform: on ? "scaleX(1)" : "scaleX(0)",
          transition: `transform ${lineDur}ms cubic-bezier(0.4,0,0.2,1)`,
        }} />

        {items.map((t, i) => {
          const isLast = i === n - 1;
          const delay = Math.round(150 + (i / Math.max(n - 1, 1)) * (lineDur - 150)); // dot lights up as the line reaches it
          return (
            <div key={t.year} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
              textAlign: "center", position: "relative", zIndex: 2,
              opacity: on ? 1 : 0,
              transform: on ? "translateY(0)" : "translateY(14px)",
              transition: `opacity 0.5s ease ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
            }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: isLast ? "#1c6e34" : "#fff",
                border: `2px solid ${isLast ? "#1c6e34" : "rgba(0,0,0,0.12)"}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: isLast
                  ? `0 0 0 ${on ? 6 : 0}px rgba(28,110,52,0.15), 0 4px 14px rgba(28,110,52,0.25)`
                  : "0 1px 6px rgba(0,0,0,0.08)",
                marginBottom: 14, flexShrink: 0,
                transform: on ? "scale(1)" : "scale(0.3)",
                transition: `transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${delay}ms, box-shadow 0.5s ease ${delay + 200}ms`,
              }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", background: isLast ? "#fff" : "#1c6e34" }} />
              </div>
              <p style={{ fontSize: 14, fontWeight: 800, color: isLast ? "#1c6e34" : "#1d1d1f", marginBottom: 5, letterSpacing: "-0.02em" }}>{t.year}</p>
              <p style={{ fontSize: 12, color: "#6e6e73", lineHeight: 1.55, maxWidth: 140, padding: "0 8px" }}>{t.event}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
