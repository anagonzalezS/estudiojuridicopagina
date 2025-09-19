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

  // Leer comentarios
  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const comentariosArray = data
        ? Object.keys(data).map((key) => {
            let fechaFinal;
            if (!data[key].fecha) {
              // Si no tiene fecha, asignamos 18 sep 2025
              fechaFinal = new Date("2025-09-18T12:00:00").getTime();
              update(ref(database, `comentarios/${key}`), { fecha: fechaFinal });
            } else {
              fechaFinal = data[key].fecha;
            }

            return {
              key,
              ...data[key],
              fecha: fechaFinal,
              verificado:
                data[key].verificado !== undefined ? data[key].verificado : true,
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
      fecha: Date.now(), // fecha actual
      verificado: true,
    });
    setNuevoComentario("");
    setNuevaEstrella(0);
    setError("");
  };

  const agregarComentario = () => {
    if (!nuevoComentario.trim() || nuevaEstrella === 0) {
      setError("Por favor completa comentario y calificación.");
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

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 270, behavior: "smooth" });
    }
  };

  const toggleExpand = (id) => {
    setExpandido((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const isDesktop = window.innerWidth > 1024;
  const mostrarFlechas = isDesktop
    ? comentarios.length > 3
    : comentarios.length > 2;

  // Carrusel automático
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 270, behavior: "smooth" });
      }
    }, 5000); // 5 segundos
    return () => clearInterval(interval);
  }, []);

  const formatFecha = (timestamp) =>
    new Date(timestamp).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <section id="testimonios" className="testimonios-section">
      <h2 className="title">Comentarios de nuestros clientes</h2>

      {comentarios.length === 0 && <p>Aún no hay comentarios.</p>}

      <div className={`testimonios-wrapper ${comentarios.length > 1 ? "multiple" : "unico"}`}>
        {mostrarFlechas && (
          <button className="flecha izquierda" onClick={() => scroll(-1)}>‹</button>
        )}

        <div className="testimonios-list" ref={scrollRef}>
          {comentarios.map((c, i) => {
            const isExpandido = expandido[c.key];
            const textoCorto = c.texto.length > 150 && !isExpandido;

            return (
              <div className="testimonio-card" key={i}>
                <div className="avatar">
                  {c.avatar ? <img src={c.avatar} alt={c.nombre} /> : c.nombre[0].toUpperCase()}
                </div>

                <div className="contenido">
                  <div className="estrellas">
                    {Array.from({ length: 5 }, (_, idx) => (
                      <span key={idx} className={idx < c.estrellas ? "activo" : ""}>★</span>
                    ))}
                  </div>

                  <div className="info-comentario">
                    {c.verificado && <span className="verificado">✔ Verificado</span>}
                    <span className="fecha">{formatFecha(c.fecha)}</span>
                  </div>

                  <p className={`texto ${isExpandido ? "expandido" : ""}`}>
                    "{textoCorto ? c.texto.slice(0, 150) + "..." : c.texto}"
                  </p>

                  {c.texto.length > 150 && (
                    <button className="ver-mas" onClick={() => toggleExpand(c.key)}>
                      {isExpandido ? "Ver menos" : "Ver más"}
                    </button>
                  )}

                  <p className="autor">- {c.nombre}</p>

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
                        <p className={`texto ${isRespExpandida ? "expandido" : ""}`}>
                          {respCorta ? r.texto.slice(0, 120) + "..." : r.texto}
                        </p>
                        {r.texto.length > 120 && (
                          <button className="ver-mas" onClick={() => toggleExpand(respuestaId)}>
                            {isRespExpandida ? "Ver menos" : "Ver más"}
                          </button>
                        )}
                        <p className="autor">- {r.nombre}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {mostrarFlechas && (
          <button className="flecha derecha" onClick={() => scroll(1)}>›</button>
        )}
      </div>

      <div className="nuevo-comentario">
        {error && <p className="error">{error}</p>}

        <textarea
          placeholder="Escribe tu comentario..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        />

        <div className="seleccion-estrellas">
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < nuevaEstrella ? "activo" : ""}
              onClick={() => setNuevaEstrella(i + 1)}
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
            "Iniciando sesión..."
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="20" height="20">
                <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
                <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
                <path fill="#fbbc05" d="M121.2 366.7c-8.5-25.2-8.5-52.9 0-78.1V218.7H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
                <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
              </svg>
              Deja tu Reseña
            </>
          )}
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
