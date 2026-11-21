import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">

        <h1 className="logo">VM.</h1>
<button
    className="menu-button"
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

        <div className="language-switch">
          <button className="active-language">PT</button>
          <span>|</span>
          <button>EN</button>
        </div>

      </div>
    </header>
  );
}

export default Header;