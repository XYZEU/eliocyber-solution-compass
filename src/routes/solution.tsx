import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Btn, Card, CtaBanner, KeyFigures, PageIntro, TrustSeal } from "@/components/site";
import { Siren, Scale, TrendingDown, ShieldCheck, Building2, Handshake, type LucideIcon } from "lucide-react";

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

const icons: LucideIcon[] = [Siren, Scale, TrendingDown, ShieldCheck];
const figures = [["2 jours", "Délai de réponse ouvré"], ["4 garanties", "Incidents, RC, exploitation, prévention"], ["PME & ETI", "Couverture construite sur mesure"], ["1 courtier", "Conseil, souscription et gestion"]] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Solution" title="La cyberassurance de vos clients, portée par le courtier">
        Eliocyber transforme les professionnels qui voient le risque au quotidien en source de protection pour leurs clients PME et ETI. Nous ne vendons pas de contrat via nos partenaires : nous recueillons le besoin, conseillons et souscrivons.
      </PageIntro>
      <div className="wrap pt-8 pb-10 space-y-6"><TrustSeal /><KeyFigures items={figures} /></div>

      <section className="band" aria-labelledby="valeur">
        <div className="wrap sec">
          <h2 id="valeur" className="sr-only">La valeur pour chacun</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Card eyebrow="Pour les entreprises" icon={Building2} title="Un conseil expert et une protection adaptée" className="flex flex-col">
              <p className="body-text">Un courtier analyse votre situation, présente les garanties et sélectionne l'assureur adapté à votre profil de risque. Vous savez précisément ce qui est couvert, et comment réagir en cas d'attaque.</p>
              <div className="mt-auto pt-2"><Btn to="/contact" profil="partenaire">Échanger sur le besoin d’un client</Btn></div>
            </Card>
            <Card eyebrow="Pour nos partenaires" icon={Handshake} title="Une valeur ajoutée sans devenir intermédiaire" className="flex flex-col">
              <p className="body-text">Un suivi clair des dossiers, une commission d'apport et des outils pour prouver l'amélioration de la posture de vos clients — sans jamais présenter ni recommander de contrat.</p>
              <div className="mt-auto pt-2"><Btn to="/comment-ca-marche" ghost>Découvrir le parcours partenaire</Btn></div>
            </Card>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="garanties">
        <p className="eyebrow">Garanties</p>
        <h2 id="garanties" className="title-2">Les garanties à examiner pour vos clients</h2>
        <p className="body-text max-w-[720px]">Le courtier étudie les besoins de votre client et les offres disponibles. Toute couverture dépend du contrat retenu, de ses plafonds, franchises et exclusions, et de l'accord de l'assureur ; aucune acceptation n'est garantie.</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {garanties.map(([t, d], i) => <Card key={t} icon={icons[i]} title={t} className="h-full"><p className="body-text">{d}</p></Card>)}
        </div>
      </section>

      <CtaBanner title="Vous identifiez un besoin chez votre client ?" text="Ouvrez la relation ; Eliocyber porte le conseil et la souscription." to="/devenir-partenaire" label="Devenir apporteur d’affaires" secondary={{ to: "/comment-ca-marche", label: "Comment ça marche" }} />
    </>
  );
}
