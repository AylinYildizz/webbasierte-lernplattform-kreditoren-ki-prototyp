import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { GLOBAL_SEARCH_TEXT } from "../search/searchIndex";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Suche() {
  const queryRaw = useQuery().get("q") || "";
  const query = queryRaw.trim().toLowerCase();

  // Deine "Seiten-Treffer" (Buttons/Navigation)
  const inhalte = useMemo(
  () => [
    {
      titel: "Postbearbeitung",
      text: "Eingang, Zuordnung und digitale Verarbeitung von Rechnungen und Dokumenten.",
      keywords: [
        "Post", "Hauptbuch", "Kontoauszug", "Bescheid", "Dokument",
        "Eingang", "Verarbeitung"
      ],
      link: "/module/postbearbeitung",
    },
    {
      titel: "Rechnungsprüfung",
      text: "Formale und inhaltliche Prüfung von Eingangsrechnungen.",
      keywords: [
        "Rechnung", "Prüfung", "Verifyer", "Abweichung",
        "Freigabe", "Rechnungsprüfung"
      ],
      link: "/module/rechnungspruefung",
    },
    {
      titel: "Kontierung",
      text: "Zuordnung von Sachkonten und Kostenstellen.",
      keywords: [
        "Kontierung", "ELO", "Kostenstelle", "Sachkonto",
        "Kontieren", "Kostenart"
      ],
      link: "/module/kontierung",
    },
    {
      titel: "Bankenbuchung",
      text: "Abgleich von Kontoauszügen und Zahlungen.",
      keywords: [
        "Bank", "Zahlung", "Kontoauszug",
        "Bankbuchung", "Dynamics"
      ],
      link: "/module/bankenbuchung",
    },
    {
      titel: "Verbuchung",
      text: "Buchungsschritte und Dokumentation im System.",
      keywords: [
        "Buchen", "Verbuchung", "Dynamics",
        "Buchung", "Beleg"
      ],
      link: "/module/verbuchung",
    },
    {
      titel: "Zahlungsvorschlag",
      text: "Zahlläufe erstellen und prüfen.",
      keywords: [
        "Zahlung", "Zahllauf", "Fälligkeit",
        "Skonto", "Überweisung"
      ],
      link: "/module/zahlungsvorschlag",
    },
    {
      titel: "Monatsabschluss",
      text: "Kontrolle offener Posten und Abschlussarbeiten.",
      keywords: [
        "Monatsabschluss", "Abschluss",
        "Kreditkarte", "OP-Liste"
      ],
      link: "/module/monatsabschluss",
    },
    {
      titel: "Praxisstandorte",
      text: "Überblick über Standorte und Qualitätsprinzipien.",
      keywords: ["Standorte", "Praxis", "Netzwerk"],
      link: "/praxisstandorte",
    },
    {
      titel: "Kreditorenprozesse",
      text: "Abläufe vom Rechnungseingang bis zur Zahlung.",
      keywords: [
        "Prozess", "Kreditor", "Workflow",
        "Rechnung", "Zahlung"
      ],
      link: "/kreditorenprozesse",
    },
    {
      titel: "Einarbeitung",
      text: "Einführung in die Kreditorenbuchhaltung.",
      keywords: ["Einarbeitung", "Einführung", "Start"],
      link: "/einarbeitung",
    },
    {
      titel: "Zusammenarbeit",
      text: "Kommunikation und abgestimmte Prozesse.",
      keywords: ["Team", "Kommunikation", "Abstimmung"],
      link: "/zusammenarbeit",
    },
  ],
  []
);

  // 1) Module/Seiten Treffer
  const trefferSeiten = useMemo(() => {
  if (!query) return [];

  return inhalte.filter((item) => {
    const inTitle = item.titel.toLowerCase().includes(query);
    const inText = item.text.toLowerCase().includes(query);
    const inKeywords =
      item.keywords &&
      item.keywords.some((k) =>
        k.toLowerCase().includes(query)
      );

    return inTitle || inText || inKeywords;
  });
}, [query, inhalte]);

  // 2) Texttreffer: ALLE Zeilen/Sätze aus GLOBAL_SEARCH_TEXT
  const textZeilen = useMemo(() => {
    return GLOBAL_SEARCH_TEXT.split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
  }, []);

  const trefferText = useMemo(() => {
    if (!query) return [];
    const q = query.toLowerCase();

    // alle Zeilen, die das Wort enthalten
    const matches = textZeilen.filter((l) => l.toLowerCase().includes(q));

    // begrenzen (sonst wird es zu lang)
    return matches.slice(0, 60);
  }, [query, textZeilen]);

  const total = trefferSeiten.length + trefferText.length;

  return (
    <div className="module-detail-page">
      <div className="step-screen">
        <div className="module-card step-card-full">
          <h2>Suchergebnisse</h2>

          <p className="step-task">
            Suche nach: <strong>{queryRaw || "—"}</strong>
          </p>

          {!query ? (
            <p className="step-task">
              Gib oben in der Suche einen Begriff ein (z. B. „Postbearbeitung“, „ISO“, „Zahlungsvorschlag“…).
            </p>
          ) : total === 0 ? (
  <div className="step-callout danger">
    <p>Keine direkten Treffer gefunden.</p>
    <p>Versuche einen anderen Begriff oder frage den KI-Assistenten.</p>
    <button
      className="primary-button"
      onClick={() => window.dispatchEvent(new Event("open-ki"))}
    >
      KI-Assistent öffnen
    </button>
  </div>
): (
            <>
              {/* Seiten/Module */}
              {trefferSeiten.length > 0 && (
                <div className="step-callout tip">
                  <strong>Passende Seiten/Module</strong>
                  <div style={{ marginTop: "12px", display: "grid", gap: "12px" }}>
                    {trefferSeiten.map((item) => (
                      <div key={item.titel} className="step-callout">
                        <h3 style={{ marginTop: 0 }}>{item.titel}</h3>
                        <p style={{ marginBottom: "12px" }}>{item.text}</p>
                        <Link to={item.link}>
                          <button className="primary-button">Öffnen</button>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Texttreffer */}
              {trefferText.length > 0 && (
                <div className="step-callout tip" style={{ marginTop: "18px" }}>
                  <strong>Texttreffer im Projekt (Auszüge)</strong>
                  <p style={{ marginTop: "8px", marginBottom: "12px" }}>
                    Gefunden: <strong>{trefferText.length}</strong> (max. 60 angezeigt)
                  </p>

                  <div style={{ display: "grid", gap: "10px" }}>
                    {trefferText.map((line, idx) => (
                      <div key={`${idx}-${line}`} className="step-callout">
                        <p style={{ margin: 0 }}>{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          <div className="step-actions" style={{ marginTop: "28px" }}>
            <Link to="/">
              <button className="secondary-button">Zurück zur Startseite</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suche;