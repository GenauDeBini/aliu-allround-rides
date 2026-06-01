import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageFooter } from "./kontakt";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Aliu's Allround Service" },
      {
        name: "description",
        content:
          "Impressum und rechtliche Angaben zu Aliu's Allround Service, Kreuzlingen.",
      },
      { property: "og:title", content: "Impressum – Aliu's Allround Service" },
      { property: "og:description", content: "Rechtliche Angaben." },
    ],
  }),
  component: ImpressumPage,
});

function ImpressumPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Rechtliches
        </div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Impressum</h1>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <Section title="Angaben gemäss schweizerischem Recht">
            <p>
              <strong className="text-foreground">Aliu's Allround Service</strong>
              <br />
              Inhaber: Tahir Aliu
              <br />
              Kreuzlingen, Kanton Thurgau
              <br />
              Schweiz
            </p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon:{" "}
              <a href="tel:+41762518280" className="text-foreground hover:text-primary">
                076 251 82 80
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:tahir.aliu@hotmail.com"
                className="text-foreground hover:text-primary"
              >
                tahir.aliu@hotmail.com
              </a>
            </p>
          </Section>

          <Section title="Verantwortlich für den Inhalt">
            <p>Tahir Aliu, Geschäftsführer</p>
          </Section>

          <Section title="Haftungsausschluss">
            <p>
              Der Inhaber übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen. Haftungsansprüche gegen den
              Inhaber wegen Schäden materieller oder immaterieller Art, welche aus
              dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen entstanden sind, werden ausgeschlossen.
            </p>
          </Section>

          <Section title="Haftung für Links">
            <p>
              Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres
              Verantwortungsbereichs. Es wird jegliche Verantwortung für solche
              Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
              erfolgen auf eigene Gefahr des Nutzers.
            </p>
          </Section>

          <Section title="Urheberrechte">
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos
              oder anderen Dateien auf dieser Website gehören ausschliesslich
              Aliu's Allround Service oder den speziell genannten Rechteinhabern.
              Für die Reproduktion jeglicher Elemente ist die schriftliche
              Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
            </p>
          </Section>
        </div>
      </main>
      <PageFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
