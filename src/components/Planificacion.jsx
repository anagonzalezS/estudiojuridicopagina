import React, { useEffect } from 'react';
import './Planificacion.css'; // Archivo de estilos personalizados
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import { FaShieldAlt, FaPiggyBank, FaChartLine } from 'react-icons/fa'; // Iconos de Font Awesome

function Planificacion() {
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
    <section id="planificacion" className="container mt-5 service-section">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="wow fadeInDown text-center mb-4">PLANIFICACIÓN FINANCIERA</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover">
              <FaShieldAlt className="icon" size={36} />
              <h4 className="service-text mt-3">Protección</h4>
              <p className="planificacion-card-text">Ofrecemos servicios legales para proteger tus activos y patrimonio.</p>

            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover">
              <FaPiggyBank className="icon" size={36} />
              <h4 className="service-text mt-3">Ahorro</h4>
              <p className="planificacion-card-text">Te ayudamos a gestionar tus finanzas para maximizar tus ahorros.</p>

            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover">
              <FaChartLine className="icon" size={36} />
              <h4 className="service-text mt-3">Inversión</h4>
              <p className="planificacion-card-text">Asesoramiento legal para inversiones inteligentes y rentables.</p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planificacion;
