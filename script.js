// Initialize Feather icons if available
if (typeof feather !== 'undefined') {
  feather.replace();
}

// Setup navigation interactivity
function setupNavigation() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.querySelector('.main-nav');
  const navLinks = document.querySelectorAll('.main-nav a');

  // Toggle Menu
  navToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    nav?.classList.toggle('open');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (nav?.classList.contains('open') && !nav.contains(e.target) && e.target !== navToggle) {
      nav.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Handle smooth scrolling and close menu
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');

      // Close mobile menu if open
      nav?.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });
}

// Setup experience section interactivity
function setupExperienceToggles() {
  document.querySelectorAll('.toggle-exp').forEach(button => {
    button.addEventListener('click', function () {
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

// Dark Mode Toggle Logic
function setupThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  const icon = themeToggle?.querySelector('i');

  // Check saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    if (icon) icon.setAttribute('data-feather', 'sun');
  }

  themeToggle?.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    const isDark = body.classList.contains('dark-theme');

    // Update Icon
    if (icon) {
      icon.setAttribute('data-feather', isDark ? 'sun' : 'moon');
      feather.replace(); // Refresh icon
    }

    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Scroll to Top Logic
function setupScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollBtn?.classList.add('visible');
    } else {
      scrollBtn?.classList.remove('visible');
    }
  });

  scrollBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Scroll Animations (Intersection Observer)
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  // Target major sections and cards
  const elements = document.querySelectorAll('.section, .card, .hero-content, .blog-card');
  elements.forEach(el => {
    el.classList.add('fade-in-section');
    observer.observe(el);
  });
}

// Inject Favicon and Global Fonts (Single Source of Truth)
function setupGlobalHead() {
  const head = document.head;

  // 1. Favicon (The Man Technologist Icon 👨‍💻)
  if (!document.querySelector('link[rel="icon"]')) {
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>';
    head.appendChild(favicon);
  }

  // 2. Google Fonts (Inter)
  if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
    // Preconnect for performance
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';
    head.appendChild(preconnect1);

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = '';
    head.appendChild(preconnect2);

    // Font Stylesheet
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap';
    head.appendChild(fontLink);
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // 1. Setup Global Head (Favicon & Fonts) everywhere
  setupGlobalHead();

  // Render components
  const headerElement = document.querySelector('header');
  const mainElement = document.querySelector('main');

  if (headerElement && typeof renderHeader === 'function') {
    headerElement.innerHTML = renderHeader();
  }

  // Only render HOME page content if functions are available (SPA-style) AND main is empty
  if (mainElement &&
    mainElement.innerHTML.trim() === '' &&
    typeof renderHero === 'function' &&
    typeof renderProjects === 'function') {
    mainElement.innerHTML = `
      ${renderHero()}
      ${renderProjects()}
      ${renderExperience()}
      ${renderSkills()}
      ${renderCertifications()}
      ${renderBlogs()}
      ${renderContact()}
    `;
  }

  // Initialize Feather icons
  if (typeof feather !== 'undefined') {
    feather.replace();
  }

  // Setup interactivity (always run these, even on other pages)
  setupNavigation();
  setupFloatingHeader();
  setupThemeToggle();
  setupScrollToTop();

  // Only run animations and specific toggles on the Home/Main page
  if (typeof renderHero === 'function') {
    setupExperienceToggles();
    setupScrollAnimations();
  }

  // Update copyright year
  const yearSpan = document.getElementById('year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
