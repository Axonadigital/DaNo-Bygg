"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function ParallaxSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const relativePos = (sectionCenter - viewportCenter) / window.innerHeight;
      bg.style.transform = `translateY(${relativePos * 120}px)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="dano-parallax"
      style={{
        position: "relative",
        height: "clamp(380px, 70vh, 600px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Parallax image */}
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          top: "-150px",
          left: 0,
          right: 0,
          bottom: "-150px",
          willChange: "transform",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/images/parallax-bygge.jpg"
            alt="Snickare arbetar med trä — nordiskt hantverk"
            fill
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: "center" }}
            quality={80}
          />
        </div>
      </div>

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
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
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.25rem",
          }}
        >
          Hållbart byggande börjar med rätt partner
        </h2>
        <p
          className="dano-section-copy"
          style={{
            fontSize: "1.0625rem",
            fontFamily: "var(--font-inter), sans-serif",
            color: "#d6d3d1",
            lineHeight: 1.65,
            maxWidth: "540px",
            margin: "0 auto",
          }}
        >
          Vi levererar kostnadseffektiva lösningar med kvalitet i centrum. Från det första samtalet till sista spiken — vi är med dig hela vägen.
        </p>
      </motion.div>
    </section>
  );
}
