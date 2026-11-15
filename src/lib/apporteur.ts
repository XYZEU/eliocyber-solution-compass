/** Limits of the introducer role, distinct from regulated insurance distribution. */
export const apporteurActions = {
  informer: true,
  mettreEnRelation: true,
  conseiller: false,
  presenterContrat: false,
  annoncerPrix: false,
  signerDevis: false,
} as const;

export const apporteurSteps: [string, string, string][] = [
  ["Convention d'apport", "Cadrez votre relation avec Eliocyber", "Votre candidature est étudiée avant la conclusion de la convention : rôle, attribution des dossiers, rémunération et traitement des données sont précisés."],
  ["Formation", "Maîtrisez les limites de votre rôle", "Une formation courte et obligatoire rappelle ce que vous pouvez dire, les interdictions et le recueil du consentement."],
  ["Recommandation", "Mettez votre client en relation", "Avec son consentement, transmettez ses coordonnées par le canal convenu. Vous ne collectez pas de questionnaire d'assurance et ne présentez pas d'offre."],
  ["Conseil & souscription", "Eliocyber prend le relais", "Le courtier recueille les besoins, analyse l'éligibilité, présente les offres et accompagne la souscription. L'assureur conserve sa décision d'acceptation."],
  ["Commission", "Suivez votre rémunération", "Une commission unique devient éligible après souscription, prime encaissée et délai de rétractation dépassé, selon votre convention. La facturation automatisée suppose un mandat et les modalités fiscales applicables."],
  ["Gestion de crise", "Restez actif dans votre expertise", "Eliocyber pilote les échanges liés au sinistre avec l'assureur. La prise en charge de vos interventions dépend des garanties du contrat et de l'accord de l'assureur, sans automaticité."],
];