import React, { useEffect } from 'react';
import './About.css'; // Asegúrate de que la ruta al archivo CSS sea correcta
import WOW from 'wowjs';
import 'animate.css/animate.min.css';

function About() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section id="about" className="wow fadeIn">
      <div className="container">
        <div className="row mt-4 align-items-center">
          <div className="col-md-6 mb-4 wow fadeIn" data-wow-duration="1s">
            <img src="/webpagina.png" alt="About Us" className="img-fluid about-img"/> {/* Aplica la clase about-img aquí */}
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

export default About;
