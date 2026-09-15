"use client";

import Script from "next/script";

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "name": "Salvamentos y Usados",
    "image": "https://salvamentoscol.vercel.app/logoSyU1.jpg",
    "@id": "https://salvamentoscol.vercel.app",
    "url": "https://salvamentoscol.vercel.app",
    "telephone": "+573006588572",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle 76 #60-25",
      "addressLocality": "Bogotá",
      "addressRegion": "Bogotá D.C.",
      "postalCode": "110221",
      "addressCountry": "CO"
    },
    "description": "Empresa colombiana especializada en la compra y venta de vehículos usados y salvamentos automotrices con más de 8 años de experiencia.",
    "sameAs": [
      "https://www.instagram.com/salvamentos.y.usados.oficial",
      "https://www.facebook.com/share/1CkG4KsYuF/",
      "https://www.tiktok.com/@salvamentosyusados"
    ],
    "areaServed": "CO",
    "priceRange": "$",
    "knowsAbout": [
      "Vehículos usados",
      "Salvamentos automotrices",
      "Motocicletas usadas",
      "Compra de vehículos",
      "Venta de vehículos"
    ]
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      strategy="afterInteractive"
    />
  );
}
