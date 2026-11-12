import { createFileRoute, Link } from "@tanstack/react-router";
import { useFormFeedback } from "@/components/form-feedback";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { seo, type Profil } from "@/components/site";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { profil?: Profil } =>
    s["profil"] === "partenaire" || s["profil"] === "entreprise" ? { profil: s["profil"] } : {},
  head: () => seo("/contact", "Contactez un courtier en assurance cyber — Eliocyber", "Échangez avec un courtier cyber sous 48h. Entreprises cherchant une couverture ou partenaires souhaitant transmettre un dossier, contactez-nous."),
  component: Page,
});

const copy = {
  entreprise: {
    title: "Votre demande de protection cyber",
    org: "Entreprise",
    orgPh: "Nom de votre entreprise",
    need: "Votre besoin",
    needPh: "Décrivez brièvement votre activité et votre situation (incident, renouvellement, exigence client…)",
    submit: "Être rappelé par un courtier",
  },
  partenaire: {
    title: "Rejoindre le réseau ou transmettre un dossier",
    org: "Société",
    orgPh: "Nom de votre structure",
    need: "Votre message",
    needPh: "Présentez votre activité et, le cas échéant, le besoin détecté chez votre client",
    submit: "Envoyer ma demande partenaire",
  },
} as const;

const label = "mb-1.5 mt-3.5 block text-[13px] font-semibold";

function Page() {
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const profil: Profil = search.profil ?? "entreprise";
  const c = copy[profil];
  const { onSubmit, sent, Summary, Confirmation } = useFormFeedback(() => {});

  return (
    <div className="wrap sec grid items-start gap-8 md:grid-cols-2 md:gap-6">
      <section aria-labelledby="contact-title">
        <p className="eyebrow">Contact</p>
        <h1 id="contact-title" className="title-1">Parlons de votre besoin</h1>
        <p className="body-text text-[17px]">Un courtier spécialisé en assurance cyber vous répond sous deux jours ouvrés.</p>
        <p className="pill mt-1 inline-flex items-center gap-1.5"><Clock className="size-3.5" aria-hidden />Réponse sous 2 jours ouvrés</p>
        <address className="card-box mt-5 not-italic">
          <h2 className="title-3">Coordonnées</h2>
          <ul className="mt-3 space-y-2.5 text-muted-foreground">
            <li className="flex gap-2.5"><MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Adresse : [à compléter]</li>
            <li className="flex gap-2.5"><Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />Téléphone : [à compléter]</li>
            <li className="flex gap-2.5"><Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />E-mail : [à compléter]</li>
          </ul>
        </address>
        <p className="body-text mt-4 text-sm">
          {profil === "partenaire"
            ? <>Avant de nous écrire, découvrez <Link to="/comment-ca-marche" className="font-semibold text-primary hover:underline">les 6 étapes du parcours partenaire</Link>.</>
            : <>Découvrez d'abord <Link to="/solution" className="font-semibold text-primary hover:underline">les garanties que nous proposons</Link>.</>}
        </p>
      </section>

      <section className="card-box" aria-labelledby="form-title">
        {sent ? (
          <Confirmation title="Merci, votre demande est bien enregistrée">
            <p id="form-title">Un courtier vous recontactera sous deux jours ouvrés.</p>
          </Confirmation>
        ) : (
          <form onSubmit={onSubmit} noValidate>
            <h2 id="form-title" className="title-2 !text-xl">Vous êtes…</h2>
            <div className="grid grid-cols-2 gap-1 rounded-xl bg-secondary p-1" role="radiogroup" aria-label="Votre profil">
              {(["entreprise", "partenaire"] as const).map((v) => (
                <button
                  key={v}
                  type="button"
                  role="radio"
                  aria-checked={profil === v}
                  onClick={() => navigate({ search: { profil: v }, replace: true, resetScroll: false })}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-semibold transition-colors",
                    profil === v ? "bg-card text-primary shadow-sm" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {v === "entreprise" ? "Une entreprise" : "Un partenaire"}
                </button>
              ))}
            </div>
            <p className="body-text mt-3 text-sm" aria-live="polite">{c.title}</p>
            <Summary />

            <div className="grid gap-x-4 sm:grid-cols-2">
              <div><label htmlFor="n" className={label}>Nom</label><input id="n" name="nom" required autoComplete="name" placeholder="Votre nom" className="field" /></div>
              <div><label htmlFor="o" className={label}>{c.org}</label><input id="o" name="organisation" required autoComplete="organization" placeholder={c.orgPh} className="field" /></div>
            </div>
            <label htmlFor="e" className={label}>E-mail professionnel</label>
            <input id="e" name="email" type="email" required autoComplete="email" placeholder="prenom@entreprise.fr" className="field" />

            {profil === "entreprise" ? (
              <>
                <label htmlFor="t" className={label}>Effectif</label>
                <select id="t" name="effectif" className="field" defaultValue="">
                  <option value="" disabled>Sélectionnez</option>
                  <option>Moins de 10 salariés</option><option>10 à 49</option><option>50 à 249</option><option>250 et plus</option>
                </select>
              </>
            ) : (
              <>
                <label htmlFor="f" className={label}>Famille de métier</label>
                <select id="f" name="famille" className="field" required defaultValue="">
                  <option value="" disabled>Sélectionnez</option>
                  <option>Cyber (MSSP, SOC, ESN cyber…)</option><option>IT (MSP, DSI externe…)</option><option>Conformité (DPO, avocat, expert-comptable…)</option>
                </select>
              </>
            )}

            <label htmlFor="m" className={label}>{c.need}</label>
            <textarea id="m" name="message" rows={4} required placeholder={c.needPh} className="field" />
            <label className="mt-3.5 flex items-start gap-2 text-[13px]">
              <input type="checkbox" required className="mt-1 accent-primary" />
              <span>J'accepte que mes données soient traitées pour répondre à ma demande (<Link to="/mentions-legales" hash="donnees" className="text-primary underline">en savoir plus</Link>).</span>
            </label>
            <button type="submit" className="mt-4 w-full rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90 sm:w-auto">{c.submit}</button>
            <p className="body-text mt-3 !mb-0 text-xs">Aucune recommandation ni promesse de prix ne peut être donnée à ce stade : le courtier vous conseille après analyse de votre situation.</p>
          </form>
        )}
      </section>
    </div>
  );
}
