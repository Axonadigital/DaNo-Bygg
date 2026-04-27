"use client";

import Image from "next/image";
import {
  Home,
  PlusSquare,
  RefreshCw,
  Droplets,
  Warehouse,
  Paintbrush,
} from "lucide-react";
import { motion, type Easing } from "framer-motion";

const easeOut: Easing = "easeOut";

function fadeInUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOut, delay },
  };
}

const services = [
  {
    id: "nybyggnation",
    title: "Nybyggnation",
    description:
      "Kompletta byggprojekt från grund till tak. Vi bygger villor, fritidshus och andra byggnader med fokus på kvalitet och hållbarhet.",
    icon: Home,
    large: true,
    image: "/images/tjanster/nybyggnation.jpg",
  },
  {
    id: "tillbyggnad",
    title: "Tillbyggnad och utbyggnad",
    description:
      "Behöver du mer utrymme? Vi bygger ut och bygger till — allt från uterum och garage till nya våningsplan.",
    icon: PlusSquare,
    large: false,
  },
  {
    id: "renovering",
    title: "Renovering",
    description:
      "Uppgradera ditt hem med genomtänkta renoveringar. Vi hanterar allt från kök till hela fastigheter.",
    icon: RefreshCw,
    large: false,
    image: "/images/tjanster/renovering.jpg",
  },
  {
    id: "badrum",
    title: "Badrumsrenovering",
    description:
      "Komplett badrumsrenovering med våtrumscertifierade lösningar. Från rivning till kakel och inredning.",
    icon: Droplets,
    large: false,
  },
  {
    id: "tak",
    title: "Takarbeten",
    description:
      "Takbyte, takrenovering och nyläggning. Vi arbetar med alla typer av takmaterial.",
    icon: Warehouse,
    large: false,
  },
  {
    id: "maleri",
    title: "Måleriarbeten",
    description:
      "In- och utvändig målning. Vi ger ditt hem eller företag rätt finish.",
    icon: Paintbrush,
    large: false,
  },
];

export function Services() {
  return (
    <section
      id="tjanster"
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
        style={{ marginBottom: "3.5rem", maxWidth: "640px" }}
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
            Tjänster
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
              marginBottom: "1rem",
            }}
          >
            Från grund till tak
          </h2>
          <p
            className="dano-section-copy"
            style={{
              fontSize: "1.0625rem",
              fontFamily: "var(--font-inter), sans-serif",
              color: "var(--dano-text-muted)",
              lineHeight: 1.65,
            }}
          >
            Vi erbjuder kostnadseffektiva och hållbara kvalitetslösningar inom bygg — från nybyggnation till renovering av befintliga byggnader.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div
          className="dano-services-grid grid-cols-1 md:grid-cols-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: "1rem",
          }}
        >
          {/* Large card — Nybyggnation */}
          <motion.div
            className="dano-service-feature col-span-1 md:col-span-2 row-span-1 md:row-span-2"
            {...fadeInUp(0)}
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              position: "relative",
              minHeight: "420px",
              overflow: "hidden",
              borderRadius: "4px",
              cursor: "default",
            }}
            whileHover={{ scale: 1.01 }}
          >
            <Image
              src="/images/tjanster/nybyggnation.jpg"
              alt="Nybyggnation av hus i Jämtland"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              style={{ objectFit: "cover" }}
            />
            <div
              className="dano-service-feature-content"
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "2rem",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "44px",
                  height: "44px",
                  backgroundColor: "var(--dano-accent)",
                  borderRadius: "2px",
                  marginBottom: "1rem",
                }}
              >
                <Home size={20} color="#111111" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.5rem)",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.01em",
                }}
              >
                Nybyggnation
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  maxWidth: "400px",
                }}
              >
                Kompletta byggprojekt från grund till tak. Vi bygger villor, fritidshus och andra byggnader med fokus på kvalitet och hållbarhet.
              </p>
            </div>
          </motion.div>

          {/* Small cards */}
          {services.slice(1).map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                className="dano-service-card"
                key={service.id}
                {...fadeInUp((i + 1) * 0.1)}
                style={{
                  backgroundColor: "white",
                  border: "1px solid var(--dano-border)",
                  borderRadius: "4px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--dano-accent-muted)",
                    borderRadius: "2px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} color="var(--dano-accent)" />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.0625rem",
                    fontWeight: 600,
                    color: "var(--dano-text)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "var(--dano-text-muted)",
                    lineHeight: 1.65,
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
