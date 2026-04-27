"use client";

import Image from "next/image";
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
        className="dano-about-grid md:grid-cols-[55fr_45fr]"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            position: "relative",
            aspectRatio: "4/3",
            overflow: "hidden",
            borderRadius: "4px",
            backgroundColor: "var(--dano-accent-muted)",
          }}
          className="order-2 md:order-1"
        >
          <Image
            src="/images/om-oss.jpg"
            alt="Byggmästare på byggplats i Jämtland"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            style={{ objectFit: "cover" }}
            quality={80}
          />
        </motion.div>

        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          className="order-1 md:order-2"
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
