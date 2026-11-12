import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { Btn, Card, CtaBanner, PageIntro, seo } from "@/components/site";
import { CommissionTable } from "@/components/partner-landing";

export const Route = createFileRoute("/devenir-partenaire")({
  head: () => seo("/devenir-partenaire", "Devenir partenaire apporteur d'affaires cyber — Eliocyber", "Recommandez la cyber-assurance à vos clients sans devenir intermédiaire : inscription, formation courte, premier dossier et commission d'apport."),
  component: Page,
});

const steps = [
  ["1 · Inscription", "Profil métier, identité, statut juridique, RC professionnelle."],
  ["2 · Formation", "Une formation courte et obligatoire : ce que vous pouvez dire, ce que vous ne pouvez pas dire."],
  ["3 · Premier dossier", "Un formulaire court adapté à votre métier, avec le consentement du client."],
  ["4 · Suivi", "Notifications à chaque étape, de la réception au versement de la commission."],
] as const;

const profiles = [
  { to: "/partenaires/mssp", label: "MSSP et SOC" },
  { to: "/partenaires/esn", label: "ESN cyber" },
  { to: "/partenaires/ciso", label: "CISO freelance" },
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Devenir partenaire" title="Recommandez la cyber-assurance à vos clients, sans devenir intermédiaire">
        Vous détectez le risque chez vos clients. Eliocyber, courtier en assurance, s'occupe du conseil, de la souscription et du suivi. Vous percevez une commission d'apport.
      </PageIntro>
      <div className="wrap -mt-6 mb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Btn to="/contact" profil="partenaire">Créer mon compte partenaire</Btn>
        <p className="text-sm text-muted-foreground">
          Votre métier :{" "}
          {profiles.map((p, i) => <span key={p.to}>{i > 0 && " · "}<Link to={p.to} className="text-primary hover:underline">{p.label}</Link></span>)}
        </p>
      </div>

      <section className="band" aria-labelledby="parcours">
        <div className="wrap sec">
          <h2 id="parcours" className="title-2">Votre parcours en quatre étapes</h2>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, x]) => <li key={t}><Card title={t} className="h-full"><p className="body-text">{x}</p></Card></li>)}
          </ol>
        </div>
      </section>

      <section className="wrap sec grid gap-8 md:grid-cols-2 md:items-start" aria-labelledby="commission">
        <div>
          <h2 id="commission" className="title-2">Votre commission d'apport</h2>
          <p className="body-text">Une commission unique, versée à la souscription de la police une fois la prime encaissée et le délai de rétractation dépassé. Pas de paiement au simple envoi du dossier.</p>
        </div>
        <CommissionTable />
      </section>

      <section className="band" aria-labelledby="partage">
        <div className="wrap sec">
          <h2 id="partage" className="title-2">Ce qui est partagé, ce qui ne l'est pas</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <Card title="Vous pouvez">
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {["Détecter un besoin", "Expliquer qu'un courtier spécialisé peut accompagner", "Recueillir le consentement", "Transmettre le dossier", "Suivre son avancement"].map((x) => <li key={x} className="flex gap-2"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{x}</li>)}
              </ul>
            </Card>
            <Card title="Vous ne pouvez pas">
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {["Conseiller une couverture", "Présenter une police", "Promettre un prix ou une garantie", "Signer un devis"].map((x) => <li key={x} className="flex gap-2"><X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden /><span><span className="sr-only">Interdit : </span>{x}</span></li>)}
              </ul>
            </Card>
          </div>
          <p className="mt-5 font-semibold text-primary">Un lead, un apporteur, une commission</p>
        </div>
      </section>

      <div className="pt-14" />
      <CtaBanner title="Prêt à transmettre votre premier dossier ?" text="Choisissez votre profil et démarrez en quelques minutes." to="/contact" profil="partenaire" label="Créer mon compte partenaire" secondary={{ to: "/nos-partenaires", label: "Tous les partenaires" }} />
    </>
  );
}
