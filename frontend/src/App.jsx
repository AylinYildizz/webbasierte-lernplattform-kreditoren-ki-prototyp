import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/module" element={<Modules />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
