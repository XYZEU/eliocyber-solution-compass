import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { PageIntro } from "@/components/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => seo("/mentions-legales", "Mentions légales et réclamations — Eliocyber Courtage", "Informations réglementaires d'Eliocyber, immatriculation ORIAS, procédure de réclamation et cadre juridique du statut d'apporteur d'affaires."),
  component: Page,
});

const blocks = [
  ["editeur", "Éditeur du site", "Eliocyber, [forme juridique] au capital de [à compléter], immatriculée au RCS de [à compléter] sous le n° [à compléter]. Siège social : [à compléter]. Directeur de la publication : [à compléter]. Hébergeur : [à compléter]."],
  ["courtier", "Statut de courtier en assurance", "Eliocyber exerce l'activité de courtier en assurance, immatriculé au registre unique des intermédiaires en assurance (ORIAS) sous le n° [XXX], vérifiable sur orias.fr. Eliocyber est soumis au contrôle de l'Autorité de contrôle prudentiel et de résolution (ACPR), 4 place de Budapest, CS 92459, 75436 Paris Cedex 09. Garantie financière et assurance de responsabilité civile professionnelle conformes au Code des assurances."],
  ["partenaires", "Rôle des apporteurs d'affaires", "Les partenaires agissent exclusivement en qualité d'apporteurs d'affaires. Ils ne sont pas intermédiaires en assurance, ne présentent ni ne recommandent de contrat, et se limitent à informer leur client et à transmettre ses coordonnées avec son consentement. Le conseil, la présentation des garanties, la souscription et la gestion du contrat sont assurés par Eliocyber."],
  ["remuneration", "Rémunération", "La rémunération des partenaires est une commission d'apport versée à la souscription, une fois la prime encaissée et le délai de rétractation dépassé. Le détail des modalités figure dans le contrat partenaire."],
  ["reclamations", "Traitement des réclamations", "Toute réclamation peut être adressée à Eliocyber à [adresse de réclamation] ou par e-mail à [à compléter]. Eliocyber en accuse réception sous 10 jours ouvrables et y répond dans un délai maximal de deux mois."],
  ["mediation", "Médiation de l'assurance", "À défaut de réponse satisfaisante dans ce délai, le client peut saisir gratuitement le médiateur compétent : [à compléter, par exemple La Médiation de l'Assurance, TSA 50110, 75441 Paris Cedex 09 — mediation-assurance.org]."],
  ["donnees", "Données personnelles", "Les données transmises sont traitées par Eliocyber, responsable de traitement, conformément au RGPD, aux seules fins de répondre aux demandes et de gérer les contrats. Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité en écrivant à [à compléter], ainsi que du droit d'introduire une réclamation auprès de la CNIL. Politique de confidentialité : [lien à compléter]."],
] as const;

function Page() {
  return (
    <>
      <PageIntro eyebrow="Informations légales" title="Mentions légales et réclamations" />
      <div className="wrap grid gap-6 pt-8 pb-14 lg:grid-cols-[220px_1fr]">
        <nav aria-label="Sommaire" className="hidden lg:block">
          <ul className="sticky top-24 space-y-2 text-sm">
            {blocks.map(([id, t]) => <li key={id}><a href={`#${id}`} className="text-muted-foreground hover:text-primary">{t}</a></li>)}
          </ul>
        </nav>
        <article className="card-box">
          {blocks.map(([id, t, d], i) => (
            <section key={id} id={id} aria-labelledby={`${id}-t`} className={i ? "mt-6 scroll-mt-24" : "scroll-mt-24"}>
              <h2 id={`${id}-t`} className="title-3">{t}</h2>
              <p className="body-text">{d}</p>
            </section>
          ))}
          <p className="body-text mt-6 border-t border-border pt-4 text-sm">Une question ou une réclamation ? <Link to="/contact" search={{ profil: "entreprise" }} className="font-semibold text-primary hover:underline">Contactez-nous</Link>.</p>
        </article>
      </div>
    </>
  );
}
