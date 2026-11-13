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
  /** "partenaire" = outils d'apport d'affaires ; absent = cœur de plateforme. */
  group?: "partenaire";
};

export const fonctionnalites: Fonctionnalite[] = [
  {
    slug: "attirer-vos-clients",
    group: "partenaire",
    name: "Attirer vos clients",
    audience: "Pour les partenaires apporteurs d'affaires",
    tagline: "Proposez l'assurance cyber au bon moment, sans rien expliquer",
    summary: "Liens et QR codes trackés, widget en marque blanche, formulaire de mise en relation et kit de communication.",
    intro: "Proposez l'assurance cyber au bon moment, sans rien expliquer. Vous orientez vos clients vers la plateforme, le courtier prend le relais.",
    features: [
      ["Liens et QR codes trackés", "Un bouton « Évaluer et assurer mon risque cyber » à insérer dans vos e-mails, propositions et rapports d'audit."],
      ["Widget en marque blanche", "Un module intégré à votre portail client ou à votre outil de ticketing. Le client reste dans votre environnement, et le parcours est opéré par la plateforme."],
      ["Formulaire de mise en relation", "Vous saisissez seulement le nom, l'entreprise, l'e-mail et le téléphone. Aucune question sur le risque n'est posée."],
      ["Kit de communication", "Bannières, plaquettes et e-mails validés en amont, avec un vocabulaire qui reste dans le cadre de l'apport d'affaires."],
    ],
    steps: [["Choisissez votre canal", "Lien, QR code, widget ou formulaire."], ["Partagez-le", "Dans vos échanges habituels avec vos clients."], ["Le client démarre", "Il suit le parcours sur la plateforme."], ["Le courtier prend le relais", "Réponse sous 2 jours ouvrés."]],
    benefits: ["Aucune explication technique ou assurantielle à fournir", "Des supports prêts à l'emploi", "Un parcours intégré à vos outils"],
    faq: [["Dois-je présenter les garanties à mon client ?", "Non. Vous informez seulement ; le courtier conseille et présente les offres."], ["Quelles données dois-je saisir ?", "Le nom, l'entreprise, l'e-mail et le téléphone, rien de plus."]],
  },
  {
    slug: "suivre-vos-prospects",
    group: "partenaire",
    name: "Suivre vos prospects",
    audience: "Pour les partenaires apporteurs d'affaires",
    tagline: "Gardez la visibilité sur vos recommandations, sans accéder aux données confidentielles du client",
    summary: "Pipeline en temps réel, alertes commerciales et dédoublonnage des prospects.",
    intro: "Gardez la visibilité sur vos recommandations, sans accéder aux données confidentielles du client. Vous voyez le statut commercial, jamais les réponses techniques ou médicales.",
    features: [
      ["Pipeline en temps réel", "Lien ouvert, devis généré, en attente de signature, contrat souscrit. Vous voyez le statut commercial, jamais les réponses techniques ou médicales."],
      ["Alertes commerciales", "Une notification dès qu'un client souscrit, utile pour valoriser sa maturité cyber."],
      ["Dédoublonnage", "La plateforme signale un prospect déjà transmis par un autre partenaire."],
    ],
    steps: [["Transmettez un prospect", "Par lien, widget ou formulaire."], ["Suivez son statut", "Lien ouvert, devis, signature."], ["Recevez l'alerte", "Dès la souscription."], ["Valorisez la démarche", "Auprès de votre client."]],
    benefits: ["Une vision claire de vos recommandations", "Aucune donnée confidentielle exposée", "Un lead, un apporteur, une commission"],
    faq: [["Puis-je voir les réponses de mon client ?", "Non. Vous ne voyez que le statut commercial du dossier."], ["Que se passe-t-il si un prospect a déjà été transmis ?", "La plateforme vous le signale : un lead, un apporteur, une commission."]],
  },
  {
    slug: "etre-paye-sans-effort",
    group: "partenaire",
    name: "Être payé sans effort",
    audience: "Pour les partenaires apporteurs d'affaires",
    tagline: "Une rémunération calculée et facturée automatiquement",
    summary: "Commissions en temps réel, facturation automatisée et historique exportable.",
    intro: "La rémunération est calculée et facturée automatiquement, dans le respect des règles fiscales.",
    features: [
      ["Commissions en temps réel", "Le montant d'apport généré par chaque souscription est affiché de façon transparente."],
      ["Facturation automatisée", "Chaque fin de mois, la facture d'apport est éditée en votre nom dans le cadre d'un mandat de facturation, avec la TVA applicable."],
      ["Historique et exports", "Relevés de commissions, suivi des paiements et exports pour votre comptabilité."],
    ],
    steps: [["Souscription", "Votre prospect devient client."], ["Calcul", "La commission s'affiche."], ["Facturation", "Éditée en fin de mois en votre nom."], ["Paiement", "Suivi et exportable."]],
    benefits: ["Aucune facture à rédiger", "Des montants transparents", "Des exports prêts pour votre comptabilité"],
    faq: [["Dois-je émettre mes factures ?", "Non. Elles sont éditées en votre nom dans le cadre d'un mandat de facturation."], ["La TVA est-elle gérée ?", "Oui, la TVA applicable figure sur chaque facture."]],
  },
  {
    slug: "conformite-et-securite",
    group: "partenaire",
    name: "Conformité et sécurité",
    audience: "Pour les partenaires apporteurs d'affaires",
    tagline: "Une activité encadrée et tracée, pour vous protéger face à l'ACPR et à la CNIL",
    summary: "Cadrage du statut, formation, contrôle des supports, journal des transmissions, consentement, RGPD et réclamations.",
    intro: "La plateforme encadre votre activité et garde la trace de chaque étape, pour vous protéger face à l'ACPR et à la CNIL.",
    features: [
      ["Cadrage de votre statut", "Déclaration écrite de votre statut d'apporteur, avec engagement de ne pas conseiller, datée et conservée."],
      ["Formation obligatoire", "Un court module sur les interdictions (conseil, présentation des garanties, collecte de données de risque), validé par un quiz avant la première transmission."],
      ["Contrôle des supports", "Les messages et documents que vous utilisez sont vérifiés, et les termes relevant du conseil en assurance sont signalés."],
      ["Journal des transmissions", "Pour chaque prospect, la date, la source, l'état du consentement et les actions réalisées. Ce journal peut être exporté en cas de contrôle."],
      ["Consentement automatisé", "Chaque prospect reçoit une demande de consentement avant tout traitement commercial."],
      ["Gestion des oppositions", "Un prospect qui refuse d'être contacté est exclu de toute nouvelle transmission."],
      ["Droits RGPD", "Le prospect exerce ses droits (accès, rectification, effacement) via la plateforme."],
      ["Réclamations", "Vous les transmettez au courtier immatriculé, avec accusé de réception."],
    ],
    steps: [["Déclarez votre statut", "Engagement écrit, daté et conservé."], ["Formez-vous", "Module court et quiz."], ["Transmettez", "Avec consentement automatisé."], ["Gardez la trace", "Journal exportable en cas de contrôle."]],
    benefits: ["Un cadre clair d'apporteur d'affaires", "Une traçabilité prête pour un contrôle", "Le respect des droits des prospects"],
    faq: [["Pourquoi une formation obligatoire ?", "Pour rappeler ce qu'un apporteur ne peut pas faire : conseiller, présenter des garanties ou collecter des données de risque."], ["Qui traite les réclamations ?", "Le courtier immatriculé ; vous les lui transmettez avec accusé de réception."]],
  },
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
