import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';

function Contact() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  const sectionStyle = {
    backgroundColor: '#161853',
  };

  const textStyle = {
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'lighter',
  };
  const titleStyle = {
    color: '#ffffff',
    marginBottom: '10px', // Ajusta la separación inferior del título
    marginTop: '20px', // Ajusta la separación superior del título
    fontSize: '24px', // Ajusta el tamaño de la fuente
    fontWeight: 'bold', // Ajusta el peso de la fuente
  };
  const buttonStyle = {
    backgroundColor: '#fea9be', // Cambia el color del botón a #fea9be
    color: '#7a404c',
    border: 'none', // Elimina el borde del botón
    borderRadius: '5px', // Añade bordes redondeados al botón
    padding: '10px 20px', // Ajusta el relleno del botón
    fontSize: '16px', // Ajusta el tamaño de la fuente del botón
    fontWeight: 'bold', // Ajusta el peso de la fuente del botón
    cursor: 'pointer', // Cambia el cursor al pasar sobre el botón
  };
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    politicaPrivacidad: false,
  });

  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje, politicaPrivacidad } = formData;
    if (!nombre || !email || !mensaje || !politicaPrivacidad) {
      setFormError('Por favor completa todos los campos obligatorios.'); // Actualiza el estado de error
      return;
    }
    setFormError(''); // Limpia el mensaje de error si el envío fue exitoso
    // Aquí puedes enviar el formulario si todos los campos están completos
  };
  return (
    <section id="contact" className="wow fadeIn contact-section" style={sectionStyle}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <h2 className="wow bounceIn" data-wow-offset="100" data-wow-delay="0.5s">
          <span style={textStyle}>CONTACTANOS</span>
            </h2>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft form-animation" data-wow-offset="50" data-wow-delay="0.9s">
            <h3 style={{ color: '#ffffff' }}>¡Déjanos tu consulta y te responderemos cuanto antes!</h3>
            <form onSubmit={handleSubmit}>
            {formError && <div style={{ color: 'red' }}>{formError}</div>} {/* Muestra el mensaje de error si existe */}

              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre"  required onChange={handleInputChange} />

              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email"  required onChange={handleInputChange} />

              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required onChange={handleInputChange}></textarea>

              </div>
              <div className="form-check">
              <input type="checkbox" className="form-check-input" id="politicaPrivacidad" name="politicaPrivacidad" required onChange={handleInputChange} />

                <label className="form-check-label" htmlFor="politicaPrivacidad">
                Acepto que mis datos personales sean recopilados de acuerdo a nuestra política de privacidad.

              </label>


              </div>
              <button type="submit" className="btn" style={buttonStyle}>Enviar</button> {/* Aplica el estilo al botón */}

            </form>
            {formError && <div style={{ color: 'red' }}>{formError}</div>} {/* Muestra el mensaje de error si existe */}

          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
            <address>
            <p className="address-title" style={{ ...textStyle, ...titleStyle }}><FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación</p>

              <span style={textStyle}>Uruguay 16 piso 9 oficina 94 CABA</span>
              <p className="address-title" style={{ ...textStyle, ...titleStyle }}><FontAwesomeIcon icon={faClock} /> Horarios</p>

              <span style={textStyle}>Lunes a Viernes de 10 a 18hs con turno previo</span>
              
              <p className="address-title" style={{ ...textStyle, ...titleStyle }}><FontAwesomeIcon icon={faCalendarAlt} /> Reservas</p>

              <span style={textStyle}>+541159585174</span>
            </address>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
