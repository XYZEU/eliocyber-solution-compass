/** Grille indicative de commission d'apport (prime annuelle en €). */
export const commissionGrid = [
  { label: "Prime annuelle inférieure à 1 000 €", value: "100 €" },
  { label: "De 1 000 € à 2 500 €", value: "200 €" },
  { label: "De 2 500 € à 5 000 €", value: "300 €" },
  { label: "Au-delà de 5 000 €", value: "10 % du revenu net" },
] as const;

/** Tranches de prime annuelle utilisées par le simulateur (index aligné sur commissionGrid). */
export const commissionFixed = [100, 200, 300, null] as const;

/** Estimation mensuelle : nombre de dossiers souscrits × commission fixe de la tranche. null = tranche à 10 % du revenu net. */
export function estimateMonthly(dossiers: number, tranche: number): number | null {
  const v = commissionFixed[tranche];
  if (v === undefined || v === null) return null;
  return Math.max(0, Math.round(dossiers)) * v;
}
