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
      mobile: true, // Desactiva las animaciones en dispositivos móviles
      live: true // Detecta cambios en el DOM y activa las animaciones
    });
    wow.init();
    return () => wow.stop(); // Limpieza de WOW.js
  }, []);

  return (
      <section id="planificacion" className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h2 className="text-center mb-4">Planificación Financiera</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 text-center mb-4">
            <div className="planning-card">
              <FaShieldAlt size={36} className="planning-icon" />
              <h4 className="planning-service-title mt-3">Protección</h4>
              <p className="planning-card-description">
                Vida
                <ul>
                  <li>Accidentes: para una mejor recuperación.</li>
                  <li>Incapacidad: apoyo durante el tiempo de rehabilitación.</li>
                  <li>Enfermedad grave: acceso a un mejor tratamiento.</li>
                  <li>Muerte prematura: protección financiera para tu familia.</li>
                </ul>
                <span className="bold-text">¿Cuál es el costo de tener un seguro? Más barato que el costo de no tenerlo.</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="planning-card wow fadeInUp" data-wow-duration="1s">
              <FaPiggyBank className="planning-icon" size={36} />
              <h4 className="planning-service-title mt-3">Ahorro</h4>
              <p className="planning-card-description">
                Te proponemos soluciones concretas mediante planes diseñados a tu medida, flexibles y de gran versatilidad.
                <ul>
                  <li>Preservar un capital para el futuro.</li>
                  <li>Solventar una educación superior para tus hijos.</li>
                  <li>Asistir económicamente a un proyecto familiar.</li>
                  <li>Disponer de fondos ante ocasionales necesidades financieras.</li>
                  <li>Planificar una renta programada para tu retiro.</li>
                </ul>
                <span className="bold-text">Planifica tu futuro financiero y de los que más amas.</span>
              </p>
            </div>
          </div>
          <div className="col-md-4 text-center mb-4">
            <div className="planning-card wow fadeInUp" data-wow-duration="1s">
              <FaChartLine className="planning-icon" size={36} />
              <h4 className="planning-service-title mt-3">Inversión</h4>
              <p className="planning-card-description">
                Inversiones a corto y largo plazo.
                <ul>
                  <li>Invertir en valor de referencia dólar.</li>
                  <li>Planes diseñados a medida.</li>
                  <li>Compañías líderes en el mercado.</li>
                </ul>
                <span className="bold-text">Agenda una entrevista.</span>
              </p>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Planificacion;
