import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => seo("/mentions-legales", "Mentions légales et réclamations — Eliocyber", "Mentions légales d'Eliocyber, courtier en assurance immatriculé à l'ORIAS : rôle des partenaires, rémunération, réclamations, médiation et données personnelles."),
  component: Page,
});

const blocks = [
  ["editeur", "Éditeur et intermédiaire", "Eliocyber, courtier en assurance immatriculé à l'ORIAS sous le n° [XXX]. Siège social : [à compléter]. Médiateur compétent : [à compléter]."],
  ["partenaires", "Rôle des partenaires", "Les partenaires agissent exclusivement en qualité d'apporteurs d'affaires. Ils ne sont pas intermédiaires en assurance, ne présentent ni ne recommandent de contrat et ne perçoivent aucune rémunération autre que la commission d'apport."],
  ["remuneration", "Rémunération", "La rémunération des partenaires est une commission d'apport versée à la souscription. Le détail des modalités figure dans le contrat partenaire."],
  ["reclamations", "Réclamations et médiation", "Toute réclamation peut être adressée à Eliocyber à [adresse de réclamation]. À défaut de réponse satisfaisante dans le délai indiqué, le client peut saisir le médiateur compétent."],
  ["donnees", "Données personnelles", "Les données transmises sont traitées conformément au RGPD. Voir la politique de confidentialité [lien à compléter]."],
];

function Page() {
  return (
    <>
      <PageIntro eyebrow="Informations légales" title="Mentions légales et réclamations" />
      <div className="wrap -mt-6 pb-14 lg:-mt-10">
        <div className="card-box">
          {blocks.map(([id, t, d], i) => (
            <section key={id} id={id} className={i ? "mt-5 scroll-mt-24" : "scroll-mt-24"}>
              <h2 className="title-3">{t}</h2>
              <p className="body-text">{d}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
