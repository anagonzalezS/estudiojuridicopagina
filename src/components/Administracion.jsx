import React, { useEffect } from 'react';
import './Administracion.css'; // Archivo de estilos personalizados
import WOW from 'wowjs';
import { FaBuilding, FaCity, FaUsers } from 'react-icons/fa'; // Iconos de Font Awesome

function Administracion() {
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
    <section id="administracion" className="administracion-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="wow fadeInDown text-center mb-4">ADMINISTRACIÓN DE CONSORCIOS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-item wow fadeInUp" data-wow-duration="1s">
              <div className="service-card service-card-hover">
                <FaBuilding className="icon" size={36} />
                <h4 className="service-text mt-3">Edificios</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-item wow fadeInUp" data-wow-duration="1s">
              <div className="service-card service-card-hover">
                <FaCity className="icon" size={36} />
                <h4 className="service-text mt-3">Barrios Cerrados</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="service-item wow fadeInUp" data-wow-duration="1s">
              <div className="service-card service-card-hover">
                <FaUsers className="icon" size={36} />
                <h4 className="service-text mt-3">Clubes</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="wow fadeInDown text-center mb-4">Nuestros Servicios</h3>
          </div>
          <div className="col-md-6">
            <ul className="wow fadeInLeft">
              <li>Sistema de gestión en línea para el monitoreo integral del consorcio.</li>
              <li>Facilidad en el pago de expensas a través de múltiples métodos.</li>
              <li>Atención de emergencias disponible las 24 horas.</li>
              <li>Gestión y seguimiento personalizado de morosidad.</li>
              <li>Colaboración continua con el Consejo de Administración.</li>
              <li>Acceso a proveedores altamente calificados y certificados.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="wow fadeInRight">
              <li>Optimización de recursos y reducción de costos operativos.</li>
              <li>Transparencia total en la gestión financiera y contable.</li>
              <li>Informes detallados de mantenimiento y mejoras estructurales.</li>
              <li>Programación y supervisión de trabajos de mantenimiento.</li>
              <li>Asesoramiento legal y administrativo continuo.</li>
              <li>Implementación de tecnologías sostenibles y eficientes.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Administracion;
