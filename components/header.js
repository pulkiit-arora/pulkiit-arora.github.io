export function renderHeader() {
  return `
  <header class="site-header">
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
  </header>`;
}
