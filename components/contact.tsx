"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { COMPANY } from "@/lib/company";
import { InstagramIcon } from "@/components/icons/instagram";

export function Contact() {
  return (
    <section
      id="kontakt"
      style={{
        backgroundColor: "var(--dano-dark)",
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
        style={{ marginBottom: "3.5rem", maxWidth: "560px" }}
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
            Kontakt
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
              marginBottom: "1rem",
            }}
          >
            Berätta om ditt projekt
          </h2>
          <p
            className="dano-section-copy"
            style={{
              fontSize: "1.0625rem",
              fontFamily: "var(--font-inter), sans-serif",
              color: "#a8a29e",
              lineHeight: 1.65,
            }}
          >
            Planerar du att bygga nytt, bygga till eller renovera? Kontakta Daniel så diskuterar vi ditt projekt.
          </p>
        </motion.div>

        {/* Two columns */}
        <div
          className="dano-contact-grid md:grid-cols-2"
          style={{
            display: "grid",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "var(--font-space-grotesk), sans-serif",
                  fontSize: "1.25rem",
                  fontWeight: 600,
                  color: "white",
                  marginBottom: "0.25rem",
                }}
              >
                {COMPANY.owner}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#78716c",
                }}
              >
                {COMPANY.ownerTitle}
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {/* Phone */}
              <a
                className="dano-contact-link"
                href={COMPANY.phone.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#d6d3d1",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  transition: "color 0.2s",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#d6d3d1"; }}
              >
                <Phone size={18} color="var(--dano-accent)" style={{ flexShrink: 0 }} />
                {COMPANY.phone.display}
              </a>

              {/* Email — [DEMO-ANTAGANDE] */}
              <a
                className="dano-contact-link"
                href={`mailto:${COMPANY.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#d6d3d1",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  transition: "color 0.2s",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#d6d3d1"; }}
              >
                <Mail size={18} color="var(--dano-accent)" style={{ flexShrink: 0 }} />
                {COMPANY.email}
              </a>

              {/* Address */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  color: "#d6d3d1",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <MapPin size={18} color="var(--dano-accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  {COMPANY.address.street}
                  <br />
                  {COMPANY.address.zip} {COMPANY.address.city}
                </span>
              </div>

              {/* Hours — [DEMO-ANTAGANDE] */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#d6d3d1",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                }}
              >
                <Clock size={18} color="var(--dano-accent)" style={{ flexShrink: 0 }} />
                Vardagar 07:00–16:00
              </div>

              {/* Instagram */}
              <a
                className="dano-contact-link"
                href={COMPANY.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#d6d3d1",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontFamily: "var(--font-inter), sans-serif",
                  transition: "color 0.2s",
                  minHeight: "44px",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--dano-accent)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#d6d3d1"; }}
              >
                <InstagramIcon size={18} color="var(--dano-accent)" />
                @danobyggab
              </a>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            className="dano-map"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            style={{
              aspectRatio: "16/9",
              maxHeight: "280px",
              overflow: "hidden",
              borderRadius: "4px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1800.863929220507!2d14.665206477541352!3d63.168711998007524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466fb85ade9972e9%3A0x7305adb4b1dc26f7!2sKrondikesv%C3%A4gen%2058B%2C%20831%2054%20%C3%96stersund!5e0!3m2!1sen!2sse!4v1777273339811!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DaNo Bygg AB, Krondikesvägen 58 B, Östersund"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
