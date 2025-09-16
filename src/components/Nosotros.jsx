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
        <meta 
          name="description" 
          content="Conoce al equipo de abogados de Estudio Sáenz & Asociados, expertos en Derecho Civil, Penal, Laboral, Familia y Sucesiones. Atención en CABA y Buenos Aires." 
        />
      </Helmet>
      <div className="nosotros-container">
        <h2>NOSOTROS</h2>
        <p className="nosotros-text">
  Somos un equipo de abogados apasionados, comprometidos y dedicados a acompañar a nuestros clientes en cada etapa del proceso. Amamos lo que hacemos. Nuestro objetivo es dar respuesta a las consultas y preocupaciones de nuestros clientes.
  <br /><br />
  En Estudio Saenz & Asociados entendemos que detrás de cada consulta hay una persona, una familia o un proyecto que merece ser escuchado y protegido. Nuestro compromiso no se limita a resolver cuestiones legales: buscamos generar confianza, tranquilidad y acompañamiento en cada etapa del proceso.
  <br /><br />
  Somos un equipo de abogados apasionados por el derecho, con sólida formación y experiencia en distintas áreas jurídicas. Nos caracteriza la cercanía con nuestros clientes, la transparencia en la comunicación y la dedicación en el análisis de cada situación.
  <br /><br />
  Creemos en un ejercicio del derecho basado en la ética, el profesionalismo y el respeto. Por eso, trabajamos con estrategias claras y personalizadas, adaptadas a las necesidades de cada persona.
  <br /><br />
  Atendemos en Capital Federal y Provincia de Buenos Aires, tanto de manera presencial como online, brindando comodidad y accesibilidad.
  <br /><br />
  En Estudio Saenz & Asociados, nuestra vocación es acompañar, orientar y dar respuestas legales que aporten soluciones reales y duraderas.
  <br /><br />
  <span className="nosotros-frase">
    Más que abogados: aliados en cada etapa de tu proceso.
  </span>
</p>

        
        
      </div>
    </section>
  );
}

export default Nosotros;
