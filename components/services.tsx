"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  Home,
  PlusSquare,
  RefreshCw,
  Droplets,
  Warehouse,
  Paintbrush,
  Phone,
  Mail,
  X,
  Check,
} from "lucide-react";
import { motion, AnimatePresence, type Easing } from "framer-motion";
import { COMPANY } from "@/lib/company";

const easeOut: Easing = "easeOut";

function fadeInUp(delay: number) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: easeOut, delay },
  };
}

type Service = {
  id: string;
  title: string;
  description: string;
  icon: typeof Home;
  large: boolean;
  image?: string;
  longDescription: string;
  bullets: string[];
};

const services: Service[] = [
  {
    id: "nybyggnation",
    title: "Nybyggnation",
    description:
      "Kompletta byggprojekt från grund till tak. Vi bygger villor, fritidshus och andra byggnader med fokus på kvalitet och hållbarhet.",
    icon: Home,
    large: true,
    image: "/images/tjanster/nybyggnation.jpg",
    longDescription:
      "Vi tar ansvar för hela byggprocessen — från första skiss och bygglov till färdig byggnad och slutbesiktning. Du får en partner som koordinerar projekt, hantverkare och underentreprenörer så att ditt drömhus blir verklighet utan stress.",
    bullets: [
      "Villor, fritidshus och attefallshus",
      "Projektledning från bygglov till slutbesiktning",
      "Egen platschef genom hela projektet",
      "Fast pris eller löpande räkning",
    ],
  },
  {
    id: "tillbyggnad",
    title: "Tillbyggnad och utbyggnad",
    description:
      "Behöver du mer utrymme? Vi bygger ut och bygger till — allt från uterum och garage till nya våningsplan.",
    icon: PlusSquare,
    large: false,
    longDescription:
      "När familjen växer eller behoven förändras hjälper vi dig att utöka ytan på ditt hem. Vi ser till att tillbyggnaden ansluter snyggt och hållbart till befintlig konstruktion — både tekniskt och estetiskt.",
    bullets: [
      "Uterum, altaner och inglasningar",
      "Garage, carport och förråd",
      "Påbyggnad av nytt våningsplan",
      "Hjälp med bygglov och ritningar",
    ],
  },
  {
    id: "renovering",
    title: "Renovering",
    description:
      "Uppgradera ditt hem med genomtänkta renoveringar. Vi hanterar allt från kök till hela fastigheter.",
    icon: RefreshCw,
    large: false,
    longDescription:
      "Från enstaka rum till totalrenovering av hela fastigheter — vi har erfarenhet att hantera både gamla hus med karaktär och moderna bostäder. Vi kombinerar hantverk med moderna lösningar.",
    bullets: [
      "Köks- och badrumsrenoveringar",
      "Total- och delrenovering",
      "Renovering av äldre hus och kulturmiljöer",
      "Snickeri, måleri och golvläggning",
    ],
  },
  {
    id: "badrum",
    title: "Badrumsrenovering",
    description:
      "Komplett badrumsrenovering med våtrumscertifierade lösningar. Från rivning till kakel och inredning.",
    icon: Droplets,
    large: false,
    longDescription:
      "Ett tätt och vackert badrum kräver rätt kompetens i varje skikt. Vi arbetar enligt branschreglerna Säker Vatten och BBV, så att du får ett badrum som håller i decennier — och försäkringen i ordning.",
    bullets: [
      "Behörig våtrumsentreprenör (BBV/GVK)",
      "Tätskikt, kakel och klinker",
      "VVS, golvvärme och ventilation",
      "Allt från rivning till färdig inredning",
    ],
  },
  {
    id: "tak",
    title: "Takarbeten",
    description:
      "Takbyte, takrenovering och nyläggning. Vi arbetar med alla typer av takmaterial.",
    icon: Warehouse,
    large: false,
    longDescription:
      "Taket är husets viktigaste skydd. Vi utför takbyten och takrenoveringar med rätt utrustning och fallskydd, oavsett om det handlar om plåt, tegel, betongpannor eller papp.",
    bullets: [
      "Komplett takbyte med underlagspapp",
      "Plåt, tegel, betongpannor och papp",
      "Hängrännor, stuprör och snörasskydd",
      "Takstolar, råspont och vindskivor",
    ],
  },
  {
    id: "maleri",
    title: "Måleriarbeten",
    description:
      "In- och utvändig målning. Vi ger ditt hem eller företag rätt finish.",
    icon: Paintbrush,
    large: false,
    longDescription:
      "Rätt målning skyddar och förlänger livslängden — och förändrar känslan i ett rum. Vi tar hand om förarbetet, materialvalet och utförandet så att resultatet håller över tid.",
    bullets: [
      "Invändig målning av rum och snickerier",
      "Utvändig målning av fasader och knutar",
      "Tapetsering och spackling",
      "Färgrådgivning och kulörval",
    ],
  },
];

