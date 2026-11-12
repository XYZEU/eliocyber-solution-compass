import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/components/site";
import { PartnerLanding, faqJsonLd, type LandingData } from "@/components/partner-landing";

const d: LandingData = {
  slug: "ciso",
  eyebrow: "Pour les CISO freelance",
  h1: "Votre roadmap cyber, enfin concrétisée pour vos dirigeants",
  intro: "Vous pilotez la sécurité de plusieurs entreprises. Quand le comité de direction demande « et si ça arrivait demain ? », vous pouvez ouvrir un dossier d'assurance cyber, transmis à un courtier spécialisé.",
  cta: "Créer mon compte CISO",
  visual: { label: "Au comité de direction", title: "« Votre roadmap prévoit quatre chantiers. Le dossier d'assurance couvre le risque résiduel. »", text: "Le dossier pré-qualifié est transmis au courtier, qui conseille le dirigeant." },
  problemTitle: "Le risque résiduel reste à la charge de l'entreprise",
  problems: [
    ["Une roadmap sans filet", "Vos chantiers réduisent le risque, mais un incident peut survenir avant qu'ils soient achevés."],
    ["Un comité qui attend des réponses", "Les dirigeants demandent ce qui est couvert et à quel coût. Vous n'avez pas toujours d'interlocuteur à leur présenter."],
    ["Un rôle de conseil peu valorisé", "Votre expertise de gouvernance ne se traduit pas en décision financière concrète."],
  ],
  solutionTitle: "Relier votre roadmap au risque assurable",
  solutionText: "Votre diagnostic produit un dossier pré-qualifié : niveau de maturité, contrôles manquants, plan de remédiation. Le courtier prend le relais auprès du dirigeant.",
  solutionRule: "Vous recommandez la démarche. Vous ne conseillez pas la police.",
  youBring: "Votre diagnostic, la gouvernance et votre relation de confiance avec le dirigeant.",
  weBring: "Le conseil, les garanties, la souscription et le suivi.",
  stepsTitle: "Du comité à la souscription",
  steps: [["Inscription", "Profil CISO, RC professionnelle, code de conduite."], ["Formation", "Ce qui est permis et ce qui ne l'est pas."], ["Dossier", "Consentement du dirigeant, diagnostic et roadmap."], ["Suivi", "Notification à chaque étape, jusqu'à la commission validée."]],
  services: [["Tableau de gouvernance", "Une vue consolidée des contrôles, des priorités et de leur avancement."], ["Dossier pour le comité", "Preuves, historique et plan de remédiation prêts à présenter."], ["Suivi documenté", "Chaque dossier est tracé, utile pour vos rapports au comité."]],
  offerTitle: "Un revenu complémentaire, sans rôle d'intermédiaire",
  offerText: "Une commission d'apport pour chaque dossier souscrit. Vous ne conseillez pas l'assurance : le courtier s'en charge.",
  testimonialsTitle: "Ce que disent nos partenaires",
  faq: [
    ["Puis-je présenter une garantie à mon dirigeant ?", "Non. Vous informez et transmettez. La présentation des garanties relève du courtier."],
    ["Ma responsabilité est-elle engagée sur le contrat ?", "Non. Le conseil, la souscription et la gestion du contrat sont assurés par le courtier."],
    ["Faut-il une formation ?", "Oui, courte et obligatoire, pour que vous restiez dans votre rôle et soyez protégé."],
    ["Puis-je travailler avec plusieurs entreprises ?", "Oui, chaque dossier fait l'objet de son propre suivi."],
  ],
  finalTitle: "Votre prochaine recommandation peut être un contrat",
  finalText: "Inscription, formation courte, premier dossier : vous pouvez être opérationnel en une semaine.",
};

export const Route = createFileRoute("/partenaires/ciso")({
  head: () => ({
    ...seo("/partenaires/ciso", "Partenariat CISO freelance — Couvrez le risque résiduel | Eliocyber", "CISO freelance : reliez votre roadmap cyber au risque assurable et proposez à vos dirigeants un dossier d'assurance cyber transmis à un courtier."),
    scripts: [faqJsonLd(d.faq)],
  }),
  component: () => <PartnerLanding d={d} />,
});
