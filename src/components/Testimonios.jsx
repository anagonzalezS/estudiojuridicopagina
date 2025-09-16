import React, { useState, useEffect } from "react";
import { database, auth, provider } from "./firebase"; // Ajusta según tu ruta
import { ref, push, onValue } from "firebase/database";
import { signInWithPopup } from "firebase/auth";
import "./Testimonios.css";

function Testimonios() {
  const [comentarios, setComentarios] = useState([]);
  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaEstrella, setNuevaEstrella] = useState(0);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // Leer comentarios desde Firebase
  useEffect(() => {
    const comentariosRef = ref(database, "comentarios");
    onValue(comentariosRef, (snapshot) => {
      const data = snapshot.val();
      const comentariosArray = data ? Object.values(data) : [];
      setComentarios(comentariosArray);
    });
  }, []);

  // Guardar comentario en Firebase
  const guardarComentario = (usuario) => {
    const comentariosRef = ref(database, "comentarios");
    push(comentariosRef, {
      nombre: usuario.displayName,
      texto: nuevoComentario.trim(),
      estrellas: nuevaEstrella,
      avatar: usuario.photoURL || "", // 👈 guardamos la foto
    });
    setNuevoComentario("");
    setNuevaEstrella(0);
    setError("");
  };

  // Agregar comentario con login si no hay usuario
  const agregarComentario = () => {
    if (!nuevoComentario.trim() || nuevaEstrella === 0) {
      setError("Por favor completa comentario y calificación.");
      return;
    }

    if (!user) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
          guardarComentario(result.user);
        })
        .catch((error) => console.error("Error al iniciar sesión:", error));
    } else {
      guardarComentario(user);
    }
  };

  return (
    <section id="testimonios" className="testimonios-section">
      <h2>Comentarios de nuestros clientes</h2>

      {comentarios.length === 0 && <p>Aún no hay comentarios. Sé el primero en comentar.</p>}

      <div className="testimonios-list">
        {comentarios.map((c, i) => (
          <div className="testimonio-card" key={i}>
            <div className="avatar">
              {c.avatar ? (
                <img src={c.avatar} alt={c.nombre} />
              ) : (
                c.nombre.split(" ").map((n) => n[0]).join("").toUpperCase()
              )}
            </div>
            <div className="contenido">
              <div className="estrellas">
                {Array.from({ length: 5 }, (_, index) => (
                  <span key={index} className={index < c.estrellas ? "activo" : ""}>★</span>
                ))}
              </div>
              <p className="texto">"{c.texto}"</p>
              <p className="autor">- {c.nombre}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="nuevo-comentario">
        {error && <p className="error">{error}</p>}

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

        <button onClick={agregarComentario}>
          {user ? "Agregar Comentario" : "Comentar"}
        </button>
      </div>
    </section>
  );
}

export default Testimonios;
