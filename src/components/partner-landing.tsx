import { Link } from "@tanstack/react-router";
import { Activity, ArrowRight, CheckCircle2, ChevronDown, FileText, ShieldCheck } from "lucide-react";
import { Btn, Card, CtaBanner } from "@/components/site";
import { commissionGrid } from "@/lib/commission";

export type LandingData = {
  slug: "mssp" | "esn" | "ciso";
  eyebrow: string;
  h1: string;
  intro: string;
  cta: string;
  visual: { label: string; title?: string; text: string; items?: string[] };
  problemTitle: string;
  problems: [string, string][];
  solutionTitle: string;
  solutionText: string;
  solutionRule: string;
  youBring: string;
  weBring: string;
  stepsTitle: string;
  steps: [string, string][];
  services: [string, string][];
  offerTitle: string;
  offerText: string;
  useCases: [string, string][];
  faq: [string, string][];
  finalTitle: string;
  finalText: string;
};

export function PartnerLanding({ d }: { d: LandingData }) {
  return (
    <>
      <nav aria-label="Sur cette page" className="border-b border-border bg-card">
        <ul className="wrap flex flex-wrap items-center gap-x-4 gap-y-0 py-1 text-sm sm:gap-x-5">
          {[["probleme", "Problème"], ["services", "Services"], ["offre", "Offre"], ["questions", "Questions"]].map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className="inline-flex min-h-11 items-center whitespace-nowrap text-muted-foreground hover:text-primary">{l}</a></li>
          ))}
          <li className="w-full border-t border-border sm:ml-auto sm:w-auto sm:border-0"><Link to="/devenir-partenaire" className="inline-flex min-h-11 items-center gap-1 whitespace-nowrap font-semibold text-primary hover:underline">Devenir apporteur d’affaires →</Link></li>
        </ul>
      </nav>

      <div className="hero-band"><section className="wrap sec grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div className="min-w-0">
          <nav aria-label="Fil d’Ariane" className="mb-4 text-[13px] leading-5 text-muted-foreground sm:mb-5 sm:text-sm">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-0">
              <li className="shrink-0"><Link to="/" className="inline-flex min-h-11 items-center rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Accueil</Link></li>
              <li className="inline-flex min-h-11 max-w-full items-center gap-2">
                <span aria-hidden="true" className="shrink-0">/</span>
                <Link to="/devenir-partenaire" hash="profils" className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Profils partenaires</Link>
              </li>
              <li className="inline-flex min-h-11 max-w-full items-center gap-2">
                <span aria-hidden="true" className="shrink-0">/</span>
                <span aria-current="page" className="min-w-0 font-medium text-foreground">{d.h1}</span>
              </li>
            </ol>
          </nav>
          <div className="mb-4 grid gap-3">
            <p className="eyebrow flex items-center gap-2"><span className="live-dot" aria-hidden />{d.eyebrow}</p>
            <h1 className="title-1 !m-0">{d.h1}</h1>
          </div>
          <p className="body-text w-full max-w-[60ch] text-[17px] leading-7">{d.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Btn to="/devenir-partenaire" hash="candidature">{d.cta}</Btn>
            <Btn href="#offre" ghost>Voir l'offre</Btn>
          </div>
        </div>
        <PartnerDashboard visual={d.visual} />
      </section></div>

      <section id="probleme" className="band scroll-mt-20" aria-labelledby="h-probleme">
        <div className="wrap sec">
          <p className="eyebrow">Le problème</p>
          <h2 id="h-probleme" className="title-2">{d.problemTitle}</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {d.problems.map(([t, x]) => <Card key={t} title={t} className="h-full"><p className="body-text">{x}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="h-solution">
        <p className="eyebrow">La solution</p>
        <h2 id="h-solution" className="title-2">{d.solutionTitle}</h2>
        <p className="body-text max-w-[720px]">{d.solutionText}</p>
        <p className="mt-3 font-semibold text-primary">{d.solutionRule}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card eyebrow="Vous" title="Ce que vous apportez"><p className="body-text">{d.youBring}</p></Card>
          <Card eyebrow="Eliocyber" title="Ce que nous apportons" className="!border-primary"><p className="body-text">{d.weBring}</p></Card>
        </div>
      </section>

      <section className="band" aria-labelledby="h-fonct">
        <div className="wrap sec">
          <p className="eyebrow">Fonctionnement</p>
          <h2 id="h-fonct" className="title-2">{d.stepsTitle}</h2>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.steps.map(([t, x], i) => (
              <li key={t} className="card-box">
                <p className="text-2xl font-bold text-primary" aria-hidden>{String(i + 1).padStart(2, "0")}</p>
                <h3 className="title-3 mt-1">{t}</h3>
                <p className="body-text">{x}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="services" className="wrap sec scroll-mt-20" aria-labelledby="h-services">
        <p className="eyebrow">Services</p>
        <h2 id="h-services" className="title-2">Ce que la plateforme met à votre disposition</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {d.services.map(([t, x]) => <Card key={t} title={t} className="h-full"><p className="body-text">{x}</p></Card>)}
        </div>
      </section>

      <section id="offre" className="band scroll-mt-20" aria-labelledby="h-offre">
        <div className="wrap sec grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <p className="eyebrow">Offre</p>
            <h2 id="h-offre" className="title-2">{d.offerTitle}</h2>
            <p className="body-text">{d.offerText}</p>
            <Btn to="/devenir-partenaire" hash="simulateur" ghost className="mt-3 min-h-11 gap-2">Estimer ma commission <ArrowRight className="size-4 shrink-0" aria-hidden /></Btn>
          </div>
          <CommissionTable />
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="h-usages">
        <p className="eyebrow">Dans votre activité</p>
        <h2 id="h-usages" className="title-2">Cas d’usage types</h2>
        <p className="body-text">Scénarios illustratifs, et non témoignages de partenaires ou résultats constatés.</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {d.useCases.map(([title, text]) => (
            <Card key={title} title={title} icon={FileText} className="flex h-full flex-col">
              <p className="body-text !mb-0 flex-1">{text}</p>
              <Link to="/devenir-partenaire" hash="candidature" className="mt-4 inline-flex min-h-11 self-start items-center gap-1.5 rounded-sm text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Devenir apporteur d’affaires <ArrowRight className="size-4 shrink-0" aria-hidden /></Link>
            </Card>
          ))}
        </div>
      </section>

      <section id="questions" className="band scroll-mt-20" aria-labelledby="h-faq">
        <div className="wrap sec">
          <p className="eyebrow">Questions fréquentes</p>
          <h2 id="h-faq" className="title-2">Vos questions</h2>
          <div className="mt-5 space-y-3">
            {d.faq.map(([q, a]) => (
              <details key={q} className="card-box group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-foreground">
                  <h3 className="text-[16px]">{q}</h3>
                  <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
                </summary>
                <p className="body-text mt-2 !mb-0">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-14" />
      <CtaBanner title={d.finalTitle} text={d.finalText} to="/devenir-partenaire" label={d.cta} secondary={{ to: "/devenir-partenaire", hash: "profils", label: "Tous les partenaires" }} />
    </>
  );
}

function PartnerDashboard({ visual }: { visual: LandingData["visual"] }) {
  return (
    <aside className="min-w-0 overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-lift)]" aria-label={visual.label}>
      <div className="flex items-center justify-between gap-3 border-b border-border bg-secondary px-5 py-3">
        <span className="flex min-w-0 items-center gap-2 text-sm font-semibold"><Activity className="size-4 shrink-0 text-primary" aria-hidden />Suivi du dossier</span>
        <span className="shrink-0 text-xs text-muted-foreground">Exemple fictif</span>
      </div>
      <div className="p-5 sm:p-6">
        <p className="eyebrow">{visual.label}</p>
        <h2 className="mt-2 font-display text-lg font-semibold leading-6 tracking-normal">{visual.title ?? "Dossier client"}</h2>
        <ol className="my-5 grid grid-cols-3 gap-2 border-y border-border py-4 text-xs leading-5">
          {["Consentement", "Transmission", "Relais courtier"].map((step, i) => <li key={step} className="min-w-0"><span className={i < 2 ? "mb-2 flex size-7 items-center justify-center rounded-full bg-primary-soft text-primary" : "mb-2 flex size-7 items-center justify-center rounded-full bg-secondary text-muted-foreground"}>{i < 2 ? <CheckCircle2 className="size-4" aria-hidden /> : <ShieldCheck className="size-4" aria-hidden />}</span><span className="font-medium">{step}</span></li>)}
        </ol>
        <p className="body-text text-sm leading-6">{visual.text}</p>
        {visual.items && <ul className="mt-4 space-y-2">{visual.items.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-5 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{item}</li>)}</ul>}
      </div>
      <div className="flex items-start gap-2 border-t border-border bg-primary-soft px-5 py-3 text-xs leading-5 text-primary-soft-foreground"><ShieldCheck className="mt-0.5 size-4 shrink-0" aria-hidden />Vous transmettez, le courtier conseille.</div>
    </aside>
  );
}

export function CommissionTable() {
  return (
    <div className="card-box">
      <h3 className="title-3">Commission d'apport</h3>
      <table className="mt-3 w-full text-[15px]">
        <caption className="sr-only">Grille de commission selon la prime annuelle</caption>
        <tbody>
          {commissionGrid.map((r) => (
            <tr key={r.label} className="border-b border-border last:border-0">
              <th scope="row" className="py-2.5 pr-3 text-left font-normal text-muted-foreground">{r.label}</th>
              <td className="py-2.5 text-right font-bold text-foreground">{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-[13px] text-muted-foreground">Versée à la souscription, prime encaissée et délai de rétractation dépassé. Grille indicative, sous réserve du contrat partenaire.</p>
    </div>
  );
}

