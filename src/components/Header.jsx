import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-section">
      <div className="header-inner">

        {/* LOGO */}
        <a href="#inicio" className="header-logo-wrap" aria-label="Inicio">
          <img
            src="/logo-nav.png"
            alt="Estudio Sáenz & Asociados"
            className="header-logo"
          />
        </a>

        {/* CONTACTO */}
        <div className="header-contact">
          <a
            href="https://wa.me/5491162087349"
            className="header-item header-item--wa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="header-label">11-6208-7349</span>
          </a>

          <a
            href="mailto:estudio@saenz-asociados.com.ar"
            className="header-item header-item--email"
            aria-label="Enviar email al estudio"
          >
            <svg className="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2 6 12 13 22 6" />
            </svg>
            <span className="header-label header-label--email">
              estudio@saenz-asociados.com.ar
            </span>
          </a>

          <a
            href="https://www.instagram.com/estudio.saenz/"
            className="header-item header-item--ig"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguirnos en Instagram"
          >
            <svg className="header-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span className="header-label">Síganos</span>
          </a>
        </div>

      </div>
    </header>
  );
}

export default Header;
