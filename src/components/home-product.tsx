import { useState } from "react";
import { ArrowRight, BadgeCheck, Building2, Check, Handshake, Users } from "lucide-react";
import { Btn } from "@/components/site";
import { Button } from "@/components/ui/button";
import radar from "@/assets/eliocyber-logo-radar-clair.svg";

export function ClientPreview() {
  return (
    <aside className="overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-lift)]" aria-labelledby="client-preview-title">
      <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
        <img src={radar} alt="Eliocyber" className="w-28" />
        <span className="pill">Exemple illustratif</span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="eyebrow">Présentation express</p>
        <h2 id="client-preview-title" className="title-2 mt-2">Un client, rien de plus.</h2>
        <div className="mt-5 flex items-center gap-3 border-b border-border pb-5">
          <span className="icon-chip shrink-0"><Building2 className="size-5" aria-hidden /></span>
          <div className="min-w-0"><p className="font-semibold">PME industrielle</p><p className="text-xs text-muted-foreground">Recommandée par votre entreprise</p></div>
        </div>
        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 py-5 text-sm">
          <div><dt className="text-xs text-muted-foreground">Contact</dt><dd className="mt-1 font-semibold">Coordonnées transmises</dd></div>
          <div><dt className="text-xs text-muted-foreground">Autorisation</dt><dd className="mt-1 flex items-start gap-1.5 font-semibold"><Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Accord de contact</dd></div>
          <div><dt className="text-xs text-muted-foreground">Courtage</dt><dd className="mt-1 font-semibold">Prise en charge Eliocyber</dd></div>
          <div><dt className="text-xs text-muted-foreground">Votre relation</dt><dd className="mt-1 font-semibold">Co-branding</dd></div>
        </dl>
        <div className="flex items-center justify-between gap-3 border-y border-border py-3 text-xs">
          <span className="flex items-center gap-2 font-semibold text-primary"><BadgeCheck className="size-4" aria-hidden />Sans questionnaire</span>
          <span className="text-muted-foreground">Suivi partageable</span>
        </div>
        <Btn to="/devenir-partenaire" className="mt-5 w-full">Ouvrir un compte Pro <ArrowRight className="ml-2 size-4" aria-hidden /></Btn>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Aucune mission d’assurance à vendre. Aucun rôle de courtier à assumer.</p>
      </div>
    </aside>
  );
}

export function PartnerJourney({ steps }: { steps: [string, string][] }) {
  const [active, setActive] = useState(0);
  const icons = [Users, Handshake, BadgeCheck];
  const step = steps[active];
  const Icon = icons[active] ?? Users;
  if (!step) return null;
  return (
    <div className="min-w-0 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
      <p className="eyebrow">Le principe, en un coup d’œil</p>
      <div role="tablist" aria-label="Étapes de la relation partenaire" className="mt-5 grid grid-cols-3 gap-2" onKeyDown={(event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? 0 : event.key === "End" ? steps.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + steps.length) % steps.length;
        setActive(next);
        event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]?.focus();
      }}>
        {steps.map(([title], index) => <Button key={title} role="tab" id={`journey-tab-${index}`} aria-controls={`journey-panel-${index}`} aria-selected={active === index} tabIndex={active === index ? 0 : -1} variant="ghost" className={`h-auto min-h-16 flex-col gap-1 rounded-none border-b-2 px-1 py-3 whitespace-normal text-xs ${active === index ? "border-primary bg-primary-soft text-primary" : "border-border text-muted-foreground"}`} onClick={() => setActive(index)}><span className="font-display text-base font-bold">0{index + 1}</span>{["Vous présentez", "Nous assurons", "Vous suivez"][index]}</Button>)}
      </div>
      <div role="tabpanel" id={`journey-panel-${active}`} aria-labelledby={`journey-tab-${active}`} tabIndex={0} className="mt-6 min-h-64 sm:min-h-56">
        <span className="icon-chip"><Icon className="size-5" aria-hidden /></span>
        <h3 className="title-3 mt-4">{step[0]}</h3>
        <p className="text-sm leading-7 text-muted-foreground">{step[1]}</p>
      </div>
      <p className="mt-4 border-t border-border pt-4 text-sm font-semibold text-primary">Vous restez le prestataire de confiance. Nous restons le courtier.</p>
    </div>
  );
}