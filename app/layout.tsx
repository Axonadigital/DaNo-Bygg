import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/company";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "DaNo Bygg AB – Byggföretag i Östersund | Nybyggnation & Renovering",
  description:
    "Byggföretag i Östersund. Nybyggnation, tillbyggnad, renovering och badrumsrenovering i Jämtland. Hållbara kvalitetslösningar. Kontakta DaNo Bygg.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.legalName,
  description:
    "Byggföretag i Östersund som erbjuder nybyggnation, tillbyggnad, renovering och badrumsrenovering i Jämtland.",
  telephone: COMPANY.phone.href.replace("tel:", ""),
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    postalCode: COMPANY.address.zip,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.region,
    addressCountry: COMPANY.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  sameAs: [COMPANY.social.instagram],
  areaServed: COMPANY.serviceArea,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
