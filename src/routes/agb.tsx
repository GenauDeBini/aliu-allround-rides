import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, PageFooter } from "./kontakt";

export const Route = createFileRoute("/agb")({
  head: () => ({
    meta: [
      { title: "AGB – Allgemeine Geschäftsbedingungen – Aliu's Allround Service" },
      {
        name: "description",
        content:
          "Allgemeine Geschäftsbedingungen für die Sprinter-Vermietung und Services von Aliu's Allround Service.",
      },
      { property: "og:title", content: "AGB – Aliu's Allround Service" },
      { property: "og:description", content: "Allgemeine Geschäftsbedingungen." },
    ],
  }),
  component: AGBPage,
});

function AGBPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHeader />
      <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6 md:py-28">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          Rechtliches
        </div>
        <h1 className="mt-3 font-display text-5xl md:text-6xl">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Gültig ab: 1. Juni 2026 – Stand: {new Date().toLocaleDateString("de-CH", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <Section title="1. Geltungsbereich und Vertragsparteien">
            <p>
              Diese AGB gelten für alle Fahrzeugvermietungen und Transportservices von Aliu's Allround Service.
              <br />
              <br />
              <strong className="text-foreground">Vertragsparteien:</strong>
              <br />
              • Unternehmen: Aliu's Allround Service, Tahir Aliu, Kreuzlingen
              <br />
              • Kunde: Die Person, die ein Fahrzeug anmietet oder einen Service bucht
              <br />
              <br />
              Mit der Buchung akzeptiert der Kunde diese AGB vollständig und verbindlich.
            </p>
          </Section>

          <Section title="2. Voraussetzungen für die Anmietung">
            <p>
              <strong className="text-foreground">Erforderliche Bedingungen:</strong>
              <br />
              • Mindestalter: 21 Jahre (mit gültigem Führerschein)
              <br />
              • Gültiger Führerschein der Kategorie B ist für den Mercedes Sprinter ausreichend
              <br />
              • Bei besonderen Fahrzeugvarianten oder speziellen Anforderungen kann C1 oder höher verlangt werden
              <br />
              • Gültige Versicherungspolice (Haftpflicht minimum CHF 1 Mio.)
              <br />
              • Kaution von CHF 500.– pro Fahrzeug (wird bei Rückgabe in gutem Zustand zurückerstattet)
              <br />
              <br />
              <strong className="text-foreground">Überprüfung:</strong>
              <br />
              Aliu's Allround Service behält sich das Recht vor, den Führerschein und die Identität 
              zu überprüfen. Bei Nichterfüllung dieser Voraussetzungen wird die Anmietung verweigert.
            </p>
          </Section>

          <Section title="3. Buchung und Verfügbarkeit">
            <p>
              <strong className="text-foreground">Buchungsvorgang:</strong>
              <br />
              Buchungen erfolgen per Telefon, E-Mail oder über das Kontaktformular.
              <br />
              <br />
              <strong className="text-foreground">Verfügbarkeitsvorbehalt:</strong>
              <br />
              Alle Angebote und Verfügbarkeitszusagen sind freibleibend. Ein Mietvertrag kommt erst zustande, 
              wenn Aliu's Allround Service die Buchung schriftlich (E-Mail oder Vertrag) bestätigt hat.
              <br />
              <br />
              <strong className="text-foreground">Stornierung durch den Kunden:</strong>
              <br />
              • Stornierung mehr als 7 Tage vor Mietbeginn: kostenlos
              <br />
              • Stornierung 3–7 Tage vor Mietbeginn: 50% der Mietgebühr fällig
              <br />
              • Stornierung weniger als 3 Tage vor Mietbeginn: 100% der Mietgebühr fällig
              <br />
              • Nichterscheinen: 100% der Mietgebühr fällig
            </p>
          </Section>

          <Section title="4. Mietdauer, Zeiten und Verspätung">
            <p>
              <strong className="text-foreground">Mietzeiten:</strong>
              <br />
              • 1–3 Stunden: CHF 60.– (inkl. 50 km)
              <br />
              • Halber Tag (bis 8 Stunden): CHF 100.– (inkl. 100 km)
              <br />
              • Ganzer Tag (24 Stunden): CHF 150.– (inkl. 150 km)
              <br />
              <br />
              <strong className="text-foreground">Rückgabezeit:</strong>
              <br />
              Die vereinbarte Rückgabezeit ist verbindlich. Das Fahrzeug muss zum vereinbarten Zeitpunkt 
              mit vollem Tank zurückgegeben werden.
              <br />
              <br />
              <strong className="text-foreground">Verspätete Rückgabe:</strong>
              <br />
              Bei verspäteter Rückgabe (ab 1 Stunde nach vereinbarter Zeit) wird pro angefangene Stunde 
              eine Gebühr von CHF 30.– erhoben.
              <br />
              <br />
              <strong className="text-foreground">Übernachtung:</strong>
              <br />
              Falls das Fahrzeug über Nacht behalten wird, beträgt die Gebühr CHF 25.–
            </p>
          </Section>

          <Section title="5. Kilometer, Tankregelung und Mehrkosten">
            <p>
              <strong className="text-foreground">Kilometerpreis:</strong>
              <br />
              Die Mietgebühren beinhalten eine bestimmte Kilometeranzahl (siehe Punkt 4).
              Jede weitere Kilometer kostet CHF 0,80.
              <br />
              <br />
              <strong className="text-foreground">Tankregelung:</strong>
              <br />
              • Das Fahrzeug wird vollgetankt (Diesel) übergeben
              <br />
              • Der Kunde verpflichtet sich, das Fahrzeug vollgetankt zurückzugeben
              <br />
              • Sollte das Fahrzeug nicht vollgetankt zurückgegeben werden, werden die Treibstoffkosten berechnet 
                (CHF 1,80 pro Liter Diesel + CHF 30.– Bearbeitungsgebühr)
              <br />
              <br />
              <strong className="text-foreground">Weitere Mehrkosten:</strong>
              <br />
              • Reinigung (bei starker Verschmutzung): CHF 50.– bis CHF 150.–
              <br />
              • Reparaturen durch unsachgemässe Verwendung: Kosten werden in Rechnung gestellt
              <br />
              • Bussgelder oder Parktickets: Kunde trägt alle Kosten
            </p>
          </Section>

          <Section title="6. Schäden und Versicherung">
            <p>
              <strong className="text-foreground">Versicherungsdeckung:</strong>
              <br />
              Alle Fahrzeuge sind umfassend versichert:
              <br />
              • Haftpflicht (Schäden an Dritten)
              <br />
              • Kasko (Schäden am Fahrzeug)
              <br />
              • Diebstahl- und Brandversicherung
              <br />
              <br />
              <strong className="text-foreground">Selbstbehalt:</strong>
              <br />
              Der Selbstbehalt beträgt maximal CHF 1'000.– pro Schadensfall.
              <br />
              <br />
              <strong className="text-foreground">Meldungspflicht:</strong>
              <br />
              Bei jedem Unfall oder Schaden (auch Kratzer, Dellen, Glasbruch) muss Aliu's Allround Service 
              unverzüglich (maximal 24 Stunden) informiert werden. Der Versicherer muss gleichzeitig informiert werden.
              <br />
              <br />
              <strong className="text-foreground">Schadensabwicklung:</strong>
              <br />
              • Bei Fremdverschulden: Versicherer regelt Schadensersatz
              <br />
              • Bei Selbstverschulden: Der Kunde trägt bis CHF 1'000.– selbst, danach zahlt die Versicherung
              <br />
              • Absichtliche Beschädigungen: Kunde trägt volle Kosten
            </p>
          </Section>

          <Section title="7. Verbotene Nutzung und Missbrauch">
            <p>
              <strong className="text-foreground">Der Kunde verpflichtet sich, das Fahrzeug nicht zu:</strong>
              <br />
              • Rauchen im Fahrzeug (CHF 100.– Reinigungsgebühr)
              <br />
              • Haustiere im Fahrzeug mitführen (CHF 100.– Reinigungsgebühr)
              <br />
              • Alkoholfahrten nutzen (Mietvertrag wird sofort beendet, volle Kosten fällig)
              <br />
              • Drogen- oder Betäubungsmittelfahrten nutzen
              <br />
              • Zu illegalen Zwecken nutzen
              <br />
              • Mit fehlgeschalteten oder beschädigten Lichtern fahren
              <br />
              • Den Motor überlasten oder das Fahrzeug zu schnell fahren
              <br />
              • Offroad oder auf unbefestigten Wegen fahren
              <br />
              <br />
              Bei Verstoss gegen diese Bestimmungen wird der Mietvertrag sofort beendet und 
              die volle Mietgebühr fällig. Zusätzliche Kosten und Schadensersatzansprüche bleiben vorbehalten.
            </p>
          </Section>

          <Section title="8. Auslandfahrten">
            <p>
              <strong className="text-foreground">Auslandfahrten (z.B. nach Deutschland, Österreich, Frankreich, Italien):</strong>
              <br />
              • Nur mit vorheriger schriftlicher Genehmigung erlaubt
              <br />
              • Ein Grenzübergangs-Gebühr von CHF 50.– wird erhoben
              <br />
              • Die Versicherung ist auch im Ausland gültig (Schweizer Standard)
              <br />
              • Der Kunde muss die Vignette oder Maut bezahlen
              <br />
              • Rückfahrt nach Kreuzlingen ist obligatorisch; abweichende Rückgabeorte sind nicht erlaubt
            </p>
          </Section>

          <Section title="9. Fahrzeugzustand und Übergabe">
            <p>
              <strong className="text-foreground">Überprüfung vor Mietbeginn:</strong>
              <br />
              Der Kunde erhält eine Fotodokumentation und Checkliste des Fahrzeugzustands. 
              Diese muss vom Kunden unterzeichnet werden.
              <br />
              <br />
              <strong className="text-foreground">Bestehende Schäden:</strong>
              <br />
              Bereits vorhandene Schäden sind in der Übergabecheckliste dokumentiert. 
              Der Kunde haftet nicht für diese.
              <br />
              <br />
              <strong className="text-foreground">Rückgabezustand:</strong>
              <br />
              Das Fahrzeug muss in demselben Zustand wie bei der Übergabe zurückgegeben werden 
              (abgesehen von normalem Verschleiss).
              <br />
              <br />
              <strong className="text-foreground">Reinigung bei Rückgabe:</strong>
              <br />
              Das Fahrzeug muss sauber zurückgegeben werden. Grosse Verschmutzungen werden 
              mit CHF 50.– bis CHF 150.– berechnet.
            </p>
          </Section>

          <Section title="10. Haftung und Haftungsbegrenzung">
            <p>
              <strong className="text-foreground">Haftung von Aliu's Allround Service:</strong>
              <br />
              Wir haften nicht für:
              <br />
              • Indirekte Schäden oder Folgeschäden
              <br />
              • Entgangene Gewinne oder Geschäftsverluste
              <br />
              • Persönliche Gegenstände im Fahrzeug
              <br />
              • Verspätungen oder Verzögerungen bei der Übergabe
              <br />
              • Technische Ausfälle oder Pannen (sofern nicht durch grobe Fahrlässigkeit verursacht)
              <br />
              <br />
              <strong className="text-foreground">Haftung des Kunden:</strong>
              <br />
              Der Kunde haftet für:
              <br />
              • Alle Schäden am Fahrzeug, die durch seine Nutzung entstehen
              <br />
              • Bussgelder, Parktickets, Strafzettel
              <br />
              • Schäden durch unsachgemässe Verwendung
              <br />
              • Abweichungen vom Mietvertrag (z.B. unbefugte Auslandfahrten)
            </p>
          </Section>

          <Section title="11. Zahlungsbedingungen">
            <p>
              <strong className="text-foreground">Zahlungszeitraum:</strong>
              <br />
              Die Mietgebühr wird nach der Rückgabe des Fahrzeugs berechnet und ist sofort fällig.
              <br />
              <br />
              <strong className="text-foreground">Zahlungsmittel:</strong>
              <br />
              • Bargeld, Twint, Banküberweisung
              <br />
              • Kaution: CHF 500.– (wird innerhalb von 5 Arbeitstagen nach Rückgabe zurückerstattet, 
                falls keine Schäden vorhanden sind)
              <br />
              <br />
              <strong className="text-foreground">Verzug:</strong>
              <br />
              Bei Zahlungsverzug wird eine Verzugsgebühr von CHF 50.– erhoben. 
              Nach 14 Tagen Zahlungsverzug behält sich Aliu's Allround Service vor, 
              weitere rechtliche Schritte einzuleiten.
            </p>
          </Section>

          <Section title="12. Datenschutz">
            <p>
              Der Kunde akzeptiert, dass seine personenbezogenen Daten (Name, Adresse, Führerscheinnummer, 
              Kontaktdaten) für die Mietverwaltung und Versicherungsabwicklung erhoben und verarbeitet werden.
              <br />
              <br />
              Diese Daten werden gemäss Datenschutzerklärung behandelt und nicht an Dritte weitergegeben, 
              ausser an die Versicherung und Behörden.
              <br />
              <br />
              <a href="/datenschutz" className="text-foreground hover:text-primary font-semibold">
                → Datenschutzerklärung einsehen
              </a>
            </p>
          </Section>

          <Section title="13. Datenschutz und Dokumentation">
            <p>
              <strong className="text-foreground">Fahrtendatenerfassung:</strong>
              <br />
              Das Fahrzeug kann mit einem GPS-Tracker ausgestattet sein (nur zur Fahrzeugsicherung, nicht zur Überwachung des Fahrers).
              <br />
              <br />
              <strong className="text-foreground">Fotodokumentation:</strong>
              <br />
              Bei der Übergabe und Rückgabe werden Fotos des Fahrzeugzustands gemacht. 
              Diese dienen nur zur Dokumentation und werden vertraulich behandelt.
            </p>
          </Section>

          <Section title="14. Gewalt und Stornierung durch Aliu's Allround Service">
            <p>
              Aliu's Allround Service behält sich das Recht vor, einen Mietvertrag sofort zu beenden, falls:
              <br />
              • Der Kunde unter Alkohol- oder Drogeneinfluss steht
              <br />
              • Der Kunde das Fahrzeug missbraucht oder beschädigt
              <br />
              • Der Kunde gegenüber Personal gewalttätig oder beleidigend wird
              <br />
              • Der Kunde die Mietbedingungen grobfahrlässig verstösst
              <br />
              <br />
              In diesen Fällen wird die volle Mietgebühr berechnet und das Fahrzeug polizeilich als 
              gestohlen gemeldet, falls der Kunde sich weigert, es zurückzugeben.
            </p>
          </Section>

          <Section title="15. Gewährleistung und technische Mängel">
            <p>
              <strong className="text-foreground">Gewährleistung:</strong>
              <br />
              Die Fahrzeuge werden in gutem, fahrbereitem Zustand übergeben. 
              Aliu's Allround Service haftet für Mängel, die bei der Übergabe nicht erkennbar waren, 
              für die Dauer der Mietzeit (ausser bei fahrlässiger Beschädigung durch den Kunden).
              <br />
              <br />
              <strong className="text-foreground">Technischer Ausfall während der Miete:</strong>
              <br />
              Falls das Fahrzeug während der Miete liegenbleibt (nicht durch Verschulden des Kunden), 
              wird eine Pannenhilfe organisiert. Der Kunde zahlt die Mietgebühr nicht weiter, 
              falls die Miete nicht fortsetzbar ist.
            </p>
          </Section>

          <Section title="16. Kraftstoff und Umweltstandards">
            <p>
              <strong className="text-foreground">Treibstoffstandard:</strong>
              <br />
              Das Fahrzeug wird mit Diesel (EN 590 Standard) getankt. 
              Der Kunde darf keinen anderen Treibstoff verwenden.
              <br />
              <br />
              <strong className="text-foreground">Betanktung bei Rückgabe:</strong>
              <br />
              Das Fahrzeug muss mit leerem Tank zurückgegeben werden. 
              Restlicher Treibstoff wird nicht erstattet.
            </p>
          </Section>

          <Section title="17. Änderungen und Ergänzungen">
            <p>
              Aliu's Allround Service behält sich das Recht vor, diese AGB jederzeit zu ändern. 
              Änderungen werden mindestens 14 Tage vorher mitgeteilt. 
              Durch weitere Mietverträge nach Mitteilung akzeptiert der Kunde die neuen AGB.
            </p>
          </Section>

          <Section title="18. Salvatorische Klausel">
            <p>
              Sollte eine Bestimmung dieser AGB unwirksam sein, bleibt die Gültigkeit der übrigen 
              Bestimmungen erhalten. Die ungültige Bestimmung wird durch eine wirksame ersetzt, 
              die dem wirtschaftlichen Zweck am nächsten kommt.
            </p>
          </Section>

          <Section title="19. Anwendbares Recht und Gerichtsstand">
            <p>
              <strong className="text-foreground">Anwendbares Recht:</strong>
              <br />
              Diese AGB unterliegen schweizerischem Recht.
              <br />
              <br />
              <strong className="text-foreground">Gerichtsstand:</strong>
              <br />
              Gerichtsstand ist Kreuzlingen, Kanton Thurgau. Bei Konsumentenverträgen kann der Verbraucher 
              jedoch auch an seinem Wohnort klagen.
              <br />
              <br />
              <strong className="text-foreground">Schriftform:</strong>
              <br />
              Änderungen dieser AGB müssen schriftlich (E-Mail oder Vertrag) erfolgen.
            </p>
          </Section>

          <Section title="20. Kontakt und Beschwerden">
            <p>
              Bei Fragen, Reklamationen oder Beschwerden kontaktieren Sie bitte:
              <br />
              <br />
              <strong className="text-foreground">Aliu's Allround Service</strong>
              <br />
              Tahir Aliu
              <br />
              Telefon: <a href="tel:+41762518280" className="text-foreground hover:text-primary">076 251 82 80</a>
              <br />
              E-Mail: <a href="mailto:tahir.aliu@hotmail.com" className="text-foreground hover:text-primary">tahir.aliu@hotmail.com</a>
              <br />
              <br />
              Beschwerde müssen innerhalb von 7 Tagen nach Rückgabe des Fahrzeugs eingereicht werden. 
              Danach verfallen Reklamationen.
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
