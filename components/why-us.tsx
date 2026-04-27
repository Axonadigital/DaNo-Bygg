"use client";

import { Shield, Banknote, MessageCircle, Award } from "lucide-react";
import { motion } from "framer-motion";

const usps = [
  {
    icon: Shield,
    title: "Hållbar kvalitet",
    description:
      "Vi bygger med material och metoder som håller — inte bara idag utan i generationer.",
  },
  {
    icon: Banknote,
    title: "Kostnadseffektivt",
    description:
      "Transparenta priser utan dolda kostnader. Du vet vad det kostar innan vi börjar.",
  },
  {
    icon: MessageCircle,
    title: "Tydlig kommunikation",
    description:
      "Du får löpande uppdateringar och kan alltid nå oss under projektets gång.",
  },
  {
    icon: Award,
    title: "Registrerade och försäkrade",
    description:
      "F-skatt, moms och arbetsgivaravgift. Vi gör det rätt från dag ett.",
  },
];

export function WhyUs() {
  return (
    <section
      style={{
        backgroundColor: "var(--dano-bg)",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="dano-section-header"
        style={{ marginBottom: "4rem", textAlign: "center" }}
      >
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
            Varför DaNo Bygg
          </p>
          <h2
            className="dano-section-title"
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 700,
              color: "var(--dano-text)",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Det vi lovar, det håller vi
          </h2>
        </motion.div>

        {/* USP grid */}
        <div
          className="dano-why-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
          }}
        >
          {usps.map((usp, i) => {
            const Icon = usp.icon;
            const isLast = i === usps.length - 1;
            return (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
                className="dano-why-card border-r-0 sm:even:border-r-0 lg:last:border-r-0 lg:[&:not(:last-child)]:border-r"
                style={{
                  padding: "2.5rem 2rem",
                  borderRight: isLast ? "none" : "1px solid var(--dano-border)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    width: "48px",
                    height: "48px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon size={48} color="var(--dano-accent)" strokeWidth={1.5} />
                </motion.div>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    color: "var(--dano-text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {usp.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "var(--dano-text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {usp.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
