import React, { useEffect, useState } from 'react';
import { FaWhatsapp, FaBalanceScale, FaHandshake } from 'react-icons/fa';
import './About.css'; // Archivo de estilos personalizados
import WOW from 'wowjs'; // Importación de la biblioteca wow.js
import 'animate.css/animate.min.css'

function About() {
  const [presentesVisible, setPresentesVisible] = useState(false);

  useEffect(() => {
    new WOW.WOW().init(); // Inicialización de wow.js

    const timeout = setTimeout(() => {
      setPresentesVisible(true); // Cambio de estado después de un retraso
    }, 600);

    return () => clearTimeout(timeout); // Limpieza del timeout en la limpieza del efecto
  }, []);

  return (
    <section id="about" className="wow fadeIn">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2 className="text-center text-white font-weight-bold mt-4">NOSOTROS</h2>
          </div>
          {/* Primer elemento con animación */}
          <div className={`col-md-4 col-sm-6 mb-4 wow fadeInLeft animated ${presentesVisible ? 'fadeInLeftVisible' : ''}`} data-wow-offset="50" data-wow-delay="0.6s">
            <div className="media">
              <div className="media-object mr-3">
                <FaWhatsapp size={48} color="#FFFFFF" />
              </div>
              <div className="media-body">
                <h4 className="media-heading text-celeste">ATENTO A TUS NECESIDADES</h4>
                <p className="text-white">
                  Cuente con nuestro apoyo continuo. Estamos aquí para brindarle asistencia constante a través de nuestra comunicación telefónica y por WhatsApp. Nuestros abogados estarán presentes y cerca de usted en cada etapa de su proceso legal, asegurándose de que esté informado y respaldado en todo momento.
                </p>
              </div>
            </div>
          </div>
          {/* Segundo elemento con animación */}
          <div className="col-md-4 col-sm-6 mb-4 wow fadeInUp animated" data-wow-offset="50" data-wow-delay="0.9s">
            <div className="media">
              <div className="media-object mr-3">
                <FaBalanceScale size={48} color="#FFFFFF" />
              </div>
              <div className="media-body">
                <h4 className="media-heading text-celeste">HONESTOS</h4>
                <p className="text-white">
                  Comprometidos con la honestidad y la transparencia en cada paso de su caso legal, nos esforzamos por mantener la integridad en nuestro trabajo. Guiados por principios éticos, buscamos siempre el mejor resultado para nuestros clientes, sin comprometer nuestros valores.
                </p>
              </div>
            </div>
          </div>
          {/* Tercer elemento con animación */}
          <div className="col-md-4 col-sm-6 mb-4 wow fadeInRight animated" data-wow-offset="50" data-wow-delay="0.6s">
            <div className="media">
              <div className="media-object mr-3">
                <FaHandshake size={48} color="#FFFFFF" />
              </div>
              <div className="media-body">
                <h4 className="media-heading text-celeste">COMPROMETIDOS</h4>
                <p className="text-white">
                  Nos comprometemos plenamente a brindarle el apoyo y la dedicación necesarios para resolver su situación legal de manera efectiva y oportuna. Nuestro equipo está dedicado a asumir su carga y trabajar incansablemente en su nombre, asegurando que sus intereses estén protegidos en todo momento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
