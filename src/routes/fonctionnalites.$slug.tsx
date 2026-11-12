import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ChevronDown } from "lucide-react";
import { Card, CtaBanner, seo } from "@/components/site";
import { faqJsonLd } from "@/components/partner-landing";
import { findFonctionnalite, fonctionnalites } from "@/lib/fonctionnalites";

export const Route = createFileRoute("/fonctionnalites/$slug")({
  loader: ({ params }) => {
    const f = findFonctionnalite(params.slug);
    if (!f) throw notFound();
    return f;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? { ...seo(`/fonctionnalites/${params.slug}`, `${loaderData.name} — Fonctionnalités Eliocyber`, loaderData.summary), scripts: [faqJsonLd(loaderData.faq)] }
      : { meta: [{ title: "Fonctionnalité introuvable — Eliocyber" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const f = Route.useLoaderData();
  const others = fonctionnalites.filter((o) => o.slug !== f.slug);
  return (
    <>
      <nav aria-label="Fil d'Ariane" className="wrap pt-6 text-sm text-muted-foreground">
        <Link to="/fonctionnalites" className="hover:text-primary">Fonctionnalités</Link> / <span aria-current="page">{f.name}</span>
      </nav>
      <section className="wrap sec">
        <p className="eyebrow">{f.name} · {f.audience}</p>
        <h1 className="title-1">{f.tagline}</h1>
        <p className="body-text max-w-[720px] text-[17px]">{f.intro}</p>
        <ul className="mt-4 flex flex-wrap gap-2">{f.features.map(([t]) => <li key={t} className="pill">{t}</li>)}</ul>
      </section>

      <section className="band" aria-labelledby="fn">
        <div className="wrap sec">
          <p className="eyebrow">Fonctionnalités</p>
          <h2 id="fn" className="title-2">Ce que comprend {f.name}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {f.features.map(([t, x]) => <Card key={t} title={t} className="h-full"><p className="body-text">{x}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="fonct">
        <p className="eyebrow">Fonctionnement</p>
        <h2 id="fonct" className="title-2">En quatre étapes</h2>
        <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {f.steps.map(([t, x], i) => (
            <li key={t} className="card-box">
              <p className="text-2xl font-bold text-primary" aria-hidden>{String(i + 1).padStart(2, "0")}</p>
              <h3 className="title-3 mt-1">{t}</h3>
              <p className="body-text">{x}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band" aria-labelledby="ben">
        <div className="wrap sec">
          <h2 id="ben" className="title-2">Les bénéfices</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {f.benefits.map((b) => <li key={b} className="card-box flex gap-2"><Check className="mt-1 size-4 shrink-0 text-primary" aria-hidden />{b}</li>)}
          </ul>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="faq">
        <h2 id="faq" className="title-2">Questions fréquentes</h2>
        <div className="mt-4 space-y-3">
          {f.faq.map(([q, a]) => (
            <details key={q} className="card-box group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <h3 className="text-[16px]">{q}</h3><ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" aria-hidden />
              </summary>
              <p className="body-text mt-2 !mb-0">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="band" aria-labelledby="autres">
        <div className="wrap sec">
          <h2 id="autres" className="title-2">Les autres modules</h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((o) => <li key={o.slug}><Link to="/fonctionnalites/$slug" params={{ slug: o.slug }} className="card-box block h-full font-semibold hover:text-primary">{o.name}</Link></li>)}
          </ul>
        </div>
      </section>
      <div className="pt-14" />
      <CtaBanner title={`Découvrir ${f.name}`} text="Un courtier vous présente la plateforme et répond à vos questions." to="/contact" label="Être contacté" secondary={{ to: "/devenir-partenaire", label: "Devenir partenaire" }} />
    </>
  );
}
