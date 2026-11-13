import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn, Card, KeyFigures, TrustSeal, seo } from "@/components/site";
import { InsurerMarquee } from "@/components/insurer-marquee";
import { Radar, ClipboardCheck, Send, ShieldCheck, ShieldAlert, Server, Scale, type LucideIcon } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => seo("/", "Eliocyber — Réseau de prescripteurs en assurance cyber", "Vos experts cyber, IT et conformité identifient le risque, Eliocyber le transforme en protection. Devenez partenaire apporteur d'affaires."),
  component: Home,
});

const steps = [
  ["Détecter", "Le partenaire identifie un besoin de protection cyber chez son client."],
  ["Qualifier", "Formulaire court adapté à son métier et consentement du client."],
  ["Transmettre", "Le dossier arrive dans la file de production du courtier, avec score."],
  ["Conseiller", "Le courtier conseille, souscrit et gère le contrat. Le partenaire suit l'avancement."],
] as const;
const stepIcons: LucideIcon[] = [Radar, ClipboardCheck, Send, ShieldCheck];
const familyIcons: LucideIcon[] = [ShieldAlert, Server, Scale];
const figures = [["2 jours", "Délai de réponse ouvré à chaque demande"], ["1 lead = 1 commission", "Une règle d'apport simple et transparente"], ["100 % B2B", "PME, ETI et leurs prescripteurs"], ["3 familles", "Cyber, IT et conformité"]] as const;
const families = [
  ["Professionnels cyber", "MSSP / SOC, ESN cyber, CISO freelance, pentesters, experts forensic, éditeurs et intégrateurs sécurité."],
  ["Professionnels IT", "MSP, DSI externes, intégrateurs, prestataires cloud et télécom."],
  ["Professionnels de la conformité", "DPO externes, avocats, experts-comptables, DAF externes, consultants NIS2, DORA ou ISO 27001."],
] as const;

function Home() {
  return (
    <>
      <section className="wrap sec grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:py-16">
        <div>
          <p className="eyebrow">Réseau de prescripteurs cyber</p>
          <h1 className="title-1 lg:!text-[44px]">Vos experts identifient le risque. Nous le transformons en protection.</h1>
          <p className="body-text">Eliocyber connecte les professionnels de la cyber, de l'IT et de la conformité à notre cabinet de courtage en assurance cyber. Vos clients bénéficient d'un conseil spécialisé ; vous percevez une commission d'apport.</p>
          <p className="body-text text-[13px]">Les partenaires ne vendent pas l'assurance : ils informent et transmettent le dossier.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Btn to="/devenir-partenaire">Devenir partenaire</Btn>
            <Btn to="/comment-ca-marche" ghost>Découvrir le fonctionnement</Btn>
            <Link to="/solution" className="self-center text-sm font-semibold text-primary hover:underline">Vous êtes une entreprise ? →</Link>
          </div>
          <div className="mt-6"><TrustSeal /></div>
        </div>
        <aside className="card-box !p-7 shadow-lg" aria-label="Exemple de dossier">
          <p className="eyebrow flex items-center gap-2"><span className="live-dot" aria-hidden />Aperçu d'un dossier transmis</p>
          <h2 className="title-3 mt-3.5">PME industrielle, 48 postes</h2>
          <p className="body-text text-sm">Transmis par : Cabinet MSP Ouest</p>
          <div className="my-3 flex flex-wrap gap-2">
            <span className="pill">Score de priorité : élevé</span>
            <span className="pill !bg-secondary !text-secondary-foreground">Consentement recueilli</span>
          </div>
          <div className="my-4" aria-label="Maturité cyber estimée : 62 %">
            <div className="flex justify-between text-xs font-semibold text-muted-foreground"><span>Maturité cyber</span><span>62 %</span></div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted"><div className="h-full w-[62%] rounded-full bg-primary" /></div>
          </div>
          <p className="body-text text-sm">Contrôles manquants : sauvegardes testées, MFA sur accès privilégiés.</p>
          <Link to="/solution" className="text-sm font-semibold text-primary hover:underline">Voir le plan de remédiation →</Link>
        </aside>
      </section>

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

      <section className="wrap sec lg:py-16">
        <p className="eyebrow">Qui peut nous rejoindre</p>
        <h2 className="title-2 lg:!text-[28px]">Trois familles de partenaires</h2>
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
