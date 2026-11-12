export type Fonctionnalite = {
  slug: string;
  name: string;
  audience: string;
  tagline: string;
  summary: string;
  intro: string;
  features: [string, string][];
  steps: [string, string][];
  benefits: string[];
  faq: [string, string][];
};

export const fonctionnalites: Fonctionnalite[] = [
  {
    slug: "portail-msp",
    name: "Portail MSP",
    audience: "Pour les MSP, MSSP et ESN partenaires",
    tagline: "Tout votre portefeuille cyber, assurabilité comprise, dans un seul écran",
    summary: "Portefeuille clients, score d'assurabilité, devis, statut des dossiers, alertes, documents et commissions.",
    intro: "Le portail MSP centralise vos clients, leur niveau d'assurabilité et l'avancement de chaque dossier transmis au courtier. Vous suivez vos commissions sans relance.",
    features: [
      ["Portefeuille clients", "La liste de vos clients avec leur secteur, leur taille et leur statut d'assurance."],
      ["Score d'assurabilité", "Un score lisible par client, expliqué contrôle par contrôle."],
      ["Devis", "Les propositions émises par le courtier, consultables avec l'accord du client."],
      ["Statut des dossiers", "Reçu, en analyse, devis émis, souscrit : chaque étape est horodatée."],
      ["Alertes", "Échéances, contrôles en écart, pièces manquantes : vous êtes prévenu au bon moment."],
      ["Documents", "Rapports, preuves et attestations rangés par client."],
      ["Commissions", "Le montant et la date de versement de chaque commission d'apport."],
    ],
    steps: [["Ajoutez un client", "Identité, effectif, consentement."], ["Suivez son score", "Mis à jour à partir de vos données techniques."], ["Transmettez le dossier", "Le courtier prend le relais."], ["Suivez jusqu'à la commission", "Chaque étape est notifiée."]],
    benefits: ["Une vue unique sur tout le portefeuille", "Moins de relances par e-mail", "Des arguments concrets pour vos QBR"],
    faq: [["Mes clients voient-ils le portail MSP ?", "Non. Ils disposent de leur propre portail client."], ["Puis-je exporter mon portefeuille ?", "Oui, au format tableur."]],
  },
  {
    slug: "moteur-de-souscription",
    name: "Moteur de souscription",
    audience: "Pour le courtier, les assureurs et les MGA",
    tagline: "Des règles de souscription appliquées automatiquement, du questionnaire au contrat",
    summary: "Règles par assureur et MGA, questionnaires dynamiques, scoring, routing, referral, quotation et bind.",
    intro: "Le moteur de souscription applique les règles de chaque assureur ou MGA, pose uniquement les bonnes questions et oriente chaque dossier vers l'offre adaptée.",
    features: [
      ["Règles par assureur et MGA", "Appétit, seuils, exclusions et franchises paramétrés pour chaque porteur de risque."],
      ["Questionnaires dynamiques", "Les questions s'adaptent aux réponses et aux données déjà connues."],
      ["Scoring", "Un score de risque calculé à partir du questionnaire et des signaux techniques."],
      ["Routing", "Chaque dossier est dirigé vers les assureurs dont l'appétit correspond."],
      ["Referral", "Les cas hors règles remontent au souscripteur, avec le motif précis."],
      ["Quotation", "Des propositions tarifaires générées et comparables."],
      ["Bind", "La mise en place du contrat, une fois l'offre acceptée."],
    ],
    steps: [["Collecte", "Questionnaire dynamique et données pré-remplies."], ["Évaluation", "Scoring et application des règles."], ["Orientation", "Routing ou referral vers le souscripteur."], ["Offre et contrat", "Quotation puis bind."]],
    benefits: ["Des délais de réponse raccourcis", "Moins d'allers-retours sur les questionnaires", "Des décisions traçables et homogènes"],
    faq: [["Qui décide de l'offre finale ?", "Le courtier conseille le client et l'assureur garde la décision de souscription."], ["Les règles sont-elles modifiables ?", "Oui, par assureur ou MGA, avec historique des versions."]],
  },
  {
    slug: "moteur-de-risque",
    name: "Moteur de risque",
    audience: "Pour le courtier et les partenaires techniques",
    tagline: "La posture cyber réelle, comparée aux exigences des assureurs",
    summary: "Scans externes, intégrations techniques, normalisation des contrôles et détection des écarts aux exigences de souscription.",
    intro: "Le moteur de risque réunit des signaux externes et internes, les traduit en contrôles standardisés et montre précisément ce qui manque pour être assurable.",
    features: [
      ["Scans externes", "Surface d'exposition, services ouverts, certificats et configuration de messagerie."],
      ["Intégrations techniques", "Connexion aux outils EDR, sauvegarde, gestion des identités et RMM."],
      ["Normalisation des contrôles", "Chaque source est ramenée à un référentiel commun de contrôles."],
      ["Détection des écarts", "Comparaison automatique avec les exigences de chaque assureur."],
    ],
    steps: [["Collecte", "Scans et intégrations."], ["Normalisation", "Un référentiel unique."], ["Comparaison", "Écarts par assureur."], ["Restitution", "Un rapport compréhensible par le dirigeant."]],
    benefits: ["Des déclarations fondées sur des faits", "Moins de surprises à la souscription", "Une priorisation claire des chantiers"],
    faq: [["Les scans sont-ils intrusifs ?", "Non. Les scans externes n'observent que ce qui est visible depuis Internet."], ["Faut-il l'accord du client ?", "Oui, toujours, avant toute analyse."]],
  },
  {
    slug: "module-de-remediation",
    name: "Module de remédiation",
    audience: "Pour les MSP et les entreprises clientes",
    tagline: "Corriger les écarts, prouver les contrôles, améliorer l'assurabilité",
    summary: "Plan d'action, tâches MSP, suivi de mise en œuvre, preuve de contrôle et réévaluation.",
    intro: "Le module de remédiation transforme chaque écart en action concrète, attribuée et suivie, jusqu'à la preuve que le contrôle est en place.",
    features: [
      ["Plan d'action", "Les actions priorisées selon leur impact sur l'assurabilité."],
      ["Tâches MSP", "Chaque action est attribuée, avec une échéance."],
      ["Suivi de mise en œuvre", "L'avancement est visible par le MSP, le client et le courtier."],
      ["Preuve de contrôle", "Captures, exports et attestations horodatés."],
      ["Réévaluation", "Le score est recalculé dès qu'une preuve est validée."],
    ],
    steps: [["Écarts détectés", "Issus du moteur de risque."], ["Plan d'action", "Priorisé et attribué."], ["Mise en œuvre", "Suivie tâche par tâche."], ["Preuve et réévaluation", "Le score progresse."]],
    benefits: ["Un chemin clair vers l'assurabilité", "Des projets concrets pour le MSP", "Des preuves prêtes pour le renouvellement"],
    faq: [["Qui valide les preuves ?", "Le courtier vérifie leur conformité aux exigences."], ["Peut-on ajouter ses propres tâches ?", "Oui, en plus de celles proposées."]],
  },
  {
    slug: "portail-client",
    name: "Portail client final",
    audience: "Pour les PME et ETI assurées",
    tagline: "Votre assurance cyber, accessible et claire, à tout moment",
    summary: "Devis, souscription, documents, alertes, assistance et déclaration de sinistre.",
    intro: "Le portail client donne au dirigeant une vue simple de son contrat, de ses documents et de ses démarches, avec un accès direct à l'assistance en cas d'incident.",
    features: [
      ["Devis", "Les propositions du courtier, expliquées simplement."],
      ["Souscription", "L'acceptation de l'offre et la signature en ligne."],
      ["Documents", "Contrat, attestations, conditions générales et factures."],
      ["Alertes", "Échéances, pièces à fournir et actions de sécurité recommandées."],
      ["Assistance", "Un accès direct à l'assistance incident et au courtier."],
      ["Déclaration de sinistre", "Un formulaire guidé, suivi jusqu'à l'indemnisation."],
    ],
    steps: [["Recevez votre devis", "Avec les explications du courtier."], ["Souscrivez en ligne", "Signature électronique."], ["Retrouvez vos documents", "Toujours à jour."], ["Déclarez un sinistre", "En quelques minutes."]],
    benefits: ["Moins de démarches papier", "Une assistance joignable rapidement", "Un suivi transparent des sinistres"],
    faq: [["Le portail remplace-t-il le courtier ?", "Non. Votre courtier reste votre interlocuteur et vous conseille."], ["Que faire en cas d'incident en cours ?", "Contactez immédiatement l'assistance depuis le portail."]],
  },
];

export const findFonctionnalite = (slug: string) => fonctionnalites.find((f) => f.slug === slug);
