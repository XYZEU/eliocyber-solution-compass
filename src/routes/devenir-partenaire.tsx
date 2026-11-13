import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { useFormFeedback } from "@/components/form-feedback";
import { Card, PageIntro, seo } from "@/components/site";
import { CommissionTable } from "@/components/partner-landing";

const label = "mb-1.5 mt-3.5 block text-[13px] font-semibold text-foreground";

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
      <div className="wrap pt-8 pb-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <a href="#candidature" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90">Créer mon compte partenaire</a>
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

      <ApplicationForm />
    </>
  );
}

function ApplicationForm() {
  const { onSubmit, sent, Summary, Confirmation } = useFormFeedback(() => {});
  return (
    <section id="candidature" className="wrap sec scroll-mt-20 grid items-start gap-8 md:grid-cols-2" aria-labelledby="cand-title">
      <div>
        <p className="eyebrow">Candidature partenaire</p>
        <h2 id="cand-title" className="title-2">Prêt à transmettre votre premier dossier ?</h2>
        <p className="body-text">Choisissez votre profil et démarrez en quelques minutes. Nous validons votre inscription, puis vous accédez à la formation courte.</p>
        <p className="body-text text-sm">Découvrez d'abord <Link to="/nos-partenaires" className="font-semibold text-primary hover:underline">tous les profils partenaires</Link>.</p>
      </div>
      <div className="card-box">
        {sent ? (
          <Confirmation title="Merci pour votre candidature">
            <p>Nous revenons vers vous sous deux jours ouvrés pour activer votre compte et la formation.</p>
          </Confirmation>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <Summary />
            <h3 className="title-3">Créer mon compte partenaire</h3>
            <label htmlFor="pf" className={label}>Profil métier</label>
            <select id="pf" name="profil" required defaultValue="" className="field">
              <option value="" disabled>Sélectionnez</option>
              <option>MSSP / SOC</option><option>ESN cyber</option><option>CISO freelance</option>
              <option>IT (MSP, DSI externe…)</option><option>Conformité (DPO, avocat, expert-comptable…)</option><option>Autre</option>
            </select>
            <div className="grid gap-x-4 sm:grid-cols-2">
              <div><label htmlFor="pn" className={label}>Nom</label><input id="pn" name="nom" required autoComplete="name" className="field" /></div>
              <div><label htmlFor="po" className={label}>Société</label><input id="po" name="societe" required autoComplete="organization" className="field" /></div>
            </div>
            <div className="grid gap-x-4 sm:grid-cols-2">
              <div><label htmlFor="pe" className={label}>E-mail professionnel</label><input id="pe" name="email" type="email" required autoComplete="email" className="field" /></div>
              <div><label htmlFor="pt" className={label}>Téléphone</label><input id="pt" name="tel" type="tel" autoComplete="tel" className="field" /></div>
            </div>
            <div className="grid gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ps" className={label}>Statut juridique</label>
                <select id="ps" name="statut" required defaultValue="" className="field">
                  <option value="" disabled>Sélectionnez</option><option>Société (SAS, SARL…)</option><option>Entrepreneur individuel</option><option>Autre</option>
                </select>
              </div>
              <div>
                <label htmlFor="pr" className={label}>RC professionnelle</label>
                <select id="pr" name="rcpro" required defaultValue="" className="field">
                  <option value="" disabled>Sélectionnez</option><option>Oui</option><option>Non</option>
                </select>
              </div>
            </div>
            <label className="mt-3.5 flex items-start gap-2 text-[13px]">
              <input type="checkbox" required className="mt-1 accent-primary" />
              <span>Je comprends que j'agis comme apporteur d'affaires, sans conseiller l'assurance, et je m'engage à suivre la formation obligatoire.</span>
            </label>
            <label className="mt-2 flex items-start gap-2 text-[13px]">
              <input type="checkbox" required className="mt-1 accent-primary" />
              <span>J'accepte que mes données soient traitées pour étudier ma candidature (<Link to="/mentions-legales" hash="donnees" className="text-primary underline">en savoir plus</Link>).</span>
            </label>
            <button type="submit" className="mt-4 w-full rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto">Envoyer ma candidature</button>
          </form>
        )}
      </div>
    </section>
  );
}
