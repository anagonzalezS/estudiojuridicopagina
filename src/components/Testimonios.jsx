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

  // Leer comentarios
  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const comentariosArray = data
        ? Object.keys(data).map((key) => ({ key, ...data[key] }))
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

  return (
    <section id="testimonios" className="testimonios-section">
      <h2>Comentarios de nuestros clientes</h2>

      {comentarios.length === 0 && <p>Aún no hay comentarios.</p>}

      <div className={`testimonios-wrapper ${comentarios.length > 1 ? "multiple" : "unico"}`}>
        {comentarios.length > 1 && (
          <button className="flecha izquierda" onClick={() => scroll(-1)}>‹</button>
        )}

        <div className="testimonios-list" ref={scrollRef}>
          {comentarios.map((c, i) => (
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
                <p className="texto">"{c.texto}"</p>
                <p className="autor">- {c.nombre}</p>

                {c.respuestas?.map((r, j) => (
                  <div className="respuesta" key={j}>
                    <p className="texto">{r.texto}</p>
                    <p className="autor">- {r.nombre}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {comentarios.length > 1 && (
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

        <button onClick={agregarComentario} disabled={esperandoLogin}>
          {esperandoLogin ? "Iniciando sesión..." : "Comentar con Google"}
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
