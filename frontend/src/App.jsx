import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Rechnungspruefung from "./pages/Rechnungspruefung"; 
import Kontierung from "./pages/Kontierung";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Modules />} />
        <Route path="/module/postbearbeitung" element={<ModuleDetail />} />
        <Route
          path="/module/rechnungspruefung"
          element={<Rechnungspruefung />}
        />
        <Route
          path="/module/kontierung"
          element={<Kontierung />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;