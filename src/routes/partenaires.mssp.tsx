import { createFileRoute } from "@tanstack/react-router";
import { faqJsonLd } from "@/lib/seo";
import { seo } from "@/lib/seo";
import { PartnerLanding, type LandingData } from "@/components/partner-landing";

const d: LandingData = {
  slug: "mssp",
  eyebrow: "Pour les MSSP et SOC",
  h1: "Transformez votre surveillance en revenu récurrent",
  intro: "Vous voyez les failles de vos clients avant tout le monde. Chaque constat peut devenir un dossier d'assurance cyber, transmis à un courtier spécialisé.",
  cta: "Créer mon compte MSSP",
  visual: { label: "Un dossier transmis", title: "Clinique, 180 postes", text: "Score de priorité élevé. MFA partiel sur accès privilégiés, sauvegardes non testées.", items: ["Consentement recueilli", "Plan de remédiation joint"] },
  problemTitle: "Vos clients ont des failles, et aucun moyen de les transformer en protection",
  problems: [
    ["Un constat sans issue", "Le rapport de surveillance est livré, puis reste sans suite faute de solution financière pour le client."],
    ["Des assureurs exigeants", "Les souscripteurs demandent MFA, EDR et sauvegardes testées. Vos clients ne savent pas toujours où ils en sont."],
    ["Un revenu qui s'arrête au projet", "Votre valeur se mesure à la mission. Le client ne vous voit pas comme un partenaire de long terme."],
  ],
  solutionTitle: "Un dossier d'assurance né de votre surveillance",
  solutionText: "Votre score de posture devient un score d'assurabilité, expliqué et actionnable. Le dossier pré-rempli est transmis au courtier, avec le consentement du client.",
  solutionRule: "Vous restez l'apporteur exclusif de ce dossier. Vous ne conseillez pas la police : le courtier s'en charge.",
  youBring: "Le constat technique, l'historique des incidents et le plan de remédiation.",
  weBring: "Le conseil, la souscription, le suivi du contrat et la gestion du sinistre.",
  stepsTitle: "Quatre étapes, un seul outil",
  steps: [["Inscription", "Profil MSSP, identité, RC professionnelle."], ["Formation", "Une courte formation : ce que vous pouvez dire et ne pas dire."], ["Dossier", "Formulaire court, consentement client, score préliminaire."], ["Suivi", "Notification à chaque étape, jusqu'à la commission validée."]],
  services: [["Tableau de bord multi-clients", "Portefeuille, statut d'assurabilité, échéances et actions prioritaires."], ["Dossier de souscription pré-rempli", "Généré à partir de vos données, exportable ou transmis au courtier."], ["Reporting client", "Preuve de l'amélioration de la posture, utile pour les QBR et les renouvellements."]],
  offerTitle: "Une commission simple, versée au dossier",
  offerText: "Pas de frais d'entrée, pas de partage à négocier. Vous êtes l'apporteur exclusif du dossier que vous créez, et la commission est versée à la souscription.",
  testimonialsTitle: "Ils ont franchi le pas",
  faq: [
    ["Devenons-nous courtiers ?", "Non. Vous apportez des affaires. Vous ne conseillez pas, ne présentez pas de police et ne signez rien."],
    ["Faut-il suivre une formation ?", "Oui, une courte formation obligatoire, pour que chacun reste dans son rôle."],
    ["Que se passe-t-il si un client est déjà suivi par un autre partenaire ?", "Un lead ne peut avoir qu'un apporteur : le premier créé dans la plateforme. Un doublon est signalé."],
    ["Puis-je transmettre plusieurs dossiers ?", "Oui, sans limite. Chaque dossier fait l'objet de son propre suivi."],
  ],
  finalTitle: "Vos clients ont déjà besoin de cette protection",
  finalText: "Créez votre compte MSSP, suivez la formation et transmettez votre premier dossier cette semaine.",
};

export const Route = createFileRoute("/partenaires/mssp")({
  head: () => ({
    ...seo("/partenaires/mssp", "Partenariat MSSP et SOC — Assurance cyber pour vos clients | Eliocyber", "MSSP et SOC : transformez vos constats de surveillance en dossiers d'assurance cyber transmis à un courtier, et percevez une commission d'apport."),
    scripts: [faqJsonLd(d.faq)],
  }),
  component: () => <PartnerLanding d={d} />,
});
