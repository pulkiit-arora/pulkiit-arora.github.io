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
          <div class="featured-blog">
            <span class="featured-label">📚 Latest Blog</span>
            <a href="kubernetes-basics.html" class="featured-blog-link">
              <i data-feather="book-open"></i>
              Kubernetes Basics: A Complete Guide
            </a>
            <p class="featured-blog-desc">Master container orchestration with interactive diagrams</p>
          </div>
        </div>
      </div>
    </section>
  </div>`;
}
