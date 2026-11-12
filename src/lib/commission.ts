/** Grille indicative de commission d'apport (prime annuelle en €). */
export const commissionGrid = [
  { label: "Prime annuelle inférieure à 1 000 €", value: "100 €" },
  { label: "De 1 000 € à 2 500 €", value: "200 €" },
  { label: "De 2 500 € à 5 000 €", value: "300 €" },
  { label: "Au-delà de 5 000 €", value: "10 % du revenu net" },
] as const;
