function renderCertifications() {
    const certifications = [
        {
            name: "AWS Certified Cloud Practitioner",
            badgeUrl: "https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png",
            credlyUrl: "https://www.credly.com/earner/earned/badge/c6de8ee2-bee5-43a3-a672-d9c4cdf0cec0"
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            badgeUrl: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png",
            credlyUrl: "https://www.credly.com/badges/ed06ccb5-2030-4b16-91c3-1afc50e3c40a/public_url"
        }
    ];

    return `
  <section id="certifications" class="section certifications">
    <div class="container">
      <h2>Certifications</h2>
      <div class="certifications-list" style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin-top: 1rem;">
        ${certifications.map(cert => `
          <a href="${cert.credlyUrl}" target="_blank" rel="noopener noreferrer" class="cert-badge" style="display: flex; flex-direction: column; align-items: center; text-decoration: none; color: inherit; transition: transform 0.2s ease;" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
            <img src="${cert.badgeUrl}" alt="${cert.name} Badge" style="width: 150px; height: 150px; object-fit: contain; margin-bottom: 0.5rem;" />
            <span class="skill" style="text-align: center;">${cert.name}</span>
          </a>
        `).join('')}
      </div>
    </div>
  </section>`;
}
