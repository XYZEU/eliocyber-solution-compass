export type LivreBlanc = {
  slug: string;
  audience: "Entreprises" | "Partenaires";
  title: string;
  summary: string;
  pages: string;
  pdf: string;
  intro: string;
  learn: [string, string][];
  forWho: string[];
  extract: string;
};

export const livresBlancs: LivreBlanc[] = [
  {
    slug: "guide-assurance-cyber-pme",
    audience: "Entreprises",
    title: "Assurance cyber : le guide pratique pour les PME et ETI",
    summary: "Comprendre les garanties, les exclusions et les prérequis pour bien protéger votre entreprise.",
    pages: "12 pages",
    pdf: "/livres-blancs/guide-assurance-cyber-pme.pdf",
    intro: "Rançongiciel, fraude au président, fuite de données : ce guide explique simplement ce que couvre une assurance cyber et comment préparer votre dossier.",
    learn: [
      ["Les vrais coûts d'un incident", "Arrêt d'activité, frais d'expertise, notification, réclamations : ce qui pèse vraiment sur une PME."],
      ["Ce que couvre un contrat", "Réponse à incident, responsabilité civile cyber, perte d'exploitation et accompagnement juridique."],
      ["Les attentes des assureurs", "MFA, sauvegardes testées, EDR : les mesures qui conditionnent la souscription."],
      ["Préparer son dossier", "Les informations à réunir pour obtenir une couverture adaptée."],
    ],
    forWho: ["Dirigeants de PME et ETI", "DAF et responsables des risques", "DSI et RSSI"],
    extract: "Un courtier spécialisé traduit votre niveau de sécurité en langage d'assureur.",
  },
  {
    slug: "checklist-prerequis-assureurs",
    audience: "Entreprises",
    title: "Checklist : les 10 prérequis des assureurs cyber",
    summary: "Vérifiez en quelques minutes si votre entreprise est prête à souscrire.",
    pages: "6 pages",
    pdf: "/livres-blancs/checklist-prerequis-assureurs.pdf",
    intro: "Une liste de contrôle courte et concrète pour savoir où vous en êtes avant de demander une couverture cyber.",
    learn: [
      ["Accès", "Authentification multifacteur sur la messagerie, les accès distants et les comptes à privilèges."],
      ["Sauvegardes", "Chiffrées, isolées et restaurées régulièrement."],
      ["Postes et serveurs", "EDR déployé et correctifs critiques appliqués rapidement."],
      ["Organisation", "Plan de réponse à incident et sensibilisation des équipes."],
    ],
    forWho: ["Dirigeants", "DSI et prestataires IT", "Responsables conformité"],
    extract: "Chaque point manquant est une piste d'amélioration, pas un refus automatique.",
  },
  {
    slug: "guide-partenaire-apporteur",
    audience: "Partenaires",
    title: "Recommander l'assurance cyber sans être intermédiaire",
    summary: "Le guide des MSSP, ESN, CISO et conseils pour orienter leurs clients en toute conformité.",
    pages: "10 pages",
    pdf: "/livres-blancs/guide-partenaire-apporteur.pdf",
    intro: "Vous détectez le risque chez vos clients. Ce guide explique comment les orienter vers un courtier, ce que vous pouvez dire et ce qui reste du ressort du courtier.",
    learn: [
      ["Le rôle d'apporteur d'affaires", "Détecter, informer, recueillir le consentement et transmettre."],
      ["Les déclencheurs types", "Incident, audit, renouvellement d'infrastructure, revue de conformité."],
      ["Le parcours partenaire", "Inscription, formation courte, premier dossier, suivi."],
      ["La commission", "Une commission unique, versée à la souscription."],
    ],
    forWho: ["MSSP et SOC", "ESN cyber et MSP", "CISO freelance, DPO, experts-comptables"],
    extract: "Un lead, un apporteur, une commission.",
  },
];

export const findLivreBlanc = (slug: string) => livresBlancs.find((l) => l.slug === slug);
