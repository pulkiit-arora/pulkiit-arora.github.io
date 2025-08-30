// Initialize Feather icons if available
if (typeof feather !== 'undefined') {
  feather.replace();
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
      ${renderContact()}
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
