import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import { CtaBanner, PageIntro } from "@/components/site";
import { coreModules, fonctionnalites, type Fonctionnalite } from "@/lib/fonctionnalites";

export const Route = createFileRoute("/fonctionnalites/")({
  head: () => ({
    ...seo("/fonctionnalites", "Vue d’ensemble : les outils des apporteurs d’affaires | Eliocyber", "Découvrez les cinq outils apporteurs Eliocyber : recommandations, prospects, commissions, crise et conformité, et un aperçu des modules de soutien."),
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
      <PageIntro eyebrow="Vue d'ensemble" title="La suite de cyberassurance de l'apporteur d'affaires">
        Attirez vos clients, suivez vos recommandations et vos commissions, restez actif en cas de crise. En complément, les modules de risque, de souscription et de suivi soutiennent le travail du courtier et la protection de vos clients.
      </PageIntro>
      <ModuleList id="partenaires" title="Outils partenaires et apport d'affaires" items={fonctionnalites.filter((f) => f.group === "partenaire")} />
      <section className="wrap sec scroll-mt-28" aria-labelledby="modules">
        <p className="eyebrow">En soutien de vos recommandations</p>
        <h2 id="modules" className="title-2">Cœur de plateforme et souscription</h2>
        <p className="body-text max-w-[720px]">Ces modules soutiennent le suivi technique, le travail du courtier et les démarches du client. L’apporteur met en relation ; le courtier conserve le conseil et la souscription.</p>
        <dl className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
          {coreModules.map((module) => <div key={module.legacySlug} className="border-t border-border pt-4"><dt className="title-3">{module.name}</dt><dd className="body-text">{module.summary}</dd></div>)}
        </dl>
      </section>
      <div className="pt-14" />
      <CtaBanner title="Voir la plateforme en action" text="Échangeons sur votre activité et les outils utiles à vos recommandations." to="/devenir-partenaire" label="Devenir apporteur d’affaires" secondary={{ to: "/contact", profil: "partenaire", label: "Échanger sur un partenariat" }} />
    </>
  );
}

function ModuleList({ id, title, items }: { id: string; title: string; items: Fonctionnalite[] }) {
  return (
    <section className="band" aria-labelledby={id}>
      <div className="wrap sec">
        <h2 id={id} className="title-2">{title}</h2>
        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
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
  );
}
