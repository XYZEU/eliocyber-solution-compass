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
    tagline: "Recommandez vos clients au bon moment, sans conseiller l’assurance",
    summary: "Liens et QR codes trackés, widget en marque blanche, formulaire de mise en relation et kit de communication.",
    intro: "Recommandez vos clients au bon moment, sans conseiller l’assurance. Vous orientez vos clients vers la plateforme, le courtier prend le relais.",
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
    intro: "Suivez vos commissions d'apport et vos paiements. La facturation automatisée s'inscrit dans un mandat, selon votre situation fiscale et les conditions de votre convention.",
    features: [
      ["Commissions en temps réel", "Le montant d'apport et son éligibilité sont suivis selon votre convention, après souscription, prime encaissée et délai de rétractation dépassé."],
      ["Facturation automatisée", "Selon le mandat convenu, la facture d'apport peut être éditée en votre nom en fin de mois, avec la TVA applicable à votre situation."],
      ["Historique et exports", "Relevés de commissions, suivi des paiements et exports pour votre comptabilité."],
    ],
    steps: [["Souscription", "Votre prospect devient client."], ["Calcul", "La commission s'affiche."], ["Facturation", "Éditée en fin de mois en votre nom."], ["Paiement", "Suivi et exportable."]],
    benefits: ["Aucune facture à rédiger", "Des montants transparents", "Des exports prêts pour votre comptabilité"],
    faq: [["Dois-je émettre mes factures ?", "L'édition en votre nom suppose un mandat de facturation convenu. À défaut, les modalités de facturation prévues à la convention s'appliquent."], ["La TVA est-elle gérée ?", "La TVA dépend de votre situation fiscale ; les modalités applicables sont précisées avec votre convention et votre mandat."]],
  },
  {
    slug: "agir-en-cas-de-crise",
    group: "partenaire",
    name: "Agir en cas de crise",
    audience: "Pour les partenaires cyber, MSSP, ESN et CISO",
    tagline: "Intervenez auprès de votre client, avec notre pilotage du sinistre auprès de l'assureur",
    summary: "Coordination de crise, intervention du partenaire et suivi de la demande de prise en charge des frais d'expertise, selon les garanties du contrat et l'accord de l'assureur.",
    intro: "En cas d'incident cyber, vous restez actif aux côtés de votre client pour mener les interventions techniques relevant de votre expertise. Eliocyber pilote les échanges liés au sinistre auprès de l'assureur et accompagne la demande de prise en charge de vos interventions, selon les garanties du contrat et l'accord de l'assureur.",
    features: [
      ["Un partenaire actif dans la crise", "Vous apportez votre connaissance du système d'information du client et réalisez les interventions techniques convenues avec les intervenants mobilisés."],
      ["Pilotage auprès de l'assureur", "Eliocyber accompagne la déclaration et le suivi du sinistre, centralise les échanges avec l'assureur et facilite la coordination entre le client et les intervenants."],
      ["Cadrage des interventions d'expertise", "Le périmètre, les justificatifs et les coûts de vos interventions sont documentés pour permettre leur examen par l'assureur. Les modalités d'accord préalable sont vérifiées selon le contrat et la procédure de crise."],
      ["Accompagnement de la demande de prise en charge", "Nous suivons votre demande de prise en charge des frais d'intervention. Son acceptation dépend des garanties du contrat et de l'accord de l'assureur, dans les limites des plafonds, franchises et exclusions applicables. Aucune prise en charge n'est automatique ni garantie."],
    ],
    steps: [
      ["Alerte et déclaration", "Le client contacte l'assistance prévue au contrat ; vous contribuez à réunir les premiers éléments techniques."],
      ["Coordination", "Eliocyber pilote les échanges avec l'assureur pour cadrer les interventions et vérifier les conditions d'une éventuelle prise en charge, selon les garanties du contrat et l'accord de l'assureur."],
      ["Intervention technique", "Vous réalisez les actions convenues et conservez les preuves, rapports et justificatifs de vos interventions."],
      ["Suivi des frais", "Eliocyber accompagne la transmission des justificatifs et suit la décision de l'assureur. La prise en charge des frais reste soumise aux garanties du contrat et à son accord."],
    ],
    benefits: ["Un rôle technique actif auprès de votre client", "Un interlocuteur pour piloter les échanges avec l'assureur", "Vos interventions d'expertise documentées pour la demande de prise en charge"],
    faq: [
      ["Mes interventions sont-elles automatiquement prises en charge ?", "Non. Leur prise en charge dépend des garanties du contrat et de l'accord de l'assureur, dans les limites des plafonds, franchises et exclusions applicables. Eliocyber vous accompagne pour cadrer et documenter la demande, sans garantir son acceptation."],
      ["Mon rôle d'apporteur d'affaires change-t-il pendant la crise ?", "Non. Vous intervenez dans votre domaine d'expertise technique. Vous ne conseillez pas le client en assurance et ne décidez pas de l'indemnisation ; Eliocyber pilote les échanges assurantiels et l'assureur statue sur la prise en charge."],
    ],
  },
  {
    slug: "conformite-et-securite",
    group: "partenaire",
    name: "Conformité et sécurité",
    audience: "Pour les partenaires apporteurs d'affaires",
    tagline: "Un cadre clair et des transmissions tracées pour votre activité d'apporteur",
    summary: "Cadrage du statut, formation, contrôle des supports, journal des transmissions, consentement, RGPD et réclamations.",
    intro: "La plateforme accompagne le respect des limites de l'apport d'affaires, du consentement et des droits des prospects. Vous restez responsable de vos actes ; la traçabilité n'est pas une garantie de conformité.",
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
];

export const coreModules = [
  { legacySlug: "portail-msp", name: "Portail MSP", summary: "Portefeuille clients, score d'assurabilité, devis, statut des dossiers, alertes, documents et commissions." },
  { legacySlug: "moteur-de-souscription", name: "Moteur de souscription", summary: "Règles par assureur et MGA, questionnaires dynamiques, scoring, routing, referral, quotation et bind." },
  { legacySlug: "moteur-de-risque", name: "Moteur de risque", summary: "Scans externes, intégrations techniques, normalisation des contrôles et détection des écarts aux exigences de souscription." },
  { legacySlug: "module-de-remediation", name: "Module de remédiation", summary: "Plan d'action, tâches MSP, suivi de mise en œuvre, preuve de contrôle et réévaluation." },
  { legacySlug: "portail-client", name: "Portail client final", summary: "Devis, souscription, documents, alertes, assistance et déclaration de sinistre." },
];

export const findFonctionnalite = (slug: string) => fonctionnalites.find((f) => f.slug === slug);
