import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { fonctionnalites } from "@/lib/fonctionnalites";
import { Activity, BookOpen, ChevronDown, Coins, Cpu, Gauge, LayoutGrid, Mail, MapPin, Menu, Phone, QrCode, Server, ShieldCheck, UserRound, Wrench, X, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import radarLight from "@/assets/eliocyber-logo-radar-clair.svg";
import radarDark from "@/assets/eliocyber-logo-radar-sombre.svg";


const partnerFeatures = fonctionnalites.filter((f) => f.group === "partenaire");
const coreFeatures = fonctionnalites.filter((f) => !f.group);

const featureIcons: Record<string, LucideIcon> = {
  "attirer-vos-clients": QrCode, "suivre-vos-prospects": Activity, "etre-paye-sans-effort": Coins, "conformite-et-securite": ShieldCheck,
  "portail-msp": Server, "moteur-de-souscription": Cpu, "moteur-de-risque": Gauge, "module-de-remediation": Wrench, "portail-client": UserRound,
};

function onMenuKeyDown(e: React.KeyboardEvent<HTMLElement>) {
  if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
  const links = Array.from(e.currentTarget.querySelectorAll<HTMLAnchorElement>("a[data-menu-item]"));
  const i = links.indexOf(document.activeElement as HTMLAnchorElement);
  e.preventDefault();
  const next = i === -1 ? 0 : e.key === "ArrowDown" ? (i + 1) % links.length : (i - 1 + links.length) % links.length;
  links[next]?.focus();
}

function FeaturesMenu({ onNavigate }: { onNavigate: () => void }) {
  const item = "group flex items-start gap-3 rounded-lg border-l-2 border-transparent px-3 py-2.5 transition-colors duration-150 hover:border-primary hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  const chip = "icon-chip !size-8 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5";
  const col = (title: string, list: typeof fonctionnalites, first?: ReactNode) => (
    <div className="min-w-0">
      <p className="eyebrow mb-2 px-3">{title}</p>
      <ul className="space-y-0.5">
        {first}
        {list.map((f) => {
          const Icon = featureIcons[f.slug] ?? LayoutGrid;
          return (
            <li key={f.slug}>
              <Link data-menu-item to="/fonctionnalites/$slug" params={{ slug: f.slug }} onClick={onNavigate} className={item} activeProps={{ className: "bg-secondary !border-primary" }}>
                <span className={chip}><Icon className="size-4" aria-hidden /></span>
                <span className="min-w-0">
                  <span className="block text-[14px] font-semibold text-foreground transition-colors group-hover:text-primary">{f.name}</span>
                  <span className="mt-0.5 line-clamp-1 block text-[12.5px] text-muted-foreground">{f.tagline}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
  return (
    <div onKeyDown={onMenuKeyDown}>
      <div className="grid gap-6 md:grid-cols-2">
        {col("Pour les partenaires", partnerFeatures, (
          <li>
            <Link data-menu-item to="/fonctionnalites" onClick={onNavigate} activeOptions={{ exact: true }} className={item + " mb-1 border border-border bg-primary-soft/40"}>
              <span className={chip}><LayoutGrid className="size-4" aria-hidden /></span>
              <span><span className="block text-[14px] font-semibold text-primary">Vue d'ensemble →</span>
              <span className="mt-0.5 block text-[12.5px] text-muted-foreground">Toutes les fonctionnalités de la plateforme</span></span>
            </Link>
          </li>
        ))}
        {col("Cœur de plateforme et souscription", coreFeatures)}
      </div>
      <Link data-menu-item to="/ressources" onClick={onNavigate} className="bg-ink-glow group relative mt-4 flex items-center gap-3 overflow-hidden rounded-lg px-4 py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <span aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <span className="relative flex size-8 shrink-0 items-center justify-center rounded-md border border-ink-foreground/25 text-ink-link"><BookOpen className="size-4" aria-hidden /></span>
        <span className="relative min-w-0 flex-1">
          <span className="flex items-center gap-2 text-[13.5px] font-semibold text-primary-foreground"><span className="live-dot" aria-hidden />Guides et livres blancs</span>
          <span className="block text-[12.5px] text-ink-foreground">Téléchargez le guide partenaire apporteur</span>
        </span>
        <span className="relative text-ink-link transition-transform group-hover:translate-x-1" aria-hidden>→</span>
      </Link>
    </div>
  );
}

function DesktopFeatures() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onKeyDown={(e) => { if (e.key === "Escape") { setOpen(false); (e.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus(); } }}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false); }}>
      <button type="button" aria-expanded={open} aria-controls="menu-fonctionnalites" onClick={(e) => { const kb = e.detail === 0; setOpen((o) => (kb ? !o : true)); }}
        className="inline-flex min-h-11 items-center gap-1 rounded-sm text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        Fonctionnalités <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      {open && (
        <div id="menu-fonctionnalites" className="absolute right-0 top-full z-50 pt-2">
          <div className="fade-in-up w-[720px] rounded-xl border border-border bg-card/90 p-5 shadow-[var(--shadow-lift)] backdrop-blur-md">
            <FeaturesMenu onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}
    </div>
  );
}

type BtnTo = "/contact" | "/comment-ca-marche" | "/nos-partenaires" | "/solution" | "/devenir-partenaire";
export type Profil = "entreprise" | "partenaire";

export function Btn({ to, children, ghost, className, profil, onDark }: { to: BtnTo; children: ReactNode; ghost?: boolean; className?: string; profil?: Profil | undefined; onDark?: boolean }) {
  const cls = cn(
        "inline-flex items-center justify-center rounded-lg px-5 py-3 text-[15px] font-semibold shadow-sm transition-all hover:-translate-y-px",
        ghost && onDark
          ? "border-[1.5px] border-ink-foreground/40 text-primary-foreground shadow-none hover:bg-ink-foreground/10"
          : ghost
          ? "border-[1.5px] border-primary text-primary shadow-none hover:bg-primary-soft"
          : "bg-primary text-primary-foreground hover:bg-primary/90",
        className,
      );
  if (to === "/contact") return <Link to="/contact" search={profil ? { profil } : {}} className={cls}>{children}</Link>;
  return <Link to={to} className={cls}>{children}</Link>;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [featOpen, setFeatOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5">
        <Link to="/" className="inline-flex min-h-11 shrink-0 items-center rounded-sm focus-visible:ring-2 focus-visible:ring-ring" aria-label="Eliocyber, accueil">
          <img src={radarLight} alt="Eliocyber" width={180} height={42} className="h-auto w-[156px] sm:w-[180px]" />
        </Link>
        <nav aria-label="Navigation principale" className="hidden items-center gap-4 text-sm xl:flex">
          <DesktopFeatures />
          <Link to="/a-propos" className="text-foreground hover:text-primary" activeProps={{ className: "text-primary font-semibold" }}>À propos</Link>
          <Btn to="/contact">Être contacté</Btn>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-foreground xl:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      {open && (
        <nav id="menu-mobile" aria-label="Navigation mobile" className="flex flex-col gap-1 border-t border-border px-5 pb-5 pt-2 xl:hidden">
          <button type="button" aria-expanded={featOpen} aria-controls="menu-mobile-features" onClick={() => setFeatOpen((o) => !o)} className="flex min-h-11 items-center justify-between pt-2 text-left text-[15px] font-semibold text-foreground">
            Fonctionnalités <ChevronDown className={cn("size-4 transition-transform", featOpen && "rotate-180")} aria-hidden />
          </button>
          {featOpen && <div id="menu-mobile-features" className="fade-in-up -mx-3 pb-2"><FeaturesMenu onNavigate={() => setOpen(false)} /></div>}
          <Link to="/a-propos" onClick={() => setOpen(false)} className="border-t border-border py-3 text-foreground">À propos</Link>
          <span onClick={() => setOpen(false)} className="mt-2"><Btn to="/contact" className="w-full">Être contacté</Btn></span>
        </nav>
      )}
    </header>
  );
}

type FooterLink =
  | { label: string; to: "/contact"; search: { profil: Profil } }
  | { label: string; to: "/solution" | "/comment-ca-marche" | "/a-propos" | "/fonctionnalites" | "/ressources" | "/nos-partenaires" | "/devenir-partenaire" | "/partenaires/mssp" | "/partenaires/esn" | "/partenaires/ciso" }
  | { label: string; slug: string };

type FooterGroup = { title: string; links: FooterLink[] };

const footerGroups: FooterGroup[] = [
  { title: "Entreprises", links: [
    { to: "/solution", label: "Nos garanties cyber" },
    { to: "/fonctionnalites", label: "Vue d'ensemble" },
    { to: "/comment-ca-marche", label: "Comment ça marche" },
    { to: "/ressources", label: "Ressources et livres blancs" },
    { to: "/a-propos", label: "À propos" },
    { to: "/contact", label: "Parler à un courtier", search: { profil: "entreprise" } },
  ] },
  { title: "Partenaires", links: [
    { to: "/partenaires/mssp", label: "MSSP et SOC" },
    { to: "/partenaires/esn", label: "ESN cyber" },
    { to: "/partenaires/ciso", label: "CISO freelance" },
    { to: "/nos-partenaires", label: "Tous les partenaires" },
    { to: "/devenir-partenaire", label: "Devenir partenaire" },
  ] },
  { title: "Plateforme", links: fonctionnalites.filter((f) => !f.group).map((f) => ({ slug: f.slug, label: f.name })) },
];

const fLink = "text-ink-link underline-offset-4 transition-colors hover:text-primary-foreground hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink active:text-primary-foreground active:underline";

const linkActive = { className: "text-primary-foreground underline", "aria-current": "page" } as const;

const groupAnchor = (title: string) => title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

function FooterLinkItem({ link, className, onClick }: { link: FooterLink; className: string; onClick?: () => void }) {
  if ("search" in link) return <Link to="/contact" search={link.search} onClick={onClick} className={className} activeProps={linkActive}>{link.label}</Link>;
  if ("slug" in link) return <Link to="/fonctionnalites/$slug" params={{ slug: link.slug }} onClick={onClick} className={className} activeProps={linkActive}>{link.label}</Link>;
  return <Link to={link.to} onClick={onClick} className={className} activeProps={linkActive}>{link.label}</Link>;
}

function onAccordionKeyDown(e: React.KeyboardEvent<HTMLElement>, close: () => void) {
  if (e.key === "Escape") {
    const openButton = e.currentTarget.querySelector<HTMLButtonElement>('button[data-accordion][aria-expanded="true"]');
    close();
    openButton?.focus();
    return;
  }
  if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
  const buttons = Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>("button[data-accordion]"));
  const i = buttons.indexOf(e.target as HTMLButtonElement);
  if (i === -1) return;
  e.preventDefault();
  const next = e.key === "ArrowDown" ? (i + 1) % buttons.length
    : e.key === "ArrowUp" ? (i - 1 + buttons.length) % buttons.length
    : e.key === "Home" ? 0
    : buttons.length - 1;
  buttons[next]?.focus();
}

