import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Bot } from "lucide-react";

function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    navigate(`/suche?q=${encodeURIComponent(query)}`);
    setQuery("");
  }

  function openKI() {
    window.dispatchEvent(new Event("open-ki"));
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Start</Link>
        <Link to="/module">Module</Link>

        <button
          className="navbar-ki-button"
          onClick={openKI}
        >
          <Bot size={18} style={{ marginRight: "6px" }} />
          KI-Assistent
        </button>

        <Link to="/evaluation">Evaluation</Link>
      </div>

      <form className="navbar-right" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Suche…"
          className="navbar-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button type="submit" className="search-button">
          <Search className="search-icon" />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;