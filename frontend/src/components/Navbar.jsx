import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search } from "lucide-react"; // falls du lucide nutzt

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    // 🔥 Weiterleitung auf Suchseite
    navigate(`/suche?q=${encodeURIComponent(query)}`);
    setShowSearch(false);
    setQuery("");
  }

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">Start</Link>
          <Link to="/module">Module</Link>
        </div>

        <div className="navbar-right">
          <Search
            className="search-icon"
            onClick={() => setShowSearch(!showSearch)}
          />
        </div>
      </nav>

      {/* 🔍 SUCHLEISTE */}
      {showSearch && (
        <div className="search-bar-overlay">
          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Suche nach Modulen, Abläufen, Standorten …"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            <button type="submit">Suchen</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Navbar;