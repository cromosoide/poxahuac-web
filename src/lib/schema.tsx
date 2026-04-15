import { BRAND } from "./constants";

export function getRestaurantSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Poxahuac",
    alternateName: "Poxahuac Restaurante",
    description:
      "Restaurante de pozole tradicional mexicano en Amecameca, Estado de México. Pozole rojo, blanco, de pollo, cerdo y vegetariano.",
    url: "https://poxahuac.com",
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.zip,
      addressCountry: BRAND.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.address.lat,
      longitude: BRAND.address.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Sunday"],
        opens: "10:30",
        closes: "20:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "10:30",
        closes: "21:00",
      },
    ],
    menu: "https://poxahuac.com/menu",
    servesCuisine: ["Mexican", "Pozole", "Traditional Mexican", "Comida Mexicana"],
    priceRange: "$$",
    acceptsReservations: true,
    paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Bank Transfer"],
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Outdoor Seating", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pet Friendly", value: true },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "50",
      reviewCount: "50",
    },
    image: "https://poxahuac.com/images/og/og-home.jpg",
    sameAs: [
      BRAND.social.facebook,
      BRAND.social.instagram,
      BRAND.social.tripadvisor,
    ],
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Poxahuac",
    },
    publisher: {
      "@type": "Organization",
      name: "Poxahuac",
      logo: {
        "@type": "ImageObject",
        url: "https://poxahuac.com/images/logo/poxahuac-logo.svg",
      },
    },
    image: post.image,
    url: `https://poxahuac.com/blog/${post.slug}`,
    mainEntityOfPage: `https://poxahuac.com/blog/${post.slug}`,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getWebPageSchema(page: { name: string; description: string; url: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.name,
    description: page.description,
    url: page.url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".section-label"],
    },
    isPartOf: {
      "@type": "WebSite",
      name: "Poxahuac",
      url: "https://poxahuac.com",
    },
  };
}

export function getMenuSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Menú Poxahuac",
    url: "https://poxahuac.com/menu",
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name: "Pozoles",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Pozole Rojo de Pollo", offers: { "@type": "Offer", price: "120", priceCurrency: "MXN" } },
          { "@type": "MenuItem", name: "Pozole Rojo de Cerdo", offers: { "@type": "Offer", price: "130", priceCurrency: "MXN" } },
          { "@type": "MenuItem", name: "Pozole Blanco de Pollo", offers: { "@type": "Offer", price: "120", priceCurrency: "MXN" } },
          { "@type": "MenuItem", name: "Pozole Vegetariano", offers: { "@type": "Offer", price: "110", priceCurrency: "MXN" } },
        ],
      },
      {
        "@type": "MenuSection",
        name: "Antojitos",
        hasMenuItem: [
          { "@type": "MenuItem", name: "Quesadillas", offers: { "@type": "Offer", price: "50", priceCurrency: "MXN" } },
          { "@type": "MenuItem", name: "Tlacoyos", offers: { "@type": "Offer", price: "45", priceCurrency: "MXN" } },
          { "@type": "MenuItem", name: "Sopes", offers: { "@type": "Offer", price: "55", priceCurrency: "MXN" } },
        ],
      },
    ],
  };
}

export function JsonLd() {
  const schema = getRestaurantSchema();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
