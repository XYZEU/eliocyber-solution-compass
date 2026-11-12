import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/solution")({
  head: () => seo("/solution", "Notre solution d'assurance cyber pour PME et ETI — Eliocyber", "Un réseau de prescripteurs adossé à un courtier spécialisé en cyber : réponse aux incidents, responsabilité civile, perte d'exploitation et prévention."),
  component: Page,
});

function Page() {
  return (
    <>
      <PageIntro eyebrow="Solution" title="Un réseau de prescripteurs, adossé à un courtier spécialisé en cyber">
        Eliocyber transforme les professionnels qui voient le risque au quotidien en source de protection pour leurs clients PME et ETI. Nous ne vendons pas de contrat via nos partenaires : nous recueillons le besoin, conseillons et souscrivons.
      </PageIntro>
      <section className="band"><div className="wrap sec grid gap-5 md:grid-cols-2">
        <Card eyebrow="Pour vos clients" title="Un conseil expert et une protection adaptée"><p className="body-text">Un courtier analyse la situation, présente les garanties et sélectionne l'assureur adapté à leur profil de risque.</p></Card>
        <Card eyebrow="Pour nos partenaires" title="Une valeur ajoutée sans devenir intermédiaire"><p className="body-text">Un suivi clair des dossiers, une commission d'apport, et des outils pour prouver l'amélioration de la posture de leurs clients.</p></Card>
      </div></section>
      <section className="wrap sec">
        <h2 className="title-2">Ce que nous couvrons</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Card title="Réponse aux incidents"><p className="body-text">Notification CNIL, fraude au virement, rançongiciel, frais de restauration et de notification.</p></Card>
          <Card title="Responsabilité et perte d'exploitation"><p className="body-text">Responsabilité civile cyber et pertes liées à l'interruption d'activité.</p></Card>
          <Card title="Prévention"><p className="body-text">Évaluation de la maturité cyber, plan de remédiation priorisé, preuves de contrôle.</p></Card>
        </div>
      </section>
      <CtaBanner title="Vous souhaitez en savoir plus pour vos clients ?" text="Notre équipe vous répond sous deux jours ouvrés." to="/contact" label="Être contacté par un courtier" />
    </>
  );
}
