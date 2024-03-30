import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faBank, faBook, faUsers } from '@fortawesome/free-solid-svg-icons';
import './Service.css';
import WOW from 'wowjs';
import 'animate.css/animate.min.css'

function Service() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  return (
    <section id="service" className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="wow bounceIn" data-wow-offset="50" data-wow-delay="0.3s"><span>NUESTROS</span> <span>SERVICIOS</span> </h2>
        </div>
        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
          <div className="service-item" style={{ transition: 'transform 0.3s' }}>
          <FontAwesomeIcon icon={faWrench} size="2x" />

            <h4>Derecho Laboral</h4>
            <p>Despidos laborales. <br />
            Situaciones de empleo no registrado. <br />
            Verificación de liquidaciones finales. <br />
            Asesoramiento en negociaciones extrajudiciales. <br />
            Resolución de disputas salariales. <br />
            Gestión de conciliaciones y litigios laborales. <br />
            Consultoría especializada para empresas en temas laborales. <br />
            Implementación de modalidades de trabajo a distancia (teletrabajo).
            </p>

          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
          <div className="service-item" style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faBank}size="2x" />
            <h4>Derecho Penal</h4>
            <p>Atención y defensa legal en casos de urgencia penal. <br />
            Gestión de excarcelaciones y exenciones de prisión. <br />
            Asesoramiento sobre libertad condicional y asistida. <br />
            Ejecución de penas y medidas judiciales. <br />
            Representación legal en procedimientos de Hábeas Corpus. <br />
            Coordinación de acuerdos de suspensión de juicio a prueba (Probation). <br />
            Presentación de denuncias penales y constitución de querellas. <br />
            Tramitación de causas en CABA y en la Provincia de Buenos Aires.
            </p>

          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
          <div className="service-item">
            <FontAwesomeIcon icon={faBook}size="2x" />
            <h4>Sucesiones</h4>
            <p>Administración de sucesiones sin testamento (Ab Intestato). <br />
            Gestión de sucesiones testamentarias. <br />
            Redacción de testamentos y designación de albaceas. <br />
            Representación legal en la constitución de acreedores en sucesiones. <br />
            Trámites para la reapertura de sucesiones. <br />
            Identificación y representación de herederos no declarados. <br />
            Coordinación de la colación hereditaria. <br />
            Servicios disponibles en CABA y en la Provincia de Buenos Aires.
            </p>

          </div>
        </div>
        <div className="col-md-4 col-sm-6 wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
          <div className="service-item" style={{ transition: 'transform 0.3s' }}>
            <FontAwesomeIcon icon={faUsers}size="2x" />
            <h4>Derecho de Familia</h4>
            <p>Régimen de alimentos. Actualización de cuota. <br />
              Régimen de comunicación (visitas). <br />
              Acuerdos extrajudiciales. <br />
              Divorcios. Unilateral. Presentación conjunta. <br />
              Responsabilidad parental. <br />
              Violencia familiar. Impedimento de contacto. <br />
              Adopción y guarda. <br />
              Autorización de viajes al exterior.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
