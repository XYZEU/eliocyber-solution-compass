import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Card, CtaBanner, PageIntro } from "@/components/site";

export const Route = createFileRoute("/comment-ca-marche")({
  head: () => seo("/comment-ca-marche", "Comment ça marche — Parcours partenaire Eliocyber", "De la détection du risque à la souscription : découvrez les 6 étapes pour transmettre un dossier d'assurance cyber et percevoir votre commission."),
  component: Page,
});

const steps = [
  ["Inscription", "Le partenaire crée son compte", "Vérification de l'identité, du statut juridique, de l'assurance RC professionnelle et, le cas échéant, du statut ORIAS."],
  ["Formation", "Une formation courte et obligatoire", "Ce qu'il peut dire, ce qu'il ne peut pas dire, comment recueillir le consentement et être rémunéré."],
  ["Lead", "Un formulaire adapté à son métier", "Collecte minimale des données, consentement du client et score préliminaire de priorité."],
  ["Transmission", "Le dossier arrive chez le courtier", "Priorisation, historique et notes internes dans la file de production d'Eliocyber."],
  ["Conseil & souscription", "Eliocyber conseille et souscrit", "Recueil des besoins, présentation des garanties, sélection de l'assureur, contrat et suivi."],
  ["Suivi", "Le partenaire suit l'avancement", "Notifications à chaque statut, puis commission éligible et validée après souscription."],
] as const;

const rules = [
  ["Un lead", "Un dossier par client, créé avec son consentement."],
  ["Un apporteur", "Le premier partenaire qui crée le dossier en est l'apporteur exclusif. Aucun partage ni co-apport a posteriori."],
  ["Une commission", "Versée à la souscription, une fois la prime encaissée et le délai de rétractation dépassé."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Comment ça marche" title="De la détection du besoin à la protection du client">
        Le partenaire informe, le courtier conseille. Chaque étape est tracée et chaque acteur sait ce qu'il peut et ne peut pas dire.
      </PageIntro>
      <section className="band" aria-labelledby="etapes">
        <div className="wrap sec">
          <h2 id="etapes" className="title-2">Les 6 étapes du parcours</h2>
          <ol className="relative mt-6 space-y-5 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-primary/20">
            {steps.map(([e, t, d], i) => (
              <li key={e} className="relative flex gap-4 sm:gap-6">
                <span aria-hidden className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-display text-[15px] font-bold text-primary-foreground shadow-[0_0_0_6px_var(--color-primary-soft),var(--shadow-lift)]">{i + 1}</span>
                <Card eyebrow={`Étape ${i + 1} · ${e}`} title={t} className="flex-1"><p className="body-text !mb-0">{d}</p></Card>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="wrap sec" aria-labelledby="commission">
        <p className="eyebrow">Rémunération</p>
        <h2 id="commission" className="title-2">Une seule règle de commission</h2>
        <p className="body-text max-w-[720px] text-[17px] font-semibold !text-foreground">« Un lead, un apporteur, une commission. »</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {rules.map(([t, d]) => <Card key={t} title={t} className="h-full border-l-4 !border-l-primary"><p className="body-text !mb-0">{d}</p></Card>)}
        </div>
      </section>
      <CtaBanner title="Prêt à transmettre votre premier dossier ?" text="Créez votre compte partenaire en quelques minutes." to="/devenir-partenaire" label="Devenir partenaire" secondary={{ to: "/nos-partenaires", label: "Qui peut nous rejoindre" }} />
    </>
  );
}
