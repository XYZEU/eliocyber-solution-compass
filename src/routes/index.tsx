import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Btn, Card, TrustSeal } from "@/components/site";
import { InsurerMarquee } from "@/components/insurer-marquee";
import { CommissionMockup, GaugeMockup, PipelineMockup } from "@/components/ui-mockups";
import { CommissionSimulator } from "@/components/commission-simulator";
import { Radar, ClipboardCheck, Send, ShieldCheck, ShieldAlert, Server, Scale, Users, Handshake, BadgeCheck, Check, type LucideIcon } from "lucide-react";

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

const steps = [
  ["Détecter", "Le partenaire identifie un besoin de protection cyber chez son client."],
  ["Recommander", "Mise en relation avec le consentement du client, sans conseil en assurance."],
  ["Suivre", "L’apporteur suit le statut du dossier ; Eliocyber porte le conseil et la souscription."],
  ["Être rémunéré", "Commission selon la convention, après souscription, prime encaissée et délai de rétractation dépassé."],
] as const;
const stepIcons: LucideIcon[] = [Radar, ClipboardCheck, Send, ShieldCheck];
const familyIcons: LucideIcon[] = [ShieldAlert, Server, Scale];
const figures = [["0", "questionnaire technique"], ["2 min", "pour présenter un client"], ["Co-branding", "à chaque étape"], ["Suivi", "partageable"]] as const;
const families = [
  ["Professionnels cyber", "MSSP / SOC, ESN cyber, CISO freelance, pentesters, experts forensic, éditeurs et intégrateurs sécurité."],
  ["Professionnels IT", "MSP, DSI externes, intégrateurs, prestataires cloud et télécom."],
  ["Professionnels de la conformité", "DPO externes, avocats, experts-comptables, DAF externes, consultants NIS2, DORA ou ISO 27001."],
] as const;
const promesses: [string, string][] = [
  ["Vous présentez, nous assurons", "Vous nous présentez le client : coordonnées + accord de contact. C’est tout. Aucun questionnaire technique à faire remplir, aucun devoir de conseil assurance à votre charge."],
  ["Nous faisons le courtage, en co-branding", "Eliocyber prend en charge le conseil, l’étude des besoins, la présentation des contrats et le suivi. Votre marque reste visible aux côtés de la nôtre, votre client ne vous perd jamais de vue."],
  ["Vous suivez, vous êtes rémunéré", "Vous avez le suivi de votre dossier, avec des étapes partageables. Quand le dossier aboutit, vous percevez une commission par type de client assuré."],
];
const promiseIcons: LucideIcon[] = [Users, Handshake, BadgeCheck];
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
      <section className="wrap sec relative grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12 lg:py-16">
        <div className="min-w-0">
          <p className="eyebrow">POUR UNE CYBER RESILIENCE TOTALE</p>
          <h1 className="title-1 lg:!text-[44px]">L’assurance cyber,<br />sans jamais concurrencer<br />votre métier.</h1>
          <p className="body-text max-w-[760px] text-[17px]">Gagnez un nouveau levier de valeur client, sans changer de métier, sans devenir courtier, sans concurrencer vos services. Eliocyber porte le courtage. Vous gardez votre relation.</p>
          <p className="body-text text-[13px]">Accès gratuit</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn to="/devenir-partenaire">Devenir apporteur d'affaires</Btn>
            <Btn to="/comment-ca-marche" ghost>Découvrir le parcours</Btn>
          </div>
          <div className="mt-6"><Link to="/cadre-apporteur" className="text-sm font-semibold text-primary hover:underline">Comprendre le statut d'apporteur →</Link></div>
          <div className="mt-6"><TrustSeal /></div>
        </div>
        <aside className="rounded-[24px] border border-border bg-card p-6 shadow-lg sm:p-8" aria-labelledby="express-title">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Présentation express</p>
              <h2 id="express-title" className="mt-2 font-display text-2xl font-bold text-foreground">Un client, en 2 minutes.</h2>
            </div>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">Sans questionnaire</span>
          </div>
          <ol className="mt-6 grid gap-5">
            {[["Coordonnées + accord de contact","Vous transmettez l’essentiel, rien de plus."],["Prise en charge Eliocyber","Conseil, étude, présentation, suivi."],["Vous restez visible","Étapes partageables, en co-branding."]].map(([t,d],i)=>(
              <li key={t} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background">{i+1}</span>
                <div><p className="font-semibold text-foreground">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
              </li>
            ))}
          </ol>
          <Link to="/devenir-partenaire" className="mt-7 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-foreground px-5 font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">Présenter un client <span aria-hidden>→</span></Link>
          <p className="mt-4 text-center text-xs text-muted-foreground">Aucune mission d’assurance à vendre. Aucun rôle de courtier à assumer.</p>
        </aside>
      </section>
      </div>
      <section className="bg-ink-glow relative overflow-hidden" aria-label="Chiffres clés">
        <dl className="wrap grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:py-12">
          {figures.map(([v, l]) => (
            <div key={v} className="group rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-5 backdrop-blur-sm transition-colors hover:border-ink-link/60 hover:bg-primary-foreground/10">
              <dt className="sr-only">{l}</dt>
              <dd className="font-display text-[26px] font-extrabold tracking-tight text-ink-link">{v}</dd>
              <dd className="mt-1 text-sm leading-snug text-ink-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="bg-ink-glow relative overflow-hidden border-t border-primary-foreground/10" aria-labelledby="pourquoi">
        <div className="wrap sec lg:py-16">
          <p className="inline-flex rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-link">Le problème que nous réglons</p>
          <h2 id="pourquoi" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">Pourquoi Eliocyber Pro existe</h2>
          <p className="mt-3 max-w-[60ch] text-[17px] leading-7 text-ink-foreground">Le besoin d’assurance cyber apparaît chez vos clients. Aujourd’hui, vous n’avez aucun moyen simple, conforme et non concurrentiel de le traiter.</p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {problemes.map(([t, d], i) => (
              <li key={t} className="card-hover rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
                <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-[17px] font-bold leading-snug text-foreground">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </li>
            ))}
          </ol>
          <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-ink-link/40 bg-primary-foreground/5 p-6 md:flex-row md:items-center md:justify-between lg:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-link">La réponse Eliocyber Pro</p>
              <p className="mt-2 max-w-[62ch] text-lg font-semibold leading-snug text-primary-foreground">Vous présentez le client. Nous faisons le courtage. Vous restez le prestataire de confiance. Nous restons le courtier. Personne ne marche sur le métier de l’autre.</p>
            </div>
            <Btn to="/devenir-partenaire" onDark className="shrink-0">Ouvrir un compte Pro — gratuit →</Btn>
          </div>
        </div>
      </section>
      <section className="wrap sec relative lg:py-16" aria-labelledby="solution">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">La solution</p>
            <h2 id="solution" className="mt-4 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Un courtier cyber, intégré à votre relation client. <span className="text-primary">Pas à la place.</span></h2>
            <p className="body-text mt-3 max-w-[60ch] text-[17px]">Eliocyber Pro transforme un besoin que vous détectez déjà en un dossier traité, suivi et rémunéré — sans que vous changiez de métier.</p>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Co-branding, à chaque étape</p>
              <p className="mt-3 flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
                <span className="rounded-full bg-foreground px-3 py-1 text-background">Votre marque</span><span aria-hidden>+</span>
                <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">Eliocyber</span><span aria-hidden>=</span>
                <span>une expérience claire pour votre client.</span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Votre marque reste visible aux côtés de la nôtre. Le client sait qui l’accompagne au quotidien et qui assure le courtage. Personne ne marche sur le métier de l’autre.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Btn to="/devenir-partenaire">Ouvrir un compte Pro — gratuit →</Btn>
              <Btn to="/comment-ca-marche" ghost>Voir le fonctionnement</Btn>
            </div>
          </div>
          <div className="rounded-[24px] border border-border bg-muted/40 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Le principe, en un coup d’œil</p>
            <ol className="mt-5 grid gap-2">
              {([["Vous présentez", "Coordonnées + accord de contact.", false], ["Eliocyber assure le courtage", "Conseil, étude, contrat, suivi.", true], ["Vous suivez, vous êtes rémunéré", "Étapes partageables, commission à l’aboutissement.", false]] as const).map(([t, d, dark], i) => (
                <li key={t} className="grid gap-2">
                  {i > 0 && <span aria-hidden className="mx-auto text-primary">↓</span>}
                  <div className={dark ? "flex gap-4 rounded-2xl bg-ink-glow p-4 shadow-[var(--shadow-lift)]" : "flex gap-4 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)]"}>
                    <span className={i === 0 ? "grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-sm font-bold text-background" : "grid size-9 shrink-0 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground"}>{i + 1}</span>
                    <div><p className={dark ? "font-semibold text-primary-foreground" : "font-semibold text-foreground"}>{t}</p><p className={dark ? "text-sm text-ink-foreground" : "text-sm text-muted-foreground"}>{d}</p></div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-5 rounded-xl bg-secondary px-4 py-3 text-center text-sm font-semibold text-primary">Vous restez le prestataire de confiance. Nous restons le courtier.</p>
          </div>
        </div>
      </section>
      <section className="wrap sec relative lg:py-16" aria-label="Ce que chacun fait">
        <ul className="grid gap-5 md:grid-cols-3">
          {promesses.map(([t, d], i) => (
            <li key={t}><Card icon={promiseIcons[i]} title={t} className="h-full"><p className="body-text text-sm">{d}</p></Card></li>
          ))}
        </ul>
      </section>
      <InsurerMarquee />

      <section className="band">
        <div className="wrap sec lg:py-16">
          <p className="eyebrow">Parcours</p>
          <h2 className="title-2 lg:!text-[28px]">Comment ça marche</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}><Card icon={stepIcons[i]} eyebrow={`Étape ${i + 1}`} title={t} className="h-full"><p className="body-text text-sm">{d}</p></Card></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap sec lg:py-16" aria-labelledby="concretement">
        <div className="bg-ink-glow relative overflow-hidden rounded-[24px] p-6 shadow-lg sm:p-8 lg:p-10">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 id="concretement" className="font-display text-2xl font-extrabold tracking-tight text-primary-foreground sm:text-[28px]">Ce que la solution change, concrètement</h2>
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

      <section className="wrap sec lg:py-16" aria-labelledby="offres">
        <p className="eyebrow">Offres partenaires</p>
        <h2 id="offres" className="title-2 lg:!text-[28px]">Deux façons de collaborer, selon votre modèle.</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {offres.map((o) => (
            <article key={o.badge} className={`card-box flex h-full flex-col ${o.dark ? "border-border bg-card" : "border-primary bg-secondary"}`}>
              <span className={`inline-block self-start rounded-full px-3 py-1 text-xs font-semibold ${o.dark ? "bg-foreground text-background" : "bg-primary text-primary-foreground"}`}>{o.badge}</span>
              <h3 className="title-3 mt-4 !text-[19px]">{o.title}</h3>
              <p className="mt-1 text-[13px] font-medium text-muted-foreground">{o.tags}</p>
              <p className="body-text mt-3 text-sm">{o.text}</p>
              <ul className="mt-4 grid gap-2.5">
                {o.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />{p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap sec lg:py-16">
        <p className="eyebrow">Qui peut nous rejoindre</p>
        <h2 className="title-2 lg:!text-[28px]">Une plateforme pour les experts de leurs clients</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {families.map(([t, d], i) => <Card key={t} icon={familyIcons[i]} title={t}><p className="body-text text-sm">{d}</p></Card>)}
        </div>
        <figure className="card-box mt-8 border-l-4 !border-l-primary">
          <figcaption className="eyebrow">Mention de recommandation</figcaption>
          <blockquote className="mt-2.5 text-base text-foreground">« Recommandé par [Partenaire] — Conseil, souscription et gestion assurés par Eliocyber, courtier en assurance. »</blockquote>
        </figure>
      </section>

      <section className="wrap sec lg:py-16" aria-labelledby="apercu">
        <p className="eyebrow flex items-center gap-2"><span className="live-dot" aria-hidden />Votre plateforme d’apport d’affaires</p>
        <h2 id="apercu" className="title-2 lg:!text-[28px]">Vos recommandations, vos dossiers, vos commissions</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <PipelineMockup /><GaugeMockup /><CommissionMockup />
        </div>
        <div className="mt-8 grid items-start gap-8 md:grid-cols-[1fr_1.1fr]">
          <div>
            <h3 className="title-3 !text-[20px]">Estimez votre commission d'apport</h3>
            <p className="body-text">Une grille simple, appliquée à chaque dossier souscrit. Le partenaire n'intervient jamais sur le prix de l'assurance.</p>
            <div className="mt-4 flex flex-wrap gap-3"><Btn to="/devenir-partenaire">Devenir apporteur d'affaires</Btn><Btn to="/comment-ca-marche" ghost>Voir le parcours</Btn></div>
          </div>
          <CommissionSimulator />
        </div>
      </section>
    </>
  );
}
