import "@fontsource/sora/500.css";
import "@fontsource/sora/600.css";
import "@fontsource/sora/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  Package,
  Wrench,
  Home,
  Trash2,
  Check,
  ArrowRight,
  Ruler,
  Weight,
  Box,
  User,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

import heroSprinter from "@/assets/hero-sprinter.jpg";
import sprinterInterior from "@/assets/sprinter-interior.jpg";
import sprinterSide from "@/assets/sprinter-side.png";
import ceoPhoto from "@/assets/aliu-ceo.png";
import logo from "@/assets/941db0c3-48bf-4fff-b612-76a52263f96c.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aliu's Allround Service – Sprinter mieten in Kreuzlingen" },
      {
        name: "description",
        content:
          "Mercedes Sprinter L3 H3 mieten in Kreuzlingen ab CHF 60.–. Umzüge, Transporte, Möbelaufbau, Abholung & Räumungen. Zuverlässig. Schnell. Professionell.",
      },
      { property: "og:title", content: "Aliu's Allround Service – Sprinter mieten" },
      {
        property: "og:description",
        content:
          "Dein Transporter für jede Aufgabe. Sprinter L3 H3 ab CHF 60.– inkl. 50 km. Inkl. Vollkasko.",
      },
      { property: "og:image", content: heroSprinter },
    ],
  }),
  component: Index,
});

const PHONE = "076 251 82 80";
const PHONE_HREF = "tel:+41762518280";
const EMAIL = "tahir.aliu@hotmail.com";
const EMAIL_HREF = `mailto:${EMAIL}`;

const services = [
  { icon: Home, title: "Umzüge & Reinigung", desc: "Privat- und Firmenumzüge inklusive Endreinigung." },
  { icon: Package, title: "Transporte", desc: "Schnelle Lieferung von A nach B – pünktlich und sicher." },
  { icon: Wrench, title: "Möbelaufbau", desc: "Profimontage von Möbeln und Einrichtungen." },
  { icon: Truck, title: "Abholung", desc: "Wir holen ab, was du nicht selbst transportieren kannst." },
  { icon: Box, title: "Bus Vermietung", desc: "Mercedes Sprinter L3 H3 – flexibel mieten." },
  { icon: Trash2, title: "Räumungen & Entsorgungen", desc: "Wohnungs- und Kellerräumungen mit Entsorgung." },
];

const pricing = [
  { label: "1–3 Stunden", price: "60", km: "Inkl. 50 km" },
  { label: "Halber Tag", price: "100", km: "Inkl. 100 km", highlight: true },
  { label: "Ganzer Tag", price: "150", km: "Inkl. 150 km" },
];

const specs = [
  { icon: Box, label: "Laderaumvolumen", value: "15,5 m³" },
  { icon: User, label: "Stehhöhe", value: "ca. 2,24 m" },
  { icon: Weight, label: "Nutzlast", value: "bis zu 1.000 kg" },
  { icon: ShieldCheck, label: "Fairer Preis", value: "inkl. Vollkasko" },
];

