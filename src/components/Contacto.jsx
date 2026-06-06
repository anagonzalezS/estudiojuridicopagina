import React from "react";
import "./Contacto.css";

function Contacto() {
  return (
    <section id="contacto" className="contacto-section">

      <div className="section-header">
        <h2>Contacto</h2>
        <p className="section-subtitle">Consultanos sin compromiso</p>
      </div>

      <div className="contacto-lista">

        {/* Ubicación */}
        <div className="contacto-fila">
          <div className="contacto-icono">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div className="contacto-contenido">
            <span className="contacto-etiqueta">Cobertura</span>
            <span className="contacto-dato">CABA</span>
            <span className="contacto-dato">Provincia de Buenos Aires</span>
          </div>
        </div>

        <div className="contacto-divider" />

        {/* WhatsApp */}
        <a
          href="https://wa.me/5491162087349"
          className="contacto-fila contacto-fila--link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <div className="contacto-icono">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div className="contacto-contenido">
            <span className="contacto-etiqueta">WhatsApp</span>
            <span className="contacto-dato">11-6208-7349</span>
          </div>
          <svg className="contacto-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        <div className="contacto-divider" />

        {/* Email */}
        <a
          href="https://mail.google.com/mail/?view=cm&to=estudio@saenz-asociados.com.ar"
          className="contacto-fila contacto-fila--link"
          aria-label="Enviar email al estudio" target="_blank" rel="noopener noreferrer"
        >
          <div className="contacto-icono">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="2 6 12 13 22 6" />
            </svg>
          </div>
          <div className="contacto-contenido">
            <span className="contacto-etiqueta">Correo electrónico</span>
            <span className="contacto-dato contacto-dato--small">estudio@saenz-asociados.com.ar</span>
          </div>
          <svg className="contacto-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

        <div className="contacto-divider" />

        {/* Instagram */}
        <a
          href="https://www.instagram.com/estudio.saenz/"
          className="contacto-fila contacto-fila--link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Seguirnos en Instagram"
        >
          <div className="contacto-icono">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div className="contacto-contenido">
            <span className="contacto-etiqueta">Instagram</span>
            <span className="contacto-dato">@estudio.saenz</span>
          </div>
          <svg className="contacto-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </a>

      </div>

      
    </section>
  );
}

export default Contacto;