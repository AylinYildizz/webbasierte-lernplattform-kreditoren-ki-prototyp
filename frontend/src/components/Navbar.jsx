import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <nav className="navbar">
      {/* LINKS: Navigation */}
      <div className="navbar-left">
        <Link to="/">Start</Link>
        <Link to="/module">Module</Link>
      </div>

      {/* RECHTS: Suche */}
      <div className="navbar-right">
        <FiSearch className="search-icon" title="Suchen" />
      </div>
    </nav>
  );
}

export default Navbar;