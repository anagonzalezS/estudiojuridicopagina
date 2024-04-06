import React, { useEffect } from 'react';
import './Service.css'; // Archivo de estilos personalizados
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'; // Icono de triángulo

function Service() {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // Clase CSS aplicada a elementos WOW
      animateClass: 'animated', // Clase CSS para las animaciones de WOW
      offset: 0, // Distancia en píxeles para activar la animación
      mobile: false, // Desactiva las animaciones en dispositivos móviles
      live: true // Detecta cambios en el DOM y activa las animaciones
    });
    wow.init();
  }, []);

  return (
    <section id="service" className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="wow fadeInDown text-center mb-4">SERVICIOS</h2>
        </div>
        <div className="col-md-6">
          <div className="service-item wow fadeInLeft" data-wow-duration="1s">
            <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon" />
            <h4 className="service-text">Divorcios-Sucesiones</h4>
          </div>
          <div className="service-item wow fadeInLeft" data-wow-duration="1s">
            <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon" />
            <h4 className="service-text">Familia y Penal</h4>
          </div>
        </div>
        <div className="col-md-6">
          <div className="service-item wow fadeInRight" data-wow-duration="1s">
            <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon" />
            <h4 className="service-text">Comercial</h4>
          </div>
          <div className="service-item wow fadeInRight" data-wow-duration="1s">
            <FontAwesomeIcon icon={faCaretRight} size="lg" className="icon" />
            <h4 className="service-text">Laboral</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
