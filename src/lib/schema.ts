import { CONTACT_ADDRESS, CONTACT_PHONE } from "@/lib/site-content";

export const SITE_URL = "https://operations.hopevalley.digital";

const SERVICE_PAGES = [
  { name: "Customer Support Outsourcing", url: "/customer-support" },
  { name: "Sales & Outreach Support", url: "/sales-outreach" },
  { name: "Back Office Operations", url: "/back-office-operations" },
  { name: "Hybrid AI + Human Support", url: "/ai-human-support" },
  { name: "BPO Pilot Program", url: "/pilot-program" },
];

export function siteJsonLd(pathname: string) {
  const currentUrl = `${SITE_URL}${pathname === "/" ? "" : pathname}`;
  const crumbs = pathname
    .split("/")
    .filter(Boolean)
    .map((part, index, parts) => ({
      "@type": "ListItem",
      position: index + 2,
      name: part
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      item: `${SITE_URL}/${parts.slice(0, index + 1).join("/")}`,
    }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "hopeValley BPO",
        url: SITE_URL,
        email: "jude@hopevalley.digital",
        telephone: CONTACT_PHONE.tel,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_ADDRESS.street,
          addressLocality: CONTACT_ADDRESS.city,
          addressCountry: CONTACT_ADDRESS.country,
        },
        sameAs: ["https://hopevalley.digital"],
        description:
          "EU-managed remote operations and BPO provider helping businesses scale customer support, sales outreach, back-office workflows, and AI-assisted support coverage.",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: "hopeValley BPO",
        url: SITE_URL,
        email: "bpo@hopevalley.digital",
        telephone: CONTACT_PHONE.tel,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACT_ADDRESS.street,
          addressLocality: CONTACT_ADDRESS.city,
          addressCountry: CONTACT_ADDRESS.country,
        },
        areaServed: ["Finland", "Europe", "United Kingdom", "United States", "Global"],
        serviceType:
          "BPO, remote operations, customer support outsourcing, sales outreach, back-office support",
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
      ...SERVICE_PAGES.map((service) => ({
        "@type": "Service",
        "@id": `${SITE_URL}${service.url}#service`,
        name: service.name,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: ["Finland", "Europe", "United Kingdom", "United States", "Global"],
        url: `${SITE_URL}${service.url}`,
      })),
      {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          ...crumbs,
        ],
      },
    ],
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
