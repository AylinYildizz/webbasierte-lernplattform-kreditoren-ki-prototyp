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
        text: "Eingang, Zuordnung, digitale Verarbeitung und Dokumentation von Rechnungen.",
        link: "/module/postbearbeitung",
      },
      {
        titel: "Rechnungsprüfung",
        text: "Formale und inhaltliche Prüfung von Eingangsrechnungen inkl. Klärung von Abweichungen.",
        link: "/module/rechnungspruefung",
      },
      {
        titel: "Kontierung",
        text: "Zuordnung von Sachkonten, Kostenstellen, Kostenträgern und Buchungslogik.",
        link: "/module/kontierung",
      },
      {
        titel: "Bankenbuchung",
        text: "Abgleich von Kontoauszügen, Zuordnung von Zahlungen und Klärung offener Posten.",
        link: "/module/bankenbuchung",
      },
      {
        titel: "Verbuchung",
        text: "Saubere Buchungsschritte, Dokumentation und Nachvollziehbarkeit im System.",
        link: "/module/verbuchung",
      },
      {
        titel: "Zahlungsvorschlag",
        text: "Zahlläufe erstellen, Fälligkeiten prüfen, Freigaben und Ausführung kontrollieren.",
        link: "/module/zahlungsvorschlag",
      },
      {
        titel: "Monatsabschluss",
        text: "Kontrolle offener Posten, Abschlussprüfungen, Abgrenzungen und Dokumentation.",
        link: "/module/monatsabschluss",
      },
      {
        titel: "Praxisstandorte",
        text: "Überblick über Standorte, einheitliche Abläufe und Qualitätsprinzipien.",
        link: "/praxisstandorte",
      },
      {
        titel: "Kreditorenprozesse",
        text: "Strukturierte, nachvollziehbare Abläufe vom Rechnungseingang bis zur Zahlung.",
        link: "/kreditorenprozesse",
      },
      {
        titel: "Einarbeitung",
        text: "Modularer Einstieg: Orientierung, Grundlagen, Praxisfälle, Eigenständigkeit.",
        link: "/einarbeitung",
      },
      {
        titel: "Zusammenarbeit",
        text: "Abgestimmte Prozesse, klare Zuständigkeiten, Kommunikation und Dokumentation.",
        link: "/zusammenarbeit",
      },
    ],
    []
  );

  // 1) Module/Seiten Treffer
  const trefferSeiten = useMemo(() => {
    if (!query) return [];
    return inhalte.filter(
      (item) =>
        item.titel.toLowerCase().includes(query) ||
        item.text.toLowerCase().includes(query)
    );
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
            <p className="step-task">Keine Treffer gefunden.</p>
          ) : (
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