import React, { useState, useEffect, useRef } from "react";
import { database } from "./firebase";
import { ref, onValue } from "firebase/database";
import "./Testimonios.css";

function Testimonios() {
  const [comentarios, setComentarios] = useState([]);
  const [expandido, setExpandido] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const array = data
        ? Object.keys(data).map((key) => ({
            key,
            ...data[key],
            fecha: data[key].fecha || new Date("2025-01-01").getTime(),
            verificado: data[key].verificado !== undefined ? data[key].verificado : true,
          }))
        : [];
      setComentarios(array);
    });
  }, []);

  const scrollTo = (index) => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll(".testimonio-card");
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveIndex(index);
    }
  };

  const scroll = (direction) => {
    const next = Math.max(0, Math.min(comentarios.length - 1, activeIndex + direction));
    scrollTo(next);
  };

  const toggleExpand = (id) => {
    setExpandido((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const formatFecha = (timestamp) =>
    new Date(timestamp).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  if (comentarios.length === 0) return null;

  return (
    <section id="testimonios" className="testimonios-section">

      <div className="section-header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">Opiniones de quienes nos eligieron</p>
      </div>

      <div className="testimonios-wrapper">
        {comentarios.length > 1 && (
          <button className="flecha izquierda" onClick={() => scroll(-1)} aria-label="Anterior">‹</button>
        )}

        <div className="testimonios-list" ref={scrollRef}>
          {comentarios.map((c) => {
            const isExpandido = expandido[c.key];
            const textoCorto = c.texto.length > 150 && !isExpandido;

            return (
              <div className="testimonio-card" key={c.key}>
                <div className="card-top">
                  <div className="avatar">
                    {c.avatar
                      ? <img src={c.avatar} alt={c.nombre} />
                      : c.nombre[0].toUpperCase()
                    }
                  </div>
                  <div className="card-meta">
                    <p className="autor">{c.nombre}</p>
                    <div className="estrellas">
                      {Array.from({ length: 5 }, (_, idx) => (
                        <span key={idx} className={idx < c.estrellas ? "activo" : ""}>★</span>
                      ))}
                    </div>
                    <div className="info-comentario">
                      {c.verificado && <span className="verificado">✔ Verificado</span>}
                      <span className="fecha">{formatFecha(c.fecha)}</span>
                    </div>
                  </div>
                </div>

                <p className="texto">
                  "{textoCorto ? c.texto.slice(0, 150) + "..." : c.texto}"
                </p>

                {c.texto.length > 150 && (
                  <button className="ver-mas" onClick={() => toggleExpand(c.key)}>
                    {isExpandido ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        {comentarios.length > 1 && (
          <button className="flecha derecha" onClick={() => scroll(1)} aria-label="Siguiente">›</button>
        )}
      </div>

      {comentarios.length > 1 && (
        <div className="dots">
          {comentarios.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? "active" : ""}`}
              onClick={() => scrollTo(i)}
              aria-label={`Ir al comentario ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="perfil-google">
        <a
          href="https://g.page/r/CVrCEGJRjCHfEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="link-perfil"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="16" height="16" aria-hidden="true">
            <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
            <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
            <path fill="#fbbc05" d="M121.2 325.6c-8.5-25.2-8.5-52.9 0-78.1V177.6H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
            <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
          </svg>
          Ver perfil en Google
        </a>
      </div>

    </section>
  );
}

export default Testimonios;
        
