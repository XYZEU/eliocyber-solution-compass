import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageIntro, seo } from "@/components/site";
import { fonctionnalites } from "@/lib/fonctionnalites";

export const Route = createFileRoute("/fonctionnalites/")({
  head: () => ({
    ...seo("/fonctionnalites", "Vue d'ensemble : la plateforme d'assurance cyber en 5 modules | Eliocyber", "Portail MSP, moteur de souscription, moteur de risque, module de remédiation et portail client : découvrez la plateforme Eliocyber, du risque au sinistre."),
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "ItemList", name: "Vue d'ensemble de la plateforme Eliocyber",
      itemListElement: fonctionnalites.map((f, i) => ({ "@type": "ListItem", position: i + 1, url: `/fonctionnalites/${f.slug}`, name: f.name })),
    }) }],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Vue d'ensemble" title="Une plateforme, de la détection du risque au sinistre">
        Cinq modules reliés entre eux pour les partenaires, le courtier, les assureurs et les entreprises assurées.
      </PageIntro>
      <section className="band" aria-labelledby="modules">
        <div className="wrap sec">
          <h2 id="modules" className="title-2">Les modules</h2>
          <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fonctionnalites.map((f, i) => (
              <li key={f.slug} className="card-box flex h-full flex-col">
                <p className="eyebrow">{String(i + 1).padStart(2, "0")} · {f.audience}</p>
                <h3 className="title-3 mt-2">{f.name}</h3>
                <p className="body-text flex-1">{f.summary}</p>
                <Link to="/fonctionnalites/$slug" params={{ slug: f.slug }} className="mt-3 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                  Découvrir {f.name}<ArrowRight className="size-4" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div className="pt-14" />
      <CtaBanner title="Voir la plateforme en action" text="Un courtier vous présente les modules adaptés à votre situation." to="/contact" label="Être contacté" secondary={{ to: "/devenir-partenaire", label: "Devenir partenaire" }} />
    </>
  );
}
