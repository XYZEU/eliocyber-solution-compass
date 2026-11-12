import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { Card, CtaBanner } from "@/components/site";
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
  testimonialsTitle: string;
  faq: [string, string][];
  finalTitle: string;
  finalText: string;
};

export function PartnerLanding({ d }: { d: LandingData }) {
  return (
    <>
      <nav aria-label="Sur cette page" className="border-b border-border bg-card">
        <ul className="wrap flex gap-5 overflow-x-auto py-3 text-sm">
          {[["probleme", "Problème"], ["services", "Services"], ["offre", "Offre"], ["questions", "Questions"]].map(([id, l]) => (
            <li key={id}><a href={`#${id}`} className="whitespace-nowrap text-muted-foreground hover:text-primary">{l}</a></li>
          ))}
          <li className="ml-auto"><Link to="/devenir-partenaire" className="whitespace-nowrap font-semibold text-primary">Devenir partenaire</Link></li>
        </ul>
      </nav>

      <section className="wrap sec grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">{d.eyebrow}</p>
          <h1 className="title-1">{d.h1}</h1>
          <p className="body-text max-w-[620px] text-[17px]">{d.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/devenir-partenaire" hash="candidature" className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90">{d.cta}</Link>
            <a href="#offre" className="inline-flex items-center justify-center rounded-lg border-[1.5px] border-primary px-5 py-3 text-[15px] font-semibold text-primary hover:bg-primary-soft">Voir l'offre</a>
          </div>
        </div>
        <aside className="card-box" aria-label={d.visual.label}>
          <p className="eyebrow">{d.visual.label}</p>
          {d.visual.title && <p className="title-3 mt-2">{d.visual.title}</p>}
          <p className="body-text mt-2">{d.visual.text}</p>
          {d.visual.items && <ul className="mt-3 flex flex-wrap gap-2">{d.visual.items.map((x) => <li key={x} className="pill">{x}</li>)}</ul>}
        </aside>
      </section>

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
          </div>
          <CommissionTable />
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="h-temoin">
        <p className="eyebrow">Témoignages</p>
        <h2 id="h-temoin" className="title-2">{d.testimonialsTitle}</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {[0, 1].map((i) => (
            <figure key={i} className="card-box">
              <p className="eyebrow">[Témoignage à recueillir]</p>
              <blockquote className="body-text mt-2 italic">« [Citation d'un partenaire, avec son accord écrit] »</blockquote>
              <figcaption className="text-sm text-muted-foreground">[Prénom, fonction, entreprise, avec autorisation de publication]</figcaption>
            </figure>
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
      <CtaBanner title={d.finalTitle} text={d.finalText} to="/devenir-partenaire" label={d.cta} secondary={{ to: "/nos-partenaires", label: "Tous les partenaires" }} />
    </>
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

export function faqJsonLd(faq: [string, string][]) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
    }),
  };
}
