// Head/SEO helpers kept out of component files so React Fast Refresh never reloads the whole app.
export function seo(path: string, title: string, description: string, og: { type?: "website" | "article"; section?: string; tags?: string[] } = {}) {
  const url = path;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: og.type ?? "website" },
      { property: "og:site_name", content: "Eliocyber" },
      { property: "og:locale", content: "fr_FR" },
      ...(og.section ? [{ property: "article:section", content: og.section }] : []),
      ...(og.tags ?? []).map((t) => ({ property: "article:tag", content: t })),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function faqJsonLd(faq: [string, string][]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    }),
  };
}
