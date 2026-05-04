"use client";

import { motion } from "framer-motion";

export function ParallaxSection() {
  return (
    <section
      className="dano-parallax"
      style={{
        position: "relative",
        height: "clamp(380px, 70vh, 600px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0c0a09",
      }}
    >
      {/* Fixed parallax background — two white-filled logos flanking the text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "url('/images/dano-bygg.transparant.png'), url('/images/dano-bygg.transparant.png')",
          backgroundAttachment: "fixed, fixed",
          backgroundPosition: "left 4vw center, right 4vw center",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "min(360px, 28vw) auto, min(360px, 28vw) auto",
          filter: "brightness(0) invert(1)",
          opacity: 0.95,
        }}
      />

      {/* Content */}
      <motion.div
        className="dano-parallax-content"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "720px",
          padding: "0 1.25rem",
        }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--dano-accent)",
            marginBottom: "1rem",
          }}
        >
          Kvalitet i varje detalj
        </p>
        <h2
          className="dano-section-title"
          style={{
            fontFamily: "var(--font-space-grotesk), sans-serif",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
            textShadow: "0 2px 24px rgba(0,0,0,0.6)",
          }}
        >
          Hållbart byggande börjar med rätt partner
        </h2>
        <p
          className="dano-section-copy"
          style={{
            fontSize: "1.0625rem",
            fontFamily: "var(--font-inter), sans-serif",
            color: "#e7e5e4",
            lineHeight: 1.65,
            maxWidth: "540px",
            margin: "0 auto",
            textShadow: "0 2px 16px rgba(0,0,0,0.6)",
          }}
        >
          Vi levererar kostnadseffektiva lösningar med kvalitet i centrum. Från det första samtalet till sista spiken — vi är med dig hela vägen.
        </p>
      </motion.div>
    </section>
  );
}
