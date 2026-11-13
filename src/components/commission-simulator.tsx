import { useState } from "react";
import { commissionGrid, estimateMonthly } from "@/lib/commission";
import { Calculator } from "lucide-react";

export function CommissionSimulator() {
  const [n, setN] = useState(3);
  const [t, setT] = useState(1);
  const total = estimateMonthly(n, t);
  return (
    <div className="card-box">
      <div className="flex items-center gap-3"><span className="icon-chip"><Calculator className="size-5" aria-hidden /></span><h3 className="title-3 !mb-0">Simulateur de commission</h3></div>
      <label htmlFor="sim-n" className="mt-5 flex justify-between text-sm font-semibold text-foreground"><span>Dossiers souscrits par mois</span><span className="text-primary">{n}</span></label>
      <input id="sim-n" type="range" min={1} max={20} value={n} onChange={(e) => setN(Number(e.target.value))} className="mt-2 w-full accent-primary" />
      <label htmlFor="sim-t" className="mt-4 block text-sm font-semibold text-foreground">Prime annuelle moyenne de vos clients</label>
      <select id="sim-t" value={t} onChange={(e) => setT(Number(e.target.value))} className="field mt-2">
        {commissionGrid.map((g, i) => <option key={g.label} value={i}>{g.label}</option>)}
      </select>
      <div className="mt-5 rounded-lg bg-primary-soft px-4 py-3" aria-live="polite">
        <p className="text-[13px] text-primary-soft-foreground">Commission estimée par mois</p>
        <p className="font-display text-[26px] font-extrabold text-foreground">{total === null ? "10 % du revenu net" : `${total.toLocaleString("fr-FR")} €`}</p>
      </div>
      <p className="mt-3 text-[12px] text-muted-foreground">Estimation indicative, versée uniquement après souscription, prime encaissée et délai de rétractation dépassé.</p>
    </div>
  );
}
