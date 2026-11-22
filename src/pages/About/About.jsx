import "./About.css";

const skills = [
  "Manual testing",
  "Functional testing",
  "Regression testing",
  "Smoke testing",
  "Accessibility testing (WAVE, keyboard navigation)",
  "Test cases",
  "Test plans",
  "Bug tracking",
  "Log analysis and test data investigation",
  "Jira",
  "TestRail",
  "Confluence",
  "Salesforce Commerce Cloud (SFCC)",
  "Salesforce Service Cloud",
  "Salesforce Loyalty Management",
  "E-commerce QA",
  "Cross-device testing (desktop and mobile)",
  "Performance-related change validation",
  "HTML/CSS basics",
  "API testing basics (Postman)",
  "Cross-functional communication",
  "Release support",
  "English communication (daily meetings, documentation, and client interactions)",
];

function About() {
  return (
    <section className="about-page" aria-labelledby="about-title">
      <div className="about-content">
        <h1 className="about-title" id="about-title">About me</h1>
        <p className="about-summary">
          I’m a Manual QA Engineer who likes asking, “What happens if I try this?”
          I’m curious about details and how things work, and I enjoy learning
          something new every day. My main experience is with Salesforce Commerce
          Cloud and e-commerce websites, where I test different journeys on desktop
          and mobile. When something needs to get done, I don’t like to just wait
          and see. I ask questions, look for answers, and work with the team to make
          it happen. Finding a bug is satisfying, but helping solve it and make the
          experience better is even more rewarding. I’m always curious, ready to
          learn, and happy to click that button one more time.
        </p>
        <p className="about-summary">
          I’ve also worked with Salesforce Loyalty Management and Salesforce Service Cloud. I enjoy
          working with clients and people from different teams, sharing ideas, and
          learning from each experience. I’m someone who likes to understand the
          details, take initiative, and keep going until things move in the right
          direction.
        </p>

        <div className="about-divider" aria-hidden="true" />

        <section className="skills-section" aria-labelledby="skills-title">
          <h2 className="skills-title" id="skills-title">Skills</h2>
          <p className="skills-list">{skills.join(" • ")}</p>
        </section>
      </div>
    </section>
  );
}

export default About;
