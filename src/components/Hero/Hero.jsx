import "./Hero.css";
import profile from "../../assets/profile.jpg";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-subtitle">
          Hi, my name is
        </p>

        <h1>
          Vinicius <span>Mossi</span>
        </h1>

        <h2>
          QA Engineer
          <span>|</span>
          Salesforce
          <span>|</span>
          Manual Testing
        </h2>

        <p className="hero-text">
          I build quality into digital experiences
          through testing, automation and attention to detail.
        </p>

        <a href="#projects" className="hero-button">
          → View Projects
        </a>

      </div>

      <div className="hero-right">
        <img src={profile} alt="Vinicius Mossi" />
      </div>

    </section>
  );
}

export default Hero;