const trust = [
  { icon: Clock, text: "Sofort verfügbar" },
  { icon: ShieldCheck, text: "Fair & transparent" },
  { icon: Sparkles, text: "Einfach mieten" },
  { icon: Check, text: "Unkompliziert & schnell" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Sprinter />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Aliu's Allround Service Logo" className="h-10 w-10 rounded-md image-hover image-hover-1" />
      <div className="leading-tight">
        <div className="font-display text-base font-semibold tracking-tight">Aliu's</div>
        <div className="text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          Allround Service
        </div>
      </div>
    </div>
  );
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
  if (href?.startsWith('#')) {
    const target = document.querySelector(href);
    if (target) {
      const targetPos = target.getBoundingClientRect().top + window.scrollY;
      const startPos = window.scrollY;
      const distance = targetPos - startPos;
      const duration = 800; // 800ms für geschmeidiges Scrollen
      let startTime: number | null = null;

      const scroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        window.scrollTo(0, startPos + distance * ease);

        if (progress < 1) {
          requestAnimationFrame(scroll);
        }
      };

      requestAnimationFrame(scroll);
    }
  }
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#leistungen" onClick={smoothScroll} className="text-muted-foreground transition hover:text-foreground">Leistungen</a>
          <a href="#sprinter" onClick={smoothScroll} className="text-muted-foreground transition hover:text-foreground">Sprinter</a>
          <a href="#preise" onClick={smoothScroll} className="text-muted-foreground transition hover:text-foreground">Preise</a>
          <Link to="/kontakt" className="text-muted-foreground transition hover:text-foreground">Kontakt</Link>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">Anrufen</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 grid-lines opacity-40" aria-hidden />
      <div className="absolute -right-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-20 pt-16 sm:px-6 md:grid-cols-2 md:gap-6 md:pb-32 md:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center"
        >


          <h1 className="mt-6 font-display text-5xl leading-[0.95] sm:text-7xl md:text-[5.5rem]">
            MERCEDES
            <br />
            <span className="text-gradient">SPRINTER</span>
            <br />
            MIETEN.
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Viel Platz. Viele Möglichkeiten. Dein Transporter für jede Aufgabe.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#preise"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.02]"
            >
              Jetzt reservieren
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 font-semibold text-foreground transition hover:border-primary/60 hover:bg-card"
            >
              Unsere Leistungen
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">15,5 m³</div>
              <div>Laderaum</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">1.000 kg</div>
              <div>Nutzlast</div>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">L3 H3</div>
              <div>Sprinter</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="absolute inset-0 -z-10 translate-x-6 translate-y-6 rounded-3xl bg-gradient-primary opacity-30 blur-2xl" />
          <img
            src={ceoPhoto}
            alt="Tahir Aliu, Geschäftsführer von Aliu's Allround Service"
            className="w-full h-auto object-cover rounded-3xl border border-border shadow-elegant image-hover image-hover-2"
          />
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-border/40 bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:px-6 md:grid-cols-4">
        {trust.map((t) => (
          <div key={t.text} className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary">
              <t.icon className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-wider">{t.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="max-w-2xl">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Unsere Leistungen
        </div>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          Zuverlässig. <span className="text-gradient">Schnell.</span> Professionell.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Ihr Partner für jede Aufgabe rund um Transport, Umzug und Entsorgung – in Kreuzlingen und im Thurgau.
        </p>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 transition hover:border-primary/50 hover:shadow-soft"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-gradient-primary group-hover:text-primary-foreground">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl tracking-wide">{s.title}</h3>
            <p className="mt-2 text-muted-foreground">{s.desc}</p>
            <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Sprinter() {
  return (
    <section id="sprinter" className="relative overflow-hidden border-y border-border/40 bg-card/30">
      <div className="absolute inset-0 grid-lines opacity-20" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-2">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Mercedes Sprinter L3 H3
          </div>
          <h2 className="mt-3 font-display text-5xl md:text-6xl">
            Viel Platz. <br />
            <span className="text-gradient">Viele Möglichkeiten.</span>
          </h2>
          <div className="mt-4 inline-flex items-end gap-3 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground shadow-soft">
            <span className="text-muted-foreground">ab</span>
            <span className="text-3xl text-primary">CHF 60.–</span>
          </div>
          <p className="mt-4 text-lg text-muted-foreground">
            Der Sprinter L3 H3 ist ideal für Umzüge, Transporte, Gewerbe sowie Freizeit & mehr.
            Stehhöhe von 2,24 m und 15,5 m³ Laderaum machen jede Ladung möglich.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {specs.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-background/60 p-4"
              >
                <div className="flex items-center gap-2 text-primary">
                  <s.icon className="h-4 w-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    {s.label}
                  </span>
                </div>
                <div className="mt-1 font-display text-2xl">{s.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <DimensionBlock
              title="Aussenmasse"
              rows={[
                ["Länge", "ca. 6,97 m"],
                ["Breite", "ca. 2,02 m"],
                ["Höhe", "ca. 2,83 m"],
              ]}
            />
            <DimensionBlock
              title="Laderaummasse"
              rows={[
                ["Länge", "ca. 4,41 m"],
                ["Breite", "ca. 1,78 m"],
                ["Höhe", "ca. 2,24 m"],
              ]}
            />
          </div>
        </div>

        <div className="grid gap-4">
          <img
            src={sprinterInterior}
            alt="Mercedes Sprinter Innenraum"
            loading="lazy"
            className="w-full rounded-2xl border border-border object-contain shadow-elegant image-hover image-hover-3"
          />
          <img
            src={heroSprinter}
            alt="Mercedes Sprinter L3 H3 von Aliu's Allround Service in Kreuzlingen"
            loading="lazy"
            className="w-full rounded-2xl border border-border object-contain shadow-elegant image-hover image-hover-4"
          />
        </div>
      </div>
    </section>
  );
}

function DimensionBlock({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-center gap-2 text-primary">
        <Ruler className="h-4 w-4" />
        <span className="text-[10px] font-bold uppercase tracking-widest">{title}</span>
      </div>
      <dl className="mt-3 space-y-1.5 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="font-semibold">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Pricing() {
  return (
    <section id="preise" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Sprinter mieten
        </div>
        <h2 className="mt-3 font-display text-5xl md:text-6xl">
          Faire Preise. <span className="text-gradient">Kein Kleingedrucktes.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Alle Preise inkl. Vollkasko. Zusätzliche Kilometer nach Absprache.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {pricing.map((p) => (
          <div
            key={p.label}
            className={`relative overflow-hidden rounded-3xl border p-8 transition ${
              p.highlight
                ? "border-primary/60 bg-gradient-card shadow-soft"
                : "border-border bg-card/40 hover:border-primary/40"
            }`}
          >
            {p.highlight && (
              <div className="absolute right-6 top-6 rounded-full bg-gradient-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground">
                Beliebt
              </div>
            )}
            <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {p.label}
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-2xl text-primary">CHF</span>
              <span className="font-display text-7xl leading-none text-foreground">{p.price}.–</span>
            </div>
            <div className="mt-2 text-sm text-muted-foreground">{p.km}</div>

            <ul className="mt-6 space-y-2 text-sm">
              {["Inkl. Vollkasko", "Sofort verfügbar", "Unkompliziert übergeben"].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href={PHONE_HREF}
              className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${
                p.highlight
                  ? "bg-gradient-primary text-primary-foreground hover:scale-[1.02]"
                  : "border border-border bg-background/60 text-foreground hover:border-primary/60"
              }`}
            >
              <Phone className="h-4 w-4" /> Jetzt anfragen
            </a>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Ideal für <span className="text-foreground">Umzüge · Transporte · Gewerbe · Freizeit & mehr</span>
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="kontakt"
      className="relative overflow-hidden border-t border-border/40 bg-gradient-hero"
    >
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 md:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Jetzt anfragen & reservieren
          </div>
          <h2 className="mt-3 font-display text-5xl md:text-7xl">
            Bereit für deinen <br />
            <span className="text-gradient">nächsten Transport?</span>
          </h2>
          <p className="mt-4 max-w-lg text-lg text-muted-foreground">
            Ein Anruf genügt – wir kümmern uns um den Rest. Tahir Aliu und sein Team
            stehen für Sie bereit.
          </p>

          <div className="mt-8 space-y-3">
            <ContactRow icon={Phone} label="Telefon" value={PHONE} href={PHONE_HREF} />
            <ContactRow icon={Mail} label="E-Mail" value={EMAIL} href={EMAIL_HREF} />
            <ContactRow icon={MapPin} label="Standort" value="Kreuzlingen, Thurgau · CH" />
          </div>
        </div>

        <div className="relative rounded-3xl border border-primary/30 bg-card/70 p-8 backdrop-blur shadow-elegant">
          <div className="absolute -top-px left-12 right-12 h-px bg-gradient-primary" />
          <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Geschäftsführer
          </div>
          <div className="mt-2 font-display text-4xl">Tahir Aliu</div>
          <div className="mt-1 text-sm text-muted-foreground">
            Aliu's Allround Service
          </div>

          <div className="mt-6 h-px bg-border" />

          <a
            href={PHONE_HREF}
            className="mt-6 flex w-full items-center justify-between rounded-2xl bg-gradient-primary px-6 py-5 font-semibold text-primary-foreground shadow-soft transition hover:scale-[1.01]"
          >
            <span className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              {PHONE}
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <Link
            to="/kontakt"
            className="mt-3 flex w-full items-center justify-between rounded-2xl border border-border bg-background/60 px-6 py-5 font-semibold transition hover:border-primary/60"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              Kontaktformular öffnen
            </span>
            <ArrowRight className="h-5 w-5" />
          </Link>
          <a
            href={EMAIL_HREF}
            className="mt-3 flex w-full items-center justify-between rounded-2xl border border-border bg-background/60 px-6 py-5 font-semibold transition hover:border-primary/60"
          >
            <span className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              Direkt per E-Mail
            </span>
            <ArrowRight className="h-5 w-5" />
          </a>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs">
            <div className="rounded-xl border border-border bg-background/40 p-3">
              <div className="font-semibold uppercase tracking-widest text-primary">Verfügbar</div>
              <div className="mt-1 text-muted-foreground">Mo – Sa nach Absprache</div>
            </div>
            <div className="rounded-xl border border-border bg-background/40 p-3">
              <div className="font-semibold uppercase tracking-widest text-primary">Region</div>
              <div className="mt-1 text-muted-foreground">Thurgau & Umgebung</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/60 px-5 py-4 transition hover:border-primary/60">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="font-semibold">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 md:items-center">
        <Logo />
        <div className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aliu's Allround Service · Tahir Aliu · Kreuzlingen
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground md:justify-end">
          <a href={PHONE_HREF} className="hover:text-foreground">{PHONE}</a>
          <span>·</span>
          <a href={EMAIL_HREF} className="hover:text-foreground">E-Mail</a>
          <span>·</span>
          <Link to="/kontakt" className="hover:text-foreground">Kontakt</Link>
          <span>·</span>
          <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
          <span>·</span>
          <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
