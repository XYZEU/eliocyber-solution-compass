import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Btn, Card, CtaBanner, TrustSeal } from "@/components/site";
import { InsurerMarquee } from "@/components/insurer-marquee";
import { ShieldAlert, Server, Scale, Check, FileCheck2, Handshake, Activity, Layers, Code2, ArrowRight, type LucideIcon } from "lucide-react";
import { ClientPreview, PartnerJourney } from "@/components/home-product";

const problemes: [string, string][] = [
  ["Le sujet n’est pas traité", "Votre client reste exposé, et vous passez à côté d’un vrai levier de valeur — sans avoir les moyens de le traiter vous-même."],
  ["La confiance entamée en cas de sinistre", "Si un piratage survient et que rien n’était prévu, c’est votre relation de confiance qui est touchée en premier."],
  ["Des interventions non prises en charge", "Sans pilotage assurance, certaines interventions peuvent ne pas être couvertes — même si votre client est assuré."],
  ["Des assureurs qui vendent vos services", "Certaines assurances cyber vendent des services cyber. Elles deviennent, de fait, vos concurrentes."],
];

export const Route = createFileRoute("/")({
  head: () => seo("/", "Eliocyber — Plateforme de cyberassurance pour apporteurs d’affaires", "Recommandez vos clients, suivez vos dossiers et vos commissions. Eliocyber, la plateforme de cyberassurance des professionnels cyber, IT et conformité."),
  component: Home,
});

const familyIcons: LucideIcon[] = [ShieldAlert, Server, Scale];
const figures = [["0", "questionnaire technique"], ["Co-branding", "à chaque étape"], ["Suivi", "partageable"]] as const;
const families = [
  ["EXPERTS TECHNIQUES", "MSP, MSSP, SOC, Intégrateurs, Cloud."],
  ["EXPERTS GOUVERNANCE", "ESN, DSI externes, Ciso externes, Dpo, Auditeurs."],
  ["EXPERTS EDITEURS", "Grc, Edr, Siem, Elearning, Scoring."],
] as const;
const promesses: [string, string][] = [
  ["Vous présentez, nous assurons", "Vous nous présentez le client : coordonnées + accord de contact. C’est tout. Aucun questionnaire technique à faire remplir, aucun devoir de conseil assurance à votre charge."],
  ["Nous faisons le courtage, en co-branding", "Eliocyber prend en charge le conseil, l’étude des besoins, la présentation des contrats et le suivi. Votre marque reste visible aux côtés de la nôtre, votre client ne vous perd jamais de vue."],
  ["Vous suivez, vous êtes rémunéré", "Vous avez le suivi de votre dossier, avec des étapes partageables. Quand le dossier aboutit, vous percevez une commission par type de client assuré."],
];
const figureIcons = [FileCheck2, Handshake, Activity];
const changements = [
  "Votre client est enfin couvert, sans que vous deveniez courtier",
  "Aucun risque réglementaire, les rôles sont clairs et formalisés",
  "En cas de sinistre, le pilotage assurance est assuré — votre relation est protégée",
  "Vous créez un revenu adjacent, sans vendre de services en plus, sans concurrencer qui que ce soit",
];
const offres = [
  {
    badge: "Integrated",
    dark: false,
    title: "Pour les partenaires de services",
    tags: "MSP · MSSP · ESN · DSI / RSSI externe · DPO",
    text: "Intégrez la présentation d’un client à votre accompagnement existant. Vous ne changez ni votre offre, ni votre relation, ni votre facturation.",
    points: [
      "Présentation simple, sans questionnaire technique",
      "Co-branding à chaque étape",
      "Suivi partageable avec votre client",
      "Aucune gestion de sinistre à votre charge",
    ],
  },
  {
    badge: "Embedded",
    dark: true,
    title: "Pour les éditeurs SaaS",
    tags: "Produits logiciels · plateformes · services en ligne",
    text: "Intégrez un parcours de présentation à votre produit ou à votre parcours client, avec des outils pensés pour une intégration propre et mesurable.",
    points: [
      "Liens trackés et pages co-brandées",
      "Widget ou iframe selon votre parcours",
      "API pour les parcours SaaS",
      "Mesure des présentations et des aboutissements",
    ],
  },
];

