import { createFileRoute } from "@tanstack/react-router";
import { Card, CtaBanner, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/comment-ca-marche")({
  head: () => seo("/comment-ca-marche", "Comment ça marche — Le parcours partenaire Eliocyber", "Inscription, formation, lead, transmission, conseil et suivi : les 6 étapes pour transmettre un dossier d'assurance cyber à Eliocyber."),
  component: Page,
});

const steps = [
  ["Inscription", "Le partenaire crée son compte", "Vérification de l'identité, du statut juridique, de l'assurance RC professionnelle et, le cas échéant, du statut ORIAS."],
  ["Formation", "Une formation courte et obligatoire", "Ce qu'il peut dire, ce qu'il ne peut pas dire, comment recueillir le consentement et être rémunéré."],
  ["Lead", "Un formulaire adapté à son métier", "Collecte minimale des données, consentement du client et score préliminaire de priorité."],
  ["Transmission", "Le dossier arrive chez le courtier", "Priorisation, historique et notes internes dans la file de production d'Eliocyber."],
  ["Conseil et souscription", "Eliocyber conseille et souscrit", "Recueil des besoins, présentation des garanties, sélection de l'assureur, contrat et suivi."],
  ["Suivi", "Le partenaire suit l'avancement", "Notifications à chaque statut, puis commission éligible et validée après souscription."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Comment ça marche" title="De la détection du besoin à la protection du client">
        Le partenaire informe, le courtier conseille. Chaque étape est tracée et chaque acteur sait ce qu'il peut et ne peut pas dire.
      </PageIntro>
      <section className="band"><div className="wrap sec">
        <ol className="grid gap-4 md:grid-cols-2">
          {steps.map(([e, t, d], i) => (
            <li key={e}><Card eyebrow={`Étape ${i + 1} · ${e}`} title={t} className="h-full"><p className="body-text">{d}</p></Card></li>
          ))}
        </ol>
      </div></section>
      <section className="wrap sec">
        <h2 className="title-2">Une seule règle de commission</h2>
        <div className="card-box"><p className="body-text !mb-0">Un lead, un apporteur, une commission. Le premier partenaire qui crée le dossier en est l'apporteur exclusif. Aucun partage ni co-apport a posteriori. La commission est versée à la souscription, une fois la prime encaissée et le délai de rétractation dépassé.</p></div>
      </section>
      <CtaBanner title="Prêt à transmettre votre premier dossier ?" text="Créez votre compte partenaire en quelques minutes." to="/contact" label="Devenir partenaire" />
    </>
  );
}
