"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, type Easing } from "framer-motion";

function scrollTo(href: string) {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

const easeOut: Easing = "easeOut";

function fadeInUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOut, delay },
  };
}

export function Hero() {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY < 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Background image */}
      <Image
        src="/images/hero-jamtland.jpg"
        alt="Jämtland landskap med Storsjön och fjäll"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100vw"
        quality={85}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="dano-hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "6rem 1.25rem 4rem",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "720px",
            textAlign: "left",
          }}
          className="mx-auto md:mx-0 text-center md:text-left"
        >
          {/* Label */}
          <motion.p
            {...fadeInUp(0)}
            style={{
              fontSize: "0.75rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--dano-accent)",
              marginBottom: "1.25rem",
            }}
          >
            Byggföretag i Östersund
          </motion.p>

          {/* H1 */}
          <motion.h1
            className="dano-hero-title"
            {...fadeInUp(0.1)}
            style={{
              fontFamily: "var(--font-space-grotesk), sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Vi bygger ditt nästa hem i Jämtland
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="dano-section-copy mx-auto md:mx-0"
            {...fadeInUp(0.2)}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              color: "#d6d3d1",
              lineHeight: 1.65,
              marginBottom: "2.5rem",
              maxWidth: "560px",
            }}
          >
            Nybyggnation, renovering och tillbyggnad. Hållbara kvalitetslösningar för privatpersoner och företag.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="dano-hero-actions justify-center md:justify-start"
            {...fadeInUp(0.3)}
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => scrollTo("#kontakt")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "var(--dano-accent)",
                color: "#111111",
                border: "none",
                cursor: "pointer",
                padding: "14px 28px",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 500,
                borderRadius: "2px",
                minHeight: "44px",
                transition: "background-color 0.2s",
                width: "100%",
                maxWidth: "100%",
              }}
              className="sm:w-auto"
              onMouseEnter={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--dano-accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.backgroundColor = "var(--dano-accent)";
              }}
            >
              Kontakta oss
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => scrollTo("#tjanster")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "transparent",
                color: "white",
                border: "1.5px solid rgba(255,255,255,0.7)",
                cursor: "pointer",
                padding: "14px 28px",
                fontSize: "0.9375rem",
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                borderRadius: "2px",
                minHeight: "44px",
                transition: "border-color 0.2s, color 0.2s",
                width: "100%",
                maxWidth: "100%",
              }}
              className="sm:w-auto"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "white";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.7)";
                e.currentTarget.style.color = "white";
              }}
            >
              Se våra tjänster
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          opacity: showArrow ? 1 : 0,
          transition: "opacity 0.3s ease",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => scrollTo("#tjanster")}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={28} color="rgba(255,255,255,0.6)" />
        </motion.div>
      </div>
    </section>
  );
}
