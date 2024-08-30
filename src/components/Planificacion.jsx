import React, { useEffect, useState } from 'react';
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

  const [isExpanded, setIsExpanded] = useState({ proteccion: false, ahorro: false, inversion: false });

  const toggleReadMore = (section) => {
    setIsExpanded(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

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
            <h5 className="planning-subtitle">Seguridad financiera en cada etapa.</h5>
            <p className="planning-card-description">
              <ul>
                <li>Accidentes: recuperación rápida y efectiva.</li>
                <li>Incapacidad: apoyo durante la rehabilitación.</li>
                <li>Enfermedad grave: acceso a tratamientos avanzados.</li>
                <li>Muerte prematura: seguridad financiera para tu familia.</li>
              </ul>
              {isExpanded.proteccion ? (
                <span>
                  <span className="bold-text">El costo de estar protegido es menor que el costo de no estarlo.</span>
                  <span className="read-more" onClick={() => toggleReadMore('proteccion')}> Leer menos</span>
                </span>
              ) : (
                <span className="read-more" onClick={() => toggleReadMore('proteccion')}> Leer más</span>
              )}
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="planning-card wow fadeInUp" data-wow-duration="1s">
            <FaPiggyBank className="planning-icon" size={36} />
            <h4 className="planning-service-title mt-3">Ahorro</h4>
            <h5 className="planning-subtitle">Asegura tu futuro y el de tu familia.</h5>
            <p className="planning-card-description">
              Planes flexibles y personalizados para mantener tu patrimonio:
              <ul>
                <li>Futuro financiero asegurado.</li>
                <li>Educación superior para tus hijos.</li>
                <li>Apoyo a proyectos familiares.</li>
                <li>Fondos para emergencias financieras.</li>
                <li>Renta programada para tu retiro.</li>
              </ul>
              {isExpanded.ahorro ? (
                <span>
                  <span className="bold-text">Invierte en tranquilidad para ti y los tuyos.</span>
                  <span className="read-more" onClick={() => toggleReadMore('ahorro')}> Leer menos</span>
                </span>
              ) : (
                <span className="read-more" onClick={() => toggleReadMore('ahorro')}> Leer más</span>
              )}
            </p>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="planning-card wow fadeInUp" data-wow-duration="1s">
            <FaChartLine className="planning-icon" size={36} />
            <h4 className="planning-service-title mt-3">Inversión</h4>
            <h5 className="planning-subtitle">Haz crecer tu patrimonio de manera segura.</h5>
            <p className="planning-card-description">
              Estrategias de inversión a corto y largo plazo:
              <ul>
                <li>Inversiones en valor dólar.</li>
                <li>Planes personalizados según tus necesidades.</li>
                <li>Asociación con líderes del mercado.</li>
              </ul>
              {isExpanded.inversion ? (
                <span>
                  <span className="bold-text">Contáctanos para una asesoría personalizada.</span>
                  <span className="read-more" onClick={() => toggleReadMore('inversion')}> Leer menos</span>
                </span>
              ) : (
                <span className="read-more" onClick={() => toggleReadMore('inversion')}> Leer más</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Planificacion;
