import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Instagram, MapPin, Menu, Phone, X } from "lucide-react";
import { COPY, HOURS, PHOTOS, SERVICES, SITE, type Lang } from "@/content/site";

const TITLE = "NoahBlendz | Barber in Sulaymaniyah, Majidi Mall";
const DESC =
  "Men's barber at Majidi Mall, Sulaymaniyah. Skin fades, tapers, curly cuts and scissor work. 15,000 IQD. Book by Instagram DM or call +964 773 457 7053.";

const schema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: SITE.name,
  image: SITE.shareImage,
  telephone: "+9647734577053",
  priceRange: "15,000 IQD",
  sameAs: [SITE.instagram],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Majidi Mall",
    addressLocality: "Sulaymaniyah",
    addressRegion: "Sulaymaniyah Governorate",
    postalCode: "46001",
    addressCountry: "IQ",
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: SITE.shareImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: SITE.shareImage },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

/* ---------- small building blocks ---------- */

function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} data-shown={shown} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Logo({ size = "md", tone = "ink" }: { size?: "sm" | "md" | "lg"; tone?: "ink" | "light" }) {
  const s = { sm: "text-2xl", md: "text-4xl", lg: "text-7xl sm:text-8xl" }[size];
  const color = tone === "ink" ? "text-ink" : "text-paper";
  return (
    <span dir="ltr" className={`relative inline-flex items-end leading-none ${s} ${color}`} aria-label="NoahBlendz">
      <span className="font-display tracking-tight" style={{ fontFamily: "Anton, sans-serif" }}>NOAH</span>
      <span className="relative -ml-[0.18em] translate-y-[0.12em]">
        <svg viewBox="0 0 40 22" className="absolute -top-[0.55em] left-[0.55em] h-[0.5em] w-auto -rotate-12" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" aria-hidden>
          <path d="M3 19 L5 5 L13 13 L20 3 L27 13 L35 5 L37 19 Z" />
        </svg>
        <span className="inline-block -rotate-[8deg] font-tag text-[1.25em]" style={{ fontFamily: "'Rubik Wet Paint', cursive" }}>
          Blendz
        </span>
      </span>
    </span>
  );
}

