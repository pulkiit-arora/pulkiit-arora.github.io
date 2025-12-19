function renderCertifications() {
    const certifications = [
        "AWS Certified Cloud Practitioner"
    ];

    return `
  <section id="certifications" class="section certifications">
    <div class="container">
      <h2>Certifications</h2>
      <div class="skill-list">
        ${certifications.map(cert => `<span class="skill">${cert}</span>`).join('')}
      </div>
    </div>
  </section>`;
}
