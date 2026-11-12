import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/components/site";
import { PartnerLanding, faqJsonLd, type LandingData } from "@/components/partner-landing";

const d: LandingData = {
  slug: "esn",
  eyebrow: "Pour les ESN cyber",
  h1: "Votre audit est le point de départ d'une protection pour votre client",
  intro: "Pentest, audit de maturité, remédiation : vous connaissez les failles de vos clients mieux que personne. Transformez ce diagnostic en dossier d'assurance cyber.",
  cta: "Créer mon compte ESN",
  visual: { label: "Après un audit", text: "Vos constats sont structurés en dossier : contrôles manquants, niveau de maturité, plan de remédiation.", items: ["Score de maturité", "Historique du dossier"] },
  problemTitle: "Un diagnostic de qualité, puis plus rien",
  problems: [
    ["Des recommandations qui restent lettre morte", "Le client sait ce qu'il faut corriger, mais rien ne le pousse à agir ni à se protéger financièrement."],
    ["Une mission sans suite", "Après l'audit, la relation s'arrête souvent au rapport. Le prochain projet n'est pas acquis."],
    ["Une demande d'assurance mal préparée", "Les dirigeants reçoivent des questionnaires qu'ils ne savent pas renseigner."],
  ],
  solutionTitle: "Vos constats deviennent un dossier de souscription",
  solutionText: "Votre audit alimente un score de maturité et un plan de remédiation. Le courtier reçoit un dossier structuré, et le client sait exactement ce qui reste à faire.",
  solutionRule: "Vous détectez et transmettez. Vous ne conseillez pas l'assurance.",
  youBring: "Vos constats techniques, votre niveau de confiance dans le client et votre recommandation de remédiation.",
  weBring: "Le conseil, les garanties, la souscription et le suivi.",
  stepsTitle: "De l'audit au contrat",
  steps: [["Inscription", "Profil ESN cyber, RC professionnelle, code de conduite."], ["Formation", "Une demi-journée pour savoir ce qui est permis."], ["Dossier", "Consentement du client, constats et score de maturité."], ["Suivi", "Chaque étape notifiée, jusqu'à la commission validée."]],
  services: [["Plan de remédiation", "Actions priorisées, assignables à votre client, avec suivi de mise en œuvre."], ["Preuves de contrôle", "Horodatage et historique des preuves, exportables vers le courtier."], ["Suivi de renouvellement", "Rappel et re-scan à l'échéance, pour entretenir la relation."]],
  offerTitle: "Une commission unique, sans négociation",
  offerText: "Un lead, un apporteur, une commission. Versée à la souscription, sans partage à négocier.",
  testimonialsTitle: "Ce que disent nos partenaires",
  faq: [
    ["Puis-je recommander une police à mon client ?", "Non. Vous informez et transmettez. Le courtier conseille et présente les garanties."],
    ["Combien de temps prend la formation ?", "Environ une demi-journée, obligatoire avant la création du premier dossier."],
    ["Et si mon client est déjà suivi par un autre partenaire ?", "Le premier partenaire ayant créé le dossier en est l'apporteur. Le doublon est signalé."],
    ["Dois-je gérer le sinistre ?", "Non. Le courtier gère le contrat et le sinistre. Vous restez le lien technique avec votre client."],
  ],
  finalTitle: "Faites de chaque audit un contrat",
  finalText: "Votre premier dossier peut être transmis dans la semaine.",
};

export const Route = createFileRoute("/partenaires/esn")({
  head: () => ({
    ...seo("/partenaires/esn", "Partenariat ESN cyber — De l'audit à l'assurance cyber | Eliocyber", "ESN cyber : transformez vos pentests et audits de maturité en dossiers d'assurance cyber pour vos clients, avec une commission d'apport à la souscription."),
    scripts: [faqJsonLd(d.faq)],
  }),
  component: () => <PartnerLanding d={d} />,
});
