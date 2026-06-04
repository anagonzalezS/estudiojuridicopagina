import React, { useState, useEffect, useRef } from "react";
import { database, auth, provider } from "./firebase";
import { ref, push, onValue, update } from "firebase/database";
import { signInWithPopup } from "firebase/auth";
import "./Testimonios.css";

function Testimonios() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaEstrella, setNuevaEstrella] = useState(0);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const scrollRef = useRef(null);
  const [esperandoLogin, setEsperandoLogin] = useState(false);
  const [expandido, setExpandido] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const comentariosArray = data
        ? Object.keys(data).map((key) => {
            let fechaFinal;
            if (!data[key].fecha) {
              fechaFinal = new Date("2025-09-18T12:00:00").getTime();
              update(ref(database, `comentarios/${key}`), { fecha: fechaFinal });
            } else {
              fechaFinal = data[key].fecha;
            }
            return {
              key,
              ...data[key],
              fecha: fechaFinal,
              verificado: data[key].verificado !== undefined ? data[key].verificado : true,
            };
          })
        : [];
      setComentarios(comentariosArray);
    });
  }, []);

  const guardarComentario = (usuario) => {
    const comentariosRef = ref(database, "comentarios");
    push(comentariosRef, {
      nombre: usuario.displayName,
      texto: nuevoComentario.trim(),
      estrellas: nuevaEstrella,
      avatar: usuario.photoURL || "",
      respuestas: [],
      fecha: Date.now(),
      verificado: true,
    });
    setNuevoComentario("");
    setNuevaEstrella(0);
    setError("");
  };

  const agregarComentario = () => {
    if (!nuevoComentario.trim() || nuevaEstrella === 0) {
      setError("Por favor completá el comentario y la calificación.");
      return;
    }
    if (!user) {
      setEsperandoLogin(true);
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          guardarComentario(result.user);
        })
        .catch(() => setError("No se pudo iniciar sesión."))
        .finally(() => setEsperandoLogin(false));
    } else {
      guardarComentario(user);
    }
  };

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

  return (
    <section id="testimonios" className="testimonios-section">

      <div className="section-header">
        <h2>Lo que dicen nuestros clientes</h2>
        <p className="section-subtitle">Opiniones verificadas de quienes nos eligieron</p>
      </div>

      {comentarios.length === 0 && (
        <p className="sin-comentarios">Aún no hay comentarios. ¡Sé el primero!</p>
      )}

      {comentarios.length > 0 && (
        <div className="testimonios-wrapper">
          {comentarios.length > 1 && (
            <button className="flecha izquierda" onClick={() => scroll(-1)} aria-label="Anterior">‹</button>
          )}

          <div className="testimonios-list" ref={scrollRef}>
            {comentarios.map((c, i) => {
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

                  {c.respuestas?.map((r, j) => {
                    const respuestaId = `${c.key}-r${j}`;
                    const isRespExpandida = expandido[respuestaId];
                    const respCorta = r.texto.length > 120 && !isRespExpandida;
                    return (
                      <div className="respuesta" key={j}>
                        <div className="info-comentario">
                          {r.verificado && <span className="verificado">✔ Verificado</span>}
                          <span className="fecha">{formatFecha(r.fecha)}</span>
                        </div>
                        <p className="texto">
                          {respCorta ? r.texto.slice(0, 120) + "..." : r.texto}
                        </p>
                        {r.texto.length > 120 && (
                          <button className="ver-mas" onClick={() => toggleExpand(respuestaId)}>
                            {isRespExpandida ? "Ver menos" : "Ver más"}
                          </button>
                        )}
                        <p className="autor respuesta-autor">- {r.nombre}</p>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>

          {comentarios.length > 1 && (
            <button className="flecha derecha" onClick={() => scroll(1)} aria-label="Siguiente">›</button>
          )}
        </div>
      )}

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

      <div className="nuevo-comentario">
        <h3 className="nuevo-titulo">Dejá tu reseña</h3>

        {error && <p className="error">{error}</p>}

        <textarea
          placeholder="Contanos tu experiencia con el estudio..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          rows={4}
        />

        <div className="seleccion-estrellas">
          <span className="estrellas-label">Calificación:</span>
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < nuevaEstrella ? "activo" : ""}
              onClick={() => setNuevaEstrella(i + 1)}
              role="button"
              aria-label={`${i + 1} estrella${i > 0 ? "s" : ""}`}
            >
              ★
            </span>
          ))}
        </div>

        <button
          onClick={agregarComentario}
          disabled={esperandoLogin}
          className="btn-google"
        >
          {esperandoLogin ? (
            <span>Iniciando sesión...</span>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="18" height="18" aria-hidden="true">
                <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
                <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
                <path fill="#fbbc05" d="M121.2 366.7c-8.5-25.2-8.5-52.9 0-78.1V218.7H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
                <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
              </svg>
              Publicar con Google
            </>
          )}
        </button>
      </div>

    </section>
  );
}

export default Testimonios;