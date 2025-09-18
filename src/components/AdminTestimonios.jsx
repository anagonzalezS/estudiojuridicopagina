import React, { useState, useEffect } from "react";
import { database, auth, provider } from "./firebase";
import { ref, onValue, update, remove } from "firebase/database";
import { signInWithPopup } from "firebase/auth";
import "./AdminTestimonios.css";

function AdminTestimonios() {
  const [comentarios, setComentarios] = useState([]);
  const [user, setUser] = useState(null);
  const [esperandoLogin, setEsperandoLogin] = useState(false);
  const [modalEliminar, setModalEliminar] = useState({ abierto: false, key: null });

  // Leer comentarios de Firebase
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

  // Login de la abogada
  const loginAbogada = () => {
    setEsperandoLogin(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        if (result.user.email !== "gonzalezana202312@gmail.com") {
          alert("No tienes permisos de administrador.");
          return;
        }
        setUser(result.user);
      })
      .catch(() => alert("Error al iniciar sesión"))
      .finally(() => setEsperandoLogin(false));
  };

  // Responder comentario
  const responderComentario = (index, respuesta) => {
    const comentario = comentarios[index];
    const nuevasRespuestas = comentario.respuestas ? [...comentario.respuestas] : [];
    nuevasRespuestas.push({
      nombre: user.displayName,
      texto: respuesta,
      fecha: new Date().toISOString(),
    });

    update(ref(database, `comentarios/${comentario.key}`), {
      respuestas: nuevasRespuestas,
    });

    const updated = [...comentarios];
    updated[index].respuestas = nuevasRespuestas;
    setComentarios(updated);
  };

  // Abrir modal de eliminación
  const abrirModalEliminar = (key) => {
    setModalEliminar({ abierto: true, key });
  };

  // Cerrar modal
  const cerrarModal = () => {
    setModalEliminar({ abierto: false, key: null });
  };

  // Confirmar eliminación
  const confirmarEliminar = () => {
    remove(ref(database, `comentarios/${modalEliminar.key}`));
    cerrarModal();
  };

  if (!user) {
    return (
      <div className="admin-login-container">
        <h2>Panel de administración</h2>
        <button className="btn-google" onClick={loginAbogada} disabled={esperandoLogin}>
          {esperandoLogin ? "Iniciando sesión..." : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" width="20" height="20">
                <path fill="#4285f4" d="M533.5 278.4c0-17.8-1.4-35-4-51.7H272v97.8h146.9c-6.3 34.1-25.2 63-53.8 82.5v68h86.9c50.8-46.8 80.5-115.7 80.5-196.6z"/>
                <path fill="#34a853" d="M272 544.3c72.6 0 133.7-24 178.3-65.1l-86.9-68c-24.2 16.2-55 25.6-91.4 25.6-70 0-129.5-47.3-150.8-111.2H33v69.9C77.9 476.7 169.3 544.3 272 544.3z"/>
                <path fill="#fbbc05" d="M121.2 366.7c-8.5-25.2-8.5-52.9 0-78.1V218.7H33c-17.9 35.8-17.9 78.2 0 114l88.2 34z"/>
                <path fill="#ea4335" d="M272 107.3c38.6 0 73.2 13.3 100.5 39.2l75.3-75.3C405.7 24.7 344.6 0 272 0 169.3 0 77.9 67.6 33 166.2l88.2 69.1c21.3-63.9 80.8-111.2 150.8-111.2z"/>
              </svg>
              Iniciar sesión con Google
            </>
          )}
        </button>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h2>Panel de administración</h2>

      {comentarios.map((c, i) => (
        <div key={c.key} className="card-comentario">
          <p><strong>{c.nombre}</strong>: {c.texto}</p>

          {c.respuestas?.map((r, j) => (
            <div key={j} className="respuesta-admin">
              <p>{r.texto}</p>
              <p><em>{r.nombre}</em></p>
            </div>
          ))}

          <input
            type="text"
            placeholder="Escribe tu respuesta..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && e.target.value.trim()) {
                responderComentario(i, e.target.value);
                e.target.value = "";
              }
            }}
          />

          <button className="btn-eliminar" onClick={() => abrirModalEliminar(c.key)}>Eliminar</button>
        </div>
      ))}

      {/* Modal de eliminación */}
      {modalEliminar.abierto && (
        <div className="modal-overlay">
          <div className="modal">
            <p>¿Seguro que quieres eliminar este comentario?</p>
            <div className="modal-buttons">
              <button className="btn-confirmar" onClick={confirmarEliminar}>Sí</button>
              <button className="btn-cancelar" onClick={cerrarModal}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminTestimonios;
