import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, FileText } from "lucide-react";
import { useFormFeedback } from "@/components/form-feedback";
import { Card, seo } from "@/components/site";
import { findLivreBlanc, livresBlancs } from "@/lib/livres-blancs";

const label = "mb-1.5 mt-3.5 block text-[13px] font-semibold text-foreground";

export const Route = createFileRoute("/ressources/$slug")({
  loader: ({ params }) => {
    const lb = findLivreBlanc(params.slug);
    if (!lb) throw notFound();
    return lb;
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? {
          ...seo(`/ressources/${params.slug}`, `${loaderData.title} — Livre blanc gratuit | Eliocyber`, `${loaderData.summary} Livre blanc gratuit (PDF, ${loaderData.pages}).`, { type: "article", section: `Livres blancs — ${loaderData.audience}`, tags: ["assurance cyber", "livre blanc", loaderData.audience] }),
          scripts: [{ type: "application/ld+json", children: JSON.stringify([
            { "@context": "https://schema.org", "@type": "DigitalDocument", name: loaderData.title, description: loaderData.summary, encodingFormat: "application/pdf", inLanguage: "fr-FR", isAccessibleForFree: true, audience: { "@type": "Audience", audienceType: loaderData.audience }, publisher: { "@type": "Organization", name: "Eliocyber" }, url: `/ressources/${params.slug}` },
            { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: "/" },
              { "@type": "ListItem", position: 2, name: "Ressources", item: "/ressources" },
              { "@type": "ListItem", position: 3, name: loaderData.title, item: `/ressources/${params.slug}` },
            ] },
          ]) }],
        }
      : { meta: [{ title: "Livre blanc introuvable — Eliocyber" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const lb = Route.useLoaderData();
  const others = livresBlancs.filter((l) => l.slug !== lb.slug);
  return (
    <>
      <div className="hero-band"><nav aria-label="Fil d'Ariane" className="wrap pt-6 text-sm text-muted-foreground"><Link to="/ressources" className="hover:text-primary">Ressources</Link> / <span aria-current="page">Livre blanc</span></nav>
      <section className="wrap sec grid items-center gap-6 md:grid-cols-[1.4fr_1fr] md:gap-8">
        <div>
          <p className="eyebrow flex items-center gap-2"><span className="live-dot" aria-hidden />Livre blanc · {lb.audience}</p>
          <h1 className="title-1">{lb.title}</h1>
          <p className="body-text max-w-[620px] text-[17px]">{lb.intro}</p>
          <a href="#telecharger" className="mt-4 inline-flex w-full sm:w-auto items-center justify-center rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90">Recevoir le livre blanc</a>
        </div>
        <aside className="card-box border-primary" aria-label="Aperçu du document">
          <FileText className="size-8 text-primary" aria-hidden />
          <p className="title-3 mt-3">{lb.title}</p>
          <p className="body-text">PDF · {lb.pages} · gratuit</p>
          <blockquote className="border-l-2 border-primary pl-3 text-sm italic text-muted-foreground">« {lb.extract} »</blockquote>
        </aside>
      </section></div>

      <section className="band" aria-labelledby="apprendre">
        <div className="wrap sec">
          <p className="eyebrow">Au sommaire</p>
          <h2 id="apprendre" className="title-2">Ce que vous allez apprendre</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {lb.learn.map(([t, x]) => <Card key={t} title={t} className="h-full"><p className="body-text">{x}</p></Card>)}
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="pourqui">
        <p className="eyebrow">Pour qui ?</p>
        <h2 id="pourqui" className="title-2">Ce guide s'adresse à</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {lb.forWho.map((x) => <li key={x} className="pill inline-flex max-w-full items-center gap-1.5"><Check className="size-3.5" aria-hidden />{x}</li>)}
        </ul>
      </section>

      <DownloadForm title={lb.title} pdf={lb.pdf} audience={lb.audience} />

      <section className="wrap sec" aria-labelledby="autres">
        <h2 id="autres" className="title-2">Autres ressources</h2>
        <ul className="mt-4 grid gap-5 md:grid-cols-2">
          {others.map((o) => (
            <li key={o.slug} className="card-box">
              <p className="eyebrow">{o.audience}</p>
              <Link to="/ressources/$slug" params={{ slug: o.slug }} className="title-3 mt-2 block hover:text-primary">{o.title}</Link>
            </li>
          ))}
        </ul>
        <Link to="/ressources" className="mt-4 inline-block font-semibold text-primary hover:underline">Toutes les ressources</Link>
      </section>
    </>
  );
}

function DownloadForm({ title, pdf, audience }: { title: string; pdf: string; audience: string }) {
  // Ouverture synchrone dans le clic pour éviter le bloqueur de fenêtres.
  const { onSubmit, sent: done, Summary, Confirmation } = useFormFeedback(() => window.open(pdf, "_blank", "noopener"));
  return (
    <section id="telecharger" className="band scroll-mt-20" aria-labelledby="dl-title">
      <div className="wrap sec grid items-start gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <p className="eyebrow">Téléchargement gratuit</p>
          <h2 id="dl-title" className="title-2">Recevez le livre blanc</h2>
          <p className="body-text">Remplissez ce court formulaire : le document s'ouvre immédiatement au format PDF.</p>
        </div>
        <div className="card-box min-w-0">
          {done ? (
            <Confirmation title="Merci, votre livre blanc est prêt">
              <p>Le document s'est ouvert dans un nouvel onglet. S'il ne s'est pas ouvert, utilisez ce lien :</p>
              <a href={pdf} target="_blank" rel="noopener" className="inline-flex items-start gap-2 break-words font-semibold text-primary hover:underline"><FileText className="size-4" aria-hidden />Ouvrir « {title} » (PDF)</a>
            </Confirmation>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <Summary />
              <p className="mb-1 text-[13px] text-muted-foreground">Tous les champs sont obligatoires, sauf la fonction.</p>
              <div className="grid gap-x-4 sm:grid-cols-2">
                <div><label htmlFor="lp" className={label}>Prénom</label><input id="lp" name="prenom" required maxLength={80} autoComplete="given-name" className="field" /></div>
                <div><label htmlFor="ln" className={label}>Nom</label><input id="ln" name="nom" required maxLength={80} autoComplete="family-name" className="field" /></div>
              </div>
              <label htmlFor="le" className={label}>E-mail professionnel</label>
              <input id="le" name="email" type="email" required maxLength={255} autoComplete="email" className="field" />
              <div className="grid gap-x-4 sm:grid-cols-2">
                <div><label htmlFor="ls" className={label}>Société</label><input id="ls" name="societe" required maxLength={120} autoComplete="organization" className="field" /></div>
                <div><label htmlFor="lf" className={label}>Fonction</label><input id="lf" name="fonction" maxLength={120} autoComplete="organization-title" className="field" /></div>
              </div>
              <label htmlFor="lt" className={label}>{audience === "Partenaires" ? "Votre métier" : "Effectif"}</label>
              <select id="lt" name="profil" required defaultValue="" className="field">
                <option value="" disabled>Sélectionnez</option>
                {(audience === "Partenaires"
                  ? ["MSSP / SOC", "ESN cyber", "CISO freelance", "MSP / IT", "Conformité (DPO, avocat, expert-comptable)", "Autre"]
                  : ["Moins de 10 salariés", "10 à 49", "50 à 249", "250 et plus"]
                ).map((o) => <option key={o}>{o}</option>)}
              </select>
              <label className="mt-3.5 flex items-start gap-2 text-[13px]">
                <input type="checkbox" required className="mt-1 accent-primary" />
                <span>J'accepte qu'Eliocyber utilise ces informations pour m'envoyer ce document et me recontacter (<Link to="/mentions-legales" hash="donnees" className="text-primary underline">en savoir plus</Link>).</span>
              </label>
              <button type="submit" className="mt-4 w-full rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto">Ouvrir le livre blanc</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
