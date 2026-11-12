import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";


const nav = [
  { to: "/solution", label: "Solution" },
  { to: "/fonctionnalites", label: "Vue d'ensemble" },
  { to: "/comment-ca-marche", label: "Comment ça marche" },
  { to: "/nos-partenaires", label: "Nos partenaires" },
  { to: "/ressources", label: "Ressources" },
] as const;

type BtnTo = "/contact" | "/comment-ca-marche" | "/nos-partenaires" | "/solution" | "/devenir-partenaire";
export type Profil = "entreprise" | "partenaire";

export function Btn({ to, children, ghost, className, profil }: { to: BtnTo; children: ReactNode; ghost?: boolean; className?: string; profil?: Profil | undefined }) {
  const cls = cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors",
        ghost
          ? "border-[1.5px] border-primary text-primary hover:bg-primary-soft"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      );
  if (to === "/contact") return <Link to="/contact" search={profil ? { profil } : {}} className={cls}>{children}</Link>;
  return <Link to={to} className={cls}>{children}</Link>;
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
          <Link to="/devenir-partenaire" className="text-foreground hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>Devenir partenaire</Link>
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
          <Link to="/devenir-partenaire" onClick={() => setOpen(false)} className="py-2.5 text-foreground">Devenir partenaire</Link>
          <span onClick={() => setOpen(false)} className="mt-2"><Btn to="/contact" className="w-full">Être contacté</Btn></span>
        </nav>
      )}
    </header>
  );
}

const footerCols = [
  { title: "Entreprises", links: [
    { to: "/solution", label: "Nos garanties cyber" },
    { to: "/fonctionnalites", label: "Vue d'ensemble" },
    { to: "/ressources", label: "Livres blancs" },
    { to: "/contact", label: "Parler à un courtier", search: { profil: "entreprise" as const } },
  ] },
  { title: "Partenaires", links: [
    { to: "/partenaires/mssp", label: "MSSP et SOC" },
    { to: "/partenaires/esn", label: "ESN cyber" },
    { to: "/partenaires/ciso", label: "CISO freelance" },
    { to: "/nos-partenaires", label: "Tous les partenaires" },
    { to: "/devenir-partenaire", label: "Devenir partenaire" },
  ] },
  { title: "Plateforme", links: [
    { to: "/fonctionnalites/portail-msp", label: "Portail MSP" },
    { to: "/fonctionnalites/moteur-de-souscription", label: "Moteur de souscription" },
    { to: "/fonctionnalites/moteur-de-risque", label: "Moteur de risque" },
    { to: "/fonctionnalites/module-de-remediation", label: "Remédiation" },
    { to: "/fonctionnalites/portail-client", label: "Portail client" },
  ] },
] as const;

const fLink = "text-ink-link transition-colors hover:text-primary-foreground hover:underline";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-[14px] leading-relaxed text-ink-foreground">
      <div className="wrap grid gap-10 py-12 md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-8">
        <div className="min-w-0">
          <Link to="/" className="text-xl font-bold text-primary-foreground" aria-label="Eliocyber, accueil">Eliocyber</Link>
          <p className="mt-3 max-w-[300px]">Courtier spécialisé en assurance cyber pour les PME et ETI, avec un réseau de partenaires cyber, IT et conformité.</p>
          <address className="mt-4 space-y-1.5 not-italic">
            <p className="flex items-center gap-2"><Mail className="size-4 shrink-0" aria-hidden /><a href="mailto:bonjour@eliocyber.fr" className={fLink}>bonjour@eliocyber.fr</a></p>
            <p className="flex items-center gap-2"><Phone className="size-4 shrink-0" aria-hidden />[Téléphone]</p>
            <p className="flex items-center gap-2"><MapPin className="size-4 shrink-0" aria-hidden />[Adresse]</p>
          </address>
          <Link to="/contact" className="mt-5 inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-[14px] font-semibold text-primary-foreground hover:bg-primary/90">Être contacté</Link>
        </div>
        <nav aria-label="Plan du site" className="contents">
          {footerCols.map((col) => (
            <div key={col.title} className="min-w-0">
              <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    {"search" in l
                      ? <Link to="/contact" search={l.search} className={fLink}>{l.label}</Link>
                      : <Link to={l.to} className={fLink}>{l.label}</Link>}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="border-t border-ink-foreground/20">
        <div className="wrap py-6 text-[12px]">
          <p className="opacity-80">Eliocyber est un courtier en assurance immatriculé à l'ORIAS sous le n° [XXX]. Le partenaire agit exclusivement en qualité d'apporteur d'affaires et n'est pas intermédiaire en assurance. Le conseil, la présentation des garanties, la souscription et la gestion du contrat sont assurés par Eliocyber. Réclamations et médiation : [coordonnées].</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="opacity-70">© {new Date().getFullYear()} Eliocyber. Tous droits réservés.</span>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li><Link to="/mentions-legales" className={fLink}>Mentions légales</Link></li>
              <li><Link to="/mentions-legales" hash="donnees" className={fLink}>Confidentialité</Link></li>
              <li><Link to="/mentions-legales" hash="reclamations" className={fLink}>Réclamations</Link></li>
              <li><a href="/sitemap.xml" className={fLink}>Plan du site</a></li>
            </ul>
          </div>
        </div>
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

export function CtaBanner({ title, text, to, label, profil, secondary }: { title: string; text: string; to: BtnTo; label: string; profil?: Profil; secondary?: { to: BtnTo; label: string; profil?: Profil | undefined } }) {
  return (
    <section className="wrap pb-14">
      <div className="card-box flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
        <div>
          <h2 className="title-3">{title}</h2>
          <p className="body-text !mb-0">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
          {secondary && <Btn to={secondary.to} profil={secondary.profil} ghost>{secondary.label}</Btn>}
          <Btn to={to} profil={profil}>{label}</Btn>
        </div>
      </div>
    </section>
  );
}

export function seo(path: string, title: string, description: string, og: { type?: "website" | "article"; section?: string; tags?: string[] } = {}) {
  const url = path;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:type", content: og.type ?? "website" },
      { property: "og:site_name", content: "Eliocyber" },
      { property: "og:locale", content: "fr_FR" },
      ...(og.section ? [{ property: "article:section", content: og.section }] : []),
      ...(og.tags ?? []).map((t) => ({ property: "article:tag", content: t })),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
