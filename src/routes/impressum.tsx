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
              <br />
              Ladungsfähige Adresse: auf Anfrage verfügbar
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

          <Section title="Geschäftstätigkeit">
            <p>
              Aliu's Allround Service ist spezialisiert auf professionelle Sprinter-Vermietung 
              und umfangreiche Transportservices in der Schweiz. Unser Service umfasst:
              <br />
              • Mercedes Sprinter L3 H3 Vermietung (1–3 Stunden, halber Tag, ganzer Tag)
              <br />
              • Umzüge und Einrichtungen
              <br />
              • Transporte und Logistik
              <br />
              • Möbelaufbau und Montage
              <br />
              • Abholung und Entsorgung
              <br />
              • Bus-Vermietung
              <br />
              <br />
              <strong className="text-foreground">Fahrzeugdetails – Mercedes Sprinter L3 H3:</strong>
              <br />
              • Baujahr: 2023–2025
              <br />
              • Treibstoff: Diesel
              <br />
              • Ladevolumen: 15,5 m³
              <br />
              • Zulässige Gesamtmasse: ca. 3.500 kg
              <br />
              • Nutzlast: bis ca. 1.000 kg
              <br />
              • Stehhöhe: 2,24 m
              <br />
              • Führerscheinkategorie: B ausreichend für 3,5 t Gesamtgewicht; 
                C1 oder höher kann bei Sonderbedingungen verlangt werden
              <br />
              <br />
              <strong className="text-foreground">Mietpreise (inklusive Haftpflicht- und Kaskoversicherung, 50 km Vollkasko, Selbstbehalt maximal CHF 1'000.– pro Schadensfall):</strong>
              <br />
              • 1–3 Stunden: CHF 60.– (inkl. 50 km; danach CHF 0,80 pro km)
              <br />
              • Halber Tag (bis 8h): CHF 100.– (inkl. 100 km; danach CHF 0,80 pro km)
              <br />
              • Ganzer Tag (24h): CHF 150.– (inkl. 150 km; danach CHF 0,80 pro km)
              <br />
              • Übernachtungsgebühr (Fahrzeug bleibt bei Kunden): CHF 25.–
              <br />
              <br />
              <strong className="text-foreground">Zusatzkosten:</strong>
              <br />
              • Mehrkilometer: CHF 0,80 pro km
              <br />
              • Reinigungskosten (bei starker Verschmutzung): CHF 50.– bis CHF 150.–
              <br />
              • Tankregelung: Vollgetankt ausleihen, vollgetankt zurückgeben
              <br />
              • Verspätete Rückgabe (ab 1 Stunde nach vereinbarter Zeit): pro angefangene Stunde CHF 30.–
            </p>
          </Section>

          <Section title="Verantwortlich für den Inhalt">
            <p>Tahir Aliu, Geschäftsführer und Inhaber</p>
          </Section>

          <Section title="Haftung und Versicherung">
            <p>
              Alle Fahrzeugvermietungen sind durch eine umfassende Versicherung abgedeckt (Haftpflicht + Kasko).
              <br />
              <br />
              <strong className="text-foreground">Selbstbehalt im Schadensfall:</strong>
              <br />
              Der Selbstbehalt beträgt maximal CHF 1'000.– pro Schadensfall. Dies ist die Höchstgrenze, 
              die ein Kunde im Fall eines Unfalls oder Schadens zahlen muss. Der Selbstbehalt wird nur 1x pro Schadensfall fällig.
              <br />
              <br />
              <strong className="text-foreground">Haftungsbeschränkung:</strong>
              <br />
              Im Rahmen des geltenden Schweizer Rechts haften wir nicht für:
              <br />
              • Grobe Fahrlässigkeit oder Vorsatz (können nicht ausgeschlossen werden)
              <br />
              • Indirekte Schäden, entgangene Gewinne oder Datenverlust
              <br />
              • Schäden durch Krieg, Terrorismus, Naturkatastrophen
              <br />
              • Schäden, die der Kunde durch Missbrauch des Fahrzeugs verursacht hat
              <br />
              <br />
              Alle Mietbedingungen und Haftungsregelungen sind in den Allgemeinen Geschäftsbedingungen (AGB) dokumentiert.
            </p>
          </Section>

          <Section title="Geschäftsbedingungen">
            <p>
              Die Nutzung unserer Services und die Fahrzeugvermietung unterliegen unseren ausführlichen 
              Allgemeinen Geschäftsbedingungen (AGB). Diese müssen bei Vertragsabschluss akzeptiert werden.
              <br />
              <br />
              <a href="/agb" className="text-foreground hover:text-primary font-semibold">
                → Allgemeine Geschäftsbedingungen (AGB) vollständig einsehen
              </a>
              <br />
              <br />
              <strong className="text-foreground">Wichtigste Punkte aus den AGB:</strong>
              <br />
              • Mindestalter: 21 Jahre (mit gültigem Führerschein)
              <br />
              • Kaution: CHF 500.– (wird nach Rückgabe des Fahrzeugs zurückerstattet)
              <br />
              • Führerschein-Kategorie: Kategorie B ausreichend für Sprinter bis 3,5 t; C1 kann bei Sonderausstattung verlangt werden
              <br />
              • Auslandfahrten: Nur mit vorheriger schriftlicher Genehmigung erlaubt
              <br />
              • Rauchen und Haustiere: Nicht gestattet (bei Verstoss: CHF 100.– Reinigungsgebühr)
              <br />
              • Verhalten bei Unfall: Versicherer muss unverzüglich informiert werden
              <br />
              • Verfügbarkeit: Alle angebotenen Mietpreise gelten vorbehaltlich Verfügbarkeit
            </p>
          </Section>

          <Section title="Haftungsausschluss">
            <p>
              Der Inhaber übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen
              Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
              Vollständigkeit der Informationen auf dieser Website. Haftungsansprüche gegen den
              Inhaber wegen Schäden materieller oder immaterieller Art, welche aus
              dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
              Informationen entstanden sind, werden ausgeschlossen.
              <br />
              <br />
              Für Schäden an gemieteten Fahrzeugen gelten die Regelungen der Versicherung 
              und des Mietvertrages.
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

          <Section title="Urheberrechte und Nutzungsrechte">
            <p>
              Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos,
              Videos und anderen Dateien auf dieser Website gehören ausschliesslich
              Aliu's Allround Service oder den speziell genannten Rechteinhabern.
              Für die Reproduktion jeglicher Elemente ist die schriftliche
              Zustimmung des Urheberrechtsträgers im Voraus einzuholen.
            </p>
          </Section>

          <Section title="Technische Hinweise">
            <p>
              Diese Website wurde mit modernen Webtechnologien entwickelt. 
              Die Funktionalität ist für alle gängigen Geräte und Browser optimiert. 
              Bei technischen Problemen kontaktieren Sie uns bitte.
            </p>
          </Section>

          <Section title="Gültigkeitshinweis und Verfügbarkeitsvorbehalt">
            <p>
              Die Informationen auf dieser Website werden regelmässig aktualisiert. 
              Preisangaben, Verfügbarkeiten und Services können sich ändern. 
              <br />
              <br />
              <strong className="text-foreground">Alle Angebote sind freibleibend und gelten vorbehaltlich Verfügbarkeit.</strong>
              <br />
              <br />
              Für verbindliche Auskünfte, Verfügbarkeitsprüfungen und Buchungen kontaktieren Sie uns direkt 
              unter den angegebenen Kontaktdaten.
            </p>
          </Section>

          <Section title="Rechtswahl und Gerichtsstand">
            <p>
              Dieses Impressum unterliegt schweizerischem Recht. Gerichtsstand ist Kreuzlingen, Kanton Thurgau.
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
