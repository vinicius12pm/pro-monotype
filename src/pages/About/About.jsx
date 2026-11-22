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
          I am a Manual QA Engineer with strong experience working in international
          environments and a focus on Salesforce. I work with Salesforce Commerce
          Cloud (e-commerce), Salesforce Loyalty Management (loyalty programs), and
          Salesforce Service Cloud, including Cases and Knowledge. My work includes
          planning, executing, and analyzing manual tests, tracking bugs, and running
          regression tests to support software quality and established best
          practices. I communicate daily in English with global clients and
          cross-functional teams.
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
