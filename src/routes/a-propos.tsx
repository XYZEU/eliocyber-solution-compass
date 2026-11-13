import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

const faq = [
  ["Que fait Eliocyber ?", "Eliocyber accompagne les PME et ETI dans leur assurance cyber. Nous analysons leur exposition au risque, présentons les garanties adaptées et suivons le contrat dans la durée, en nous appuyant sur un réseau de partenaires cyber, IT et conformité."],
  ["Quel est le rôle des partenaires ?", "Nos partenaires (MSSP, ESN, CISO freelance, intégrateurs IT, consultants conformité) repèrent un besoin chez leurs clients et nous le transmettent, avec leur accord. Ils agissent comme apporteurs d'affaires : ils informent, mais ne conseillent pas, ne présentent pas de contrat et ne donnent pas de prix. Le conseil et la souscription relèvent d'Eliocyber."],
  ["Comment sont rémunérés les partenaires ?", "Selon une règle simple : un lead, un apporteur, une commission. Le premier partenaire qui transmet le dossier, avec le consentement du client, est rémunéré une fois le contrat souscrit."],
  ["Sous quel délai répondez-vous ?", "Nous répondons à chaque demande, entreprise ou partenaire, sous 2 jours ouvrés."],
] as const;

export const Route = createFileRoute("/a-propos")({
  head: () => {
    const s = seo("/a-propos", "À propos — Eliocyber, l'assurance cyber portée par ceux qui voient le risque", "Qui est Eliocyber : un courtier spécialisé en assurance cyber pour les PME et ETI, entouré d'un réseau de partenaires cyber, IT et conformité.");
    return { ...s, scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [
      { "@type": "AboutPage", name: "À propos d'Eliocyber", url: "/a-propos" },
      { "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
    ] }) }] };
  },
  component: Page,
});

const modele = [
  ["Un courtier spécialisé en cyber", "Nous conseillons les entreprises sur leur couverture cyber : réponse aux incidents, responsabilité civile, perte d'exploitation, prévention. Nous recueillons les besoins, comparons les offres des assureurs et suivons le contrat après la souscription."],
  ["Un réseau de prescripteurs", "Les acteurs qui sécurisent déjà les systèmes d'information sont les mieux placés pour repérer un besoin. Ils nous transmettent les dossiers, et une plateforme dédiée relie chaque étape : évaluation du risque, plan de remédiation, souscription, suivi."],
] as const;

const valeurs = [
  ["Rôles clairs", "Le partenaire informe, le courtier conseille. Chacun sait ce qu'il peut dire et faire, pour protéger le client comme le partenaire."],
  ["Transparence", "Une seule règle de commission, un suivi visible à chaque étape du dossier et des réponses sous 2 jours ouvrés."],
  ["Prévention d'abord", "Une bonne assurance commence par un risque maîtrisé. Nous aidons les entreprises à combler leurs écarts avant de les couvrir."],
] as const;

const etapes = [
  ["Repérer", "Un partenaire identifie un besoin de couverture cyber chez son client."],
  ["Transmettre", "Il nous adresse le dossier, avec le consentement du client."],
  ["Conseiller", "Eliocyber analyse le risque, présente les garanties et accompagne la souscription."],
  ["Suivre", "Le partenaire suit l'avancement du dossier et perçoit sa commission après souscription."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="À propos" title="L'assurance cyber, portée par ceux qui voient le risque">
        Eliocyber est né d'une idée simple : les experts qui protègent les systèmes d'information au quotidien sont les premiers à repérer un besoin d'assurance. Nous les réunissons autour d'un <strong className="text-foreground">courtier spécialisé en cyber</strong>, pour que chaque PME et ETI accède à une <strong className="text-foreground">couverture adaptée à son risque réel</strong>.
      </PageIntro>
      <section className="band" aria-labelledby="modele">
        <div className="wrap sec">
          <p className="eyebrow">Notre modèle</p>
          <h2 id="modele" className="title-2">Un courtier et un réseau de partenaires</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {modele.map(([t, d]) => <Card key={t} title={t} className="h-full border-l-4 !border-l-primary"><p className="body-text !mb-0">{d}</p></Card>)}
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="histoire">
        <p className="eyebrow">Pourquoi Eliocyber</p>
        <h2 id="histoire" className="title-2">Rapprocher la sécurité et l'assurance</h2>
        <div className="max-w-[760px]">
          <p className="body-text text-[17px]">Beaucoup d'entreprises restent mal couvertes face au risque cyber : les questionnaires des assureurs sont exigeants, les garanties difficiles à comparer, et le lien avec leur niveau de sécurité réel est rarement fait. À l'inverse, leurs prestataires cyber et IT connaissent précisément leurs forces et leurs failles.</p>
          <blockquote className="card-box mt-4 border-l-4 !border-l-primary">
            <p className="body-text !mb-0 text-[17px]"><strong className="text-foreground">Notre mission :</strong> faire travailler ensemble ceux qui voient le risque et ceux qui le protègent, pour que l'assurance cyber s'appuie sur l'état réel de la sécurité de chaque entreprise.</p>
          </blockquote>
        </div>
      </section>
      <section className="band" aria-labelledby="valeurs">
        <div className="wrap sec">
          <p className="eyebrow">Nos engagements</p>
          <h2 id="valeurs" className="title-2">Ce qui nous guide</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {valeurs.map(([t, d]) => <Card key={t} title={t} className="h-full"><p className="body-text !mb-0">{d}</p></Card>)}
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="fonctionnement">
        <p className="eyebrow">Comment ça marche ?</p>
        <h2 id="fonctionnement" className="title-2">Du besoin repéré au client protégé</h2>
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
      <CtaBanner title="Envie d'en savoir plus ?" text="Parlons de votre besoin, ou rejoignez notre réseau de partenaires." to="/contact" label="Être contacté" secondary={{ to: "/devenir-partenaire", label: "Devenir partenaire" }} />
    </>
  );
}
