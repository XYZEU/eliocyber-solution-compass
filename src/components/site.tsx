import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const SITE_URL = "https://eliocyber.fr";

const nav = [
  { to: "/solution", label: "Solution" },
  { to: "/comment-ca-marche", label: "Comment ça marche" },
  { to: "/nos-partenaires", label: "Nos partenaires" },
] as const;

export function Btn({ to, children, ghost, className }: { to: "/contact" | "/comment-ca-marche" | "/nos-partenaires"; children: ReactNode; ghost?: boolean; className?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors",
        ghost
          ? "border-[1.5px] border-primary text-primary hover:bg-primary-soft"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link to="/" className="text-xl font-bold text-foreground" aria-label="Eliocyber, accueil">
          Eliocyber
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-6 text-sm md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-foreground hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" search={{ profil: "partenaire" }} className="text-foreground hover:text-primary">Accès partenaires</Link>
          <Btn to="/contact">Être contacté</Btn>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="flex flex-col gap-1 border-t border-border px-5 pb-5 pt-2 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2.5 text-foreground">{n.label}</Link>
          ))}
          <Link to="/contact" search={{ profil: "partenaire" }} onClick={() => setOpen(false)} className="py-2.5 text-foreground">Accès partenaires</Link>
          <span onClick={() => setOpen(false)} className="mt-2"><Btn to="/contact" className="w-full">Être contacté</Btn></span>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink px-0 py-4 text-[13px] leading-relaxed text-ink-foreground">
      <div className="wrap">
        Eliocyber est un courtier en assurance immatriculé à l'ORIAS sous le n° [XXX]. Le partenaire agit exclusivement en qualité d'apporteur d'affaires et n'est pas intermédiaire en assurance. Le conseil, la présentation des garanties, la souscription et la gestion du contrat sont assurés par Eliocyber. Réclamations et médiation : [coordonnées].{" "}
        <Link to="/mentions-legales" className="text-ink-link hover:underline">Mentions légales</Link>
        {" · "}
        <Link to="/mentions-legales" hash="donnees" className="text-ink-link hover:underline">Confidentialité</Link>
        <span className="mt-1 block opacity-70">© {new Date().getFullYear()} Eliocyber</span>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="wrap sec">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="title-1">{title}</h1>
      {children && <p className="body-text max-w-[720px] text-[17px]">{children}</p>}
    </section>
  );
}

export function Card({ eyebrow, title, children, className }: { eyebrow?: string; title: string; children: ReactNode; className?: string }) {
  return (
    <article className={cn("card-box", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 className={cn("title-3", eyebrow && "mt-2")}>{title}</h3>
      {children}
    </article>
  );
}

export function CtaBanner({ title, text, to, label }: { title: string; text: string; to: "/contact"; label: string }) {
  return (
    <section className="wrap pb-14">
      <div className="card-box flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="title-3">{title}</h2>
          <p className="body-text !mb-0">{text}</p>
        </div>
        <Btn to={to} className="shrink-0">{label}</Btn>
      </div>
    </section>
  );
}

export function seo(path: string, title: string, description: string) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
