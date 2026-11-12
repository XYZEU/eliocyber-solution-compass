import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageIntro, seo } from "@/components/site";
import { livresBlancs } from "@/lib/livres-blancs";

export const Route = createFileRoute("/ressources/")({
  head: () => ({
    ...seo("/ressources", "Livres blancs et guides gratuits sur l'assurance cyber | Eliocyber", "Téléchargez gratuitement nos livres blancs et checklists : garanties cyber, prérequis des assureurs, rôle des partenaires apporteurs d'affaires."),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "CollectionPage", name: "Ressources Eliocyber", url: "/ressources",
      mainEntity: { "@type": "ItemList", itemListElement: livresBlancs.map((l, i) => ({ "@type": "ListItem", position: i + 1, url: `/ressources/${l.slug}`, name: l.title })) },
    }) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Ressources" title="Livres blancs et guides pratiques">
        Des documents courts et concrets pour comprendre l'assurance cyber, préparer votre dossier ou accompagner vos clients.
      </PageIntro>
      <section className="band" aria-labelledby="lb">
        <div className="wrap sec">
          <h2 id="lb" className="title-2">Tous les livres blancs</h2>
          <ul className="mt-5 grid gap-5 md:grid-cols-3">
            {livresBlancs.map((l) => (
              <li key={l.slug} className="card-box flex h-full min-w-0 flex-col">
                <p className="eyebrow">{l.audience} · {l.pages}</p>
                <h3 className="title-3 mt-2">{l.title}</h3>
                <p className="body-text flex-1">{l.summary}</p>
                <Link to="/ressources/$slug" params={{ slug: l.slug }} className="mt-3 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                  <FileText className="size-4" aria-hidden />Découvrir le livre blanc
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
