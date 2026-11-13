import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

const faq = [
  ["Qu'est-ce qu'Eliocyber ?", "Eliocyber est une plateforme nouvelle génération pour les courtiers d'assurances, mettant à disposition une marketplace d'assurances professionnelles et un CRM orienté conformité. La marketplace fonctionne comme un extranet multi-compagnies : elle facilite la tarification, la comparaison, la souscription et la gestion de produits d'assurance, sans passer par les extranets des compagnies. L'espace CRM facilite la prospection, le suivi clients et la gestion de la conformité. Notre ambition : qu'un courtier puisse opérer toute son activité sur un seul outil."],
  ["Eliocyber est-il un assureur, un courtier ou un éditeur de logiciel ?", "Eliocyber n'est pas assureur. Eliocyber est un courtier grossiste nouvelle génération qui délivre un maximum de valeur à son réseau de courtiers partenaires via une plateforme tout-en-un, incluant une marketplace qui référence les meilleures offres du marché. Eliocyber n'exerce aucune activité en direct et ne contacte en aucun cas les assurés finaux à des fins commerciales. Eliocyber est aussi éditeur de logiciel, puisque son offre est fournie dans une plateforme conçue spécialement pour les courtiers."],
] as const;

export const Route = createFileRoute("/a-propos")({
  head: () => {
    const s = seo("/a-propos", "À propos — Eliocyber, courtage de proximité et innovation", "Eliocyber réinvente, aux côtés des courtiers, l'assurance de proximité : notre modèle, notre histoire, nos valeurs et notre fonctionnement.");
    return { ...s, scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "AboutPage", name: "À propos d'Eliocyber", url: "/a-propos" },
      { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ] }) }] };
  },
  component: Page,
});

const modele = [
  ["Une marketplace indépendante", "Eliocyber est une marketplace d'assurance indépendante, reconnue des compagnies d'assurance et spécialisée sur l'assurance professionnelle. Eliocyber opère en tant que courtier grossiste sur tous les contrats distribués."],
  ["Une plateforme tout-en-un", "Notre marketplace est accessible au sein d'une plateforme dotée des outils indispensables pour exercer le courtage de manière moderne et sécurisée : comparaison, souscription, gestion de contrats, CRM complet, outil de conformité."],
] as const;

const valeurs = [
  ["Esprit d'équipe", "Nos équipes travaillent main dans la main avec les courtiers pour les aider à exceller dans le conseil fourni aux clients."],
  ["Humain", "Nous croyons que rien ne remplacera le contact humain. Notre mission est de mettre la technologie au service de l'humain."],
  ["Indépendance", "Nous sommes un acteur indépendant et nous le revendiquons. Nous privilégions toujours l'intérêt des assurés."],
] as const;

const etapes = [
  ["Découvrez", "Parcourez notre catalogue produit et découvrez les fonctionnalités de notre plateforme."],
  ["Inscrivez-vous", "Remplissez vos informations pour devenir partenaire : nous vous créons un espace sécurisé."],
  ["Conseillez", "Consacrez du temps à vos assurés, pour leur conseiller les meilleures offres."],
  ["Pilotez", "Chaque mois, vous touchez vos commissions et consultez les tableaux de pilotage de votre activité."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="À propos" title="Réinventer, aux côtés des courtiers, l'assurance de proximité">
        Eliocyber a été créé par des passionnés du secteur de l'assurance et des experts du digital, avec une promesse : concilier <strong className="text-foreground">courtage de proximité</strong> et <strong className="text-foreground">innovation technologique</strong>.
      </PageIntro>
      <section className="band" aria-labelledby="modele">
        <div className="wrap sec">
          <p className="eyebrow">Notre modèle</p>
          <h2 id="modele" className="title-2">Courtier grossiste et plateforme tout-en-un</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {modele.map(([t, d]) => <Card key={t} title={t} className="h-full border-l-4 !border-l-primary"><p className="body-text !mb-0">{d}</p></Card>)}
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="histoire">
        <p className="eyebrow">Notre histoire</p>
        <h2 id="histoire" className="title-2">Né d'un constat</h2>
        <div className="max-w-[760px]">
          <p className="body-text text-[17px]">Les innovations technologiques dans le secteur de l'assurance sont majoritairement orientées vers la digitalisation de la distribution. Pourtant, côté client, l'attente principale reste un accompagnement humain. La technologie est un outil au service des courtiers de proximité, mais ne pourra pas les remplacer.</p>
          <blockquote className="card-box mt-4 border-l-4 !border-l-primary">
            <p className="body-text !mb-0 text-[17px]"><strong className="text-foreground">Notre ambition :</strong> co-construire, avec nos partenaires courtiers, l'outil digital moderne permettant de sélectionner les meilleures couvertures pour leurs clients, tout en optimisant le temps passé sur les tâches à faible valeur ajoutée, afin de se concentrer sur l'essence du métier de courtier : le conseil.</p>
          </blockquote>
        </div>
      </section>
      <section className="band" aria-labelledby="valeurs">
        <div className="wrap sec">
          <p className="eyebrow">Nos valeurs</p>
          <h2 id="valeurs" className="title-2">Ce qui nous guide</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {valeurs.map(([t, d]) => <Card key={t} title={t} className="h-full"><p className="body-text !mb-0">{d}</p></Card>)}
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="fonctionnement">
        <p className="eyebrow">Comment ça marche ?</p>
        <h2 id="fonctionnement" className="title-2">Rejoignez-nous en 4 étapes</h2>
        <ol className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {etapes.map(([t, d], i) => <li key={t}><Card eyebrow={`Étape ${i + 1}`} title={t} className="h-full"><p className="body-text !mb-0">{d}</p></Card></li>)}
        </ol>
      </section>
      <section className="band" aria-labelledby="faq">
        <div className="wrap sec max-w-[860px]">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="faq" className="title-2">Vos questions</h2>
          <div className="mt-5 grid gap-3">
            {faq.map(([q, a]) => (
              <details key={q} className="card-box group">
                <summary className="title-3 cursor-pointer list-none">{q}</summary>
                <p className="body-text !mb-0 mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <div className="mt-10" />
      <CtaBanner title="Envie d'en savoir plus ?" text="Échangeons sur votre besoin ou rejoignez notre réseau de partenaires." to="/contact" label="Être contacté" secondary={{ to: "/devenir-partenaire", label: "Devenir partenaire" }} />
    </>
  );
}
