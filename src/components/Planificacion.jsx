import React, { useEffect } from 'react';
import WOW from 'wowjs';
import './Planificacion.css';
import 'animate.css/animate.min.css';

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
      <section id="financial-planning" className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg wow fadeInUp" data-wow-duration="1s">
              <div className="card-body">
                <h2 className="card-title text-center">Planificación Financiera</h2>
                <p className="card-text text-center">Protégete, ahorra e invierte con nuestro asesoramiento legal en planificación financiera.</p>
                <div className="text-center">
                  <a href="#protection" className="btn btn-primary me-2">Protección</a>
                  <a href="#savings" className="btn btn-primary me-2">Ahorro</a>
                  <a href="#investment" className="btn btn-primary">Inversión</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="protection" className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg wow fadeInUp" data-wow-duration="1s">
              <div className="card-body">
                <h2 className="card-title text-center">Protección</h2>
                <p className="card-text text-center">Ofrecemos servicios legales para proteger tus activos y patrimonio.</p>
                <div className="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="savings" className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg wow fadeInUp" data-wow-duration="1s">
              <div className="card-body">
                <h2 className="card-title text-center">Ahorro</h2>
                <p className="card-text text-center">Te ayudamos a gestionar tus finanzas para maximizar tus ahorros.</p>
                <div className="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="investment" className="row justify-content-center mt-5 mb-5"> {/* Añadido mb-5 para agregar margen inferior */}
          <div className="col-md-8">
            <div className="card p-3 shadow-lg wow fadeInUp" data-wow-duration="1s">
              <div className="card-body">
                <h2 className="card-title text-center">Inversión</h2>
                <p className="card-text text-center">Asesoramiento legal para inversiones inteligentes y rentables.</p>
                <div className="text-center">
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Planificacion;