import React, { useState } from "react";
import "./Testimonios.css";

function Testimonios() {
  const [comentarios, setComentarios] = useState([
    {
      nombre: "María Pérez",
      texto: "Excelente asesoramiento legal, muy profesional.",
      estrellas: 5,
    },
    {
      nombre: "Juan López",
      texto: "Muy buena atención y seguimiento del caso.",
      estrellas: 4,
    },
  ]);

  const [nuevoComentario, setNuevoComentario] = useState("");
  const [nuevaEstrella, setNuevaEstrella] = useState(0);

  const agregarComentario = () => {
    if (nuevoComentario && nuevaEstrella > 0) {
      setComentarios([
        ...comentarios,
        {
          nombre: "Usuario",
          texto: nuevoComentario,
          estrellas: nuevaEstrella,
        },
      ]);
      setNuevoComentario("");
      setNuevaEstrella(0);
    }
  };

  return (
    <section id="testimonios" className="testimonios-section">
      <h2>Comentarios de nuestros clientes</h2>

      <div className="testimonios-list">
        {comentarios.map((c, i) => (
          <div className="testimonio-card" key={i}>
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
            <p className="texto">{c.texto}</p>
            <p className="autor">- {c.nombre}</p>
          </div>
        ))}
      </div>

      <div className="nuevo-comentario">
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

        <button onClick={agregarComentario}>Agregar Comentario</button>
      </div>
    </section>
  );
}

export default Testimonios;
