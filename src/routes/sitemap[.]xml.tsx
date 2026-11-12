import { createFileRoute } from "@tanstack/react-router";

import { livresBlancs } from "@/lib/livres-blancs";

const paths = ["/ressources", ...livresBlancs.map((l) => `/ressources/${l.slug}`), "/", "/solution", "/comment-ca-marche", "/nos-partenaires", "/contact", "/mentions-legales", "/devenir-partenaire", "/partenaires/mssp", "/partenaires/esn", "/partenaires/ciso"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const BASE = new URL(request.url).origin;
        return new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${BASE}${p}</loc></url>`).join("")}</urlset>`,
          { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=86400" } },
        );
      },
    },
  },
});
