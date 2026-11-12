import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/nos-partenaires")({
  head: () => seo("/nos-partenaires", "Nos partenaires cyber, IT et conformité — Eliocyber", "MSSP, MSP, ESN, DPO, avocats, experts-comptables : découvrez qui devient partenaire apporteur d'affaires d'Eliocyber et comment."),
  component: Page,
});

const fams = [
  ["Cyber", "MSSP, SOC, ESN cyber", "Incident, audit de maturité, pentest, déploiement EDR ou MFA.", "CISO freelance, experts forensic, pentesters."],
  ["IT", "MSP, DSI externes", "Gestion du parc, QBR, renouvellement, migration cloud.", "Intégrateurs et prestataires cloud ou télécom."],
  ["Conformité", "DPO, avocats, experts-comptables", "Audit RGPD, litige, revue annuelle, budget et gestion des risques.", "Consultants NIS2, DORA ou ISO 27001, DAF externes."],
];

function Page() {
  return (
    <>
      <PageIntro eyebrow="Nos partenaires" title="Ceux qui voient le risque, ceux qui le protègent">
        Nous travaillons avec des professionnels cyber, IT et de la conformité. Ils identifient le besoin ; nous le transformons en protection.
      </PageIntro>
      <section className="band"><div className="wrap sec grid gap-5 md:grid-cols-3">
        {fams.map(([e, t, a, b]) => <Card key={e} eyebrow={e} title={t}><p className="body-text">{a}</p><p className="body-text">{b}</p></Card>)}
      </div></section>
      <section className="wrap sec grid gap-5 md:grid-cols-2">
        <Card eyebrow="Ce que vous faites" title="Vous informez, vous ne conseillez pas l'assurance"><p className="body-text">Détecter un besoin, expliquer qu'un courtier spécialisé peut accompagner, recueillir le consentement et transmettre un dossier structuré.</p></Card>
        <Card eyebrow="Ce que nous faisons" title="Nous conseillons, souscrivons et gérons"><p className="body-text">Recueil des besoins, conseil, sélection de l'assureur, souscription, suivi du contrat et gestion du sinistre.</p></Card>
      </section>
      <CtaBanner title="Devenir partenaire" text="Choisissez votre profil, suivez la formation courte et créez votre premier dossier." to="/contact" label="Créer mon compte partenaire" />
    </>
  );
}
