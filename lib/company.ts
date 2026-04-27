export const COMPANY = {
  legalName: "DaNo Bygg AB",
  displayName: "DaNo Bygg",
  orgNr: "559578-5873",
  founded: 2026,
  owner: "Daniel Norrman",
  ownerTitle: "Byggmästare",

  phone: {
    display: "070-255 08 08",
    href: "tel:+46702550808",
  },
  // [DEMO-ANTAGANDE] — ingen officiell email hittades publikt
  email: "info@danobygg.se",

  address: {
    street: "Krondikesvägen 58 B",
    zip: "831 54",
    city: "Östersund",
    municipality: "Östersund",
    region: "Jämtland",
    country: "SE",
  },
  geo: {
    lat: 63.1792,
    lng: 14.6357,
  },

  domain: "", // [DEMO-ANTAGANDE] — ingen domän ännu
  social: {
    instagram: "https://www.instagram.com/danobyggab/",
  },

  serviceArea: "Östersund och Jämtland",
  services: [
    "Nybyggnation",
    "Tillbyggnad och utbyggnad",
    "Renovering",
    "Badrumsrenovering",
    "Takarbeten",
    "Måleriarbeten",
  ],
} as const;
