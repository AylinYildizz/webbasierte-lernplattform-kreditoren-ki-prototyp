
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/rechnungspruefung/rechnungspruefung-intro.jpg";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder
import imgLogin from "../assets/modules/rechnungspruefung/einloggen.png";
import imgUebersicht from "../assets/modules/rechnungspruefung/uebersicht.png";
import img01 from "../assets/modules/rechnungspruefung/01-gesamtseite.png";
import img03 from "../assets/modules/rechnungspruefung/03-blaue-felder.png";
import img04 from "../assets/modules/rechnungspruefung/04-rote-felder.png";
import img05 from "../assets/modules/rechnungspruefung/05-vorgang-fortsetzen.png";
import img06 from "../assets/modules/rechnungspruefung/06-mahnstufe.png";
import img07 from "../assets/modules/rechnungspruefung/07-rechnungskorrektur.png";
import img08 from "../assets/modules/rechnungspruefung/08-weitere-felder.png";
import img09 from "../assets/modules/rechnungspruefung/09-aussteuern.png";




function Rechnungspruefung() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
 const steps = [
  {
    title: "Schritt 1: Im Verifier einloggen",
    task: "Melde dich im Verifier-System an.",
    image: imgLogin,
    points: [
      "Verifier im Browser öffnen",
      "Weitere Optionen wählen",
      "Benutzername eingeben",
      "Passwort eingeben"
    ],
    example:
      "Du öffnest morgens den Verifier, meldest dich mit deinen Zugangsdaten an und gelangst zur Übersicht der offenen Rechnungen.",
    mistake:
      "Falscher Benutzer oder falsche Mandantenauswahl führt dazu, dass du Rechnungen einer anderen Gesellschaft siehst.",
    checklist: [
      "Richtiger Benutzer angemeldet",
      "System ohne Fehlermeldung gestartet",
      "Übersicht mit offenen Vorgängen sichtbar"
    ],
    result: "Du bist erfolgreich eingeloggt."
  },

  {
    title: "Schritt 2: Übersicht korrekt einstellen",
    task: "Konfiguriere die Übersicht korrekt.",
    image: imgUebersicht,
    points: [
      "Buchungskreis: Alle",
      "Anzahl: 2000",
      "Priorität auswählen & übernehmen"
    ],
    example:
      "Nach dem Login stellst du den Buchungskreis auf ‚Alle‘ und erhöhst die Anzahl auf 2000, damit alle offenen Rechnungen sichtbar sind.",
    mistake:
      "Zu geringe Anzahl oder falscher Buchungskreis führt dazu, dass wichtige Rechnungen nicht angezeigt werden.",
    consequence:
      "Rechnungen bleiben unbearbeitet und können in Mahnstufen laufen.",
    checklist: [
      "Buchungskreis korrekt eingestellt",
      "Anzahl auf 2000 gesetzt",
      "Priorität übernommen",
      "Alle relevanten Vorgänge sichtbar"
    ],
    result: "Alle relevanten Vorgänge sind sichtbar."
  },

  {
    title: "Schritt 3: Überblick verschaffen",
    task: "Vorgang öffnen und die wichtigsten Rechnungsdaten prüfen.",
    image: img01,
    points: [
      "Rechnungsempfänger prüfen",
      "Kreditor korrekt zuordnen",
      "Rechnungsdatum und Rechnungsnummer prüfen",
      "Leistungsdatum prüfen",
      "Betrag und Mahnstufe beachten"
    ],
    example:
      "Du öffnest eine Rechnung und stellst fest, dass der Rechnungsempfänger korrekt ist, der Betrag mit dem Beleg übereinstimmt und keine Mahnstufe vorliegt.",
    mistake:
      "Falscher Kreditor oder falsches Rechnungsdatum wird nicht erkannt.",
    consequence:
      "Fehlerhafte Buchungen, falsche Zahlungen oder Probleme im Monatsabschluss.",
    checklist: [
      "Rechnungsempfänger korrekt",
      "Kreditor stimmt",
      "Rechnungsnummer eindeutig",
      "Betrag plausibel",
      "Mahnstufe geprüft"
    ],
    result: "Der Vorgang ist vollständig überblickt."
  },

  {
    title: "Schritt 4: Blaue Felder prüfen",
    task: "Pflichtfelder kontrollieren und bestätigen.",
    image: img03,
    points: [
      "Blaue Felder prüfen",
      "Grüne Felder gegenlesen",
      "Rechnungsnummer und Betrag besonders prüfen"
    ],
    example:
      "Das System hat die Rechnungsnummer automatisch erkannt. Du vergleichst sie mit dem Beleg und bestätigst den Wert.",
    mistake:
      "Automatisch erkannte Daten werden ungeprüft übernommen.",
    consequence:
      "Falsche Rechnungsnummern oder Beträge führen zu Fehlbuchungen.",
    checklist: [
      "Alle Pflichtfelder geprüft",
      "Rechnungsnummer korrekt",
      "Betrag stimmt mit Beleg überein",
      "Keine unplausiblen Werte"
    ],
    result: "Pflichtfelder sind korrekt geprüft."
  },

  {
    title: "Schritt 5: Rote Felder korrigieren",
    task: "Alle vom System erkannten Fehler korrigieren.",
    image: img04,
    points: [
      "Rote Felder prüfen",
      "Fehler korrigieren",
      "Ohne Korrektur kein Abschluss möglich"
    ],
    example:
      "Das System markiert den Betrag als fehlerhaft. Du korrigierst den Wert entsprechend der Rechnung.",
    mistake:
      "Rote Felder werden übersehen oder nicht korrekt bearbeitet.",
    consequence:
      "Der Vorgang kann nicht abgeschlossen werden.",
    checklist: [
      "Alle roten Felder geprüft",
      "Fehler korrigiert",
      "Keine Fehlermeldung mehr sichtbar"
    ],
    result: "Alle Fehler wurden korrigiert."
  },

  {
    title: "Schritt 6: Vorgang fortsetzen",
    task: "Vorgang bestätigen und fortsetzen.",
    image: img05,
    points: [
      "Systemhinweis lesen",
      "Vorgang mit STRG + ENTER bestätigen"
    ],
    example:
      "Nach der Prüfung bestätigst du den Vorgang und leitest ihn zur nächsten Stufe weiter.",
    mistake:
      "Hinweise werden ignoriert oder falsch bestätigt.",
    checklist: [
      "Systemhinweis gelesen",
      "Keine offenen Fehler",
      "Vorgang korrekt bestätigt"
    ],
    result: "Der Vorgang wurde fortgesetzt."
  },

  {
    title: "Schritt 7: Mahnstufe prüfen",
    task: "Dringlichkeit der Rechnung bewerten.",
    image: img06,
    points: [
      "Mahnstufe erkennen",
      "Priorität festlegen",
      "Nur Mahnstufen bis Stufe 2 erfassen"
    ],
    example:
      "Eine Rechnung mit Mahnstufe 1 wird priorisiert bearbeitet.",
    mistake:
      "Mahnstufe wird übersehen oder falsch eingestuft.",
    consequence:
      "Verzugszinsen oder weitere Mahnstufen entstehen.",
    checklist: [
      "Mahnstufe erkannt",
      "Priorität angepasst",
      "Dringliche Fälle zuerst bearbeitet"
    ],
    result: "Die Dringlichkeit wurde korrekt eingeschätzt."
  },

  {
    title: "Schritt 8: Rechnung korrigieren",
    task: "Erforderliche Korrekturen durchführen.",
    image: img07,
    points: [
      "Rechnungskorrektur aktivieren",
      "Betrag positiv darstellen",
      "Minuszeichen entfernen"
    ],
    example:
      "Eine Rechnung wurde mit negativem Betrag erfasst. Du korrigierst die Darstellung auf den korrekten positiven Wert.",
    mistake:
      "Minuszeichen wird nicht entfernt.",
    consequence:
      "Falsche Buchung oder Ablehnung im System.",
    checklist: [
      "Rechnungskorrektur aktiviert",
      "Betrag korrekt dargestellt",
      "Keine negativen Werte bei Standardrechnungen"
    ],
    result: "Rechnung wurde korrekt angepasst."
  },

  {
    title: "Schritt 9: Zusätzliche Felder prüfen",
    task: "Zusatzinformationen prüfen und ergänzen.",
    image: img08,
    points: [
      "Zusatzfelder öffnen",
      "Liefermonat prüfen",
      "Mehrwertsteuer prüfen",
      "Rabatte erfassen"
    ],
    example:
      "Die Rechnung enthält zwei Steuersätze. Du prüfst und korrigierst die Zuordnung im Zusatzfeld.",
    mistake:
      "Falscher Steuersatz oder falscher Liefermonat.",
    consequence:
      "Falsche Steuerbuchung oder Periodenverschiebung.",
    checklist: [
      "Zusatzfelder geprüft",
      "Steuersatz korrekt",
      "Liefermonat korrekt",
      "Rabatte erfasst"
    ],
    result: "Zusatzfelder wurden korrekt geprüft."
  },

  {
    title: "Schritt 10: Dokumente aussteuern",
    task: "Nicht relevante Dokumente identifizieren und aussteuern.",
    image: img09,
    points: [
      "Nicht relevante Dokumente erkennen",
      "Aussteuern über Menü auswählen",
      "Vorgang bestätigen"
    ],
    example:
      "Eine Bestellbestätigung wurde fälschlich importiert. Du steuerst sie aus.",
    mistake:
      "Nicht relevante Dokumente bleiben im System.",
    consequence:
      "Unnötige Vorgänge im System und erhöhter Bearbeitungsaufwand.",
    checklist: [
      "Dokumentart geprüft",
      "Nicht relevante Dokumente erkannt",
      "Aussteuerung korrekt durchgeführt"
    ],
    result: "Nicht relevante Dokumente wurden entfernt."
  }
];


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
const quiz = [
  {
    question: "Was ist der erste Schritt im Prozess?",
    options: ["Rechnung öffnen", "Im Verifier einloggen", "Mahnstufe prüfen"],
    correctAnswer: "Im Verifier einloggen",
    explanation:
      "Ohne Login in das System können keine Rechnungen geprüft oder bearbeitet werden."
  },
  {
    question: "Welche Übersichtseinstellungen sind korrekt?",
    options: [
      "Buchungskreis einzeln, Anzahl 100",
      "Buchungskreis alle, Anzahl 2000, Priorität übernehmen",
      "Nur Priorität auswählen"
    ],
    correctAnswer:
      "Buchungskreis alle, Anzahl 2000, Priorität übernehmen",
    explanation:
      "Nur mit diesen Einstellungen sind alle relevanten Rechnungen sichtbar."
  },
  {
    question: "Was bedeuten blaue Felder?",
    options: ["Optionale Felder", "Pflichtfelder", "Bereits geprüfte Daten"],
    correctAnswer: "Pflichtfelder",
    explanation:
      "Blaue Felder enthalten Pflichtangaben, die geprüft oder ergänzt werden müssen."
  },
  {
    question: "Welche Dokumente müssen ausgesteuert werden?",
    options: [
      "Rechnungen mit Fehlern",
      "Angebote & Bestellbestätigungen",
      "Mahnungen"
    ],
    correctAnswer: "Angebote & Bestellbestätigungen",
    explanation:
      "Diese Dokumente sind keine buchungsrelevanten Rechnungen und müssen entfernt werden."
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
    className="step-screen step-with-background rechnungspruefung pop-in intro-background"
    style={{ backgroundImage: `url(${introImage})` }}
  >
    <div className="module-card step-card-full">
      <img
        src={introImage}
        alt="Rechnungsprüfung"
        className="module-intro-image"
      />

      <h2>Rechnungsprüfung</h2>

      <p className="step-task">
        <strong>Ziel des Moduls:</strong>{" "}
        Nach Abschluss dieses Moduls bist du in der Lage,
        Eingangsrechnungen im Verifier systematisch und regelkonform zu prüfen.
        Du erkennst fehlerhafte oder unvollständige Angaben, nimmst notwendige
        Korrekturen vor, bewertest Mahnstufen korrekt und stellst sicher, dass
        nur prüffähige Rechnungen ordnungsgemäß weiterverarbeitet werden.
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
    className="step-screen step-with-background rechnungspruefung pop-in intro-background"
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
              Du hast alle Schritte der Rechnungspruefung erfolgreich abgeschlossen.
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
  className="step-screen step-with-background rechnungspruefung pop-in intro-background"
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
  ? `Richtig. ${activeQuiz[quizStep].explanation || ""}`
  : `Nicht ganz. ${activeQuiz[quizStep].explanation || ""}`}
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
  className="step-screen step-with-background rechnungspruefung pop-in intro-background"
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

{steps[current].image && (
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

export default Rechnungspruefung;