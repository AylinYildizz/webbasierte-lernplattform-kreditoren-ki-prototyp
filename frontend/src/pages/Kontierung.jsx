import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/kontierung/intro.png";
import artemisLogo from "../assets/artemis-logo.png";

import imgLogin from "../assets/modules/kontierung/intro.png";
import imgB from "../assets/modules/kontierung/kontierung2.png";
import imgKo3 from "../assets/modules/kontierung/kontierung3.png";
import imgKo4 from "../assets/modules/kontierung/kontierung4.png";
import imgKo5 from "../assets/modules/kontierung/kontierung5.png";
import imgFilter from "../assets/modules/kontierung/filter.png";
import imgWorkflow from "../assets/modules/kontierung/workflow.png";
import imgInvoiceData from "../assets/modules/kontierung/kontierung6.png";
import imgComNumber from "../assets/modules/kontierung/comnumber.png";
import imgPositions from "../assets/modules/kontierung/kontierung7.png";
import imgSachkonto from "../assets/modules/kontierung/kontierung8.png";
import imgSachkontoEintragen from "../assets/modules/kontierung/sachkontoeintragen.png";
import imgZahlungsziel from "../assets/modules/kontierung/sachkontoeintragen.png";

function Kontierung() {
  const navigate = useNavigate();

const steps = [
  {
    title: "Schritt 1: ELO starten und anmelden",
    task:
      "ELO Java Client starten und mit den persönlichen Zugangsdaten anmelden, um auf die Aufgabenliste und die Workflows zugreifen zu können.",
    image: imgLogin,
    points: [
      "ELO Java Client über das Desktop-Icon öffnen",
      "Benutzername und Passwort eingeben",
      "Richtiges Repository auswählen",
      "Sprache auf Deutsch einstellen",
      "Mit Klick auf „ANMELDEN“ bestätigen"
    ],
    result:
      "Du bist erfolgreich im ELO-System angemeldet und kannst Aufgaben bearbeiten.",
    example:
      "Du meldest dich morgens in ELO an, um die neu eingegangenen Rechnungen in deinem Aufgabenbereich zu kontieren. Nach dem Login siehst du direkt deine Aufgabenliste.",
    mistake:
      "Falsches Repository oder falsche Sprache ausgewählt. Dadurch können Menüpunkte abweichen oder Workflows nicht korrekt angezeigt werden.",
    checklist: [
      "Login erfolgreich?",
      "Richtiges Repository gewählt?",
      "Sprache Deutsch aktiv?",
      "Aufgabenliste sichtbar?"
    ]
  },

  {
    title: "Schritt 2: Orientierung in ELO",
    task:
      "Verschaffe dir einen Überblick über ELO und ordne deine Aufgabe im Gesamtprozess der Kreditorenbuchhaltung korrekt ein.",
    image: imgB,
    points: [
      "ELO ist ein Dokumenten- und Workflow-System, kein Buchhaltungssystem",
      "In ELO erfolgt die fachliche Vorbereitung, nicht die Verbuchung",
      "Die Kontierung legt fest, welchen Sachkonten und Kostenstellen Kosten zugeordnet werden"
    ],
    result:
      "Du verstehst Zweck und Rolle von ELO im Kreditorenprozess.",
    example:
      "Eine Rechnung wird in ELO fachlich kontiert und anschließend im Workflow zur Freigabe weitergeleitet. Erst danach erfolgt die Verbuchung im Buchhaltungssystem.",
    mistake:
      "ELO mit dem Buchhaltungssystem verwechseln und annehmen, dass die Rechnung durch die Kontierung bereits gebucht oder bezahlt ist.",
    checklist: [
      "Ist klar, dass ELO nur Vorbereitung/Workflow ist?",
      "Ist klar, dass Kontierung fachliche Zuordnung bedeutet?",
      "Ist klar, dass Verbuchung später in einem anderen System erfolgt?"
    ]
  },

  {
    title: "Schritt 3: Aufgabenübersicht filtern und konfigurieren",
    task:
      "Konfiguriere die Aufgabenliste so, dass nur die relevanten Rechnungen deiner Gesellschaft und deines Arbeitsschritts angezeigt werden.",
    images: [imgKo3, imgKo4],
    points: [
      "Spalten wie Dokumentnummer, Kreditor, Firmencode und Arbeitsschritt einblenden",
      "Ganz wichtig: Firmencode oben auf deine Gesellschaft einstellen",
      "In der unteren Symbolleiste auf „Aufgaben“ klicken",
      "Filter auf Arbeitsschritt „Formelle Prüfung / Kontierung“ setzen"
    ],
    result:
      "Die Aufgabenliste zeigt ausschließlich kontierungsrelevante Vorgänge deiner Gesellschaft.",
    example:
      "Du stellst den Firmencode auf deine Gesellschaft ein und filterst den Arbeitsschritt. Dadurch siehst du nur Rechnungen, die wirklich von dir zu bearbeiten sind.",
    mistake:
      "Firmencode nicht angepasst oder Filter vergessen. Dadurch werden falsche Gesellschaften oder falsche Arbeitsschritte angezeigt.",
    consequence:
      "Es besteht das Risiko, Vorgänge einer falschen Gesellschaft zu kontieren oder Rechnungen zu bearbeiten, die nicht in deinen Aufgabenbereich gehören.",
    checklist: [
      "Firmencode korrekt?",
      "Arbeitsschritt korrekt gefiltert?",
      "Wichtige Spalten eingeblendet (Dok-Nr., Kreditor, Firmencode)?",
      "Nur relevante Vorgänge sichtbar?"
    ]
  },

  {
    title: "Schritt 4: Rechnung öffnen und Workflow annehmen",
    task:
      "Öffne die Rechnung aus der Aufgabenliste und nimm den Workflow an, damit die Bearbeitung technisch freigeschaltet wird.",
    images: [imgWorkflow, imgKo5],
    points: [
      "Rechnung in der Aufgabenliste auswählen",
      "Doppelklick öffnet die Rechnungsansicht",
      "PDF links, Metadaten rechts prüfen",
      "Rechtsklick → „Workflow annehmen“",
      "Erst danach sind Änderungen möglich"
    ],
    result:
      "Die Rechnung ist geöffnet und zur Bearbeitung freigegeben.",
    example:
      "Du öffnest eine Rechnung und siehst, dass die Felder noch gesperrt sind. Nach dem Workflow-Annehmen kannst du Sachkonto und Buchungstext eintragen.",
    mistake:
      "Workflow nicht angenommen und versuchen zu kontieren. Eingaben werden dann nicht gespeichert oder sind gar nicht möglich.",
    checklist: [
      "Rechnung geöffnet?",
      "PDF und Metadaten sichtbar?",
      "Workflow angenommen?",
      "Eingabefelder sind bearbeitbar?"
    ]
  },

  {
    title: "Schritt 5: Überblick über die Rechnung verschaffen",
    task:
      "Prüfe vor der Kontierung die grundlegenden Rechnungsdaten, um Plausibilität und Zuordnung sicherzustellen.",
    image: imgInvoiceData,
    points: [
      "Lieferant und Rechnungsempfänger prüfen",
      "Rechnungsnummer und Rechnungsdatum kontrollieren",
      "Brutto-, Netto- und Steuerbeträge plausibilisieren",
      "Gesellschaft und Zahlungsbedingungen prüfen"
    ],
    result:
      "Du hast die Rechnung fachlich verstanden und erkennst Auffälligkeiten frühzeitig.",
    example:
      "Du stellst fest, dass der Rechnungsempfänger nicht zur Gesellschaft passt. Du stoppst die Kontierung und klärst den Vorgang, bevor falsch gebucht wird.",
    mistake:
      "Direkt kontieren ohne Plausibilitätsprüfung (Rechnungsempfänger, Beträge, Steuer).",
    consequence:
      "Falsche Zuordnung kann zu Fehlbuchungen, falschen Kostenstellen-Auswertungen und hohem Klärungsaufwand führen.",
    checklist: [
      "Lieferant korrekt?",
      "Rechnungsempfänger/Gesellschaft korrekt?",
      "Rechnungsnummer und Datum plausibel?",
      "Beträge (Netto/Steuer/Brutto) stimmig?",
      "Zahlungsbedingungen plausibel?"
    ]
  },

  {
    title: "Schritt 6: Prüfen, ob eine Kontierung notwendig ist",
    task:
      "Entscheide, ob eine manuelle Kontierung erforderlich ist oder ob die Rechnung automatisiert verarbeitet wird (z. B. anhand der COM-Nummer).",
    image: imgComNumber,
    points: [
      "Prüfen, ob eine COM-Nummer vorhanden ist",
      "Automatisierte Verarbeitung erkennen",
      "Nur kontieren, wenn der Prozess das vorsieht"
    ],
    result:
      "Du weißt sicher, ob du kontieren musst oder ob der Vorgang automatisiert weiterläuft.",
    example:
      "Du erkennst eine COM-Nummer und stellst fest, dass die Rechnung im automatisierten Prozess läuft. Du nimmst keine manuelle Kontierung vor.",
    mistake:
      "Automatisierte Vorgänge dennoch manuell kontieren oder verändern.",
    consequence:
      "Das kann zu Prozessabbrüchen, Doppelbearbeitung oder falschen Daten im Folgeprozess führen.",
    checklist: [
      "COM-Nummer vorhanden?",
      "Ist der Vorgang automatisiert?",
      "Ist manuelle Kontierung im Workflow überhaupt vorgesehen?"
    ]
  },

  {
    title: "Schritt 7: Reiter „Positionsdaten“ öffnen",
    task:
      "Öffne den Bereich, in dem Sachkonten, Buchungstexte und ggf. Positionsaufteilungen gepflegt werden.",
    image: imgPositions,
    points: [
      "Reiter „Positionsdaten“ auswählen",
      "Hier werden Sachkonto, Buchungstext und Positionen gepflegt"
    ],
    result:
      "Der Kontierungsbereich ist geöffnet.",
    example:
      "Du wechselst in die Positionsdaten und siehst mehrere Positionen, die ggf. unterschiedliche Sachkonten benötigen.",
    mistake:
      "In falschen Reitern arbeiten und Änderungen an der falschen Stelle versuchen.",
    checklist: [
      "Reiter Positionsdaten geöffnet?",
      "Sind Positionen sichtbar?",
      "Sind Sachkonto- und Textfelder vorhanden?"
    ]
  },

  {
    title: "Schritt 8: Sachanalyse der Rechnung durchführen",
    task:
      "Analysiere die Rechnung inhaltlich, um die Kostenart korrekt ableiten zu können.",
    points: [
      "Welche Leistung wurde erbracht?",
      "Einmalige oder laufende Leistung?",
      "Mehrere unterschiedliche Leistungen enthalten?",
      "Ist die Leistung einer Kostenstelle zuzuordnen?"
    ],
    result:
      "Du kannst die Leistung fachlich einordnen und die korrekte Kontierung ableiten.",
    example:
      "Bei einer Rechnung für Wartung und Material erkennst du zwei unterschiedliche Leistungsarten und bereitest eine Aufteilung vor.",
    mistake:
      "Nur nach Lieferant kontieren, ohne den Inhalt (Leistungsart) zu prüfen.",
    checklist: [
      "Leistungsinhalt verstanden?",
      "Einmalig vs. laufend erkannt?",
      "Mehrere Leistungen erkannt?",
      "Zuordnung zu Kostenart möglich?"
    ]
  },

  {
    title: "Schritt 9: Passendes Sachkonto ermitteln",
    task:
      "Ermittle das sachlich richtige Sachkonto auf Basis der Leistung und der internen Kontierungslogik.",
    image: imgSachkonto,
    points: [
      "Kontierungshandbuch verwenden",
      "Vergleich mit früheren Rechnungen heranziehen",
      "Kostenart eindeutig zuordnen"
    ],
    result:
      "Das korrekte Sachkonto ist bestimmt.",
    example:
      "Du nutzt das Kontierungshandbuch und findest für medizinisches Verbrauchsmaterial das vorgesehene Sachkonto. Du prüfst zur Sicherheit eine alte Rechnung desselben Lieferanten.",
    mistake:
      "Sachkonto ‚aus Gewohnheit‘ wählen, ohne Handbuch oder Vergleich zu nutzen.",
    consequence:
      "Ein falsches Sachkonto verfälscht Auswertungen, Budgets und Jahresabschlüsse.",
    checklist: [
      "Kontierungshandbuch geprüft?",
      "Mit vergleichbarer Rechnung abgeglichen?",
      "Sachkonto fachlich plausibel?"
    ]
  },

  {
    title: "Schritt 10: Sachkonto eintragen",
    task:
      "Trage das ermittelte Sachkonto korrekt in die Positionsdaten ein.",
    image: imgSachkontoEintragen,
    points: [
      "Sachkonto ausschließlich numerisch eintragen",
      "Keine Texte oder Kommentare im Sachkontenfeld",
      "Bei mehreren Positionen: pro Position korrekt erfassen"
    ],
    result:
      "Das Sachkonto ist korrekt hinterlegt.",
    example:
      "Du trägst das Sachkonto als Nummer ein und prüfst, ob es bei jeder Position korrekt gesetzt ist.",
    mistake:
      "Zahlendreher oder Texte im Feld; oder nur eine Position kontiert, obwohl mehrere vorhanden sind.",
    checklist: [
      "Sachkonto numerisch eingetragen?",
      "Keine Tippfehler/Zahlendreher?",
      "Bei mehreren Positionen überall gepflegt?"
    ]
  },

  {
    title: "Schritt 11: Buchungstext erfassen",
    task:
      "Erfasse einen klaren Buchungstext, der die Leistung nachvollziehbar beschreibt und spätere Prüfungen unterstützt.",
    image: imgSachkontoEintragen,
    points: [
      "Lieferant + Leistung kurz benennen",
      "Rechnungsbezug herstellen (z. B. Monat/Zeitraum, Vertrag, Wartung)",
      "Keine internen Abkürzungen ohne Bedeutung verwenden"
    ],
    result:
      "Der Buchungstext ist eindeutig, nachvollziehbar und revisionssicher.",
    example:
      "„Lieferant XY – Wartung Medizingerät OP, Zeitraum 01/2026“ statt „Wartung“.",
    mistake:
      "Zu allgemeine Texte („Rechnung“, „Diverse“, „Service“) oder fehlende Leistungsbeschreibung.",
    checklist: [
      "Leistung klar beschrieben?",
      "Zeitraum/Bezug enthalten (falls relevant)?",
      "Text kurz, aber eindeutig?"
    ]
  },

  {
    title: "Schritt 12: Mehrere Leistungen sachgerecht aufteilen",
    task:
      "Teile Rechnungen mit mehreren Leistungsarten auf, damit jede Kostenart korrekt zugeordnet wird.",
    points: [
      "Positionen aufteilen",
      "Je Position eigenes Sachkonto vergeben",
      "Beträge korrekt verteilen",
      "Summe der Positionen muss dem Rechnungsbetrag entsprechen"
    ],
    result:
      "Alle Leistungen sind sachlich korrekt kontiert und nachvollziehbar aufgeteilt.",
    example:
      "Rechnung enthält Wartung (Dienstleistung) und Ersatzteile (Material). Du teilst in zwei Positionen und vergibst je ein Sachkonto.",
    mistake:
      "Alles auf ein Sachkonto buchen, obwohl unterschiedliche Leistungen enthalten sind.",
    consequence:
      "Kosten werden falsch ausgewiesen, Budgets verfälscht und Prüfungen erschwert.",
    checklist: [
      "Sind mehrere Leistungsarten vorhanden?",
      "Positionen korrekt aufgeteilt?",
      "Sachkonten pro Position korrekt?",
      "Positionssummen = Rechnungsbetrag?"
    ]
  },

  {
    title: "Schritt 13: Beträge und Zahlungsziel kontrollieren",
    task:
      "Prüfe, ob Beträge, Steuer und Zahlungsbedingungen korrekt übernommen wurden und rechnerisch plausibel sind.",
    image: imgZahlungsziel,
    points: [
      "Netto- und Steuerbeträge prüfen",
      "Summe der Positionen mit Rechnungsbetrag abgleichen",
      "Zahlungsziel geprüft?",
      "Falls Zahlungsziel geändert: korrigieren und „Standardwert verwenden“ auf Nein setzen"
    ],
    result:
      "Die Kontierung ist rechnerisch und formal korrekt.",
    example:
      "OCR hat das Zahlungsziel falsch erkannt. Du korrigierst es und setzt den Standardwert auf Nein, damit die Änderung übernommen wird.",
    mistake:
      "Positionssummen nicht abgleichen oder Zahlungsziel ungeprüft lassen.",
    checklist: [
      "Netto/Steuer/Brutto plausibel?",
      "Positionssumme stimmt?",
      "Zahlungsziel korrekt?",
      "Bei Änderung Standardwert = Nein?"
    ]
  },

  {
    title: "Schritt 14: Kontierung abschließen und zur Freigabe weiterleiten",
    task:
      "Schließe die Kontierung formal ab, speichere alle Eingaben und leite den Vorgang im Workflow an die nächste Stufe weiter.",
    points: [
      "Alle Eingaben speichern",
      "Letzte Plausibilitätsprüfung durchführen (Sachkonto, Text, Beträge)",
      "Rechnung im Workflow zur nächsten Stufe weiterleiten",
      "Button „Freigeben“ klicken (gemäß Prozess)"
    ],
    result:
      "Die Rechnung ist vollständig kontiert und zur weiteren Verarbeitung freigegeben.",
    example:
      "Du prüfst noch einmal Sachkonto, Buchungstext und Beträge. Danach leitest du die Rechnung zur Freigabe weiter.",
    mistake:
      "Weiterleiten ohne Speicherung oder ohne letzte Plausibilitätsprüfung.",
    checklist: [
      "Gespeichert?",
      "Sachkonto korrekt?",
      "Buchungstext sauber?",
      "Beträge/Zahlungsziel geprüft?",
      "Workflow weitergeleitet?"
    ]
  },

  {
    title: "Sonderfall: Mahnungen prüfen und klären",
    task:
      "Bearbeite Mahnungen regelkonform: nicht kontieren oder freigeben, sondern zunächst fachlich klären.",
    points: [
      "Mahnungen dürfen grundsätzlich nicht freigegeben oder kontiert werden",
      "Prüfen, ob die zugehörige Rechnung bereits bezahlt wurde",
      "Falls bezahlt: Mahnung dokumentieren und ablehnen",
      "Falls nicht bezahlt: Ursache ermitteln (Rechnung fehlt, Workflow hängt, Freigabe fehlt)",
      "Standort oder Kreditor kontaktieren",
      "Originalrechnung anfordern und anschließend ordnungsgemäß verarbeiten"
    ],
    result:
      "Die Mahnung ist fachlich geklärt, ohne Prozess- oder Zahlungsfehler auszulösen.",
    example:
      "Du erhältst eine Mahnung, prüfst den Zahlungsstatus und stellst fest, dass die Rechnung bereits bezahlt wurde. Du dokumentierst den Fall und weist die Mahnung zurück.",
    mistake:
      "Mahnung wie eine normale Rechnung behandeln und freigeben/kontieren.",
    consequence:
      "Kann zu Doppelzahlungen, falschen Buchungen und unnötigen Eskalationen mit dem Kreditor führen.",
    checklist: [
      "Ist es wirklich eine Mahnung (nicht die Originalrechnung)?",
      "Zahlungsstatus geprüft?",
      "Ursache ermittelt (Workflow, Freigabe, fehlende Rechnung)?",
      "Dokumentation/Kommunikation durchgeführt?",
      "Erst danach ggf. Originalrechnung verarbeiten"
    ]
  }
];


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

const quiz = [
  {
    question: "Was ist das Hauptziel der Kontierung?",
    options: [
      "Die Rechnung technisch zu speichern",
      "Die Kosten fachlich einem Sachkonto zuzuordnen",
      "Die Rechnung sofort zu bezahlen"
    ],
    correctAnswer: "Die Kosten fachlich einem Sachkonto zuzuordnen",
    correctFeedback:
      "Richtig. Ziel der Kontierung ist die fachlich korrekte Zuordnung der Kosten zu einem Sachkonto.",
    wrongFeedback:
      "Nicht korrekt. Die Kontierung dient der fachlichen Zuordnung der Kosten zu einem Sachkonto."
  },
  {
    question: "In welchem System wird die Kontierung durchgeführt?",
    options: ["MS Dynamics", "ELO", "Excel"],
    correctAnswer: "ELO",
    correctFeedback:
      "Richtig. Die fachliche Kontierung erfolgt im Workflow-System ELO.",
    wrongFeedback:
      "Nicht korrekt. Die Kontierung findet im System ELO statt."
  },
  {
    question: "Warum ist der korrekte Firmencode wichtig?",
    options: [
      "Damit nur Vorgänge der richtigen Gesellschaft bearbeitet werden",
      "Damit die Bilder schneller laden",
      "Damit der Workflow automatisch abgeschlossen wird"
    ],
    correctAnswer:
      "Damit nur Vorgänge der richtigen Gesellschaft bearbeitet werden",
    correctFeedback:
      "Richtig. Der Firmencode stellt sicher, dass nur Rechnungen der richtigen Gesellschaft bearbeitet werden.",
    wrongFeedback:
      "Nicht korrekt. Der Firmencode ist wichtig, damit nur die richtige Gesellschaft bearbeitet wird."
  },
  {
    question: "Was muss ein Buchungstext mindestens enthalten?",
    options: [
      "Nur den Rechnungsbetrag",
      "Lieferant und Leistung",
      "Nur das Sachkonto"
    ],
    correctAnswer: "Lieferant und Leistung",
    correctFeedback:
      "Richtig. Ein Buchungstext muss die Leistung und den Lieferanten nachvollziehbar beschreiben.",
    wrongFeedback:
      "Nicht korrekt. Ein Buchungstext sollte immer Lieferant und Leistung enthalten."
  },
  {
    question: "Was ist zu tun, wenn eine Rechnung mehrere Leistungsarten enthält?",
    options: [
      "Alles auf ein Sachkonto buchen",
      "Die Rechnung ablehnen",
      "Die Beträge auf mehrere Sachkonten aufteilen"
    ],
    correctAnswer:
      "Die Beträge auf mehrere Sachkonten aufteilen",
    correctFeedback:
      "Richtig. Unterschiedliche Leistungen müssen getrennt kontiert werden.",
    wrongFeedback:
      "Nicht korrekt. Unterschiedliche Leistungen müssen auf passende Sachkonten aufgeteilt werden."
  },
  {
    question: "Warum dürfen Mahnungen nicht kontiert werden?",
    options: [
      "Sie haben keinen Betrag",
      "Sie erfordern zuerst eine fachliche Klärung",
      "Sie werden automatisch bezahlt"
    ],
    correctAnswer:
      "Sie erfordern zuerst eine fachliche Klärung",
    correctFeedback:
      "Richtig. Mahnungen sind keine neue Leistung und müssen zunächst fachlich geprüft werden.",
    wrongFeedback:
      "Nicht korrekt. Mahnungen müssen zuerst geklärt werden und dürfen nicht direkt kontiert werden."
  }
];

const [shuffledOptions, setShuffledOptions] = useState(
    shuffleArray(quiz[0].options)
  );
  const [wrongQuestions, setWrongQuestions] = useState([]);
  const [isRetry, setIsRetry] = useState(false);  
  const activeQuiz = isRetry ? wrongQuestions : quiz;
  const [quizStep, setQuizStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [quizChecked, setQuizChecked] = useState(false);
  const [current, setCurrent] = useState(0);
  const [understood, setUnderstood] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [finished, setFinished] = useState(false);
  const [direction, setDirection] = useState("next");

  const progress = ((current + 1) / steps.length) * 100;



  return (
    <div className="module-detail-page">

      {!showIntro && !finished && !showQuiz && (
        <div className="module-progress-free">
          <div className="progress-text">
            Schritt {current + 1} / {steps.length}
          </div>
          <div className="progress-track">
            <div
              className="progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

  {showIntro && (
  <div
    className="step-screen step-with-background kontierung pop-in intro-background"
    style={{ backgroundImage: `url(${introImage})` }}
  >
    <div className="module-card step-card-full">
      <img
        src={introImage}
        alt="Kontierung"
        className="module-intro-image"
      />
      <h2>Kontierung</h2>

           <p className="step-task">
  <strong>Ziel des Moduls:</strong>{" "}
  Nach Abschluss dieses Moduls bist du in der Lage, Eingangsrechnungen im System ELO fachlich korrekt und nachvollziehbar zu kontieren. 
  Du prüfst die Rechnungsgrunddaten, entscheidest sicher, ob eine manuelle Kontierung erforderlich ist (z. B. anhand einer COM-Nummer), 
  ermittelst das passende Sachkonto auf Basis der Leistung und der internen Kontierungslogik und dokumentierst die Buchung durch einen 
  aussagekräftigen Buchungstext. Zudem kannst du Rechnungen bei mehreren Leistungsarten sachgerecht aufteilen, Beträge sowie Zahlungsbedingungen 
  plausibilisieren und Sonderfälle wie Mahnungen regelkonform behandeln, ohne fehlerhafte Freigaben oder Doppelzahlungen auszulösen.
</p>

            <div className="step-actions center">
              <button
                className="primary-button"
                onClick={() => setShowIntro(false)}
              >
                Modul starten
              </button>
              <Link to="/module">
                <button className="secondary-button">
                  Zurück zu den Lernmodulen
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {finished && (
       <div
  className="step-screen step-with-background kontierung pop-in intro-background"
  style={{ backgroundImage: `url(${introImage})` }}
>
          <div className="module-card step-card-full completed">
            <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
            <h2>Modul abgeschlossen</h2>

            <p className="step-task">
              Du hast alle Schritte der Kontierung erfolgreich abgeschlossen.
            </p>

            <div className="step-actions center">
              <button
                className="primary-button"
                onClick={() => navigate("/module")}
              >
                Zurück zu den Lernmodulen
              </button>
            </div>
          </div>
        </div>
      )}

   
  {showQuiz && (
  <div
  className="step-screen step-with-background kontierung pop-in intro-background"
  style={{ backgroundImage: `url(${introImage})` }}
>
    <div className="module-card step-card-full">
        <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            />
      <h2>Selbstüberprüfung</h2>

      <p className="step-task">
        Frage {quizStep + 1} von {activeQuiz.length}:
      </p>

      <div className="step-callout tip">
        <strong>{activeQuiz[quizStep].question}</strong>
        <ul className="step-points">
          {shuffledOptions.map((opt, i) => (
            <li key={i}>
              <label>
                <input
                  type="radio"
                  name="quiz"
                  checked={quizAnswer === opt}
                  onChange={() => setQuizAnswer(opt)}
                />{" "}
                {opt}
              </label>
            </li>
          ))}
        </ul>

        <button
          className="secondary-button"
          onClick={() => {
            if (quizAnswer !== activeQuiz[quizStep].correctAnswer) {
                setWrongQuestions(prev =>
  prev.some(q => q.question === activeQuiz[quizStep].question)
    ? prev
    : [...prev, activeQuiz[quizStep]]
);
              }
            setQuizChecked(true);
          }}
        >
          Antwort prüfen
        </button>

        {quizChecked && (
          <div
            className={`step-callout ${
              quizAnswer === activeQuiz[quizStep].correctAnswer ? "success" : "danger"
            }`}
            style={{ marginTop: "1rem" }}
          >
            {quizAnswer === activeQuiz[quizStep].correctAnswer
  ? activeQuiz[quizStep].correctFeedback
  : activeQuiz[quizStep].wrongFeedback}
          </div>
        )}
      </div>

      <div className="step-actions center">
       <button
  className="primary-button"
  disabled={!quizChecked || quizAnswer !== activeQuiz[quizStep].correctAnswer}
  onClick={() => {
  if (quizStep < activeQuiz.length - 1) {
    const nextStep = quizStep + 1;
    setQuizStep(nextStep);
    setShuffledOptions(shuffleArray(activeQuiz[nextStep].options));
    setQuizAnswer(null);
    setQuizChecked(false);
  } else {
    // 🔁 Wiederholungsrunde starten
    if (!isRetry && wrongQuestions.length > 0) {
      setIsRetry(true);
      setQuizStep(0);
      setShuffledOptions(shuffleArray(wrongQuestions[0].options));
      setQuizAnswer(null);
      setQuizChecked(false);
    } else {
      // ✅ Alles richtig → Modul fertig
      setShowQuiz(false);
      setFinished(true);
    }
  }
}}
>
  {quizStep < activeQuiz.length - 1
  ? "Nächste Frage"
  : isRetry
    ? "Wiederholung abschließen"
    : "Modul abschließen"}
</button>
      </div>
    </div>
  </div>
)}

      {!showIntro && !finished && !showQuiz && (
        <>
          <div
  className="step-screen step-with-background kontierung pop-in intro-background"
  style={{ backgroundImage: `url(${introImage})` }}
>
            <div
              key={current}
              className={`module-card step-card-full step-animate ${direction} ${
                understood ? "completed" : ""
              }`}
            >
               <img
              src={artemisLogo}
              alt="Artemis"
              className="module-card-logo"
            /> 
              <h2>{steps[current].title}</h2>


{/* Mehrere Bilder */}
{steps[current].images && (
  <div className="step-images">
    {steps[current].images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`${steps[current].title} – Ansicht ${i + 1}`}
        className="step-image"
      />
    ))}
  </div>
)}

{/* Einzelnes Bild */}
{steps[current].image && !steps[current].images && (
  <img
    src={steps[current].image}
    alt={steps[current].title}
    className="step-image"
  />
)}

<p className="step-task">
  <strong>Aufgabe:</strong> {steps[current].task}
</p>

<ul className="step-points">
  {steps[current].points.map((p, i) => (
    <li key={i}>{p}</li>
  ))}
</ul>

              {steps[current].example && (
                <div className="step-callout tip">
                  <strong>Praxisbeispiel:</strong><br />
                  {steps[current].example}
                </div>
              )}

              {steps[current].mistake && (
                <div className="step-callout warning">
                  <strong>Typische Fehlerquelle:</strong><br />
                  {steps[current].mistake}
                </div>
              )}
                {steps[current].consequence && (
  <div className="step-callout danger">
    <strong>Konsequenzen bei falscher Bearbeitung:</strong><br />
    {steps[current].consequence}
  </div>
)}
{steps[current].checklist && (
  <div className="step-callout">
    <strong>Checkliste:</strong>
    <ul className="step-points" style={{ marginTop: "0.8rem" }}>
      {steps[current].checklist.map((c, i) => (
        <li key={i}>{c}</li>
      ))}
    </ul>
  </div>
)}


              <div className="step-callout success">
                <strong>Ergebnis:</strong> {steps[current].result}
              </div>

              <div className="step-actions">
                <button
                  className="secondary-button"
                  disabled={current === 0}
                  onClick={() => {
                    setDirection("prev");
                    setCurrent(c => c - 1);
                    setUnderstood(false);
                  }}
                >
                  Zurück
                </button>

            
                
                
                
                <button
                  className="primary-button"
                  onClick={() => {
                    if (!understood) {
                      setUnderstood(true);
                      return;
                    }
                    setDirection("next");
                    if (current === steps.length - 1) {
                      setShowQuiz(true);
                    } else {
                      setCurrent(c => c + 1);
                      setUnderstood(false);
                    }
                  }}
                >
                    {understood ? "Nächster Schritt" : "Weiter"}
                </button>
              </div>
            </div>
          </div>

          <div className="module-exit">
            <Link to="/module">
              <button className="secondary-button">
                Zurück zu den Lernmodulen
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Kontierung;