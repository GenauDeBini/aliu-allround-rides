import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowLeft, CheckCircle2, Send } from "lucide-react";

import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import logo from "@/assets/941db0c3-48bf-4fff-b612-76a52263f96c.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const PHONE = "076 251 82 80";
const PHONE_HREF = "tel:+41762518280";
const EMAIL = "tahir.aliu@hotmail.com";

const schema = z.object({
  name: z.string().trim().min(2, "Bitte vollständigen Namen angeben").max(120),
  email: z.string().trim().email("Bitte gültige E-Mail-Adresse angeben").max(255),
  phone: z
    .string()
    .trim()
    .max(50, "Telefonnummer zu lang")
    .optional()
    .or(z.literal("")),
  request_type: z.enum(["anfrage", "kostenvoranschlag"]),
  message: z
    .string()
    .trim()
    .min(10, "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen)")
    .max(5000, "Nachricht zu lang"),
});

type FormValues = z.infer<typeof schema>;

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – Aliu's Allround Service" },
      {
        name: "description",
        content:
          "Kontaktieren Sie Aliu's Allround Service für Anfragen oder einen unverbindlichen Kostenvoranschlag. Sprinter-Vermietung, Umzüge & Transporte in Kreuzlingen.",
      },
      { property: "og:title", content: "Kontakt – Aliu's Allround Service" },
      {
        property: "og:description",
        content:
          "Anfrage stellen oder Kostenvoranschlag einholen – wir melden uns schnellstmöglich.",
      },
    ],
  }),
  component: KontaktPage,
});

function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      request_type: "anfrage",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    const payload = {
      name: values.name,
      email: values.email,
      phone: values.phone?.trim() ? values.phone.trim() : null,
      request_type: values.request_type,
      message: values.message,
    };

    const { error } = await supabase.from("contact_submissions").insert(payload);

    if (error) {
      console.error(error);
      toast.error("Senden fehlgeschlagen. Bitte erneut versuchen oder anrufen.");
      return;
    }

    // Zusätzlich per E-Mail weiterleiten (öffnet das Mail-Programm des Besuchers
    // damit die Nachricht zuverlässig bei Tahir Aliu ankommt).
    const subject = `[${values.request_type === "kostenvoranschlag" ? "Kostenvoranschlag" : "Anfrage"}] ${values.name}`;
    const body = `Name: ${values.name}\nE-Mail: ${values.email}\nTelefon: ${payload.phone ?? "-"}\n\nAnliegen: ${values.request_type}\n\nNachricht:\n${values.message}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setSubmitted(true);
    toast.success("Anfrage erfolgreich gesendet!");
    form.reset();

    // Mail-Client mit vorausgefüllter Nachricht öffnen
    window.location.href = mailto;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />

      <main className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1fr_1.2fr] md:py-28">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Kontakt
            </div>
            <h1 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
              Schreiben Sie <span className="text-gradient">uns.</span>
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Stellen Sie eine Anfrage oder fordern Sie einen unverbindlichen
              Kostenvoranschlag an. Wir melden uns innerhalb kürzester Zeit zurück.
            </p>

            <div className="mt-10 space-y-3">
              <InfoRow
                icon={Phone}
                label="Telefon"
                value={PHONE}
                href={PHONE_HREF}
              />
              <InfoRow
                icon={Mail}
                label="E-Mail"
                value={EMAIL}
                href={`mailto:${EMAIL}`}
              />
              <InfoRow icon={MapPin} label="Standort" value="Kreuzlingen, Thurgau · CH" />
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card/50 p-5 text-sm text-muted-foreground">
              <div className="font-semibold uppercase tracking-widest text-primary text-xs">
                Erreichbarkeit
              </div>
              <p className="mt-2">
                Mo – Sa nach Absprache. Bei dringenden Anfragen bitte direkt anrufen.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl border border-primary/25 bg-card/70 p-6 backdrop-blur sm:p-10 shadow-elegant"
          >
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-14 w-14 text-primary" />
                <h2 className="mt-6 font-display text-3xl">Vielen Dank!</h2>
                <p className="mt-3 max-w-sm text-muted-foreground">
                  Ihre Anfrage wurde erfolgreich übermittelt. Tahir Aliu meldet
                  sich schnellstmöglich bei Ihnen.
                </p>
                <Button
                  variant="outline"
                  className="mt-8"
                  onClick={() => setSubmitted(false)}
                >
                  Weitere Anfrage senden
                </Button>
              </div>
            ) : (
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <Label htmlFor="request_type" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Anliegen
                  </Label>
                  <Select
                    value={form.watch("request_type")}
                    onValueChange={(v) =>
                      form.setValue("request_type", v as FormValues["request_type"], {
                        shouldValidate: true,
                      })
                    }
                  >
                    <SelectTrigger id="request_type" className="mt-2 h-12 bg-background/60">
                      <SelectValue placeholder="Bitte wählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="anfrage">Allgemeine Anfrage</SelectItem>
                      <SelectItem value="kostenvoranschlag">Kostenvoranschlag</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Name *"
                    id="name"
                    error={form.formState.errors.name?.message}
                  >
                    <Input
                      id="name"
                      autoComplete="name"
                      placeholder="Max Mustermann"
                      className="h-12 bg-background/60"
                      {...form.register("name")}
                    />
                  </Field>
                  <Field
                    label="E-Mail *"
                    id="email"
                    error={form.formState.errors.email?.message}
                  >
                    <Input
                      id="email"
                      type="email"
                      autoComplete="email"
                      placeholder="ihre@email.ch"
                      className="h-12 bg-background/60"
                      {...form.register("email")}
                    />
                  </Field>
                </div>

                <Field
                  label="Telefon (optional)"
                  id="phone"
                  error={form.formState.errors.phone?.message}
                >
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="079 123 45 67"
                    className="h-12 bg-background/60"
                    {...form.register("phone")}
                  />
                </Field>

                <Field
                  label="Nachricht *"
                  id="message"
                  error={form.formState.errors.message?.message}
                >
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="Beschreiben Sie Ihr Anliegen, gewünschtes Datum, Umfang …"
                    className="resize-none bg-background/60"
                    {...form.register("message")}
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="h-12 w-full bg-gradient-primary text-base font-semibold text-primary-foreground shadow-soft hover:scale-[1.01]"
                >
                  {form.formState.isSubmitting ? (
                    "Wird gesendet…"
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Anfrage senden
                    </span>
                  )}
                </Button>

                <p className="text-center text-xs text-muted-foreground">
                  Mit dem Absenden akzeptieren Sie unsere{" "}
                  <Link to="/datenschutz" className="underline hover:text-primary">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </main>

      <PageFooter />
    </div>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function InfoRow({
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

export function PageHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Aliu's Allround Service Logo" className="h-10 w-10 rounded-md image-hover" />
          <div className="leading-tight">
            <div className="font-display text-base font-semibold tracking-tight">Aliu's</div>
            <div className="text-[9px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
              Allround Service
            </div>
          </div>
        </Link>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Zur Startseite
        </Link>
      </div>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row">
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Aliu's Allround Service · Tahir Aliu · Kreuzlingen
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
          <a href={PHONE_HREF} className="hover:text-foreground">{PHONE}</a>
          <span>·</span>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">E-Mail</a>
          <span>·</span>
          <Link to="/impressum" className="hover:text-foreground">Impressum</Link>
          <span>·</span>
          <Link to="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
        </div>
      </div>
    </footer>
  );
}
