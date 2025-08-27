// Data for components
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

const experiences = [
  {
    title: "Vice President — Morgan Stanley",
    period: "10/2021 − Present",
    description: "Leading the architecture and development of mission-critical systems with a focus on scalability and resilience. Spearheaded the adoption of cloud-native patterns and enhanced system observability.",
    achievements: "Successfully migrated legacy systems to modern cloud architecture, resulting in 40% improved performance. Established robust CI/CD pipelines and DevOps practices.",
    focus: "Cloud Architecture • Team Leadership • System Design",
    expanded: true
  },
  {
    title: "Specialist — Synechron Technologies",
    period: "12/2016 − 10/2021",
    description: "Technical lead for investment banking solutions, focusing on high-performance trading systems and real-time data processing.",
    achievements: "Reduced system response time by 35% through architectural improvements. Implemented automated monitoring solutions.",
    focus: "Performance Optimization • Production Support • Banking Systems"
  },
  {
    title: "Module Lead — Mindtree Limited",
    period: "11/2010 − 12/2016",
    description: "Orchestrated the development of enterprise software modules and established code quality standards.",
    achievements: "Implemented automated testing framework with 85% coverage. Reduced defect rate by 40%.",
    focus: "Technical Leadership • Code Quality • Process Improvement"
  }
];

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

const blogs = [
  {
    year: "2024",
    posts: [
      {
        title: "Modern Cloud Architecture Patterns",
        url: "blog-cloud-architecture.html",
        description: "Exploring microservices, event-driven architectures, and scalable cloud-native patterns.",
        date: { month: "August", day: "15" },
        tags: ["Cloud", "Architecture"]
      },
      {
        title: "Designing Scalable Pricing Services",
        url: "blog-pricing-services.html",
        description: "Practical patterns and trade-offs when designing low-latency pricing and inventory services.",
        date: { month: "June", day: "20" },
        tags: ["Performance", "System Design"]
      }
    ]
  },
  {
    year: "2023",
    posts: [
      {
        title: "Engineering Leadership at Scale",
        url: "blog-team-leadership.html",
        description: "Lessons learned from leading distributed engineering teams and managing complex projects.",
        date: { month: "December", day: "10" },
        tags: ["Leadership", "Teams"]
      }
    ]
  }
];

// Component Definitions
function renderHeader() {
  return `
    <div class="container header-inner">
      <a class="logo" href="#">Pulkit Arora</a>
      <nav class="main-nav" aria-label="Primary navigation">
        <ul id="nav-list">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#blogs">Blogs</a></li>
          <li><a href="personal.html">Personal</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <button id="navToggle" class="nav-toggle" aria-expanded="false" aria-controls="nav-list">Menu</button>
    </div>
  `;
}

function renderHero() {
  return `
    <div class="hero-wrapper">
      <section id="home" class="section hero">
        <div class="container">
          <div class="hero-content">
            <h1>
              <span class="greeting">Hi, I'm</span>
              <span class="name">Pulkit Arora</span>
              <span class="title">Vice President — Software Engineering</span>
            </h1>
            <p class="lead">
              15+ years building scalable systems and leading engineering teams.
              Specialized in Java Full Stack development, cloud architecture, and technical leadership.
            </p>
            <div class="hero-actions">
              <a class="btn primary" href="#projects">
                <i data-feather="folder"></i>
                View Projects
              </a>
              <a class="btn ghost" href="#contact">
                <i data-feather="mail"></i>
                Contact Me
              </a>
            </div>
            <div class="tech-stack">
              <span>Tech Stack</span>
              <div class="tech-icons">
                <i data-feather="coffee" title="Java"></i>
                <i data-feather="database" title="SQL"></i>
                <i data-feather="cloud" title="Cloud"></i>
                <i data-feather="git-branch" title="Git"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderProjects() {
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
    </section>
  `;
}

function renderExperience() {
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
    </section>
  `;
}

function renderSkills() {
  return `
    <section id="skills" class="section skills">
      <div class="container">
        <h2>Skills</h2>
        <div class="skill-list">
          ${skills.map(skill => `<div class="skill">${skill}</div>`).join('')}
        </div>
      </div>
    </section>
  `;
}

function renderBlogs() {
  return `
    <section id="blogs" class="section blogs">
      <div class="container">
        <h2>Blogs</h2>
        <p class="muted">Thoughts on software architecture, cloud, and generative AI.</p>
        
        <div class="blog-timeline">
          ${blogs.map(yearGroup => `
            <div class="year-marker">${yearGroup.year}</div>
            ${yearGroup.posts.map(post => `
              <article class="card blog-card">
                <div class="blog-date">
                  <span class="month">${post.date.month}</span>
                  <span class="day">${post.date.day}</span>
                </div>
                <div class="blog-content">
                  <h3><a href="${post.url}">${post.title}</a></h3>
                  <p>${post.description}</p>
                  <div class="blog-tags">
                    ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                  </div>
                </div>
              </article>
            `).join('')}
          `).join('')}
        </div>

        <p class="blog-cta">
          <a class="btn primary" href="blogs.html">
            <i data-feather="book-open"></i>
            View All Posts
          </a>
        </p>
      </div>
    </section>
  `;
}

// Setup navigation interactivity
function setupNavigation() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.main-nav');
  
  navToggle?.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('open');
  });

  // Handle smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      target?.scrollIntoView({ behavior: 'smooth' });
      
      // Close mobile menu if open
      nav?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });
}

// Setup experience section interactivity
function setupExperienceToggles() {
  document.querySelectorAll('.toggle-exp').forEach(button => {
    button.addEventListener('click', function() {
      const expItem = this.closest('.exp-item');
      const details = expItem?.querySelector('.exp-details');
      const isExpanded = expItem?.getAttribute('data-expanded') === 'true';
      
      if (expItem && details) {
        expItem.setAttribute('data-expanded', String(!isExpanded));
        details.hidden = isExpanded;
        this.textContent = isExpanded ? 'Show More' : 'Show Less';
      }
    });
  });
}

// Setup floating header
function setupFloatingHeader() {
  let lastScrollY = window.scrollY;
  const siteHeader = document.querySelector('.site-header');
  const scrollThreshold = 100;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > scrollThreshold) {
      if (currentScrollY > lastScrollY) {
        siteHeader?.classList.add('floating');
        siteHeader?.classList.remove('visible');
      } else {
        siteHeader?.classList.remove('floating');
        siteHeader?.classList.add('visible');
      }
    } else {
      siteHeader?.classList.remove('floating', 'visible');
    }
    
    lastScrollY = currentScrollY;
  });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Render components
  const headerElement = document.querySelector('header');
  const mainElement = document.querySelector('main');
  
  if (headerElement) {
    headerElement.innerHTML = renderHeader();
  }
  
  if (mainElement) {
    mainElement.innerHTML = `
      ${renderHero()}
      ${renderProjects()}
      ${renderExperience()}
      ${renderSkills()}
      ${renderBlogs()}
    `;
  }

  // Initialize Feather icons
  feather.replace();

  // Setup interactivity
  setupNavigation();
  setupFloatingHeader();
  setupExperienceToggles();

  // Update copyright year
  document.getElementById('year').textContent = new Date().getFullYear();
});
