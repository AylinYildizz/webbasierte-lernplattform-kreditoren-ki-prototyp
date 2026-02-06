
import { Link, useNavigate, useParams} from "react-router-dom";
import { useState } from "react";

import introImage from "../assets/modules/zahlungsvorschlag/zv0.png";
import artemisLogo from "../assets/artemis-logo.png";

// Bilder

import imgZv1 from "../assets/modules/zahlungsvorschlag/zv1.png";
import imgZv2 from "../assets/modules/zahlungsvorschlag/zv2.png";
import imgZv4 from "../assets/modules/zahlungsvorschlag/zv4.png";
import imgZv5 from "../assets/modules/zahlungsvorschlag/zv5.png";
import imgZv6 from "../assets/modules/zahlungsvorschlag/zv6.png";
import imgZv7 from "../assets/modules/zahlungsvorschlag/zv7.png";
import imgZv8 from "../assets/modules/zahlungsvorschlag/zv8.png";
import imgZv9 from "../assets/modules/zahlungsvorschlag/zv9.png";


function Zahlungsvorschlag() {
  const navigate = useNavigate();


  /* ---------------- STEPS ---------------- */
const steps = [
  {
    title: "Schritt 1: Dynamics öffnen & Bereich finden",
    task:
      "Öffne Microsoft Dynamics und navigiere in den Bereich, in dem die Zahlungsvorschläge erstellt werden (Zlg. Export / Zahlungsvorschläge).",
    image: imgZv1,
    points: [
      "Microsoft Dynamics öffnen",
      "In die richitge Gesellschaft wechseln",
      "Menüpunkt/Reiter finden: 'Zahlungsvorschläge'",
    ],
    result:
      "Du befindest dich im richtigen Bereich, um Zahlungsvorschläge zu erzeugen."
  },

  {
    title: "Schritt 2: Zahlungsvorschlag erzeugen (WICHTIGER Klickpfad)",
    task:
      "Erzeuge den Zahlungsvorschlag über die Aktion-Leiste.",
    image: imgZv2,
    points: [
      "Oben in der Aktion-Leiste auf **Aktion** klicken",
      "Dann **Vorschlag** wählen",
      "Dann **Erzeugen** auswählen",
      "Dann **Kreditor-Zahlungsvorschlag** anklicken",
      "Damit startest du die Erstellung der Zahlungsvorschläge"
    ],
    result:
      "Das Fenster „Kreditor-Zahlungsvorschlag erstellen“ ist geöffnet."
  },

  {
    title: "Schritt 3: Parameter setzen (Fälligkeit, Skonto, Datum)",
    task:
      "Setze die Parameter für den Zahlungsvorschlag korrekt, damit nur die gewünschten Posten gezogen werden.",
    images: [imgZv4, imgZv5],
    points: [
      "Fälligkeit / Zeitraum: **bis zum nächsten Donnerstag** auswählen",
      "Ausnahme beachten: **bei Monatsende** ggf. andere Vorgabe nutzen",
      "Skonto grundsätzlich berücksichtigen (Generell Skonto)",
      "Buchungssdatum sinnvoll setzen (der nächste Tag)"
    ],
    result:
      "Die Grundlagen sind korrekt gesetzt, der Vorschlag zieht die richtigen fälligen/Skonto-relevanten Posten."
  },

  {
    title: "Schritt 4: Zahlungsvorschlag ausführen",
    task:
      "Starte die Erstellung und prüfe anschließend, ob der Zahlungsvorschlag erstellt wurde.",
    image: imgZv6,
    points: [
      "Im Assistenten auf **OK** klicken",
      "Warten bis der Vorschlag erstellt ist",
      "Danach in 'Zahlungsvorschläge' prüfen: Status sollte **Offen** sein",
      "Den gerade erstellten Vorschlag identifizieren (Datum/Beschreibung)"
    ],
    result:
      "Ein neuer Zahlungsvorschlag ist erstellt und steht als „Offen“ zur Bearbeitung bereit."
  },


  {
    title: "Schritt 5: Fachliche Kontrolle bzw. Zahlungszeilen prüfen (Beträge, IBAN, Verwendungszweck, >1000€)",
    task:
      "Mache die entscheidenden Qualitätschecks, bevor du den Zahllauf ausführst.",
    image: imgZv7,
    points: [
      "Zahlungsvorschlag markieren",
      "Auf **Bearbeiten** → **Zahlungszeilen** klicken",
      "Jede Zeile fachlich prüfen (Beleg, Betrag, Skonto, Fälligkeit)",
      "Alles über **1.000 €** besonders prüfen",
      "IBAN kontrollieren (Stammdaten / Bankdaten plausibel?)",
      "Verwendungszweck prüfen: Rechnungsnummer(n), ggf. Skonto/Skontobetrag, Zahlbetrag",
      "Skontofrist (Datum) prüfen: wenn Skonto gezogen wird, muss das Zahlungsdatum passen",
      "Wenn ein Lieferant **mehr als 4 Rechnungen** im Lauf hat: Avise speichern",
      "Intercompany-Zahlungen, Gutschriften(BergApotheke), Belegart=Zahlungen: falls im Lauf gelandet sind → entfernen"
    ],
    result:
      "Der Vorschlag ist inhaltlich geprüft: keine falschen IBANs, keine falschen Beträge, Skonto korrekt."
  },

  {
    title: "Schritt 6: Mahnliste/Dringlichkeit abgleichen",
    task:
      "Stelle sicher, dass dringende Fälle nicht übersehen werden.",
    image: imgZv8,
    points: [
      "Mahnliste prüfen",
      "Ggf. Prioritäten nochmal abgleichen: Muss etwas unbedingt heute/jetzt mit in den Lauf?",
      "Wenn nötig: Vorschlag anpassen (Zahlungszeilen) und erneut prüfen"
    ],
    result:
      "Dringliche Posten sind berücksichtigt, keine Mahnungen/Fristen werden übersehen."
  },

  {
    title: "Schritt 7: Zahlungsvorschlagsliste drucken / dokumentieren (PDF)",
    task:
      "Erzeuge die Zahlungsvorschlagsliste als Dokumentation (Ausführlich).",
    points: [
      "Im Zahlungsvorschlag auf **Liste drucken** gehen",
      "Dann **Zahlungsvorschlagsliste drucken** auswählen",
      "Vorschau öffnen und als PDF speichern (Ablageort nach interner Regel)"
    ],
    result:
      "Die Zahlungsvorschlagsliste ist dokumentiert (PDF) und kann zur Freigabe/Prüfung genutzt werden."
  },

  {
    title: "Schritt 8: Zahllauf ausführen",
    task:
      "Führe den Zahllauf technisch aus",
    image: imgZv9,
    points: [
      "Zahlungsvorschlag markieren",
      "Menü **Zahlungen** → **Zahlungen durchführen**",
    ],
    result:
      "Die Zahlung ist durchgeführt."
  },

  {
    title: "Schritt 9: Buchen (Hinweis: erst Montag buchen)",
      
    points: [
      "Zahlung öffen und anschließend buchen"
    ],
    result:
      "Der Zahllauf ist korrekt gebucht."
  }
];

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

 const quiz = [
  {
    question:
      "Über welchen Klickpfad wird der Kreditor-Zahlungsvorschlag erzeugt?",
    options: [
      "Berichte → Drucken → Zahlungsliste",
      "Aktion → Vorschlag → Erzeugen → Kreditor-Zahlungsvorschlag",
      "Zahlungen → Buchen → Vorschlag erstellen"
    ],
    correctAnswer:
      "Aktion → Vorschlag → Erzeugen → Kreditor-Zahlungsvorschlag"
  },
  {
    question:
      "Welche Prüfung ist besonders wichtig, bevor der Zahllauf ausgeführt wird?",
    options: [
      "Nur Layout der Liste prüfen",
      "Beträge über 1.000 € besonders prüfen (inkl. IBAN/Verwendungszweck)",
      "Nur die Anzahl der Zeilen zählen"
    ],
    correctAnswer:
      "Beträge über 1.000 € besonders prüfen (inkl. IBAN/Verwendungszweck)"
  },
 
  {
    question:
    " Welche interne Regel ist zur Buchung genannt?",
    options: [
      "Zahlläufe immer sofort buchen",
      "Zahlläufe erst am Montag buchen",
      "Zahlläufe nur am Monatsende buchen"
    ],
    correctAnswer:
      "Zahlläufe erst am Montag buchen"
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
      className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
      style={{ backgroundImage: `url(${introImage})` }}
    >
      <div className="module-card step-card-full">
        <img
          src={introImage}
          alt="Zahlungsvorschlag"
          className="module-intro-image"
        />
  
        <h2>Zahlungsvorschlag</h2>
  
        <p className="step-task">
          <strong>Ziel des Moduls:</strong>{" "}
          Nach Abschluss dieses Moduls bist du in der Lage, Zahlungsvorschläge in Microsoft Dynamics eigenständig, strukturiert und regelkonform zu erstellen, zu prüfen und durchzuführen. Du stellst sicher, dass nur korrekte und freigegebene Kreditorenposten in den Zahllauf gelangen, erkennst fehlerhafte oder unzulässige Positionen und dokumentierst den Zahllauf vollständig und revisionssicher.
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
      className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
                Du hast alle Schritte des Zahlungsvorschlages erfolgreich abgeschlossen.
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
    className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
                ? " Richtig! Gut gemacht."
                : " Nicht ganz. Versuche es beim nächsten Mal noch einmal."}
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
    className="step-screen step-with-background zahlungsvorschlag pop-in intro-background"
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
  
  export default Zahlungsvorschlag;