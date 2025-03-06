
import React from 'react';
import './TrustedCompanies.css';

const logos = [
    "./volkswagen_logo.png",
    "./samsung_logo.png",
    "./cisco_logo.png",
    "./vimeo_logo_resized-2.png",
    "./procter_gamble_logo.png",
    "./hewlett_packard_enterprise_logo.png",
    "./citi_logo.png",
    "./ericsson_logo.png" ,
];

const TrustedCompanies = () => (
  <section className="trusted-companies">
    <div className="banner">
      <p>Trusted by over 16,000 companies and millions of learners around the world</p>
      <div className="logos">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Company logo ${index + 1}`} />
        ))}
      </div>
    </div>
  </section>
);

export default TrustedCompanies;
