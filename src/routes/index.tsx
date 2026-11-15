import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Btn, Card, KeyFigures, TrustSeal } from "@/components/site";
import { InsurerMarquee } from "@/components/insurer-marquee";
import { CommissionMockup, GaugeMockup, PipelineMockup } from "@/components/ui-mockups";
import { fonctionnalites } from "@/lib/fonctionnalites";
import { CommissionSimulator } from "@/components/commission-simulator";
import { Radar, ClipboardCheck, Send, ShieldCheck, ShieldAlert, Server, Scale, type LucideIcon } from "lucide-react";

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
const figures = [["2 jours", "Délai de réponse ouvré à chaque demande"], ["1 lead = 1 commission", "Une règle d'apport simple et transparente"], ["100 % B2B", "PME, ETI et leurs prescripteurs"], ["Votre expertise", "Cyber, IT et conformité"]] as const;
const families = [
  ["Professionnels cyber", "MSSP / SOC, ESN cyber, CISO freelance, pentesters, experts forensic, éditeurs et intégrateurs sécurité."],
  ["Professionnels IT", "MSP, DSI externes, intégrateurs, prestataires cloud et télécom."],
  ["Professionnels de la conformité", "DPO externes, avocats, experts-comptables, DAF externes, consultants NIS2, DORA ou ISO 27001."],
] as const;

function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <section className="wrap sec relative lg:py-16">
        <div className="max-w-[880px]">
          <p className="eyebrow">Pour les professionnels cyber, IT et conformité</p>
          <h1 className="title-1 lg:!text-[44px]">Eliocyber, la plateforme de cyberassurance pour apporteurs d'affaires</h1>
          <p className="body-text max-w-[760px] text-[17px]">Recommandez vos clients, suivez vos dossiers et valorisez votre relation avec une commission d'apport. Eliocyber prend le relais pour le conseil, la présentation des offres et la souscription.</p>
          <p className="body-text text-[13px]">Vous informez et mettez en relation. Vous ne vendez pas d'assurance et ne conseillez pas de contrat.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn to="/devenir-partenaire">Devenir apporteur d'affaires</Btn>
            <Btn to="/comment-ca-marche" ghost>Découvrir le parcours</Btn>
          </div>
          <div className="mt-6"><Link to="/cadre-apporteur" className="text-sm font-semibold text-primary hover:underline">Comprendre le statut d'apporteur →</Link></div>
      <InsurerMarquee />

      <section className="wrap pt-10 lg:pt-14 pb-10 lg:pb-14" aria-label="Chiffres clés"><KeyFigures items={figures} /></section>

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

      <section className="band" aria-labelledby="outils"><div className="wrap sec">
        <p className="eyebrow">La suite de l'apporteur</p>
        <h2 id="outils" className="title-2">De la recommandation à la gestion de crise</h2>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {fonctionnalites.filter((f) => f.group === "partenaire").map((f) => <li key={f.slug} className="card-box flex flex-col"><h3 className="title-3">{f.name}</h3><p className="body-text flex-1">{f.summary}</p><Link to="/fonctionnalites/$slug" params={{ slug: f.slug }} className="mt-2 font-semibold text-primary hover:underline">Découvrir →</Link></li>)}
        </ul>
      </div></section>
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
    </>
  );
}
