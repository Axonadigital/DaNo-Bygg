"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";
import { InstagramIcon } from "@/components/icons/instagram";

const projects = [
  {
    src: "/images/projekt/projekt-1.jpg",
    title: "Nybyggnation villa",
    alt: "Nybyggnation av villa i Sverige",
    span: 2,
  },
  {
    src: "/images/projekt/projekt-2.jpg",
    title: "Badrumsrenovering",
    alt: "Badrumsrenovering med modern skandinavisk design",
    span: 1,
  },
  {
    src: "/images/projekt/projekt-3.jpg",
    title: "Köksrenovering",
    alt: "Köksrenovering med ljust nordiskt utförande",
    span: 1,
  },
  {
    src: "/images/projekt/projekt-4.jpg",
    title: "Husutbyggnad",
    alt: "Husutbyggnad med träfasad",
    span: 1,
  },
  {
    src: "/images/projekt/projekt-5.jpg",
    title: "Takarbete",
    alt: "Takrenovering och nyläggning",
    span: 1,
  },
  {
    src: "/images/projekt/projekt-6.jpg",
    title: "Inomhusrenovering",
    alt: "Inomhusrenovering med nordisk stil",
    span: 1,
  },
];

export function Projects() {
  return (
    <section
      id="projekt"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="dano-section-header"
        style={{ marginBottom: "3rem" }}
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
            Projekt
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div className="dano-projects-headline">
              <h2
                className="dano-section-title"
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "var(--dano-text)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "0.5rem",
                }}
              >
                Våra arbeten
              </h2>
              <p
                className="dano-section-copy"
                style={{
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "var(--dano-text-muted)",
                }}
              >
                Följ oss på Instagram för löpande uppdateringar från pågående och avslutade projekt.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div
          className="dano-projects-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "0.75rem",
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              className={`dano-project-card ${i === 0 ? "col-span-1 sm:col-span-2 lg:col-span-2" : "col-span-1"}`}
              style={{
                position: "relative",
                aspectRatio: i === 0 ? "16/10" : "4/3",
                overflow: "hidden",
                borderRadius: "4px",
                cursor: "default",
                gridColumn: i === 0 ? "span 2" : "span 1",
              }}
              whileHover="hover"
            >
              <motion.div
                style={{ position: "absolute", inset: 0 }}
                variants={{
                  hover: { scale: 1.03 },
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  quality={75}
                />
              </motion.div>

              {/* Hover overlay */}
              <motion.div
                className="dano-project-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.25rem",
                  zIndex: 1,
                }}
                variants={{
                  hover: { backgroundColor: "rgba(0,0,0,0.55)" },
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="dano-project-title"
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "white",
                    opacity: 0,
                    transform: "translateY(8px)",
                  }}
                  variants={{
                    hover: { opacity: 1, transform: "translateY(0)" },
                  }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                >
                  {project.title}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.8125rem",
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--dano-text-light)",
            }}
          >
            Bilderna visar exempel på typer av projekt vi utför.
          </p>

          <a
            className="dano-instagram-link"
            href={COMPANY.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "var(--dano-primary)",
              color: "white",
              padding: "12px 24px",
              fontSize: "0.9375rem",
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 500,
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background-color 0.2s",
              minHeight: "44px",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--dano-accent)";
              e.currentTarget.style.color = "#111111";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--dano-primary)";
              e.currentTarget.style.color = "white";
            }}
          >
            <InstagramIcon size={18} />
            Följ oss på Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
