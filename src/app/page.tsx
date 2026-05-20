"use client";

import { useEffect } from "react";
import { defaultLocale, hasLocale } from "@/lib/i18n/config";

const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/Ernst-Maschinenbau-GmbH" : "";

export default function RootRedirect() {
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("locale") : null;
    const browser = typeof navigator !== "undefined" ? navigator.language.slice(0, 2) : "";
    const pick =
      stored && hasLocale(stored)
        ? stored
        : hasLocale(browser)
        ? browser
        : defaultLocale;
    window.location.replace(`${BASE_PATH}/${pick}/`);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        color: "#1c6e34",
        fontFamily: "-apple-system, 'SF Pro Text', sans-serif",
        fontSize: 14,
      }}
    >
      <noscript>
        <a href={`${BASE_PATH}/de/`} style={{ color: "#1c6e34" }}>
          Weiter zur deutschen Website → / Continue to English site →
        </a>
      </noscript>
    </div>
  );
}
