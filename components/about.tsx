"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "Östersund", label: "Baserade i" },
  { value: "Jämtland", label: "Tjänsteområde" },
  { value: "F-skatt", label: "Registrerade" },
];

export function About() {
  return (
    <section
      id="om-oss"
      style={{
        backgroundColor: "var(--dano-bg-warm)",
        padding: "6rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
        }}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "720px" }}
        >
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--dano-accent)",
                marginBottom: "0.75rem",
              }}
            >
              Om DaNo Bygg
            </p>
            <h2
              className="dano-section-title"
              style={{
                fontFamily: "var(--font-space-grotesk), sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "var(--dano-text)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Bygger nytt i Östersund
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p
              className="dano-body-copy"
              style={{
                fontSize: "1rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--dano-text-muted)",
                lineHeight: 1.7,
              }}
            >
              DaNo Bygg AB är ett byggföretag baserat i Östersund med fokus på hållbara kvalitetslösningar inom bygg. Vi erbjuder allt från nybyggnation och tillbyggnad till renovering — för privatpersoner, företag och fastighetsägare i Jämtland.
            </p>
            <p
              className="dano-body-copy"
              style={{
                fontSize: "1rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--dano-text-muted)",
                lineHeight: 1.7,
              }}
            >
              Vår ambition är enkel: leverera kostnadseffektiva byggprojekt där kvalitet och omtanke genomsyrar varje steg. Oavsett om du planerar ett helt nytt hem eller en badrumsrenovering — vi tar oss an uppdraget med samma noggrannhet.
            </p>
            <p
              className="dano-body-copy"
              style={{
                fontSize: "1rem",
                fontFamily: "var(--font-inter), sans-serif",
                color: "var(--dano-text-muted)",
                lineHeight: 1.7,
              }}
            >
              Vi tror på tydlig kommunikation, hederliga priser och hantverk som håller. Det är grunden vi bygger varje projekt på.
            </p>
          </div>

          {/* Stat cards */}
          <div
            className="dano-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              backgroundColor: "var(--dano-border)",
              border: "1px solid var(--dano-border)",
              borderRadius: "4px",
              overflow: "hidden",
              marginTop: "0.5rem",
            }}
          >
            {stats.map((stat) => (
              <div
                className="dano-stat-card"
                key={stat.label}
                style={{
                  backgroundColor: "white",
                  padding: "1.25rem 1rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                    fontWeight: 700,
                    color: "var(--dano-text)",
                    letterSpacing: "-0.01em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--dano-text-muted)",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
