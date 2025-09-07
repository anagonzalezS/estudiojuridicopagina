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
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 wow fadeIn" data-wow-duration="1s">
            <h2 className="text-center mb-4">NOSOTROS</h2>
            <p className="nosotros-text">
              Somos un equipo de Abogados apasionados, comprometidos y dedicados a acompañar a nuestros clientes en cada etapa del proceso. Amamos lo que hacemos. Nuestro objetivo es dar respuesta a las consultas y preocupaciones de nuestros clientes. Nos encontramos en CABA y Buenos Aires. Actualmente estamos realizando consultas online y presenciales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;