export function Services() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = services.find((s) => s.id === activeId) ?? null;

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveId(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

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
            Vi erbjuder kostnadseffektiva och hållbara kvalitetslösningar inom bygg — från nybyggnation till renovering av befintliga byggnader. Klicka på ett kort för mer info.
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
          <motion.button
            type="button"
            onClick={() => setActiveId("nybyggnation")}
            className="dano-service-feature col-span-1 md:col-span-2 row-span-1 md:row-span-2"
            {...fadeInUp(0)}
            style={{
              gridColumn: "span 2",
              gridRow: "span 2",
              position: "relative",
              minHeight: "420px",
              overflow: "hidden",
              borderRadius: "4px",
              cursor: "pointer",
              border: "none",
              padding: 0,
              textAlign: "left",
              background: "transparent",
              width: "100%",
            }}
            whileHover={{ scale: 1.01 }}
            aria-label="Visa mer om Nybyggnation"
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
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
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
              <span
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  fontSize: "0.8125rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 600,
                  color: "var(--dano-accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                Läs mer →
              </span>
            </div>
          </motion.button>

          {/* Small cards */}
          {services.slice(1).map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.button
                type="button"
                onClick={() => setActiveId(service.id)}
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
                  cursor: "pointer",
                  textAlign: "left",
                  width: "100%",
                  fontFamily: "inherit",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 12px 32px rgba(0,0,0,0.1)",
                }}
                aria-label={`Visa mer om ${service.title}`}
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
                <span
                  style={{
                    marginTop: "auto",
                    paddingTop: "0.5rem",
                    fontSize: "0.75rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 600,
                    color: "var(--dano-accent)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Läs mer →
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActiveId(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`service-modal-title-${active.id}`}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "rgba(0,0,0,0.6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              backdropFilter: "blur(4px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.25, ease: easeOut }}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundColor: "white",
                borderRadius: "6px",
                maxWidth: "560px",
                width: "100%",
                maxHeight: "90vh",
                overflow: "auto",
                position: "relative",
                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              }}
            >
              {active.image && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={active.image}
                    alt={active.title}
                    fill
                    sizes="560px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}

              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label="Stäng"
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.95)",
                  border: "1px solid var(--dano-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "var(--dano-text)",
                }}
              >
                <X size={18} />
              </button>

              <div style={{ padding: "2rem" }}>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "44px",
                    height: "44px",
                    backgroundColor: "var(--dano-accent-muted)",
                    borderRadius: "2px",
                    marginBottom: "1rem",
                  }}
                >
                  <active.icon size={20} color="var(--dano-accent)" />
                </div>

                <h3
                  id={`service-modal-title-${active.id}`}
                  style={{
                    fontFamily: "var(--font-space-grotesk), sans-serif",
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--dano-text)",
                    letterSpacing: "-0.02em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {active.title}
                </h3>

                <p
                  style={{
                    fontSize: "1rem",
                    fontFamily: "var(--font-inter), sans-serif",
                    color: "var(--dano-text-muted)",
                    lineHeight: 1.65,
                    marginBottom: "1.5rem",
                  }}
                >
                  {active.longDescription}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.625rem",
                  }}
                >
                  {active.bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.625rem",
                        fontSize: "0.9375rem",
                        fontFamily: "var(--font-inter), sans-serif",
                        color: "var(--dano-text)",
                        lineHeight: 1.5,
                      }}
                    >
                      <Check
                        size={18}
                        color="var(--dano-accent)"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className="dano-service-modal-actions"
                  style={{
                    display: "flex",
                    gap: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    href={COMPANY.phone.href}
                    style={{
                      flex: "1 1 200px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.875rem 1.25rem",
                      backgroundColor: "var(--dano-accent)",
                      color: "#111111",
                      borderRadius: "3px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                    }}
                  >
                    <Phone size={18} />
                    Ring {COMPANY.phone.display}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(
                      `Förfrågan: ${active.title}`,
                    )}`}
                    style={{
                      flex: "1 1 200px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      padding: "0.875rem 1.25rem",
                      backgroundColor: "var(--dano-text)",
                      color: "white",
                      borderRadius: "3px",
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9375rem",
                      textDecoration: "none",
                      letterSpacing: "0.01em",
                    }}
                  >
                    <Mail size={18} />
                    Mejla oss
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
