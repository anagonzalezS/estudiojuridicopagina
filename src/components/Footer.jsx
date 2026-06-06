import React from 'react';
import "./Footer.css";

function Footer() {
  const scrollTo = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-inner">

        {/* COLUMNA 1 — Logo + descripción */}
        <div className="footer-col footer-col--brand">
          <img
            src="/logo-cuadrado.png"
            alt="Estudio Sáenz & Asociados"
            className="footer-logo"
          />
          <p className="footer-desc">
            Asesoramiento jurídico integral en Derecho Civil, Penal Tributario
            y empresas. CABA y Provincia de Buenos Aires.
          </p>
        </div>

        {/* COLUMNA 2 — Navegación */}
        <div className="footer-col">
          <h4 className="footer-title">Navegación</h4>
          <ul className="footer-nav">
            <li><a href="#inicio" onClick={(e) => scrollTo(e, "#inicio")}>Inicio</a></li>
            <li><a href="#nosotros" onClick={(e) => scrollTo(e, "#nosotros")}>Nosotros</a></li>
            <li><a href="#servicios" onClick={(e) => scrollTo(e, "#servicios")}>Servicios</a></li>
          </ul>
        </div>

        {/* COLUMNA 3 — Contacto */}
        <div className="footer-col">
          <h4 className="footer-title">Contacto</h4>
          <ul className="footer-contact">
            <li>
              <a href="https://wa.me/5491162087349" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                11-6208-7349
              </a>
            </li>
            <li>
              <a href="mailto:estudio@saenz-asociados.com.ar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <polyline points="2 6 12 13 22 6"/>
                </svg>
                estudio@saenz-asociados.com.ar
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/estudio.saenz/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                @estudio.saenz
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Estudio Sáenz & Asociados. Todos los derechos reservados.
        </p>
        <p className="footer-credit">
          Desarrollado por <strong>Ana Sánchez</strong>
        </p>
      </div>

    </footer>
  );
}

export default Footer;