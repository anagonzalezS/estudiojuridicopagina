import React from "react";
import "./Testimonios.css";

const reseñas = [
  {
    id: 1,
    nombre: "Cliente verificado",
    estrellas: 5,
    texto: "Excelente atención y profesionalismo. Muy recomendable.",
    fecha: "ene. 2025",
    avatar: "",
  },
];

function Testimonios() {
  return (
    <section id="testimonios" className="testimonios-section">

      <div className="section-header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">Opiniones verificadas de Google</p>
      </div>

      <div className="google-rating">
        <div className="google-rating-score">
          <span className="score-numero">5.0</span>
          <div className="score-estrellas">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="estrella-activa">★</span>
            ))}
          </div>
          <span className="score-label">en Google</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="32" height="32" aria-label="Google">
          <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
          <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
          <path fill="#fbbc05" d="M121.2 325.6c-8.5-25.2-8.5-52.9 0-78.1V177.6H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
          <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
        </svg>
      </div>

      <div className="cta-reseña">
        <p className="cta-texto">¿Trabajaste con nosotros? Tu opinión nos ayuda a crecer.</p>
        <a
          href="https://g.page/r/CVrCEGJRjCHfEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dejar-reseña"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="18" height="18" aria-hidden="true">
            <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
            <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
            <path fill="#fbbc05" d="M121.2 325.6c-8.5-25.2-8.5-52.9 0-78.1V177.6H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
            <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
          </svg>
          Dejá tu reseña en Google
        </a>
      </div>

    </section>
  );
}

export default Testimonios;
