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
            <h2 className="wow fadeInDown text-center mb-4">ADMINISTRACIÓN DE CONSORCIO</h2>
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
                <h4 className="service-text mt-3">Club</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <h3 className="wow fadeInDown text-center mb-4">Ofrecemos</h3>
          </div>
          <div className="col-md-6">
            <ul className="wow fadeInLeft">
              <li>Sistema informático para seguimiento online del consorcio.</li>
              <li>Varios medios de pago de expensas.</li>
              <li>Contacto de emergencia.</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul className="wow fadeInRight">

              <li>Seguimiento de morosos del edificio.</li>
              <li>Trabajo en conjunto con miembros del Consejo.</li>
              <li>Proveedores altamente capacitados y calificados.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Administracion;
