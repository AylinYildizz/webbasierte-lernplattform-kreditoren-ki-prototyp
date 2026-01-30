import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Modules />} />
        <Route path="/module/:id" element={<ModuleDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;