// Project data
const professionalProjects = [
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

const personalProjects = [
  {
    title: "TaskOrbit AI",
    description: "An intelligent task management and organizational tool powered by AI. Features smart task prioritization, categorization, and a modern fluid interface built with React and Tailwind CSS.",
    link: "https://pulkiit-arora.github.io/TaskOrbitAI/"
  },
  {
    title: "KafkaViz",
    description: "Interactive visualization tool for Apache Kafka. Provides real-time insights into topics, partitions, and message flows, helping developers debug and understand their streaming architecture.",
    link: "https://pulkiit-arora.github.io/KafkaViz/"
  }
];

function renderProjects() {
  return `
  <section id="projects" class="section projects">
    <div class="container">
      <h2>Key Projects</h2>
      <div class="grid projects-grid">
        ${professionalProjects.map(project => `
          <article class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <p class="muted">Duration: ${project.duration}</p>
          </article>
        `).join('')}
      </div>
    </div>
  </section>

  <section id="personal-projects" class="section personal-projects">
    <div class="container">
      <h2>Personal Projects</h2>
      <div class="grid projects-grid">
        ${personalProjects.map(project => `
          <article class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="card-actions">
              <a href="${project.link}" target="_blank" class="btn small ghost">
                View Project <i data-feather="external-link"></i>
              </a>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  </section>`;
}
