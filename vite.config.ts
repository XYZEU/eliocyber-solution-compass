// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// Never set ssr.external or resolve.external: the Worker has no runtime module resolution, so
// the build fails. Never add compression (compressPublicAssets, vite-plugin-compression):
// hosting already compresses at the edge.
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { readFileSync } from "node:fs";

// Read slugs as text instead of importing the content modules: an import makes Vite restart the
// dev server (and re-optimize deps) on every content edit, which left open tabs with two React copies.
const slugsOf = (file: string) =>
  [...readFileSync(new URL(file, import.meta.url), "utf8").matchAll(/^\s*slug: "([^"]+)"/gm)].map((m) => m[1]);

// GitHub Pages project site: the workflow sets VITE_BASE_PATH=/eliocyber-solution-compass/.
// Lovable builds leave it unset, so the base stays "/" and nothing changes there.
const basePath = process.env["VITE_BASE_PATH"] ?? "/";
const isStaticDeploy = basePath !== "/";

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Static deploys (GitHub Pages) have no server: prerender every page to <route>/index.html.
    // router.basepath tells the prerenderer the site lives under the GitHub Pages subpath.
    ...(isStaticDeploy && {
      router: { basepath: basePath.replace(/\/$/, "") },
      // The Lovable build pins crawlLinks: false, so dynamic $slug pages must be listed here.
      pages: [
        ...slugsOf("./src/lib/livres-blancs.ts").map((s) => ({ path: `/ressources/${s}` })),
        ...slugsOf("./src/lib/fonctionnalites.ts").map((s) => ({ path: `/fonctionnalites/${s}` })),
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        autoSubfolderIndex: true,
      },
    }),
  },
});
