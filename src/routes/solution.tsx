import { createFileRoute } from "@tanstack/react-router";
import { Btn, Card, CtaBanner, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/solution")({
  head: () => seo("/solution", "Solution d'assurance cyber pour PME et ETI — Eliocyber", "Fraude, rançongiciel, perte d'exploitation et RC cyber : découvrez notre couverture sur mesure et notre accompagnement dédié aux entreprises."),
  component: Page,
});

const garanties = [
  ["Réponse aux incidents", "Rançongiciel, fraude au virement, notification CNIL : prise en charge des frais d'experts, de restauration des systèmes et de notification des personnes concernées."],
  ["Responsabilité civile cyber", "Réclamations de clients, partenaires ou tiers suite à une fuite de données ou à une atteinte à leurs systèmes, frais de défense inclus."],
  ["Perte d'exploitation", "Compensation de la marge perdue et des frais supplémentaires lorsque l'activité est interrompue par une attaque."],
  ["Prévention", "Évaluation de la maturité cyber, plan de remédiation priorisé et preuves de contrôle pour améliorer l'assurabilité."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Solution" title="Un réseau de prescripteurs, adossé à un courtier spécialisé en cyber">
        Eliocyber transforme les professionnels qui voient le risque au quotidien en source de protection pour leurs clients PME et ETI. Nous ne vendons pas de contrat via nos partenaires : nous recueillons le besoin, conseillons et souscrivons.
      </PageIntro>

      <section className="band" aria-labelledby="valeur">
        <div className="wrap sec">
          <h2 id="valeur" className="sr-only">La valeur pour chacun</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Card eyebrow="Pour les entreprises" title="Un conseil expert et une protection adaptée" className="flex flex-col">
              <p className="body-text">Un courtier analyse votre situation, présente les garanties et sélectionne l'assureur adapté à votre profil de risque. Vous savez précisément ce qui est couvert, et comment réagir en cas d'attaque.</p>
              <div className="mt-auto pt-2"><Btn to="/contact" profil="entreprise">Parler à un courtier</Btn></div>
            </Card>
            <Card eyebrow="Pour nos partenaires" title="Une valeur ajoutée sans devenir intermédiaire" className="flex flex-col">
              <p className="body-text">Un suivi clair des dossiers, une commission d'apport et des outils pour prouver l'amélioration de la posture de vos clients — sans jamais présenter ni recommander de contrat.</p>
              <div className="mt-auto pt-2"><Btn to="/comment-ca-marche" ghost>Découvrir le parcours partenaire</Btn></div>
            </Card>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="garanties">
        <p className="eyebrow">Garanties</p>
        <h2 id="garanties" className="title-2">Ce que nous couvrons</h2>
        <p className="body-text max-w-[720px]">Une couverture construite sur mesure à partir de votre activité, de vos systèmes et de vos contrôles existants.</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {garanties.map(([t, d]) => <Card key={t} title={t} className="h-full"><p className="body-text">{d}</p></Card>)}
        </div>
      </section>

      <CtaBanner title="Vous souhaitez protéger votre entreprise ou vos clients ?" text="Un courtier vous répond sous deux jours ouvrés." to="/contact" profil="entreprise" label="Être contacté par un courtier" secondary={{ to: "/comment-ca-marche", label: "Comment ça marche" }} />
    </>
  );
}
