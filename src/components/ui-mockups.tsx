import { CheckCircle2, Circle, Coins, Activity } from "lucide-react";

const tag = <span className="rounded-full bg-secondary px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider text-muted-foreground">Exemple</span>;

export function PipelineMockup() {
  const rows = [["PME industrielle", "Souscrit · Commission validée", true], ["Cabinet comptable", "Conseil en cours", false], ["Groupe logistique", "Dossier reçu", false]] as const;
  return (
    <div className="card-box card-hover h-full">
      <div className="flex items-center justify-between"><span className="icon-chip !size-9"><Activity className="size-4" aria-hidden /></span>{tag}</div>
      <h3 className="title-3 mt-3">Suivi de vos prospects</h3>
      <ul className="mt-3 space-y-2">
        {rows.map(([n, s, ok]) => (
          <li key={n} className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2 text-[13px]">
            <span className="font-semibold text-foreground">{n}</span>
            <span className={ok ? "flex items-center gap-1.5 text-primary" : "flex items-center gap-1.5 text-muted-foreground"}>{ok ? <span className="live-dot" aria-hidden /> : <Circle className="size-2.5" aria-hidden />}{s}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function GaugeMockup() {
  const pct = 62, r = 42, c = 2 * Math.PI * r;
  const ctrls = [["EDR", true], ["MFA", true], ["Sauvegardes testées", false]] as const;
  return (
    <div className="card-box card-hover h-full">
      <div className="flex justify-end">{tag}</div>
      <div className="flex items-center gap-5">
        <svg viewBox="0 0 100 100" className="size-24 shrink-0 -rotate-90" role="img" aria-label={`Maturité cyber estimée ${pct} %`}>
          <circle cx="50" cy="50" r={r} fill="none" className="stroke-muted" strokeWidth="9" />
          <circle cx="50" cy="50" r={r} fill="none" className="stroke-primary" strokeWidth="9" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
        </svg>
        <div>
          <p className="font-display text-[28px] font-extrabold text-foreground">{pct} %</p>
          <p className="text-[13px] text-muted-foreground">Maturité cyber estimée</p>
        </div>
      </div>
      <ul className="mt-4 space-y-1.5 text-[13px]">
        {ctrls.map(([n, ok]) => <li key={n} className="flex items-center gap-2">{ok ? <CheckCircle2 className="size-4 text-primary" aria-hidden /> : <Circle className="size-4 text-muted-foreground" aria-hidden />}<span className={ok ? "text-foreground" : "text-muted-foreground"}>{n}</span></li>)}
      </ul>
    </div>
  );
}

export function CommissionMockup() {
  return (
    <div className="bg-ink-glow relative h-full overflow-hidden rounded-[14px] p-6 text-ink-foreground shadow-lg">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative">
        <div className="flex items-center justify-between"><span className="flex size-9 items-center justify-center rounded-[10px] border border-ink-foreground/25 text-ink-link"><Coins className="size-4" aria-hidden /></span><span className="rounded-full border border-ink-foreground/25 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-wider">Exemple</span></div>
        <p className="mt-4 text-[13px]">Commissions du mois</p>
        <p className="font-display text-[32px] font-extrabold text-primary-foreground">600 € HT</p>
        <p className="mt-1 flex items-center gap-2 text-[13px] text-ink-link"><span className="live-dot" aria-hidden />Facture générée automatiquement</p>
        <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-ink-foreground/15"><div className="h-full w-3/4 rounded-full bg-ink-link" /></div>
      </div>
    </div>
  );
}
