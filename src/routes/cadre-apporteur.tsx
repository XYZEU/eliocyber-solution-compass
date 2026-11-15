import { createFileRoute, Link } from "@tanstack/react-router";
import { seo, faqJsonLd } from "@/lib/seo";
import { Card, CtaBanner, PageIntro } from "@/components/site";
import { Check, X, ChevronDown } from "lucide-react";
import { apporteurActions } from "@/lib/apporteur";

const faq: [string, string][] = [
  ["Faut-il être inscrit à l'ORIAS ?", "La simple mise en relation, sans autre démarche d'aide à la conclusion du contrat, peut relever du rôle d'indicateur et non de la distribution d'assurance. Dans ce périmètre strict, l'immatriculation comme intermédiaire n'est pas requise du seul fait de l'apport. Si vos actes dépassent ce cadre, les obligations doivent être réexaminées avant de poursuivre."],
  ["Qui peut candidater ?", "Professionnels cyber, IT et conformité, indépendants ou sociétés : la candidature est examinée selon votre activité et votre situation. Un statut de micro-entrepreneur n'autorise pas à lui seul toute activité ; les règles professionnelles, déontologiques et fiscales de votre métier restent applicables."],
  ["La commission est-elle garantie dès la transmission ?", "Non. Un lead, un apporteur, une commission. La rémunération dépend de la convention d'apport et devient éligible après souscription, encaissement de la prime et délai de rétractation dépassé. Un dossier transmis ne garantit ni souscription ni paiement."],
  ["Suis-je dispensé de toute responsabilité ?", "Non. Vous restez responsable de vos propres actes et devez respecter notamment le consentement, la confidentialité, les droits des personnes et les limites de votre rôle. Le statut d'apporteur n'est pas une immunité réglementaire."],
];

export const Route = createFileRoute("/cadre-apporteur")({
  head: () => ({ ...seo("/cadre-apporteur", "Apporteur d'affaires en cyberassurance : statut et cadre | Eliocyber", "Comprenez le rôle d'apporteur : mise en relation, limites du conseil, ORIAS, convention, commissions et consentement sur la plateforme Eliocyber."), scripts: [faqJsonLd(faq)] }),
  component: Page,
});

const actions: [keyof typeof apporteurActions, string][] = [
  ["informer", "Informer de l'existence d'un courtier spécialisé"],
  ["mettreEnRelation", "Mettre en relation avec le consentement du client"],
  ["conseiller", "Conseiller ou recommander une couverture"],
  ["presenterContrat", "Présenter une police ou ses garanties"],
  ["annoncerPrix", "Annoncer un prix d'assurance"],
  ["signerDevis", "Signer un devis d'assurance"],
];

function Page() {
  return <>
    <PageIntro eyebrow="Le cadre de l'apport d'affaires" title="Apporteur d'affaires en cyberassurance">
      Vous ouvrez la relation. Le courtier assure le conseil. La plateforme vous permet de recommander vos clients dans un périmètre défini, sans devenir distributeur d'assurance.
    </PageIntro>
    <section className="wrap sec" aria-labelledby="role">
      <h2 id="role" className="title-2">La mise en relation, et rien de plus en assurance</h2>
      <p className="body-text max-w-[760px]">La qualification dépend des actes réellement accomplis, pas du nom de votre convention. Présenter une offre, aider à choisir un contrat ou participer à sa conclusion peut relever de la distribution d'assurance.</p>
      <div className="mt-5 grid gap-5 md:grid-cols-2">
        {[true, false].map((allowed) => <Card key={String(allowed)} title={allowed ? "Votre rôle d'apporteur" : "Hors de votre rôle"}>
          <ul className="space-y-3">{actions.filter(([key]) => apporteurActions[key] === allowed).map(([key, text]) => <li key={key} className="flex gap-2">{allowed ? <Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden /> : <X className="mt-1 size-4 shrink-0 text-destructive" aria-hidden />}<span>{text}</span></li>)}</ul>
        </Card>)}
      </div>
    </section>
    <section className="band" aria-labelledby="convention"><div className="wrap sec">
      <h2 id="convention" className="title-2">Une convention avant votre premier apport</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        <Card title="Votre relation client"><p className="body-text">La convention précise le périmètre de l'apport, le traitement des doublons et les échanges autorisés. L'attribution suit la règle : un lead, un apporteur, une commission.</p></Card>
        <Card title="Votre rémunération"><p className="body-text">Montants, conditions d'éligibilité, délais de paiement et éventuel mandat de facturation doivent être convenus. La TVA dépend de votre situation fiscale.</p></Card>
        <Card title="Les données transmises"><p className="body-text">Recueillez le consentement avant de transmettre les coordonnées. Limitez les données au nécessaire ; le courtier recueille directement les informations assurantielles.</p></Card>
      </div>
      <p className="body-text mt-5 text-sm">La signature électronique, la gratuité de l'adhésion et les délais d'activation ne sont pas présumés : ils seront précisés dans les conditions de partenariat.</p>
    </div></section>
    <section className="wrap sec" aria-labelledby="questions"><h2 id="questions" className="title-2">Statut, obligations et commissions</h2>
      <div className="mt-5 space-y-3">{faq.map(([q, a]) => <details key={q} className="card-box group"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><h3>{q}</h3><ChevronDown className="size-5 shrink-0 group-open:rotate-180" aria-hidden /></summary><p className="body-text mt-3 !mb-0">{a}</p></details>)}</div>
      <p className="body-text mt-5 text-sm">Repères généraux à faire valider selon votre situation par un conseil compétent. Références : Code des assurances, articles L. 511-1 et R. 511-3, consultables sur <a href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006073984/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Légifrance</a>. Les conditions propres à Eliocyber restent à confirmer dans la convention.</p>
      <Link to="/fonctionnalites/$slug" params={{ slug: "conformite-et-securite" }} className="font-semibold text-primary hover:underline">Découvrir Conformité et sécurité →</Link>
    </section>
    <CtaBanner title="Votre métier peut-il s'inscrire dans ce cadre ?" text="Présentez votre activité pour étudier un partenariat adapté." to="/devenir-partenaire" label="Devenir apporteur d'affaires" secondary={{ to: "/comment-ca-marche", label: "Voir le parcours" }} />
  </>;
}