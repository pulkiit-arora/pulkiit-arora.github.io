function renderContact() {
  return `
  <section id="contact" class="section contact">
    <div class="container">
      <h2>Contact</h2>
      <p>For collaboration, speaking, or portfolio reviews, reach out via:</p>
      <div class="contact-inline">
        <a href="tel:+919902513725" class="contact-pill no-break"><i data-feather="phone"></i> <span class="sr-only">Phone</span> (+91) 99025 13725</a>
        <a href="mailto:pulkiit.arora@gmail.com" class="contact-pill no-break"><i data-feather="mail"></i> <span class="sr-only">Email</span> pulkiit.arora@gmail.com</a>
        <span class="contact-pill"><i data-feather="map-pin"></i> Bengaluru, India</span>
        <a href="https://in.linkedin.com/in/pulkit-arora-75696318" target="_blank" rel="noopener" class="contact-pill no-break">
          <svg class="linkedin-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn
        </a>
      </div>
    </div>
  </section>`;
}
