import "./About.css";
import { useEffect, useRef, useState } from "react";

function About() {
  const [showLadybug, setShowLadybug] = useState(false);
  const [isClickSparkling, setIsClickSparkling] = useState(false);
  const ladybugTimer = useRef(null);
  const sparkleTimer = useRef(null);

  useEffect(() => () => {
    window.clearTimeout(ladybugTimer.current);
    window.clearTimeout(sparkleTimer.current);
  }, []);

  const showLadybugMomentarily = () => {
    window.clearTimeout(ladybugTimer.current);
    setShowLadybug(true);
    ladybugTimer.current = window.setTimeout(() => {
      setShowLadybug(false);
    }, 3000);
  };

  const sparkleClickPhrase = () => {
    window.clearTimeout(sparkleTimer.current);
    setIsClickSparkling(true);
    sparkleTimer.current = window.setTimeout(() => {
      setIsClickSparkling(false);
    }, 3000);
  };

  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="about-content">
        <h1 className="about-title" id="about-title">About me</h1>
        <p className="about-summary">
          I’m a Manual QA Engineer who likes asking, “
          <button
            className="about-question-link"
            type="button"
            onClick={showLadybugMomentarily}
            aria-label={showLadybug ? "A ladybug appeared" : "What happens if I try this?"}
          >
            {showLadybug ? <span aria-hidden="true">🐞</span> : "What happens if I try this?"}
          </button>
          ” I’m curious about details and how things work, and I enjoy learning
          something new every day. My main experience is with Salesforce Commerce
          Cloud and e-commerce websites, where I test different journeys on desktop
          and mobile. When something needs to get done, I don’t like to just wait
          and see. I ask questions, look for answers, and work with the team to make
          it happen. Finding a bug is satisfying, but helping solve it and make the
          experience better is even more rewarding. I’m always curious, ready to
          learn, and happy to{" "}
          <button
            className={`about-question-link about-click-link${isClickSparkling ? " is-sparkling" : ""}`}
            type="button"
            onClick={sparkleClickPhrase}
            aria-label="Click that button"
          >
            click that button
          </button>{" "}
          one more time.
        </p>
        <p className="about-summary">
          I’ve also worked with Salesforce Loyalty Management and Salesforce Service Cloud. I enjoy
          working with clients and people from different teams, sharing ideas, and
          learning from each experience. I’m someone who likes to understand the
          details, take initiative, and keep going until things move in the right
          direction.
        </p>

      </div>
    </section>
  );
}

export default About;
