export const SITE_URL = "https://sims-international.vercel.app";
export const SITE_NAME = "Eagle Heights Montessori School";
export const SITE_SHORT = "Eagle Heights";
export const PHONE_MAIN = "+233208853140";
export const PHONE_DISPLAY = "+233 20 885 3140";
export const PHONE_LOCAL = "020 885 3140";
export const WHATSAPP_URL = "https://wa.me/233208853140";
export const SITE_EMAIL = "info@eagleheightsmontessori.edu.gh";
export const MOTTO = "Empowering Our Generation with Knowledge & Skills";
export const ADDRESS_SHORT =
  "Amsterdam Street, Sebrepor, Kpone Katamanso Municipal District, Greater Accra Region, Ghana";
export const ADDRESS_SEBREPOR =
  "Amsterdam Street, Sebrepor, Kpone Katamanso, Greater Accra Region, Ghana";
export const ADDRESS_TEMA = "PX9Q+HJQ, Tema, Ghana";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Amsterdam+Street+Sebrepor+Kpone+Katamanso+Greater+Accra";
export const MAPS_TEMA_URL =
  "https://www.google.com/maps/search/?api=1&query=PX9Q%2BHJQ+Tema+Ghana";
export const HOURS_SHORT = "Mon–Sat · Open 24 hours · Sun Closed";

export function pageUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function seoPage(opts: { title: string; description: string; path: string }) {
  const url = pageUrl(opts.path);
  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: "en_GH" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      { name: "theme-color", content: "#c21f3c" },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

export const schoolSchema = {
  "@context": "https://schema.org",
  "@type": "School",
  name: SITE_NAME,
  slogan: MOTTO,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: SITE_EMAIL,
  telephone: PHONE_MAIN,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Amsterdam Street, Sebrepor",
    addressLocality: "Kpone Katamanso",
    addressRegion: "Greater Accra",
    addressCountry: "GH",
  },
  location: [
    {
      "@type": "Place",
      name: "Eagle Heights Montessori School — Sebrepor Branch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Amsterdam Street, Sebrepor",
        addressLocality: "Kpone Katamanso",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
      telephone: PHONE_MAIN,
    },
    {
      "@type": "Place",
      name: "Eagle Heights Montessori School — Tema Branch",
      address: {
        "@type": "PostalAddress",
        streetAddress: "PX9Q+HJQ, Tema",
        addressLocality: "Tema",
        addressRegion: "Greater Accra",
        addressCountry: "GH",
      },
      telephone: PHONE_MAIN,
    },
  ],
  openingHours: "Mo-Sa 00:00-23:59",
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What ages does Eagle Heights Montessori School accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We welcome children from Nursery to JHS 1 — Montessori-based early childhood and primary education — call +233 20 885 3140 and we will help with class placement.",
      },
    },
    {
      "@type": "Question",
      name: "How do I apply for admission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Admission forms are picked up from the school premises in Sebrepor or Tema. Submit the completed form with your child's birth certificate and health/immunization cards, then book a school visit.",
      },
    },
    {
      "@type": "Question",
      name: "Can I tour the campus before enrolling?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Appointments may be booked by phone — call +233 20 885 3140 — and we will arrange a visit to our Sebrepor or Tema branch.",
      },
    },
    {
      "@type": "Question",
      name: "What are the school hours?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are open Monday to Saturday, 24 hours. Sunday is closed.",
      },
    },
    {
      "@type": "Question",
      name: "How are fees structured?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registration is paid once per child, and tuition is charged each term. The school year has three terms. Contact the administrator on +233 20 885 3140 for the current fee schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Eagle Heights Montessori School located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are located in Tema, Ghana at PX9Q+HJQ, Tema, with an additional branch at Amsterdam Street, Sebrepor, Kpone Katamanso Municipal District, Greater Accra Region.",
      },
    },
  ],
};

const breadcrumbLabels: Record<string, string> = {
  "/about": "About",
  "/programs": "Programs & Curriculum",
  "/admissions": "Admissions",
  "/campus": "Campus & Facilities",
  "/team": "Meet the Team",
  "/gallery": "Photo Gallery",
  "/tour": "School Tour",
  "/contact": "Contact Admissions",
};

export function breadcrumbSchema(pathname: string) {
  const label = breadcrumbLabels[pathname];
  if (!label) return null;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl("/") },
      { "@type": "ListItem", position: 2, name: label, item: pageUrl(pathname) },
    ],
  };
}