function BtnIG({ label, variant = "solid" }: { label: string; variant?: "solid" | "ink" }) {
  const cls = variant === "solid" ? "bg-fog text-ink hover:bg-paper" : "bg-ink text-paper hover:bg-ink/85";
  return (
    <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3.5 text-sm font-medium transition-colors ${cls}`}>
      <Instagram className="h-4 w-4" strokeWidth={1.5} /> {label}
    </a>
  );
}

function BtnCall({ label, tone = "light" }: { label: string; tone?: "light" | "ink" }) {
  const cls = tone === "light" ? "border-paper/70 text-paper hover:bg-paper/10" : "border-ink text-ink hover:bg-ink hover:text-paper";
  return (
    <a href={SITE.phoneHref} className={`inline-flex items-center justify-center gap-2 rounded-sm border px-6 py-3.5 text-sm font-medium transition-colors ${cls}`}>
      <Phone className="h-4 w-4" strokeWidth={1.5} /> {label}
    </a>
  );
}

function Photo({ src, alt, className = "", pos = "center" }: { src: string; alt: string; className?: string; pos?: string }) {
  return (
    <div className={`zoom-img bg-fog ${className}`}>
      <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" style={{ objectPosition: pos }} />
    </div>
  );
}

/* ---------- page ---------- */

function Index() {
  const [lang, setLang] = useState<Lang>("en");
  const [open, setOpen] = useState(false);
  const t = COPY[lang];
  const rtl = lang !== "en";

  useEffect(() => {
    document.documentElement.lang = lang === "ku" ? "ckb" : lang;
    document.documentElement.dir = rtl ? "rtl" : "ltr";
  }, [lang, rtl]);

  const links = [
    ["#services", t.nav.services],
    ["#gallery", t.nav.gallery],
    ["#visit", t.nav.visit],
  ] as const;

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center gap-3 text-xs ${className}`}>
      {(
        [
          ["en", "EN"],
          ["ku", "کوردی"],
          ["ar", "العربية"],
        ] as const
      ).map(([k, l]) => (
        <button key={k} onClick={() => setLang(k)} aria-pressed={lang === k} className={`transition-colors ${lang === k ? "text-ink underline underline-offset-4" : "text-steel hover:text-ink"}`}>
          {l}
        </button>
      ))}
    </div>
  );

  return (
    <div className="grain min-h-screen overflow-x-hidden bg-paper text-ink">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-ash/60 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="shrink-0"><Logo size="sm" /></a>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            {links.map(([h, l]) => (
              <a key={h} href={h} className="text-ink/80 transition-colors hover:text-ink">{l}</a>
            ))}
            <LangSwitch />
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="rounded-sm bg-ink px-4 py-2 text-xs font-medium uppercase tracking-wider text-paper hover:bg-ink/85">
              {t.nav.book}
            </a>
          </nav>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
            {open ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-ash/60 bg-paper px-5 pb-6 md:hidden">
            {links.map(([h, l]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="display block border-b border-ash/50 py-4 text-3xl">{l}</a>
            ))}
            <LangSwitch className="mt-5 text-sm" />
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="mt-5 block rounded-sm bg-ink py-3.5 text-center text-sm font-medium text-paper">{t.nav.book}</a>
          </div>
        )}
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative h-[calc(100svh-4rem)] min-h-[560px] overflow-hidden bg-ink">
          <img src={PHOTOS.fade.src} alt={PHOTOS.fade.alt} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "30% 20%" }} />
          <div className="photo-shade absolute inset-0" />
          <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 sm:px-8 md:pb-16">
            <Reveal>
              <Logo size="lg" tone="light" />
            </Reveal>
            <Reveal delay={150}>
              <p className="display mt-8 max-w-xl text-4xl text-paper sm:text-6xl">{t.hero.tagline}</p>
            </Reveal>
            <Reveal delay={300} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <BtnIG label={t.hero.ig} />
              <BtnCall label={t.hero.call} />
            </Reveal>
            <p className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-ash">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} /> {t.hero.where}
            </p>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-paper py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-4 px-5 sm:px-8 md:gap-8">
            <Reveal className="col-span-8 md:col-span-5">
              <Photo src={PHOTOS.cutting.src} alt={PHOTOS.cutting.alt} className="aspect-[3/4]" pos="60% 30%" />
            </Reveal>
            <Reveal delay={150} className="col-span-4 mt-24 md:col-span-3 md:mt-40">
              <Photo src={PHOTOS.barber.src} alt={PHOTOS.barber.alt} className="aspect-[2/3]" pos="35% 30%" />
              <p className="mt-3 text-xs text-steel">Noah — Majidi Mall</p>
            </Reveal>
            <Reveal delay={100} className="col-span-12 md:col-span-4 md:pt-8">
              <p className="eyebrow text-steel">01 / {t.about.eyebrow}</p>
              <h2 className="display mt-4 text-5xl md:text-6xl">{t.about.title}</h2>
              <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-ink/80">
                {t.about.body.map((p) => <p key={p}>{p}</p>)}
              </div>
              <p className="mt-8 font-medium">{t.about.sign}</p>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="relative overflow-hidden bg-ink py-20 text-paper md:py-32">
          <div className="pointer-events-none absolute inset-y-0 end-0 hidden w-[38%] md:block">
            <img src={PHOTOS.comb.src} alt="" loading="lazy" className="h-full w-full object-cover opacity-40 grayscale" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow text-steel">02 / {t.services.eyebrow}</p>
                <h2 className="display mt-4 text-6xl md:text-8xl">{t.services.title}</h2>
                <p className="mt-4 text-sm text-ash">{t.services.note}</p>
              </Reveal>
              <ul className="mt-12 border-t border-paper/20">
                {SERVICES.map((s, i) => (
                  <li key={s.name.en}>
                    <Reveal delay={i * 60} className="flex items-baseline justify-between gap-6 border-b border-paper/20 py-5">
                      <span className="flex items-baseline gap-4">
                        <span className="w-6 text-xs tabular-nums text-steel">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-lg md:text-xl">{s.name[lang]}</span>
                      </span>
                      <span dir="ltr" className="shrink-0 text-sm tabular-nums text-ash">{s.price}</span>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="bg-fog py-20 md:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-steel">03 / {t.gallery.eyebrow}</p>
                <h2 className="display mt-4 text-6xl md:text-8xl">{t.gallery.title}</h2>
              </div>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border-b border-ink pb-1 text-sm font-medium">
                <Instagram className="h-4 w-4" strokeWidth={1.5} /> {SITE.instagramHandle}
              </a>
            </Reveal>
            <div className="columns-2 gap-3 md:columns-3 md:gap-5 [&>*]:mb-3 md:[&>*]:mb-5">
              {[
                [PHOTOS.fade, "aspect-[3/4]", "40% 40%"],
                [PHOTOS.curly, "aspect-[2/3]", "center 30%"],
                [PHOTOS.side, "aspect-[4/5]", "40% 50%"],
                [PHOTOS.blowdry, "aspect-[3/5]", "center 40%"],
                [PHOTOS.comb, "aspect-square", "center 35%"],
                [PHOTOS.cutting, "aspect-[3/4]", "60% 40%"],
                [PHOTOS.barber, "aspect-[4/5]", "35% 35%"],
              ].map(([p, a, pos], i) => {
                const ph = p as { src: string; alt: string };
                return (
                  <Reveal key={i} delay={(i % 3) * 100} className="break-inside-avoid">
                    <Photo src={ph.src} alt={ph.alt} className={a as string} pos={pos as string} />
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center md:justify-start">
              <BtnIG label={t.gallery.more} variant="ink" />
            </div>
          </div>
        </section>

        {/* HOW TO BOOK */}
        <section className="bg-paper py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 px-5 sm:px-8">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="eyebrow text-steel">04 / {t.book.eyebrow}</p>
                <h2 className="display mt-4 text-6xl md:text-8xl">{t.book.title}</h2>
              </Reveal>
              <ol className="mt-12 space-y-0 border-t border-ash">
                {t.book.steps.map(([h, d], i) => (
                  <li key={h}>
                    <Reveal delay={i * 100} className="grid grid-cols-[3.5rem_1fr] gap-4 border-b border-ash py-7 md:grid-cols-[5rem_1fr]">
                      <span className="display text-5xl text-ash md:text-6xl">{i + 1}</span>
                      <div>
                        <h3 className="text-xl font-semibold">{h}</h3>
                        <p className="mt-1 text-sm text-steel">{d}</p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>
              <p className="mt-8 inline-block bg-ink px-3 py-1.5 text-sm font-medium text-paper">{t.book.warn}</p>
            </div>
            <Reveal delay={200} className="col-span-12 md:col-span-4 md:col-start-9 md:mt-32">
              <Photo src={PHOTOS.blowdry.src} alt={PHOTOS.blowdry.alt} className="aspect-[3/4]" pos="center 35%" />
            </Reveal>
          </div>
        </section>

        {/* VISIT */}
        <section id="visit" className="border-t border-ash bg-fog py-20 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-12">
            <Reveal className="md:col-span-5">
              <p className="eyebrow text-steel">05 / {t.visit.eyebrow}</p>
              <h2 className="display mt-4 text-6xl md:text-7xl">{t.visit.title}</h2>
              <p className="mt-8 flex gap-3 text-lg">
                <MapPin className="mt-1 h-5 w-5 shrink-0" strokeWidth={1.5} /> {t.visit.address}
              </p>
              <a href={SITE.directions} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3.5 text-sm font-medium text-paper hover:bg-ink/85">
                {t.visit.directions}
              </a>
              <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ash pt-8">
                <div>
                  <p className="eyebrow text-steel">{t.visit.hours}</p>
                  <dl className="mt-3 space-y-2 text-sm">
                    {HOURS.map((h) => (
                      <div key={h.time}>
                        <dt className="text-steel">{h.days[lang]}</dt>
                        <dd dir="ltr" className="tabular-nums rtl:text-right">{h.time}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-steel">{t.visit.hoursNote}</p>
                </div>
                <div>
                  <p className="eyebrow text-steel">{t.visit.phone}</p>
                  <a href={SITE.phoneHref} dir="ltr" className="mt-3 block text-sm font-medium underline underline-offset-4">{SITE.phoneDisplay}</a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-7">
              <div className="aspect-[4/5] border border-ash bg-ash/30 md:aspect-[4/3]">
                <iframe title="Map — Majidi Mall, Sulaymaniyah" src={SITE.mapEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full grayscale" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-ink py-24 text-paper md:py-40">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <Reveal>
              <h2 className="display max-w-4xl text-6xl sm:text-8xl md:text-9xl">{t.cta.title}</h2>
            </Reveal>
            <Reveal delay={150} className="mt-10 flex flex-col gap-3 sm:flex-row">
              <BtnIG label={t.hero.ig} />
              <BtnCall label={t.hero.call} />
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-paper/10 bg-ink pb-28 pt-12 text-ash md:pb-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
          <Logo size="md" tone="light" />
          <div className="space-y-2 text-sm">
            <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-paper"><Instagram className="h-4 w-4" strokeWidth={1.5} />{SITE.instagramHandle}</a>
            <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-paper"><Phone className="h-4 w-4" strokeWidth={1.5} /><span dir="ltr">{SITE.phoneDisplay}</span></a>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" strokeWidth={1.5} />{t.visit.address}</p>
          </div>
          <p className="text-xs text-steel">{t.footer.rights}</p>
        </div>
      </footer>

      {/* MOBILE FLOATING BAR */}
      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-2 gap-2 md:hidden">
        <a href={SITE.phoneHref} className="flex items-center justify-center gap-2 rounded-sm border border-ink bg-paper py-3.5 text-sm font-medium text-ink">
          <Phone className="h-4 w-4" strokeWidth={1.5} /> {t.hero.call}
        </a>
        <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-sm bg-ink py-3.5 text-sm font-medium text-paper">
          <Instagram className="h-4 w-4" strokeWidth={1.5} /> Instagram
        </a>
      </div>
    </div>
  );
}
