import React, { useState } from "react"; 
import { Helmet } from "react-helmet";
import emailjs from "emailjs-com";
import "./Contacto.css";

function Contacto() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )

      .then(
        () => { 
          setModalMessage("¡Gracias por tu mensaje, pronto te responderemos!");
          setShowModal(true);
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        (error) => { 
          setModalMessage("Ocurrió un error al enviar el mensaje, intenta nuevamente.");
          setShowModal(true);
          console.error(error.text); 
        }
      );
  };

  return (
    <section className="contacto-section" id="contacto">
      <Helmet>
        <title>Contacto - Estudio Jurídico Sáenz & Asociados</title>
        <meta name="description" content="Formulario de contacto para consultas legales con Estudio Jurídico Sáenz & Asociados. Atención en CABA y Provincia de Buenos Aires." />
        <meta name="keywords" content="abogados, derecho civil, derecho penal, derecho laboral, usucapión, divorcios, sucesiones, CABA, Buenos Aires" />
      </Helmet>

      <div className="contacto-container">
        <h2>Contacto</h2>
        <p className="contacto-intro">Complete el formulario y nos pondremos en contacto a la brevedad.</p>
        
        <form className="contacto-form" onSubmit={handleSubmit}>
          <label>Nombre
            <input 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              placeholder="Tu nombre completo" 
              required 
            />
          </label>
          <label>Email
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Tu correo electrónico" 
              required 
            />
          </label>
          <label>Mensaje
            <textarea 
              name="mensaje" 
              value={formData.mensaje} 
              onChange={handleChange} 
              placeholder="Escribe tu mensaje" 
              required 
            />
          </label>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <p>{modalMessage}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contacto;
