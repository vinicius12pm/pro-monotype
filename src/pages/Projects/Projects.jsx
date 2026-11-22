import "./Projects.css";

const skills = [
  "Manual testing",
  "Functional testing",
  "Regression & UI/UX regression testing",
  "Smoke testing",
  "Exploratory testing",
  "Accessibility testing (WAVE, keyboard navigation)",
  "Test cases",
  "Test plans",
  "Bug tracking",
  "Log analysis and test data investigation",
  "Root-cause investigation",
  "Jira",
  "TestRail",
  "Confluence",
  "Salesforce Commerce Cloud (SFCC)",
  "Salesforce Service Cloud",
  "Salesforce Loyalty Management",
  "E-commerce QA",
  "B2B/B2C e-commerce testing",
  "OMS integration testing",
  "Cross-device testing (desktop and mobile)",
  "Performance-related change validation",
  "HTML/CSS basics",
  "API testing basics (Postman)",
  "Figma",
  "Perfect Pixel Validation",
  "Cross-functional communication",
  "Release support",
  "English communication (daily meetings, documentation, and client interactions)",
];

const projects = [
  {
    label: "SFCC · E-COMMERCE",
    title: "Salesforce Commerce Cloud",
    description:
      "SFCC is my main area of expertise. I’ve worked on complex B2B and B2C e-commerce journeys connected to OMS, across desktop and mobile. My work included functional, smoke, and exploratory testing, ticket sign-off, and root-cause validation. I also helped build a full-site UI/UX regression suite, organized test cases in TestRail, and performed API checks with Postman. In Scrum, I worked with different teams to clarify stories and raise quality risks early.",
  },
  {
    label: "SERVICE CLOUD · IMPLEMENTATION",
    title: "Salesforce Service Cloud",
    description:
      "Supported work on a Salesforce Service Cloud implementation, contributing to service workflows built around case management, Knowledge, service-level agreements, and milestones.",
  },
  {
    label: "LOYALTY CLOUD · CUSTOMER PROGRAMS",
    title: "Salesforce Loyalty Cloud",
    description:
      "Contributed to a Salesforce Loyalty Cloud implementation for a customer rewards program. The core flow mapped commerce transactions to configured points-accrual rules, supporting accurate loyalty point generation.",
  },
  {
    label: "FINANCIAL SERVICES · IMPLEMENTATION",
    title: "Salesforce Financial Services Cloud",
    description:
      "Had a small part in a Salesforce Financial Services Cloud implementation for a banking organization, gaining experience with the platform and the implementation process.",
  },
];

function Projects() {
  return (
    <section className="projects-page" aria-label="Projects">
      <div className="projects-content">
        <div className="projects-list">
          {projects.map((project) => (
            <article className="project-section" key={project.title}>
              <div className="project-section-top">
                <span className="project-label">{project.label}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
            </article>
          ))}
        </div>

        <section className="personal-experience" aria-labelledby="personal-experience-title">
          <h2 className="projects-skills-title" id="personal-experience-title">
            Automation Learning
          </h2>
          <p className="personal-experience-text">
            Although I haven’t worked with test automation professionally, I’m
            actively learning about it and keeping up with new tools and updates.
            I’m familiar with Playwright and Cypress, and I’m continuing to build
            my knowledge in this area.
          </p>
        </section>

        <section className="projects-skills" aria-labelledby="projects-skills-title">
          <h2 className="projects-skills-title" id="projects-skills-title">Skills</h2>
          <p className="projects-skills-list">{skills.join(" • ")}</p>
        </section>
      </div>
    </section>
  );
}

export default Projects;
