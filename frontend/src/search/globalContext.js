export const GLOBAL_CONTEXT = `
ALLGEMEINER KONTEXT DER LERNPLATTFORM

Diese Lernplattform dient der Einarbeitung und Unterstützung von Mitarbeitenden in der Kreditorenbuchhaltung eines medizinischen Praxisnetzwerks.

Ziel ist es, die Standardprozesse von der Postbearbeitung bis zum Monatsabschluss verständlich, strukturiert und praxisnah zu vermitteln.

Die Plattform besteht aus mehreren Modulen, die den typischen Ablauf im Kreditorenprozess abbilden.

---

GESAMTPROZESS KREDITORENBUCHHALTUNG

1. Postbearbeitung
2. Rechnungsprüfung
3. Kontierung
4. Verbuchung
5. Zahlungsvorschlag
6. Bankenbuchung
7. Monatsabschluss

Alle Schritte bauen logisch aufeinander auf.

---

POSTBEARBEITUNG

Aufgaben:
- Eingang von Rechnungen, Bescheiden und Kontoauszügen
- Sortieren und Zuordnen der Unterlagen
- Digitale Ablage und Vorbereitung für die nächsten Prozessschritte
- Sicherstellen, dass alle Unterlagen vollständig sind

Ziel:
- Korrekte Weiterleitung an die zuständigen Stellen
- Vermeidung von Verzögerungen im Prozess

Wichtige organisatorische Regel:
- Kontoauszüge werden an das Hauptbuch weitergeleitet.
- Das Hauptbuch ist für die Bankenbuchung zuständig.

---

RECHNUNGSPRÜFUNG (System: Verifyer)

Aufgaben:
- Formale Prüfung der Rechnungen (Pflichtangaben, Rechnungsnummer, Datum)
- Inhaltliche Prüfung (Beträge, Leistungen, Übereinstimmung mit Bestellung)
- Klärung von Abweichungen mit Fachabteilungen oder Lieferanten

Ziel:
- Nur korrekte und geprüfte Rechnungen gehen weiter in die Kontierung.

---

KONTIERUNG (System: ELO)

Aufgaben:
- Zuordnung von Sachkonto
- Zuordnung von Kostenstelle oder Kostenträger
- Fachliche Prüfung der Kosten

Ziel:
- Vorbereitung der korrekten Buchung im Finanzsystem.

---

VERBUCHUNG (System: Microsoft Dynamics)

Aufgaben:
- Buchung der geprüften und kontierten Rechnungen
- Kontrolle von Beträgen, Konten und Mandanten
- Sicherstellen der Nachvollziehbarkeit

Ziel:
- Ordnungsgemäße Erfassung aller Eingangsrechnungen im System.

---

ZAHLUNGSVORSCHLAG (System: Microsoft Dynamics)

Aufgaben:
- Erstellung des Kreditor-Zahlungsvorschlags
- Prüfung von Fälligkeiten
- Kontrolle von IBAN, Betrag und Verwendungszweck
- Berücksichtigung von Skonto

Ziel:
- Vorbereitung eines korrekten Zahllaufs.

---

BANKENBUCHUNG (System: Microsoft Dynamics)

Organisatorische Zuständigkeit:
- Die Bankenbuchung erfolgt im Hauptbuch.

Aufgaben:
- Import der Kontoauszüge
- Zuordnung von Zahlungen zu offenen Posten
- Prüfung auf Doppelbuchungen oder Fehler
- Korrektur fehlerhafter Positionen

Ziel:
- Korrekte Abbildung aller Zahlungseingänge und -ausgänge.

---

MONATSABSCHLUSS (System: Microsoft Dynamics)

Aufgaben:
- Sicherstellen, dass alle Rechnungen kontiert und gebucht sind
- Prüfung der Bankenbuchungen
- Buchung von Kreditkartenabrechnungen
- Klärung offener Posten
- Periodengerechte Buchung der Zahlläufe

Ziel:
- Vollständiger und korrekter Abschluss des Monats.

---

ZUSAMMENARBEIT UND ORGANISATION

Grundprinzipien:
- Klare Zuständigkeiten je Prozessschritt
- Nachvollziehbare Dokumentation
- Einheitliche Abläufe an allen Standorten
- Kommunikation bei Abweichungen oder Unklarheiten

---

EINARBEITUNG NEUER MITARBEITENDER

Die Einarbeitung erfolgt modular:

1. Orientierung und Überblick über den Prozess
2. Grundlagen der einzelnen Module
3. Bearbeitung von Praxisbeispielen
4. Schrittweise eigenständige Bearbeitung

Ziel:
- Sichere und selbstständige Bearbeitung der Kreditorenprozesse.

---

WICHTIGE SYSTEMZUGEHÖRIGKEITEN

- Rechnungsprüfung: Verifyer
- Kontierung: ELO
- Verbuchung: Microsoft Dynamics
- Zahlungsvorschlag: Microsoft Dynamics
- Bankenbuchung: Microsoft Dynamics
- Monatsabschluss: Microsoft Dynamics

---

ORGANISATORISCHE KERNAUSSAGEN

- Kontoauszüge werden im Hauptbuch verarbeitet.
- Das Hauptbuch ist für die Bankenbuchung zuständig.
- Jede Rechnung durchläuft Prüfung, Kontierung und Verbuchung vor der Zahlung.
`;