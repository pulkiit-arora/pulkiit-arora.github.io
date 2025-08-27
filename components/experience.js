export function renderExperience() {
  const experiences = [
    {
      title: "Vice President — Morgan Stanley",
      period: "10/2021 − Present",
      description: "Leading the architecture and development of mission-critical systems with a focus on scalability and resilience. Spearheaded the adoption of cloud-native patterns and enhanced system observability through Splunk and Grafana implementation. Mentoring engineering teams and driving technical excellence across projects.",
      achievements: "Successfully migrated legacy systems to modern cloud architecture, resulting in 40% improved performance. Established robust CI/CD pipelines and DevOps practices, reducing deployment time by 60%.",
      focus: "Cloud Architecture • Team Leadership • System Design",
      expanded: true
    },
    {
      title: "Specialist — Synechron Technologies",
      period: "12/2016 − 10/2021",
      description: "Served as the technical lead for investment banking solutions, focusing on high-performance trading systems and real-time data processing. Managed critical production environments and led system optimization initiatives.",
      achievements: "Reduced system response time by 35% through architectural improvements and optimized database queries. Implemented automated monitoring solutions that decreased incident resolution time by 50%.",
      focus: "Performance Optimization • Production Support • Banking Systems"
    },
    {
      title: "Module Lead — Mindtree Limited",
      period: "11/2010 − 12/2016",
      description: "Orchestrated the development of enterprise software modules and established code quality standards. Led a team of developers in delivering robust solutions while ensuring best practices in software development.",
      achievements: "Implemented automated testing framework that increased code coverage to 85%. Reduced defect rate by 40% through improved code review processes.",
      focus: "Technical Leadership • Code Quality • Process Improvement"
    }
  ];

  return `
  <section id="experience" class="section experience">
    <div class="container">
      <h2>Work Experience</h2>
      <div class="timeline">
        ${experiences.map(exp => `
          <div class="card exp-item" data-expanded="${exp.expanded || false}">
            <div class="exp-header">
              <h3>${exp.title}</h3>
              <span class="period">${exp.period}</span>
            </div>
            <div class="exp-content">
              <p class="exp-description">${exp.description}</p>
              <div class="exp-details" ${!exp.expanded ? 'hidden' : ''}>
                <div class="exp-achievement">
                  <h4>Key Achievements</h4>
                  <p>${exp.achievements}</p>
                </div>
                <div class="exp-focus">
                  <h4>Focus Areas</h4>
                  <div class="focus-tags">
                    ${exp.focus.split('•').map(tag => `<span class="focus-tag">${tag.trim()}</span>`).join('')}
                  </div>
                </div>
              </div>
              ${exp.expanded ? '<button class="btn small toggle-exp">Show More</button>' : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}
