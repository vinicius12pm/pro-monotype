import "./Hero.css";
import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero container">

      <div className="hero-content">

        <span className="hero-subtitle">
          Hi, my name is
        </span>

        <h1 className="hero-title">
          Vinicius
          <br />
          <span>Mossi</span>
        </h1>

        <div className="hero-divider"></div>

        <h2 className="hero-role">
          QA Engineer • Salesforce • Tech Curious
        </h2>
      </div>

      <div className="hero-image">
        <img
          src={profile}
          alt="Vinicius Mossi"
        />
      </div>

    </section>
  );
}

export default Hero;