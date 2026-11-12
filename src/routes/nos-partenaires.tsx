import { createFileRoute } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/nos-partenaires")({
  head: () => seo("/nos-partenaires", "Partenaires cyber, IT et conformité — Réseau Eliocyber", "MSP, MSSP, DSI, DPO et experts-comptables : rejoignez le réseau Eliocyber pour proposer une solution cyber à vos clients sans être courtier."),
  component: Page,
});

const fams = [
  ["Cyber", "MSSP, SOC, ESN cyber", "CISO freelance, experts forensic, pentesters.", ["Incident de sécurité", "Audit de maturité ou pentest", "Déploiement EDR ou MFA"]],
  ["IT", "MSP, DSI externes", "Intégrateurs et prestataires cloud ou télécom.", ["Gestion du parc et QBR", "Renouvellement d'infrastructure", "Migration cloud"]],
  ["Conformité", "DPO, avocats, experts-comptables", "Consultants NIS2, DORA ou ISO 27001, DAF externes.", ["Audit RGPD ou litige", "Revue annuelle et budget", "Gestion des risques"]],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Nos partenaires" title="Ceux qui voient le risque, ceux qui le protègent">
        Nous travaillons avec des professionnels cyber, IT et de la conformité. Ils identifient le besoin ; nous le transformons en protection.
      </PageIntro>
      <section className="band" aria-labelledby="familles">
        <div className="wrap sec">
          <h2 id="familles" className="title-2">Trois familles de partenaires</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {fams.map(([e, t, who, triggers]) => (
              <Card key={e} eyebrow={e} title={t} className="h-full">
                <p className="body-text">{who}</p>
                <h4 className="mb-2 mt-4 text-[13px] font-semibold">Déclencheurs types</h4>
                <ul className="flex flex-wrap gap-2">{triggers.map((x) => <li key={x} className="pill">{x}</li>)}</ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="roles">
        <p className="eyebrow">Séparation des rôles</p>
        <h2 id="roles" className="title-2">Chacun son métier, en toute conformité</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card eyebrow="Ce que vous faites" title="Vous informez, vous ne conseillez pas l'assurance">
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {["Détecter un besoin chez votre client", "Expliquer qu'un courtier spécialisé peut l'accompagner", "Recueillir son consentement", "Transmettre un dossier structuré"].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{x}</li>)}
              {["Présenter ou recommander un contrat", "Annoncer un prix ou une garantie"].map((x) => <li key={x} className="flex gap-2"><X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden /><span><span className="sr-only">Interdit : </span>{x}</span></li>)}
            </ul>
          </Card>
          <Card eyebrow="Ce que fait Eliocyber" title="Nous conseillons, souscrivons et gérons" className="!border-primary">
            <ul className="mt-3 space-y-2 text-muted-foreground">
              {["Recueil des besoins et conseil", "Sélection de l'assureur", "Souscription du contrat", "Suivi du contrat et gestion du sinistre"].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{x}</li>)}
            </ul>
          </Card>
        </div>
      </section>
      <CtaBanner title="Devenir partenaire" text="Choisissez votre profil, suivez la formation courte et créez votre premier dossier." to="/contact" profil="partenaire" label="Créer mon compte partenaire" secondary={{ to: "/comment-ca-marche", label: "Voir les 6 étapes" }} />
    </>
  );
}
