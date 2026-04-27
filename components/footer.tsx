"use client";

import Image from "next/image";
import { COMPANY } from "@/lib/company";
import { InstagramIcon } from "@/components/icons/instagram";

const navLinks = [
  { label: "Tjänster", href: "#tjanster" },
  { label: "Om oss", href: "#om-oss" },
  { label: "Projekt", href: "#projekt" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050505",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "4rem 0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        {/* Main row */}
        <div
          className="dano-footer-grid sm:grid-cols-2"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2.5rem",
            marginBottom: "3rem",
          }}
        >
          {/* Left */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Image
              src="/images/dano-bygg-transparant.png"
              alt="DaNo Bygg logotyp"
              width={110}
              height={42}
              style={{ objectFit: "contain", height: "42px", width: "auto", filter: "brightness(0) invert(1)" }}
            />
            <p
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "#6b6b6b",
                lineHeight: 1.6,
                maxWidth: "280px",
              }}
            >
              Byggföretag i Östersund
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "#6b6b6b",
              }}
            >
              {COMPANY.address.street}
              <br />
              {COMPANY.address.zip} {COMPANY.address.city}
            </p>
            <a
              href={COMPANY.phone.href}
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "#6b6b6b",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6b6b6b"; }}
            >
              {COMPANY.phone.display}
            </a>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              style={{
                fontSize: "0.6875rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#404040",
                marginBottom: "0.25rem",
              }}
            >
              Navigering
            </p>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#6b6b6b",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  minHeight: "44px",
                  display: "flex",
                  alignItems: "center",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b6b6b"; }}
              >
                {link.label}
              </a>
            ))}
            <a
              href={COMPANY.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#6b6b6b",
                textDecoration: "none",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-inter), sans-serif",
                transition: "color 0.2s",
                marginTop: "0.5rem",
                minHeight: "44px",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#6b6b6b"; }}
            >
              <InstagramIcon size={16} />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="dano-footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontFamily: "var(--font-inter), sans-serif",
              color: "#404040",
            }}
          >
            © {COMPANY.founded} {COMPANY.legalName}. Alla rättigheter förbehållna.
          </p>
          <p
            style={{
              fontSize: "0.8125rem",
              fontFamily: "var(--font-inter), sans-serif",
              color: "#404040",
            }}
          >
            Hemsida av{" "}
            <span style={{ color: "var(--dano-accent)" }}>Axona Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
