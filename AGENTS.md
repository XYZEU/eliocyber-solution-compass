<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->
- Shared header/footer/cards live in src/components/site.tsx and wrap every page from __root; each page sets SEO via its seo() helper so canonical/OG stay consistent.
- Partner landing pages (/partenaires/*) share src/components/partner-landing.tsx driven by a per-page data object; the commission grid lives in src/lib/commission.ts so all pages show the same values.
- Content collections (livres blancs, fonctionnalités) live as typed arrays in src/lib/*.ts and render through one $slug route each; the sitemap reads the same arrays.
- Use the traced SVG logo variants for shared header/footer and the same symbol in the color-scheme-aware public SVG favicon; outlined lettering removes font dependencies and keeps brand rendering consistent.
