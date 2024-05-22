import React, { useEffect } from 'react';
import './Servicio.css'; // Archivo de estilos personalizados
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import { FaGavel, FaBalanceScale, FaUserFriends, FaHeart, FaBook, FaRegBuilding, FaFileSignature, FaGripHorizontal, FaHome, FaUser, FaHandshake, FaHandHoldingUsd } from 'react-icons/fa'; // Iconos de Font Awesome

function Servicio() {
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

    <section id="servicios" className="container mt-5 service-section">

      <div className="row justify-content-center">
        <div className="col-md-12">
          <h2 className="wow fadeInDown text-center mb-4">SERVICIOS</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaGavel className="icon" size={36} />
              <h4 className="service-text mt-3">Derecho Civil</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaBalanceScale className="icon" size={36} />
              <h4 className="service-text mt-3">Derecho Penal</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaUserFriends className="icon" size={36} />
              <h4 className="service-text mt-3">Derecho Laboral</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaHome className="icon" size={36} />
              <h4 className="service-text mt-3">Usucapión</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaUser className="icon" size={36} />
              <h4 className="service-text mt-3">Derecho de Familia</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaGripHorizontal className="icon" size={36} />
              <h4 className="service-text mt-3">Régimen de visitas</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaFileSignature className="icon" size={36} />
              <h4 className="service-text mt-3">Divorcios unilaterales</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaRegBuilding className="icon" size={36} />
              <h4 className="service-text mt-3">Divorcios presentación conjunta</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaHandshake className="icon" size={36} />
              <h4 className="service-text mt-3">Divorcios celebrados en el exterior</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaHeart className="icon" size={36} />
              <h4 className="service-text mt-3">Sucesiones Abintestato</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaBook className="icon" size={36} />
              <h4 className="service-text mt-3">Testamentarias</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 text-center mb-4">
          <div className="service-item wow fadeInUp" data-wow-duration="1s">
            <div className="service-card service-card-hover"> {/* Agrega la clase service-card-hover */}
              <FaHandHoldingUsd className="icon" size={36} />
              <h4 className="service-text mt-3">Ampliación de Declaratoria Herederos</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicio;