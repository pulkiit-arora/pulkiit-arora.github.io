// Project data
const projects = [
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
      <h2>Personal Projects</h2>
      <div class="grid projects-grid">
        ${projects.map(project => `
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
