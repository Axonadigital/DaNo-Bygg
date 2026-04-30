"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="dano-mobile-cta md:hidden"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 30,
        display: "flex",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: visible ? "translateY(0)" : "translateY(100%)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <a
        href={COMPANY.phone.href}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          backgroundColor: "#111111",
          color: "white",
          padding: "16px",
          fontSize: "0.9375rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          textDecoration: "none",
          minHeight: "56px",
        }}
      >
        <Phone size={18} />
        {COMPANY.phone.display}
      </a>
      <button
        onClick={() => scrollTo("#kontakt")}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--dano-accent)",
          color: "#111111",
          border: "none",
          cursor: "pointer",
          padding: "16px",
          fontSize: "0.9375rem",
          fontFamily: "var(--font-inter), sans-serif",
          fontWeight: 500,
          minHeight: "56px",
        }}
      >
        Kontakta oss
      </button>
    </div>
  );
}
