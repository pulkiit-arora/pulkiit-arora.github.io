function renderExperience() {
  const experiences = [
    {
      title: "Vice President — Morgan Stanley",
      period: "10/2021 − Present",
      description: "Leading the architecture of mission-critical systems and integrating modern AI capabilities (RAG, Model Context Protocol) to improve developer workflows and system capabilities. Spearheaded the enterprise adoption of AI coding assistants (GitHub Copilot), driving significant productivity gains. Mentoring engineering teams and driving technical excellence.",
      achievements: "Spearheaded the enterprise-wide rollout of GitHub Copilot, training 50+ developers and improving coding speed by 35%. Architected and built internal RAG (Retrieval-Augmented Generation) systems utilizing Model Context Protocol (MCP) to connect enterprise knowledge bases to LLMs. Successfully migrated legacy systems to modern cloud architecture, resulting in 40% improved performance.",
      focus: "Generative AI & RAG • GitHub Copilot • Model Context Protocol (MCP) • Cloud Architecture",
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
              ${exp.expanded ? '<button class="btn small toggle-exp">Show Less</button>' : ''}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>`;
}
