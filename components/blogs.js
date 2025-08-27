export function renderBlogs() {
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
          description: "Practical patterns and trade-offs when designing low-latency pricing and inventory services for travel platforms.",
          date: { month: "June", day: "20" },
          tags: ["Performance", "System Design"]
        },
        {
          title: "Introducing Generative AI to Legacy Systems",
          url: "blog-generative-ai.html",
          description: "Integrating LLMs with existing enterprise workflows while maintaining security and observability.",
          date: { month: "March", day: "15" },
          tags: ["AI", "Enterprise"]
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
  </section>`;
}
