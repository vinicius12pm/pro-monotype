import "./Projects.css";

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

const projects = [
  {
    label: "SFCC · E-COMMERCE",
    title: "Salesforce Commerce Cloud",
    description:
      "My primary area of expertise is SFCC, where I have worked across complex B2B and B2C e-commerce journeys connected to OMS, on both desktop and mobile. Beyond ticket validation, I handled ticket sign-off during QA coverage, performed functional testing, ran smoke and exploratory tests across environments, and supported root-cause validation. I helped build a full-site UI/UX regression suite, organized test cases in TestRail, and performed API checks with Postman. As the QA representative in client Scrum ceremonies, I partnered with Product, Design, Content, Marketing, and Engineering to clarify stories and raise quality risks early.",
    focusLabel: "Coverage",
    focus: "B2B/B2C · Desktop/mobile · DEV/UAT/PROD",
    technologyLabel: "Experience areas",
    technology:
      "Functional · smoke & exploratory testing · UI/UX regression suite · TestRail · Postman API checks · Figma · Perfect Pixel Validation",
  },
  {
    label: "SERVICE CLOUD · IMPLEMENTATION",
    title: "Salesforce Service Cloud",
    description:
      "Supported work on a Salesforce Service Cloud implementation, contributing to service workflows built around case management, Knowledge, service-level agreements, and milestones.",
    focusLabel: "Experience areas",
    focus: "Cases · Knowledge · SLAs · Milestones",
  },
  {
    label: "LOYALTY CLOUD · CUSTOMER PROGRAMS",
    title: "Salesforce Loyalty Cloud",
    description:
      "Contributed to a Salesforce Loyalty Cloud implementation for a customer rewards program. The core flow mapped commerce transactions to configured points-accrual rules, supporting accurate loyalty point generation.",
    focusLabel: "Experience areas",
    focus: "Points accrual · Program rules · Transaction scenarios",
  },
];

function Projects() {
  return (
    <section className="projects-page" aria-label="Projects">
      <div className="projects-content">
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-top">
                <span className="project-label">{project.label}</span>
              </div>

              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>

              <div className="project-details">
                <p className="project-detail-label">{project.focusLabel}</p>
                <p className="project-detail-text">{project.focus}</p>
                {project.technology && (
                  <>
                    <p className="project-detail-label project-technology-label">
                      {project.technologyLabel}
                    </p>
                    <p className="project-detail-text">{project.technology}</p>
                  </>
                )}
              </div>
            </article>
          ))}
        </div>

        <section className="projects-skills" aria-labelledby="projects-skills-title">
          <h2 className="projects-skills-title" id="projects-skills-title">Skills</h2>
          <p className="projects-skills-list">{skills.join(" • ")}</p>
        </section>
      </div>
    </section>
  );
}

export default Projects;
