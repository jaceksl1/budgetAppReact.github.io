import React from "react";

function Footer() {
  return (
    <footer>
      <p>Created by Jacek Słomian</p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/jacek-s%C5%82omian-759171b9/"
          target="_blank" rel="noreferrer"
          className="btn contact-details">
          <i class="fab fa-facebook-square"></i> LinkedIn
        </a>
        <a
          id="profile-link"
          href="https://github.com/jaceksl1"
          target="_blank" rel="noreferrer"
          className="btn contact-details">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="mailto:j.k.slomian@gmail.com" className="btn contact-details">
          <i className="fas fa-at"></i> Send a mail
        </a>
        <a href="tel:691-247-642" className="btn contact-details">
          <i className="fas fa-mobile-alt"></i> Call me
        </a>
      </div>
    </footer>
  );
}

export default Footer;
