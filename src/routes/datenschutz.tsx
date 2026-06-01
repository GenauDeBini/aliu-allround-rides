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
              Verantwortlich für die Datenverarbeitung auf dieser Website und für alle Services ist:
              <br />
              <strong className="text-foreground">Aliu's Allround Service</strong>
              <br />
              Tahir Aliu
              <br />
              Kreuzlingen, Kanton Thurgau
              <br />
              Schweiz
              <br />
              <br />
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

          <Section title="2. Rechtsgrundlagen und allgemeiner Hinweis">
            <p>
              Gestützt auf Artikel 13 der schweizerischen Bundesverfassung und die
              datenschutzrechtlichen Bestimmungen des Bundes (Bundesgesetz über den 
              Datenschutz DSG) hat jede Person Anspruch auf Schutz ihrer Privatsphäre 
              sowie auf Schutz vor Missbrauch ihrer personenbezogenen Daten. 
              Wir halten diese Bestimmungen ein und behandeln Ihre personenbezogenen Daten 
              streng vertraulich und sicher.
              <br />
              <br />
              Diese Datenschutzerklärung gilt für alle Services und Websites von 
              Aliu's Allround Service, insbesondere für die Fahrzeugvermietung.
              <br />
              <br />
              <strong className="text-foreground">Zustimmung zu AGB und Datenschutz:</strong>
              <br />
              Mit jeder Buchung stimmen Sie automatisch den Allgemeinen Geschäftsbedingungen (AGB) 
              und dieser Datenschutzerklärung zu.
              <br />
              <br />
              <a href="/agb" className="text-foreground hover:text-primary font-semibold">
                → Allgemeine Geschäftsbedingungen (AGB)
              </a>
            </p>
          </Section>

          <Section title="3. Erhebung und Verarbeitung von Daten über das Kontaktformular">
            <p>
              Wenn Sie unser Kontaktformular nutzen oder uns eine Anfrage stellen, 
              erheben wir folgende personenbezogene Daten:
              <br />
              • Name und Vorname
              <br />
              • E-Mail-Adresse
              <br />
              • Telefonnummer (optional)
              <br />
              • Art Ihres Anliegens (Anfrage oder Kostenvoranschlag)
              <br />
              • Nachrichteninhalt und weitere angegebene Informationen
              <br />
              <br />
              Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage, 
              zur Kontaktaufnahme und zur Kommunikation verwendet. 
              Sie werden nicht an Dritte weitergegeben, ausser soweit dies für die 
              Erfüllung Ihrer Anfrage notwendig ist.
            </p>
          </Section>

          <Section title="4. Erhebung von Daten bei Fahrzeugvermietung">
            <p>
              Bei der Buchung und Vermietung eines Fahrzeugs erheben wir zusätzliche Daten:
              <br />
              • Persönliche Daten des Fahrers (Name, Adresse, Geburtsdatum)
              <br />
              • Führerscheininformationen und Versicherungsdaten
              <br />
              • Mietdatum, Mietdauer und Fahrzeugtyp
              <br />
              • Kilometerstand und Fahrtdaten
              <br />
              • Zahlungsinformationen
              <br />
              <br />
              Diese Daten werden für die Durchführung des Mietvertrags, 
              die Sicherheit des Fahrzeugs, die Versicherungsabwicklung 
              und die Erfüllung gesetzlicher Aufbewahrungspflichten verarbeitet.
            </p>
          </Section>

          <Section title="5. Automatische Datenerfassung (Website)">
            <p>
              Bei Ihrem Besuch dieser Website können automatisch folgende Daten erfasst werden:
              <br />
              • IP-Adresse und Geräte-Informationen
              <br />
              • Datum und Uhrzeit des Zugriffs
              <br />
              • Besuchte Seiten und Verweilzeiten
              <br />
              <br />
              Diese Daten werden zu statistischen Zwecken und zur Verbesserung unserer 
              Website-Funktionalität verwendet. Sie werden nicht dazu genutzt, 
              um Nutzer zu identifizieren oder zu profilieren.
            </p>
          </Section>

          <Section title="6. Speicherdauer">
            <p>
              <strong className="text-foreground">Kontaktanfragen:</strong> 
              Ihre Anfragen werden so lange gespeichert, wie es für die Bearbeitung 
              sowie zur Erfüllung allfälliger gesetzlicher Aufbewahrungspflichten 
              notwendig ist. In der Regel werden diese Daten nach Abschluss der 
              Bearbeitung und nicht später als 5 Jahre nach letztem Kontakt gelöscht.
              <br />
              <br />
              <strong className="text-foreground">Fahrzeugvermietung:</strong> 
              Mietvertragsdaten werden gemäss schweizerischen Aufbewahrungspflichten 
              mindestens 10 Jahre aufbewahrt.
              <br />
              <br />
              <strong className="text-foreground">Website-Statistiken:</strong> 
              Automatisch erfasste Daten werden nach maximal 90 Tagen gelöscht.
            </p>
          </Section>

          <Section title="7. SSL-Verschlüsselung und Sicherheit">
            <p>
              Diese Website nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung (HTTPS). 
              Damit werden Daten, die Sie über diese Website übermitteln, durch Verschlüsselung 
              vor dem Zugriff Dritter geschützt.
              <br />
              <br />
              Wir ergreifen angemessene technische und organisatorische Massnahmen, 
              um Ihre personenbezogenen Daten vor unbefugtem Zugriff, Veränderung, 
              Verlust oder Missbrauch zu schützen.
            </p>
          </Section>

          <Section title="8. Cookies und Tracking">
            <p>
              Diese Website verwendet nur technisch notwendige Cookies, um den
              Betrieb und die Funktionalität der Seite sicherzustellen. 
              Es findet kein Tracking oder Profiling zu Marketingzwecken statt.
              <br />
              <br />
              Sie können Cookies in Ihren Browsereinstellungen deaktivieren. 
              Dies kann jedoch die Funktionalität der Website beeinträchtigen.
            </p>
          </Section>

          <Section title="9. Externe Links und Drittanbieter">
            <p>
              Diese Website kann Links zu Websites Dritter enthalten. 
              Diese unterliegen nicht unserer Kontrolle. Wir übernehmen keine 
              Verantwortung für den Datenschutz oder den Inhalt dieser externen Seiten.
              <br />
              <br />
              Die Nutzung solcher Websites erfolgt auf eigene Gefahr des Nutzers.
            </p>
          </Section>

          <Section title="10. Datensubjektrechte – Ihre Rechte">
            <p>
              Gemäss Schweizer Datenschutzgesetz (DSG) haben Sie folgende Rechte:
              <br />
              <br />
              <strong className="text-foreground">Recht auf Auskunft:</strong> 
              Sie haben das Recht zu erfahren, welche personenbezogenen Daten 
              über Sie gespeichert sind.
              <br />
              <br />
              <strong className="text-foreground">Recht auf Berichtigung:</strong> 
              Sie können unrichtige Daten korrigieren lassen.
              <br />
              <br />
              <strong className="text-foreground">Recht auf Löschung:</strong> 
              Sie können die Löschung Ihrer Daten verlangen, soweit keine 
              gesetzlichen Aufbewahrungspflichten bestehen.
              <br />
              <br />
              <strong className="text-foreground">Recht auf Einschränkung der Verarbeitung:</strong> 
              Sie können die Einschränkung oder Sperrung der Verarbeitung Ihrer Daten verlangen.
              <br />
              <br />
              <strong className="text-foreground">Recht auf Widerspruch:</strong> 
              Sie können der Verarbeitung Ihrer Daten widersprechen.
              <br />
              <br />
              <strong className="text-foreground">Recht auf Datenportabilität:</strong> 
              Sie können Ihre Daten in strukturierter Form erhalten.
              <br />
              <br />
              Bitte kontaktieren Sie uns unter tahir.aliu@hotmail.com oder 
              076 251 82 80, um eines dieser Rechte geltend zu machen. 
              Wir werden Ihrem Antrag unverzüglich, spätestens innerhalb von 30 Tagen, nachkommen.
            </p>
          </Section>

          <Section title="11. Weitergabe an Dritte">
            <p>
              Wir geben Ihre personenbezogenen Daten nicht an Dritte weiter, 
              ausser wenn dies notwendig ist für:
              <br />
              • Die Durchführung des Mietvertrags (z. B. Versicherungsunternehmen)
              <br />
              • Die Erfüllung gesetzlicher Verpflichtungen
              <br />
              • Den Schutz unserer Rechte und Interessen
              <br />
              <br />
              Alle Drittanbieter sind verpflichtet, die gleichen Datenschutzstandards einzuhalten.
            </p>
          </Section>

          <Section title="12. Datenschutz bei Kindern">
            <p>
              Unsere Services und Websites sind nicht an Personen unter 18 Jahren gerichtet. 
              Wir erheben bewusst keine Daten von Kindern. 
              Falls wir feststellen, dass wir ungewollt Daten eines Kindes erhoben haben, 
              werden wir diese unverzüglich löschen.
            </p>
          </Section>

          <Section title="13. Internationale Datentransfers">
            <p>
              Die Datenverarbeitung erfolgt ausschliesslich in der Schweiz. 
              Es gibt keine Datentransfers in Länder mit unzureichendem Datenschutzniveau.
            </p>
          </Section>

          <Section title="14. Kontakt bei Datenschutzfragen">
            <p>
              Bei Fragen zur Datenschutzerklärung oder zur Datenverarbeitung 
              kontaktieren Sie uns bitte unter:
              <br />
              E-Mail: tahir.aliu@hotmail.com
              <br />
              Telefon: 076 251 82 80
            </p>
          </Section>

          <Section title="15. Änderungen dieser Datenschutzerklärung">
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung jederzeit
              anzupassen, um sie an geänderte Rechtslagen, geänderte Geschäftsabläufe 
              oder Änderungen unserer Services anzupassen. Die aktuelle Version 
              dieser Datenschutzerklärung ist jederzeit auf dieser Website verfügbar.
              <br />
              <br />
              Bei wesentlichen Änderungen werden wir Sie rechtzeitig informieren.
            </p>
          </Section>

          <Section title="16. Datenschutzbeschwerde">
            <p>
              Falls Sie der Meinung sind, dass Ihre Datenschutzrechte verletzt wurden, 
              haben Sie das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen:
              <br />
              <br />
              <strong className="text-foreground">Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)</strong>
              <br />
              Freiburgstrasse 29
              <br />
              3003 Bern
              <br />
              www.edoeb.admin.ch
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
