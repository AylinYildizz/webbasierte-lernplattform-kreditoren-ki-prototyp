import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";

import Rechnungspruefung from "./pages/Rechnungspruefung";
import Kontierung from "./pages/Kontierung";
import Bankenbuchung from "./pages/Bankenbuchung";
import Verbuchung from "./pages/Verbuchung";
import Zahlungsvorschlag from "./pages/Zahlungsvorschlag";
import Monatsabschluss from "./pages/Monatsabschluss";

import Praxisstandorte from "./pages/Praxisstandorte";
import Kreditorenprozesse from "./pages/Kreditorenprozesse";
import Einarbeitung from "./pages/Einarbeitung";
import Zusammenarbeit from "./pages/Zusammenarbeit";
import Suche from "./pages/Suche";

import { KIProvider } from "./context/KIContext";
import KIAssistantGlobal from "./components/KIAssistantGlobal";
import Evaluation from "./pages/Evaluation";

function App() {
  return (
    <KIProvider>
      <BrowserRouter>
        <Navbar />
        <KIAssistantGlobal />

        <Routes>
          {/* Start */}
          <Route path="/" element={<Home />} />
          <Route path="/module" element={<Modules />} />

          {/* Module */}
          <Route path="/module/postbearbeitung" element={<ModuleDetail />} />
          <Route path="/module/rechnungspruefung" element={<Rechnungspruefung />} />
          <Route path="/module/kontierung" element={<Kontierung />} />
          <Route path="/module/bankenbuchung" element={<Bankenbuchung />} />
          <Route path="/module/verbuchung" element={<Verbuchung />} />
          <Route path="/module/zahlungsvorschlag" element={<Zahlungsvorschlag />} />
          <Route path="/module/monatsabschluss" element={<Monatsabschluss />} />

          {/* Inhalte */}
          <Route path="/praxisstandorte" element={<Praxisstandorte />} />
          <Route path="/kreditorenprozesse" element={<Kreditorenprozesse />} />
          <Route path="/einarbeitung" element={<Einarbeitung />} />
          <Route path="/zusammenarbeit" element={<Zusammenarbeit />} />
          <Route path="/evaluation" element={<Evaluation/>}/>

          {/* Suche */}
          <Route path="/suche" element={<Suche />} />
        </Routes>
      </BrowserRouter>
    </KIProvider>
  );
}

export default App;