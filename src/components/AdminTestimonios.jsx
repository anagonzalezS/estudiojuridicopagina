import React, { useState, useEffect } from "react";
import { database, auth, provider } from "./firebase";
import { ref, onValue, update, remove } from "firebase/database";
import { signInWithRedirect } from "firebase/auth";
import "./AdminTestimonios.css";

function AdminTestimonios() {
  const [comentarios, setComentarios] = useState([]);
  const [user, setUser] = useState(null);
  const [esperandoLogin, setEsperandoLogin] = useState(false);
  const [modalEliminar, setModalEliminar] = useState({ abierto: false, key: null });
  const [respuestasInputs, setRespuestasInputs] = useState({});

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

  // Detectar usuario logueado (desktop o móvil)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      if (u?.email === "anaester.sanchezgonzalez@gmail.com") {
        setUser(u);
      }
      setEsperandoLogin(false);
    });
    return () => unsubscribe();
  }, []);

  // Login de la abogada
  const loginAbogada = () => {
    setEsperandoLogin(true);
    signInWithRedirect(auth, provider);
  };

  // Responder comentario
  const responderComentario = (index) => {
    const respuesta = respuestasInputs[index]?.trim();
    if (!respuesta || !user) return;

    const comentario = comentarios[index];
    const nuevasRespuestas = comentario.respuestas ? [...comentario.respuestas] : [];
    nuevasRespuestas.push({
      nombre: user.displayName,
      texto: respuesta,
      fecha: new Date().toISOString(),
    });

    update(ref(database, `comentarios/${comentario.key}`), { respuestas: nuevasRespuestas });

    const updated = [...comentarios];
    updated[index].respuestas = nuevasRespuestas;
    setComentarios(updated);

    setRespuestasInputs({ ...respuestasInputs, [index]: "" });
  };

  // Modal eliminar
  const abrirModalEliminar = (key) => setModalEliminar({ abierto: true, key });
  const cerrarModal = () => setModalEliminar({ abierto: false, key: null });
  const confirmarEliminar = () => {
    remove(ref(database, `comentarios/${modalEliminar.key}`));
    cerrarModal();
  };

  if (!user) {
    return (
      <div className="admin-login-container">
        <h2>Panel de administración</h2>
        <button className="btn-google" onClick={loginAbogada} disabled={esperandoLogin}>
          {esperandoLogin ? "Iniciando sesión..." : "Iniciar sesión con Google"}
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
            value={respuestasInputs[i] || ""}
            onChange={(e) => setRespuestasInputs({ ...respuestasInputs, [i]: e.target.value })}
            onKeyDown={(e) => { if (e.key === "Enter") responderComentario(i); }}
          />

          <button onClick={() => responderComentario(i)}>Responder</button>
          <button className="btn-eliminar" onClick={() => abrirModalEliminar(c.key)}>Eliminar</button>
        </div>
      ))}

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
