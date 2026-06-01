import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageFooter } from "./kontakt";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – Aliu's Allround Service" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von Aliu's Allround Service – wie wir Ihre Daten schützen und verarbeiten.",
      },
      { property: "og:title", content: "Datenschutz – Aliu's Allround Service" },
      {
        property: "og:description",
        content: "Informationen zum Umgang mit Ihren personenbezogenen Daten.",
      },
    ],
  }),
  component: DatenschutzPage,
});

function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Rechtliches
        </div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Datenschutz­erklärung</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long" })}
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <Section title="1. Verantwortliche Stelle">
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              <br />
              <strong className="text-foreground">Aliu's Allround Service</strong>
              <br />
              Tahir Aliu
              <br />
              Kreuzlingen, Schweiz
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

          <Section title="2. Allgemeiner Hinweis">
            <p>
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
              datenschutzrechtlichen Bestimmungen des Bundes (DSG) hat jede Person
              Anspruch auf Schutz ihrer Privatsphäre sowie auf Schutz vor
              Missbrauch ihrer persönlichen Daten. Wir halten diese Bestimmungen
              ein und behandeln Ihre personenbezogenen Daten streng vertraulich.
            </p>
          </Section>

          <Section title="3. Erhebung und Verarbeitung von Daten">
            <p>
              Wenn Sie unser Kontaktformular nutzen, erheben wir folgende Daten:
              Name, E-Mail-Adresse, Telefonnummer (optional), Art Ihres Anliegens
              sowie den Inhalt Ihrer Nachricht. Diese Daten werden ausschliesslich
              zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte
              weitergegeben.
            </p>
          </Section>

          <Section title="4. Speicherdauer">
            <p>
              Ihre Anfragen werden so lange gespeichert, wie es für die
              Bearbeitung sowie zur Erfüllung allfälliger gesetzlicher
              Aufbewahrungspflichten notwendig ist. Anschliessend werden die
              Daten gelöscht.
            </p>
          </Section>

          <Section title="5. SSL-Verschlüsselung">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung.
              Damit werden Daten, die Sie über diese Website übermitteln, vor dem
              Zugriff Dritter geschützt.
            </p>
          </Section>

          <Section title="6. Ihre Rechte">
            <p>
              Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung
              oder Einschränkung der Verarbeitung Ihrer gespeicherten Daten sowie
              das Recht auf Widerspruch gegen die Verarbeitung. Bitte kontaktieren
              Sie uns hierfür per E-Mail.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Diese Website verwendet nur technisch notwendige Cookies, um den
              Betrieb der Seite sicherzustellen. Es findet kein Tracking zu
              Marketingzwecken statt.
            </p>
          </Section>

          <Section title="8. Änderungen">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit
              anzupassen, um sie an geänderte Rechtslagen oder bei Änderungen
              unseres Angebots anzupassen.
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
