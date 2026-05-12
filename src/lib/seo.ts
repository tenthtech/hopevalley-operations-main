export const SITE_NAME = "HopeValley Operations";

export function brandedTitle(pageTitle: string) {
  return `${pageTitle} | ${SITE_NAME}`;
}

/**
 * Default head entries for public pages: unique title, meta description, and Open Graph / Twitter mirrors.
 */
export function pageSeo(opts: { title: string; description: string; ogDescription?: string }) {
  const fullTitle = brandedTitle(opts.title);
  const ogDescription = opts.ogDescription ?? opts.description;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: opts.description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: ogDescription },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: ogDescription },
    ],
  } as const;
}
