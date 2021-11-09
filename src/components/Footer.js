import React from "react";

function Footer() {
  return (
    <footer>
      <div>
        <section id="contact" class="contact-section">
          <div class="contact-section-header">
            <h2>Below You can find my profiles and personal contact.</h2>
            <p>Is there anything I can help you with?</p>
          </div>
          <div class="contact-links">
            <a
              href="https://www.linkedin.com/in/jacek-s%C5%82omian-759171b9/"
              target="_blank"
              rel="noreferrer"
              class="btn contact-details">
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              id="profile-link"
              href="https://github.com/jaceksl1"
              target="_blank"
              rel="noreferrer"
              class="btn contact-details">
              <i class="fab fa-github"></i> GitHub
            </a>
            <a href="mailto:j.k.slomian@gmail.com" class="btn contact-details">
              <i class="fas fa-at"></i> Send a mail
            </a>
            <a href="tel:691-247-642" class="btn contact-details">
              <i class="fas fa-mobile-alt"></i> Call me
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
