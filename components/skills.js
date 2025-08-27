export function renderSkills() {
  const skills = [
    "Java Full Stack Development",
    "Generative AI",
    "Cloud Technologies",
    "Database Design",
    "Spring Boot",
    "Hibernate",
    "Angular",
    "GitHub",
    "IntelliJ IDEA / Eclipse",
    "Tomcat",
    "JIRA",
    "Splunk",
    "Grafana"
  ];

  return `
  <section id="skills" class="section skills">
    <div class="container">
      <h2>Skills</h2>
      <div class="skill-list">
        ${skills.map(skill => `<div class="skill">${skill}</div>`).join('')}
      </div>
    </div>
  </section>`;
}
