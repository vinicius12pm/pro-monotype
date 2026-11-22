import { NavLink } from "react-router-dom";
import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      root.classList.add("menu-open");
      body.classList.add("menu-open");
    } else {
      root.classList.remove("menu-open");
      body.classList.remove("menu-open");
    }

    return () => {
      root.classList.remove("menu-open");
      body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">VM<span className="logo-dot">.</span></h1>
        <button
          className="menu-button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    Home{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    About me{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    Projects{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    Contact{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
