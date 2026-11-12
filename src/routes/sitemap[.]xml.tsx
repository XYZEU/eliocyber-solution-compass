import { createFileRoute } from "@tanstack/react-router";

const paths = ["/", "/solution", "/comment-ca-marche", "/nos-partenaires", "/contact", "/mentions-legales"];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const BASE = new URL(request.url).origin;
        return
        new Response(
          `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((p) => `<url><loc>${BASE}${p}</loc></url>`).join("")}</urlset>`,
          { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=86400" } },
        );
      },
    },
  },
});
