import React, { useState, useEffect, useRef } from "react";
import { database, auth, provider } from "./firebase";
import { ref, push, onValue } from "firebase/database";
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

  // Leer comentarios desde Firebase
  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const comentariosArray = data ? Object.values(data) : [];
      setComentarios(comentariosArray);
    });
  }, []);

  // Scroll automático cada 5 segundos (solo si hay más de uno)
  useEffect(() => {
    if (comentarios.length > 1) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [comentarios]);

  const guardarComentario = (usuario) => {
    const comentariosRef = ref(database, "comentarios");
    push(comentariosRef, {
      nombre: usuario.displayName,
      texto: nuevoComentario.trim(),
      estrellas: nuevaEstrella,
      avatar: usuario.photoURL || "",
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
        .catch((error) => {
          console.error("Error al iniciar sesión:", error);
          setError("No se pudo iniciar sesión. Intenta nuevamente.");
        })
        .finally(() => setEsperandoLogin(false));
    } else {
      guardarComentario(user);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction * 260, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonios" className="testimonios-section">
      <h2>Comentarios de nuestros clientes</h2>

      {comentarios.length === 0 && (
        <p>Aún no hay comentarios. Sé el primero en comentar.</p>
      )}

      <div
        className={`testimonios-wrapper ${
          comentarios.length > 1 ? "multiple" : "unico"
        }`}
      >
        {comentarios.length > 1 && (
          <button className="flecha izquierda" onClick={() => scroll(-1)}>
            ‹
          </button>
        )}

        <div className="testimonios-list" ref={scrollRef}>
          {comentarios.map((c, i) => (
            <div className="testimonio-card" key={i}>
              <div className="avatar">
                {c.avatar ? (
                  <img src={c.avatar} alt={c.nombre} />
                ) : (
                  c.nombre
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()
                )}
              </div>
              <div className="contenido">
                <div className="estrellas">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span
                      key={index}
                      className={index < c.estrellas ? "activo" : ""}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="texto">"{c.texto}"</p>
                <p className="autor">- {c.nombre}</p>
              </div>
            </div>
          ))}
        </div>

        {comentarios.length > 1 && (
          <button className="flecha derecha" onClick={() => scroll(1)}>
            ›
          </button>
        )}
      </div>

      <div className="nuevo-comentario">
        {error && <p className="error">{error}</p>}

        {!user && (
          <p
            style={{
              fontSize: "0.9rem",
              marginBottom: "10px",
              textAlign: "center",
            }}
          >
            Para dejar un comentario verificado, inicia sesión con tu cuenta de
            Google. Solo se usará tu nombre y foto para mostrar tu comentario.
          </p>
        )}

        <textarea
          placeholder="Escribe tu comentario..."
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
        ></textarea>

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
          className="btn-comentar"
        >
          {esperandoLogin
            ? "Iniciando sesión..."
            : user
            ? "Agregar Comentario"
            : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 533.5 544.3"
                  width="20"
                  height="20"
                >
                  <path
                    fill="#4285F4"
                    d="M533.5 278.4c0-18.2-1.5-35.7-4.3-52.7H272v99.7h146.9c-6.3 34.1-25.1 63-53.5 82.3l86.6 67c50.5-46.5 80.5-115.3 80.5-196.3z"
                  />
                  <path
                    fill="#34A853"
                    d="M272 544.3c72.8 0 133.8-24.2 178.4-65.5l-86.6-67c-24.1 16.1-55 25.6-91.8 25.6-70.7 0-130.5-47.7-152-111.9l-89 69.2c43.9 87.3 134.8 149.6 241 149.6z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M120 324.5c-10.1-30-10.1-62.3 0-92.3l-89-69.2C1.7 241.1 0 267.8 0 278.4c0 10.6 1.7 37.3 31 115.4l89-69.3z"
                  />
                  <path
                    fill="#EA4335"
                    d="M272 109.1c39.6 0 75.1 13.6 103.1 40.5l77.2-77.2C404.3 24.1 345.3 0 272 0 165.8 0 74.9 62.3 31 149.6l89 69.2c21.5-64.2 81.3-111.9 152-111.9z"
                  />
                </svg>
                Comentar con Google
              </>
            )}
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
