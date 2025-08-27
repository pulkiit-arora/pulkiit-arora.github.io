export function renderProjects() {
  const projects = [
    {
      title: "AirFare Shop",
      description: "Itinerary construction and pricing service delivering flexible priced itineraries and lowest-fare calendar offers. Handled shopping and inventory modules with in-memory flight caches for low-latency access, supported multiple point-of-sale configurations, and processed mainframe updates over MQ and Tuxedo.",
      duration: "50 months"
    },
    {
      title: "Executive Services",
      description: "Platform aimed at C-suite executives to manage and diversify portfolios and executive-level services. Built scalable backend modules and integrations to support executive workflows and reporting.",
      duration: "72 months"
    }
  ];

  return `
  <section id="projects" class="section projects">
    <div class="container">
      <h2>Projects</h2>
      <div class="grid projects-grid">
        ${projects.map(project => `
          <article class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="muted">Duration: ${project.duration}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>`;
}
