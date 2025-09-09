// Header.jsx
import React from 'react'; 
import "./Header.css";

function Header() {
  return (
    <header className="header-section">
      <div className="container header-flex">
        {/* WhatsApp */}
        <div className="header-item">
          <img src="/whatsapp.png" alt="WhatsApp" className="header-logo" />
          <a
            href="https://wa.me/1162087349"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            11-6208-7349
          </a>
        </div>

        {/* Email */}
        <div className="header-item">
          <img src="/gmail.png" alt="Email" className="header-logo" />
          <a
            href="mailto:estudio@saenz-asociados.com.ar"
            className="header-link"
          >
            estudio@saenz-asociados.com.ar
          </a>
        </div>

        {/* Instagram */}
        <div className="header-item">
          <a
            href="https://www.instagram.com/estudio.saenz/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            <img src="/instagram.png" alt="Instagram" className="social-icon" />
            <span className="instagram-text">Síganos</span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
