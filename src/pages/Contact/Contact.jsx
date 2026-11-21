import "./Contact.css";

function Contact() {
  return (
    <section className="contact-page" aria-labelledby="contact-title">
      <div className="contact-content">
        <h1 className="contact-kicker" id="contact-title">LET'S CONNECT</h1>
        <div className="contact-links">
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/vinicius-passos-mossi/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Vinicius Mossi on LinkedIn"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            className="contact-link"
            href="mailto:mossi.vinicius@hotmail.com"
            aria-label="Email Vinicius Mossi"
          >
            Email me <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
