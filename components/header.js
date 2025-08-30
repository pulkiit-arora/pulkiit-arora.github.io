function renderHeader() {
  // Determine current page for navigation state
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  return `
  <header class="site-header">
    <div class="container header-inner">
      <a class="logo" href="index.html">Pulkit Arora</a>
      <nav class="main-nav" aria-label="Primary navigation">
        <ul id="nav-list">
          <li><a href="index.html" ${currentPage === 'index.html' ? 'class="active"' : ''}>Home</a></li>
          <li><a href="index.html#projects">Projects</a></li>
          <li><a href="index.html#skills">Skills</a></li>
          <li><a href="Resume (1) (1).pdf" target="_blank" rel="noopener">Resume</a></li>
          <li><a href="blogs.html" ${currentPage === 'blogs.html' || currentPage.startsWith('blog-') ? 'class="active"' : ''}>Blogs</a></li>
          <li><a href="personal.html" ${currentPage === 'personal.html' ? 'class="active"' : ''}>Personal</a></li>
          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
      <button id="navToggle" class="nav-toggle" aria-expanded="false" aria-controls="nav-list">Menu</button>
    </div>
  </header>`;
}
