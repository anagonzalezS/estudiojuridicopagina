import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

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
    marginBottom: '10px',
    marginTop: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const buttonStyle = {
    backgroundColor: '#fea9be',
    color: '#7a404c',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '10px', // Añadido para separar el botón del resto del formulario
  };

  const formContainerStyle = {
    marginBottom: '20px', // Añadido para separar el formulario de la dirección
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
      setFormError('Por favor completa todos los campos obligatorios.');
      return;
    }
    setFormError('');
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
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s" style={formContainerStyle}>
            <h3 style={{ color: '#ffffff' }}>¡Déjanos tu consulta y te responderemos cuanto antes!</h3>
            <form onSubmit={handleSubmit}>
              {formError && <div style={{ color: 'red' }}>{formError}</div>}
              <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" required onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" required onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="4" required onChange={handleInputChange}></textarea>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="politicaPrivacidad" name="politicaPrivacidad" required onChange={handleInputChange} />
                <label className="form-check-label" htmlFor="politicaPrivacidad">Acepto que mis datos personales sean recopilados de acuerdo a nuestra política de privacidad.</label>
              </div>
              <button type="submit" className="btn" style={buttonStyle}>Enviar</button>
            </form>
            {formError && <div style={{ color: 'red' }}>{formError}</div>}
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12 wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
            <address>
              <p className="address-title" style={{ ...textStyle, ...titleStyle }}><FontAwesomeIcon icon={faMapMarkerAlt} /> Ubicación</p>
              <span style={textStyle}>CABA- Bs As</span>
              <p className="address-title" style={{ ...textStyle, ...titleStyle }}><FontAwesomeIcon icon={faClock} /> Horarios</p>
              <span style={textStyle}>Lunes a Viernes de 8 a 16 hs</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
