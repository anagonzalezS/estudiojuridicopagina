import React from 'react';
import { Helmet } from 'react-helmet';
import './Nosotros.css';

function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-section">
      <Helmet>
        <title>Nosotros - Estudio Jurídico Sáenz & Asociados</title>
        <meta
          name="description"
          content="Conocé al equipo de Estudio Sáenz & Asociados: abogados especializados en Derecho Civil, Penal Tributario y Empresarial. Atención en CABA y Buenos Aires."
        />
      </Helmet>

      <div className="nosotros-container">

        <div className="nosotros-header">
          <h2>NOSOTROS</h2>
        </div>

        <div className="nosotros-body">
          <p className="nosotros-text">
            En <strong>Estudio Sáenz <span className="amp">&</span> Asociados</strong> creemos que detrás de cada consulta hay una persona, una familia o un proyecto que merece ser escuchado y protegido.
          </p>

          <p className="nosotros-text">
            Contamos con un equipo de abogados especializados en diversas ramas del derecho, que combina experiencia, ética profesional y cercanía con cada cliente.
          </p>

          <p className="nosotros-text">
            Nuestro compromiso no se limita a resolver problemas legales: buscamos brindar confianza, claridad y acompañamiento en cada etapa del proceso.
          </p>

          <p className="nosotros-text">
            Atendemos en Capital Federal y Provincia de Buenos Aires, de forma presencial y online, para mayor comodidad y accesibilidad.
          </p>

          <span className="nosotros-frase">
            Más que abogados: aliados en cada etapa de tu proceso.
          </span>
        </div>

      </div>
    </section>
  );
}

export default Nosotros;
