"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { COMPANY } from "@/lib/company";

const navLinks = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), 10);
  };

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease",
          backgroundColor: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--dano-border)" : "1px solid transparent",
        }}
      >
        <div
          className="dano-header-inner"
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 1.25rem",
            height: "84px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="DaNo Bygg – till toppen"
          >
            <Image
              className="dano-logo"
              src="/images/dano-bygg.transparant.png"
              alt="DaNo Bygg logotyp"
              width={102}
              height={102}
              style={{
                objectFit: "contain",
                height: "102px",
                width: "102px",
                filter: scrolled ? "none" : "brightness(0) invert(1)",
                transition: "filter 0.3s ease",
              }}
              priority
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  color: scrolled ? "var(--dano-text)" : "rgba(255,255,255,0.9)",
                  transition: "color 0.2s",
                  padding: "4px 0",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--dano-accent)" : "#ffffff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = scrolled ? "var(--dano-text)" : "rgba(255,255,255,0.9)";
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA + Mobile phone */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={() => handleNav("#kontakt")}
              className="hidden md:flex"
              style={{
                background: "var(--dano-accent)",
                color: "#111111",
                border: "none",
                cursor: "pointer",
                padding: "10px 22px",
                fontSize: "0.875rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.01em",
                transition: "background-color 0.2s",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "var(--dano-accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "var(--dano-accent)";
              }}
            >
              Kontakta oss
            </button>

            {/* Mobile: phone icon */}
            <a
              href={COMPANY.phone.href}
              className="flex md:hidden"
              style={{
                color: scrolled ? "var(--dano-text)" : "white",
                padding: "8px",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Ring oss"
            >
              <Phone size={20} />
            </a>

            {/* Hamburger */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "8px",
                minWidth: "44px",
                minHeight: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: scrolled ? "var(--dano-text)" : "white",
              }}
              aria-label={menuOpen ? "Stäng meny" : "Öppna meny"}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className="dano-mobile-menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "var(--dano-dark)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-8px)",
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden={!menuOpen}
      >
        {navLinks.map((link) => (
          <button
            key={link.href}
            onClick={() => handleNav(link.href)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.01em",
              transition: "color 0.2s",
              padding: "8px 16px",
              minHeight: "44px",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "var(--dano-accent)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "white";
            }}
          >
            {link.label}
          </button>
        ))}
        <button
          onClick={() => handleNav("#kontakt")}
          style={{
            marginTop: "1rem",
            background: "var(--dano-accent)",
            color: "#111111",
            border: "none",
            cursor: "pointer",
            padding: "14px 32px",
            fontSize: "1rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            borderRadius: "2px",
            minHeight: "44px",
          }}
        >
          Kontakta oss
        </button>
      </div>
    </>
  );
}
