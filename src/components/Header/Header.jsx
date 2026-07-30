import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">

        <h1 className="logo">VM.</h1>

        <nav>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    Home{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    About{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
                {({ isActive }) => (
                  <>
                    Projects{isActive && <span className="cursor">_</span>}
                  </>
                )}
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
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