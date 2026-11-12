import { createFileRoute, Link } from "@tanstack/react-router";
import { Btn, Card, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => seo("/", "Eliocyber — Réseau de prescripteurs en assurance cyber", "Vos experts cyber, IT et conformité identifient le risque, Eliocyber le transforme en protection. Devenez partenaire apporteur d'affaires."),
  component: Home,
});

const steps = [
  ["Détecter", "Le partenaire identifie un besoin de protection cyber chez son client."],
  ["Qualifier", "Formulaire court adapté à son métier et consentement du client."],
  ["Transmettre", "Le dossier arrive dans la file de production du courtier, avec score."],
  ["Conseiller", "Le courtier conseille, souscrit et gère le contrat. Le partenaire suit l'avancement."],
];
const families = [
  ["Professionnels cyber", "MSSP / SOC, ESN cyber, CISO freelance, pentesters, experts forensic, éditeurs et intégrateurs sécurité."],
  ["Professionnels IT", "MSP, DSI externes, intégrateurs, prestataires cloud et télécom."],
  ["Professionnels de la conformité", "DPO externes, avocats, experts-comptables, DAF externes, consultants NIS2, DORA ou ISO 27001."],
];

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
            <Btn to="/contact">Devenir partenaire</Btn>
            <Btn to="/comment-ca-marche" ghost>Découvrir le fonctionnement</Btn>
          </div>
        </div>
        <aside className="card-box !p-7" aria-label="Exemple de dossier">
          <p className="eyebrow">Aperçu d'un dossier transmis</p>
          <h2 className="title-3 mt-3.5">PME industrielle, 48 postes</h2>
          <p className="body-text text-sm">Transmis par : Cabinet MSP Ouest</p>
          <div className="my-3 flex flex-wrap gap-2">
            <span className="pill">Score de priorité : élevé</span>
            <span className="pill !bg-secondary !text-secondary-foreground">Consentement recueilli</span>
          </div>
          <p className="body-text text-sm">Contrôles manquants : sauvegardes testées, MFA sur accès privilégiés.</p>
          <Link to="/solution" className="text-sm font-semibold text-primary hover:underline">Voir le plan de remédiation →</Link>
        </aside>
      </section>

      <section className="band">
        <div className="wrap sec lg:py-16">
          <p className="eyebrow">Parcours</p>
          <h2 className="title-2 lg:!text-[28px]">Comment ça marche</h2>
          <ol className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([t, d], i) => (
              <li key={t}><Card eyebrow={`Étape ${i + 1}`} title={t} className="h-full"><p className="body-text text-sm">{d}</p></Card></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap sec lg:py-16">
        <p className="eyebrow">Qui peut nous rejoindre</p>
        <h2 className="title-2 lg:!text-[28px]">Trois familles de partenaires</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {families.map(([t, d]) => <Card key={t} title={t}><p className="body-text text-sm">{d}</p></Card>)}
        </div>
        <figure className="card-box mt-8 border-l-4 !border-l-primary">
          <figcaption className="eyebrow">Mention de recommandation</figcaption>
          <blockquote className="mt-2.5 text-base text-foreground">« Recommandé par [Partenaire] — Conseil, souscription et gestion assurés par Eliocyber, courtier en assurance. »</blockquote>
        </figure>
      </section>
    </>
  );
}