function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <section className="wrap sec relative grid items-center gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        <div className="min-w-0">
          <p className="eyebrow">POUR UNE CYBER RESILIENCE TOTALE</p>
          <h1 className="title-1">L’assurance cyber,<br />sans jamais concurrencer<br />votre métier.</h1>
          <p className="body-text max-w-[760px] text-[17px]">Gagnez un nouveau levier de valeur client, sans changer de métier, sans devenir courtier, sans concurrencer vos services. Eliocyber porte le courtage. Vous gardez votre relation.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn to="/devenir-partenaire">Ouvrir un compte Pro</Btn>
            <Btn to="/comment-ca-marche" ghost>Découvrir le parcours</Btn>
          </div>
          <div className="mt-6"><Link to="/cadre-apporteur" className="text-sm font-semibold text-primary hover:underline">Comprendre le statut d'apporteur →</Link></div>
          <div className="mt-6"><TrustSeal /></div>
        </div>
        <ClientPreview />
      </section>
      </div>
      <section className="bg-ink-glow relative overflow-hidden" aria-label="Chiffres clés">
        <dl className="wrap grid gap-5 py-6 sm:grid-cols-3 sm:py-8">
          {figures.map(([v, l], i) => {
            const Icon = figureIcons[i] ?? Activity;
            return (
            <div key={v} className="group flex items-center gap-4 rounded-lg border border-ink-foreground/20 px-6 py-5 transition-colors hover:border-ink-link/60">
              <Icon className="size-6 shrink-0 text-ink-link" aria-hidden />
              <div><dt className="sr-only">{l}</dt>
              <dd className="font-display text-[26px] font-extrabold text-ink-link">{v}</dd>
              <dd className="mt-1 text-sm leading-snug text-ink-foreground">{l}</dd></div>
            </div>
          );})}
        </dl>
      </section>
      <section className="bg-ink-glow relative overflow-hidden border-t border-primary-foreground/10" aria-labelledby="pourquoi">
        <div className="wrap sec">
          <p className="eyebrow !text-ink-link">Le problème que nous réglons</p>
          <h2 id="pourquoi" className="title-2 !text-primary-foreground">Pourquoi Eliocyber Pro existe</h2>
          <p className="mt-3 max-w-[60ch] text-[17px] leading-7 text-ink-foreground">Le besoin d’assurance cyber apparaît chez vos clients. Aujourd’hui, vous n’avez aucun moyen simple, conforme et non concurrentiel de le traiter.</p>
          <ol className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problemes.map(([t, d], i) => (
              <li key={t} className="home-problem-card group rounded-lg border border-ink-foreground/20 p-5">
                <span className="font-display text-sm font-bold text-ink-link transition-colors group-hover:text-primary-foreground">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-[17px] font-bold leading-snug text-primary-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-5 border-t border-ink-link/40 pt-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-link">La réponse Eliocyber Pro</p>
              <p className="mt-2 max-w-[62ch] text-lg font-semibold leading-snug text-primary-foreground">Vous présentez le client. Nous faisons le courtage. Vous restez le prestataire de confiance. Nous restons le courtier. Personne ne marche sur le métier de l’autre.</p>
            </div>
            <Btn to="/devenir-partenaire" onDark className="shrink-0">Ouvrir un compte Pro</Btn>
          </div>
        </div>
      </section>
      <section className="wrap sec relative" aria-labelledby="solution">
        <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow">La solution</p>
            <h2 id="solution" className="title-2">Un courtier cyber, intégré à votre relation client. <span className="text-primary">Pas à la place.</span></h2>
            <p className="body-text mt-3 max-w-[60ch] text-[17px]">Eliocyber Pro transforme un besoin que vous détectez déjà en un dossier traité, suivi et rémunéré — sans que vous changiez de métier.</p>
            <div className="mt-6 border-l-2 border-primary pl-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Co-branding, à chaque étape</p>
              <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
                <span className="rounded-full bg-foreground px-3 py-1 text-background">Votre marque</span><span aria-hidden>+</span>
                <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">Eliocyber</span><span aria-hidden>=</span>
                <span>une expérience claire pour votre client.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Votre marque reste visible aux côtés de la nôtre. Le client sait qui l’accompagne au quotidien et qui assure le courtage. Personne ne marche sur le métier de l’autre.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn to="/devenir-partenaire">Ouvrir un compte Pro</Btn>
              <Btn to="/comment-ca-marche" ghost>Voir le fonctionnement</Btn>
            </div>
          </div>
          <PartnerJourney steps={promesses} />
        </div>
      </section>
      <InsurerMarquee />

      <section className="wrap sec" aria-labelledby="concretement">
        <div className="bg-ink-glow relative overflow-hidden rounded-[24px] p-6 shadow-lg sm:p-8 lg:p-10">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 id="concretement" className="title-2 !text-primary-foreground">Ce que la solution change, concrètement</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {changements.map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 backdrop-blur-sm">
                  <Check className="mt-0.5 size-5 shrink-0 text-ink-link" aria-hidden />
                  <p className="text-[15px] font-semibold leading-snug text-primary-foreground">{t}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-relaxed text-ink-foreground">Concrètement, comment ça se passe au quotidien ? Voici le parcours en 4 étapes.</p>
              <Btn to="/comment-ca-marche" onDark className="shrink-0">Voir le fonctionnement →</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="wrap sec" aria-labelledby="offres">
        <p className="eyebrow">Offres partenaires</p>
        <h2 id="offres" className="title-2">Deux façons de collaborer, selon votre modèle.</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {offres.map((o) => (
            <article key={o.badge} className={`flex h-full flex-col rounded-lg border p-6 sm:p-8 ${o.dark ? "border-border bg-card" : "border-primary/40 bg-primary-soft/50"}`}>
              <div className="mb-6 flex items-center justify-between gap-4">
                <span className="icon-chip !size-11">{o.dark ? <Code2 className="size-5" aria-hidden /> : <Layers className="size-5" aria-hidden />}</span>
              <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${o.dark ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`}>{o.badge}</span></div>
              <h3 className="title-3 !text-[19px]">{o.title}</h3>
              <p className="mt-1 text-[13px] font-medium text-muted-foreground">{o.tags}</p>
              <p className="body-text mt-3 text-sm">{o.text}</p>
              <ul className="mt-5 grid gap-3 border-t border-border pt-5">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6"><Btn to="/devenir-partenaire" ghost>Ouvrir un compte Pro <ArrowRight className="ml-2 size-4" aria-hidden /></Btn></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap sec">
        <p className="eyebrow">Qui peut nous rejoindre</p>
        <h2 className="title-2">Une plateforme pour les experts de leurs clients</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {families.map(([t, d], i) => <Card key={t} icon={familyIcons[i]} title={t}><p className="body-text text-sm">{d}</p></Card>)}
        </div>
        <figure className="card-box mt-8 border-l-4 !border-l-primary">
          <figcaption className="eyebrow">Mention de recommandation</figcaption>
          <blockquote className="mt-2.5 text-base text-foreground">« Recommandé par [Partenaire] — Conseil, souscription et gestion assurés par Eliocyber, courtier en assurance. »</blockquote>
        </figure>
      </section>

      <CtaBanner title="Prêt à présenter votre premier client ?" text="Sans questionnaire technique. Sans changer de métier." to="/devenir-partenaire" label="Ouvrir un compte Pro" />
    </>
  );
}
