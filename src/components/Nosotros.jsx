import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';
import './Nosotros.css';

function Nosotros() {
  useEffect(() => { new WOW.WOW().init(); }, []);

  return (
    <section id="nosotros" className="wow fadeIn">
      <Helmet>
        <title>Nosotros - Estudio Jurídico Sáenz & Asociados</title>
        <meta name="description" content="Conoce al equipo de abogados de Estudio Sáenz & Asociados, expertos en Derecho Civil, Penal, Laboral, Familia y Sucesiones. Atención en CABA y Buenos Aires." />
      </Helmet>
      <div className="nosotros-container">
        <h2>NOSOTROS</h2>
        <p className="nosotros-text">
          Somos un equipo de abogados apasionados, comprometidos y dedicados a acompañar a nuestros clientes en cada etapa del proceso. Amamos lo que hacemos. Nuestro objetivo es dar respuesta a las consultas y preocupaciones de nuestros clientes. Nos encontramos en CABA y Buenos Aires. Actualmente estamos realizando consultas online y presenciales.
        </p>
      </div>
    </section>
  );
}

export default Nosotros;
