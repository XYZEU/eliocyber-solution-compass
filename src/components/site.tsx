import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { fonctionnalites } from "@/lib/fonctionnalites";
import { ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
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

type FooterLink =
  | { label: string; to: "/contact"; search: { profil: Profil } }
  | { label: string; to: "/solution" | "/fonctionnalites" | "/ressources" | "/nos-partenaires" | "/devenir-partenaire" | "/partenaires/mssp" | "/partenaires/esn" | "/partenaires/ciso" }
  | { label: string; slug: string };

type FooterGroup = { title: string; links: FooterLink[] };

const footerGroups: FooterGroup[] = [
  { title: "Entreprises", links: [
    { to: "/solution", label: "Nos garanties cyber" },
    { to: "/fonctionnalites", label: "Vue d'ensemble" },
    { to: "/ressources", label: "Livres blancs" },
    { to: "/contact", label: "Parler à un courtier", search: { profil: "entreprise" } },
  ] },
  { title: "Partenaires", links: [
    { to: "/partenaires/mssp", label: "MSSP et SOC" },
    { to: "/partenaires/esn", label: "ESN cyber" },
    { to: "/partenaires/ciso", label: "CISO freelance" },
    { to: "/nos-partenaires", label: "Tous les partenaires" },
    { to: "/devenir-partenaire", label: "Devenir partenaire" },
  ] },
  { title: "Plateforme", links: fonctionnalites.map((f) => ({ slug: f.slug, label: f.name })) },
];

const fLink = "text-ink-link transition-colors hover:text-primary-foreground hover:underline";

const groupAnchor = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function FooterLinkItem({ link, className, onClick }: { link: FooterLink; className: string; onClick?: () => void }) {
  if ("search" in link) return <Link to="/contact" search={link.search} onClick={onClick} className={className}>{link.label}</Link>;
  if ("slug" in link) return <Link to="/fonctionnalites/$slug" params={{ slug: link.slug }} onClick={onClick} className={className}>{link.label}</Link>;
  return <Link to={link.to} onClick={onClick} className={className}>{link.label}</Link>;
}

export function SiteFooter() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <footer className="bg-ink text-[14px] leading-relaxed text-ink-foreground">
      <div className="wrap py-9 md:grid md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-8 md:py-12">
        <div className="min-w-0">
          <Link to="/" className="text-xl font-bold text-primary-foreground" aria-label="Eliocyber, accueil">Eliocyber</Link>
          <p className="mt-2.5 max-w-[300px] md:mt-3">Courtier spécialisé en assurance cyber pour les PME et ETI, avec un réseau de partenaires cyber, IT et conformité.</p>
          <address className="mt-3 not-italic md:mt-4">
            <p className="flex min-h-10 items-center gap-2 md:min-h-0 md:py-[3px]"><Mail className="size-4 shrink-0" aria-hidden /><a href="mailto:bonjour@eliocyber.fr" className={fLink}>bonjour@eliocyber.fr</a></p>
            <p className="flex min-h-10 items-center gap-2 md:min-h-0 md:py-[3px]"><Phone className="size-4 shrink-0" aria-hidden />[Téléphone]</p>
            <p className="flex min-h-10 items-center gap-2 md:min-h-0 md:py-[3px]"><MapPin className="size-4 shrink-0" aria-hidden />[Adresse]</p>
          </address>
          <Link to="/contact" className="mt-4 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-[14px] font-semibold text-primary-foreground hover:bg-primary/90 md:mt-5 md:inline-flex md:w-auto md:py-2.5">Être contacté</Link>
        </div>

        <nav aria-label="Plan du site" className="hidden md:contents">
          {footerGroups.map((col) => (
            <div key={col.title} className="min-w-0">
              <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-wider text-primary-foreground">{col.title}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}><FooterLinkItem link={l} className={fLink} /></li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <nav aria-label="Plan du site" className="mt-7 border-t border-ink-foreground/15 md:hidden">
          {footerGroups.map((col) => {
            const id = groupAnchor(col.title);
            const isOpen = open === col.title;
            return (
              <div key={col.title} className="border-b border-ink-foreground/15">
                <h2>
                  <button
                    type="button"
                    id={`footer-h-${id}`}
                    aria-expanded={isOpen}
                    aria-controls={`footer-p-${id}`}
                    onClick={() => setOpen(isOpen ? null : col.title)}
                    className="flex min-h-12 w-full items-center justify-between gap-3 py-3 text-left text-[14px] font-semibold text-primary-foreground"
                  >
                    {col.title}
                    <ChevronDown className={cn("size-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden />
                  </button>
                </h2>
                <div
                  id={`footer-p-${id}`}
                  aria-labelledby={`footer-h-${id}`}
                  className={cn("grid overflow-hidden transition-all duration-200 ease-out", isOpen ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0")}
                >
                  <ul className="min-h-0 pb-2">
                    {col.links.map((l) => (
                      <li key={l.label}><FooterLinkItem link={l} className={cn(fLink, "flex min-h-11 items-center")} /></li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-ink-foreground/20">
        <div className="wrap py-5 text-[12px] md:py-6">
          <p className="leading-snug opacity-80 md:leading-relaxed">Eliocyber est un courtier en assurance immatriculé à l'ORIAS sous le n° [XXX]. Le partenaire agit exclusivement en qualité d'apporteur d'affaires et n'est pas intermédiaire en assurance. Le conseil, la présentation des garanties, la souscription et la gestion du contrat sont assurés par Eliocyber. Réclamations et médiation : [coordonnées].</p>
          <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <span className="opacity-70">© {new Date().getFullYear()} Eliocyber. Tous droits réservés.</span>
            <ul className="flex flex-wrap gap-x-4 sm:gap-x-5">
              <li><Link to="/mentions-legales" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Mentions légales</Link></li>
              <li><Link to="/mentions-legales" hash="donnees" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Confidentialité</Link></li>
              <li><Link to="/mentions-legales" hash="reclamations" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Réclamations</Link></li>
              <li><a href="/sitemap.xml" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Plan du site</a></li>
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
