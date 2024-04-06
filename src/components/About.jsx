import React, { useEffect } from 'react';
import './About.css'; // Archivo de estilos personalizados
import WOW from 'wowjs'; // Importación de la biblioteca wow.js
import 'animate.css/animate.min.css';

function About() {
  useEffect(() => {
    new WOW.WOW().init(); // Inicialización de wow.js al cargar el componente
  }, []);

  return (
    <section id="about" className="wow fadeIn">
      <div className="container">
        <div className="row mt-4"> {/* Agregando clase mt-4 para espacio superior */}
          <div className="col-md-12 mb-4">
            <h2 className="wow fadeInDown text-center mb-4" data-wow-duration="1s">NOSOTROS</h2>
            <p className="text-white wow fadeIn" data-wow-duration="1s" style={{ marginBottom: '25px', fontSize: '18px', lineHeight: '1.6', textAlign: 'center', fontWeight: '400', fontStyle: 'normal', letterSpacing: '1px' }}>
              Somos un equipo de Abogados profesionales capacitados con amplia experiencia en el rubro. Nuestro objetivo es dar respuesta a las consultas y preocupaciones de nuestros clientes. Nos encontramos en CABA y Buenos Aires. Actualmente estamos realizando consultas online y presenciales. ¡Su consulta no es molestia!
            </p>
          </div>
          <div className="rdy_separator_8 rdy_separator normal vc_sep_pos_align_center speed-slow wow fadeIn" data-wow-duration="1s" style={{ borderColor: '#ffffff', borderTopWidth: '1px', borderStyle: 'solid', maxWidth: '25%', margin: 'auto' }}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
