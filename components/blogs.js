function renderBlogs(showAll = false, initialLimit = 2) {
  var limit = showAll ? null : initialLimit; // Show initial limit posts if not showing all
  const blogs = [
    {
      year: "2025",
      posts: [
        {
          title: "Understanding Git: Key Components and Internal Workings",
          url: "git-internal-workings.html",
          description: "A deep dive into Git's architecture, data structures, and how it manages your code history with interactive diagrams.",
          date: { month: "September", day: "1" },
          tags: ["Git", "Version Control", "Software Engineering"]
        }
      ]
    }
  ];

  const totalPosts = blogs[0].posts.length;
  const showLoadMore = showAll && limit && totalPosts > limit;

  // If limit is provided, take only that many posts from the first year
  if (limit) {
    blogs[0].posts = blogs[0].posts.slice(0, limit);
  }

  return `
  <section id="blogs" class="section blogs">
    <div class="container">
      <h2>Blogs</h2>
      <p class="muted">Stay tuned for upcoming articles!</p>
      ${showAll ? `<p class="blog-count">Showing ${blogs[0].posts.length} of ${totalPosts} total posts</p>` : ''}
      
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

      ${showLoadMore ? `
        <p class="blog-cta">
          <button class="btn primary" id="loadMoreBtn" data-current="${limit}" data-total="${totalPosts}">
            <i data-feather="plus"></i>
            Load More Posts
          </button>
        </p>
      ` : !showAll ? `
        <p class="blog-cta">
          <a class="btn primary" href="blogs.html">
            <i data-feather="book-open"></i>
            View All Posts
          </a>
        </p>
      ` : ''}
    </div>
  </section>`;
}
