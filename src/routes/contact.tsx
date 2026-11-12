import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { seo } from "@/components/site";

type Profil = "entreprise" | "partenaire";

export const Route = createFileRoute("/contact")({
  validateSearch: (s: Record<string, unknown>): { profil?: Profil } =>
    s["profil"] === "partenaire" || s["profil"] === "entreprise" ? { profil: s["profil"] } : {},
  head: () => seo("/contact", "Contact — Parlez à un courtier en assurance cyber | Eliocyber", "Entreprise ou partenaire, décrivez votre besoin : un courtier spécialisé en assurance cyber Eliocyber vous répond sous deux jours ouvrés."),
  component: Page,
});

function Page() {
  const search = Route.useSearch();
  const [profil, setProfil] = useState<Profil>(search.profil ?? "entreprise");
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) setSent(true);
  }

  const chip = (v: Profil, label: string) => (
    <button
      type="button"
      aria-pressed={profil === v}
      onClick={() => setProfil(v)}
      className={cn(
        "rounded-full border px-3.5 py-2 text-left text-sm transition-colors",
        profil === v ? "border-primary bg-primary text-primary-foreground" : "border-input bg-card text-foreground hover:border-primary",
      )}
    >
      {label}
    </button>
  );

  return (
    <div className="wrap sec grid items-start gap-8 md:grid-cols-2 md:gap-5">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="title-1">Parlons de votre besoin</h1>
        <p className="body-text text-[17px]">Un courtier spécialisé en assurance cyber vous répond sous deux jours ouvrés.</p>
        <address className="card-box mt-5 not-italic">
          <h2 className="title-3">Coordonnées</h2>
          <p className="body-text !mb-0">Adresse : [à compléter]<br />Téléphone : [à compléter]<br />E-mail : [à compléter]</p>
        </address>
      </div>
      <div className="card-box">
        {sent ? (
          <div role="status">
            <h2 className="title-2 !text-xl">Merci, votre demande est prête</h2>
            <p className="body-text">Un courtier vous recontactera sous deux jours ouvrés.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate={false}>
            <h2 className="title-2 !text-xl">Vous êtes…</h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Votre profil">
              {chip("entreprise", "Une entreprise qui cherche une protection cyber")}
              {chip("partenaire", "Un partenaire qui souhaite nous transmettre un dossier")}
            </div>
            <label htmlFor="n" className="mb-1.5 mt-3.5 block text-[13px] font-semibold">Nom</label>
            <input id="n" name="nom" type="text" required autoComplete="name" placeholder="Votre nom" className="field" />
            <label htmlFor="e" className="mb-1.5 mt-3.5 block text-[13px] font-semibold">E-mail professionnel</label>
            <input id="e" name="email" type="email" required autoComplete="email" placeholder="prenom@entreprise.fr" className="field" />
            <label htmlFor="m" className="mb-1.5 mt-3.5 block text-[13px] font-semibold">Votre besoin</label>
            <textarea id="m" name="besoin" rows={4} required placeholder="Décrivez brièvement votre situation" className="field" />
            <label className="mt-3.5 flex items-start gap-2 text-[13px]">
              <input type="checkbox" required className="mt-1 accent-primary" />
              J'accepte que mes données soient traitées pour répondre à ma demande.
            </label>
            <button type="submit" className="mt-4 rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground hover:bg-primary/90">Envoyer ma demande</button>
            <p className="body-text mt-3 !mb-0 text-xs">Aucune recommandation ni promesse de prix ne peut être donnée à ce stade : le courtier vous conseille après analyse de votre situation.</p>
          </form>
        )}
      </div>
    </div>
  );
}
