// Nosotros.jsx
import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nosotros.css';

function Nosotros() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section id="nosotros" className="wow fadeIn">
      <div className="container">
        <div className="row mt-4 align-items-center">
          <div className="col-md-6 mb-4 wow fadeIn" data-wow-duration="1s">
            <div id="aboutCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/nosotros1.png" alt="Equipo de abogados trabajando juntos" className="img-fluid nosotros-img"/>
                </div>
                <div className="carousel-item">
                </div>
                <div className="carousel-item">
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4 wow fadeIn" data-wow-duration="1s">
            <h2 className="text-center mb-4">NOSOTROS</h2>
            <p style={{ marginBottom: '25px', fontSize: '18px', lineHeight: '1.6', textAlign: 'center', fontWeight: '400', fontStyle: 'normal', letterSpacing: '1px' }}>
              Somos un equipo de Abogados apasionados, comprometidos y dedicados a acompañar a nuestros clientes en cada etapa del proceso. Amamos lo que hacemos. Nuestro objetivo es dar respuesta a las consultas y preocupaciones de nuestros clientes. Nos encontramos en CABA y Buenos Aires. Actualmente estamos realizando consultas online y presenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
