import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <p>© 2026 Vinicius Mossi</p>

        <div className="footer-links">
          <a
            href="https://github.com/vinicius12pm"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vinicius-passos-mossi/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;