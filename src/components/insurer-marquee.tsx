const mods = import.meta.glob<{ default: { url: string } }>("@/assets/assureurs/*.asset.json", { eager: true });
const logos = Object.values(mods).map((m) => m.default.url);

export function InsurerMarquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16" aria-hidden={hidden || undefined}>
      {logos.map((src, i) => (
        <li key={i}><img src={src} alt={hidden ? "" : "Logo assureur"} loading="lazy" decoding="async" className="h-7 w-auto max-w-[140px] object-contain opacity-60 sm:h-8" /></li>
      ))}
    </ul>
  );
  return (
    <section className="border-y border-border bg-muted/40 py-4" aria-label="Assureurs avec lesquels nous travaillons">
      <div className="marquee flex overflow-hidden">
        <div className="marquee-track flex">{row(false)}{row(true)}</div>
      </div>
    </section>
  );
}
