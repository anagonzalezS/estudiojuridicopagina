import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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
    marginTop: '10px',
  };

  const formContainerStyle = {
    marginBottom: '40px',
  };

  const inputStyle = {
    marginBottom: '15px',
  };

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
    politicaPrivacidad: false,
  });

  const [formError, setFormError] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
      setShowAlert(true);
      return;
    }
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
      setFormData({
        nombre: '',
        email: '',
        mensaje: '',
        politicaPrivacidad: false,
      });
    }, 5000); // Aumentar el tiempo de visualización del modal a 5 segundos
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
              {showAlert && <div style={{ color: 'red', marginBottom: '10px' }}>{formError}</div>}
              <div className="form-group" style={inputStyle}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} required onChange={handleInputChange} />
              </div>
              <div className="form-group" style={inputStyle}>
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} required onChange={handleInputChange} />
              </div>
              <div className="form-group" style={inputStyle}>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea className="form-control" id="mensaje" name="mensaje" rows="4" value={formData.mensaje} required onChange={handleInputChange}></textarea>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="politicaPrivacidad" name="politicaPrivacidad" required onChange={handleInputChange} />
                <label className="form-check-label" htmlFor="politicaPrivacidad">Acepto que mis datos personales sean recopilados de acuerdo a nuestra política de privacidad.</label>
              </div>
              <button type="submit" className="btn" style={buttonStyle}>Enviar</button>
            </form>
            {showAlert && <div style={{ color: 'red' }}>{formError}</div>}
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
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Gracias por tu consulta!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ color: 'black' }}>Gracias por su consulta Te responderemos a la brevedad.</Modal.Body> {/* Ajustar el color del texto en el modal */}
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Contact;