export function SiteFooter() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <footer className="bg-ink text-[14px] leading-relaxed text-ink-foreground">
      <div className="wrap py-8 md:grid md:grid-cols-[1.3fr_repeat(3,1fr)] md:gap-8 md:py-12">
        <div className="min-w-0">
          <Link to="/" className="inline-flex min-h-11 items-center rounded-sm focus-visible:ring-2 focus-visible:ring-primary-foreground" aria-label="Eliocyber, accueil"><img src={radarDark} alt="Eliocyber" width={190} height={44} className="h-auto w-[190px] max-w-full" /></Link>
          <p className="mt-2.5 max-w-[300px] md:mt-3">Courtier spécialisé en assurance cyber pour les PME et ETI, avec un réseau de partenaires cyber, IT et conformité.</p>
          <address className="mt-2.5 not-italic md:mt-4">
            <p className="flex min-h-11 items-center gap-2 md:min-h-0 md:py-[3px]"><Mail className="size-4 shrink-0" aria-hidden /><a href="mailto:bonjour@eliocyber.fr" className={fLink}>bonjour@eliocyber.fr</a></p>
            <p className="flex min-h-9 items-center gap-2 md:min-h-0 md:py-[3px]"><Phone className="size-4 shrink-0" aria-hidden />[Téléphone]</p>
            <p className="flex min-h-9 items-center gap-2 md:min-h-0 md:py-[3px]"><MapPin className="size-4 shrink-0" aria-hidden />[Adresse]</p>
          </address>
          <a href="https://www.linkedin.com/company/eliocyber" target="_blank" rel="noopener noreferrer" aria-label="Eliocyber sur LinkedIn (nouvel onglet)" className="mt-3 flex size-11 items-center justify-center rounded-lg border border-ink-foreground/25 text-ink-foreground transition-colors hover:border-primary-foreground/60 hover:bg-ink-foreground/10 hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:size-10">
            <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
          </a>
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

        <nav aria-label="Plan du site" className="mt-6 border-t border-ink-foreground/15 md:hidden" onKeyDown={(e) => onAccordionKeyDown(e, () => setOpen(null))}>
          {footerGroups.map((col) => {
            const id = groupAnchor(col.title);
            const isOpen = open === col.title;
            return (
              <div key={col.title} className="border-b border-ink-foreground/15">
                <h2>
                  <button
                    type="button"
                    data-accordion
                    id={`footer-h-${id}`}
                    aria-expanded={isOpen}
                    aria-controls={`footer-p-${id}`}
                    onClick={() => setOpen(isOpen ? null : col.title)}
                    className="flex min-h-12 w-full items-center justify-between gap-3 py-3 text-left text-[14px] font-semibold text-primary-foreground transition-colors hover:text-primary-foreground/80 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/80 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
                  >
                    {col.title}
                    <ChevronDown className={cn("size-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} aria-hidden />
                  </button>
                </h2>
                <div
                  id={`footer-p-${id}`}
                  role="region"
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
        <div className="wrap py-4 text-[11px] md:py-6 md:text-[12px]">
          <p className="leading-[1.5] opacity-75 md:leading-relaxed md:opacity-80">Eliocyber est un courtier en assurance immatriculé à l'ORIAS sous le n° [XXX]. Le partenaire agit exclusivement en qualité d'apporteur d'affaires et n'est pas intermédiaire en assurance. Le conseil, la présentation des garanties, la souscription et la gestion du contrat sont assurés par Eliocyber. Réclamations et médiation : [coordonnées].</p>
          <div className="mt-2.5 flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <span className="opacity-70">© {new Date().getFullYear()} Eliocyber. Tous droits réservés.</span>
            <ul className="grid grid-cols-2 gap-x-4 sm:flex sm:flex-wrap sm:gap-x-5">
              <li><Link to="/mentions-legales" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Mentions légales</Link></li>
              <li><Link to="/mentions-legales" hash="donnees" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Confidentialité</Link></li>
              <li><Link to="/mentions-legales" hash="reclamations" className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Réclamations</Link></li>
              <li><a href={`${import.meta.env.BASE_URL}sitemap.xml`} className={cn(fLink, "inline-flex min-h-10 items-center md:min-h-0")}>Plan du site</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-secondary/60 to-background">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="wrap sec relative">
        <p className="eyebrow flex items-center gap-2"><span className="live-dot" aria-hidden />{eyebrow}</p>
        <h1 className="title-1">{title}</h1>
        {children && <p className="body-text max-w-[720px] text-[17px]">{children}</p>}
      </div>
    </section>
  );
}

export function Card({ eyebrow, title, children, className, icon: Icon }: { eyebrow?: string; title: string; children: ReactNode; className?: string; icon?: LucideIcon | undefined }) {
  return (
    <article className={cn("card-box card-hover", className)}>
      {Icon && <span className="icon-chip mb-4"><Icon className="size-5" aria-hidden /></span>}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h3 className={cn("title-3", eyebrow && "mt-2")}>{title}</h3>
      {children}
    </article>
  );
}

export function CtaBanner({ title, text, to, label, profil, secondary }: { title: string; text: string; to: BtnTo; label: string; profil?: Profil; secondary?: { to: BtnTo; label: string; profil?: Profil | undefined } }) {
  return (
    <section className="wrap pb-14">
      <div className="bg-ink-glow relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl px-6 py-8 shadow-lg sm:flex-row sm:items-center sm:px-10 sm:py-10">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
        <div className="relative">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.14em] text-ink-link"><span className="live-dot" aria-hidden />Réponse sous 2 jours ouvrés</p>
          <h2 className="mt-3 text-[22px] font-bold leading-tight !text-primary-foreground sm:text-[26px]">{title}</h2>
          <p className="mt-2 max-w-[560px] text-ink-foreground">{text}</p>
        </div>
        <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:shrink-0">
          {secondary && <Btn to={secondary.to} profil={secondary.profil} ghost onDark>{secondary.label}</Btn>}
          <Btn to={to} profil={profil}>{label}</Btn>
        </div>
      </div>
    </section>
  );
}


export function KeyFigures({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border shadow-sm sm:grid-cols-2 lg:grid-cols-4">
      {items.map(([v, l]) => (
        <div key={l} className="bg-card px-6 py-5">
          <dt className="sr-only">{l}</dt>
          <dd className="whitespace-nowrap font-display text-[22px] font-extrabold tracking-tight text-foreground sm:text-[24px] lg:text-[22px] xl:text-[24px]">{v}</dd>
          <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TrustSeal() {
  return (
    <div className="inline-flex max-w-full flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-card px-4 py-3 text-[13px] text-muted-foreground shadow-sm">
      <span className="icon-chip !size-8"><ShieldCheck className="size-4" aria-hidden /></span>
      <span className="whitespace-nowrap"><strong className="text-foreground">Courtier ORIAS</strong> n° [XXX]</span>
      <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
      <span className="whitespace-nowrap">Contrôle ACPR</span>
      <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
      <span className="whitespace-nowrap">Conforme RGPD</span>
    </div>
  );
}
