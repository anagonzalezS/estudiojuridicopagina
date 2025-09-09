import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Servicio.css';
import { 
  FaBalanceScale, FaGavel, FaBriefcase, FaHome, FaUsers, FaChild, 
  FaFileSignature, FaHandshake, FaGlobe, FaBookOpen, FaFileAlt, FaUserPlus 
} from 'react-icons/fa';

const servicios = [
  { id: 1, title: 'Derecho Civil', icon: <FaBalanceScale />, description: 'Usucapiones en CABA y Provincia de Buenos Aires.' },
  { id: 2, title: 'Derecho Penal', icon: <FaGavel />, description: 'Representación legal en casos penales y delitos.' },
  { id: 3, title: 'Derecho Laboral', icon: <FaBriefcase />, description: 'Asesoramiento en relaciones laborales y conflictos sindicales.' },
  { id: 4, title: 'Usucapión', icon: <FaHome />, description: 'Gestión de trámites legales relacionados con la usucapión de inmuebles.' },
  { id: 5, title: 'Derecho de Familia', icon: <FaUsers />, description: (
    <>
      <p>Asesoramiento legal en cuestiones familiares como adopciones, tenencia y alimentos.</p>
      <ul>
        <li>Divorcios unilaterales y en conjunto</li>
        <li>Alimentos</li>
        <li>Compensación económica</li>
        <li>Adopción</li>
        <li>Determinación de la capacidad</li>
        <li>Derecho sucesorio</li>
      </ul>
    </>
  ) },
  { id: 6, title: 'Régimen de visitas', icon: <FaChild />, description: 'Acompañamiento legal en procesos de régimen de visitas y custodia.' },
  { id: 7, title: 'Divorcios unilaterales', icon: <FaFileSignature />, description: 'Trámites y representación en divorcios unilaterales.' },
  { id: 8, title: 'Divorcios presentación conjunta', icon: <FaHandshake />, description: 'Gestión de divorcios por presentación conjunta de manera ágil y efectiva.' },
  { id: 9, title: 'Divorcios celebrados en el exterior', icon: <FaGlobe />, description: 'Asesoramiento y trámites de divorcios realizados fuera del país.' },
  { id: 10, title: 'Sucesiones Abintestato', icon: <FaBookOpen />, description: 'Tramitación de sucesiones sin testamento, representando a los herederos.' },
  { id: 11, title: 'Testamentarias', icon: <FaFileAlt />, description: 'Asesoramiento y gestión en sucesiones con testamento.' },
  { id: 12, title: 'Ampliación de Declaratoria Herederos', icon: <FaUserPlus />, description: 'Gestión de trámites para la ampliación de declaratoria de herederos.' },
  { id: 13, title: 'Derecho Empresarial', icon: <FaBriefcase />, description: (
    <>
      <p>Asesoramiento legal en materia empresarial y societaria.</p>
      <ul>
        <li>Constitución de sociedades</li>
        <li>Acuerdo entre socios</li>
        <li>Trámites ante IGJ</li>
        <li>Acuerdos laborales</li>
        <li>Contratos</li>
      </ul>
    </>
  ) },
];

function Servicio() {
  const [activeId, setActiveId] = useState(servicios[0].id);
  const [showModal, setShowModal] = useState(false);
  const activeService = servicios.find(s => s.id === activeId);

  return (
    <section id="servicios" className="service-section">
      <Helmet>
        <title>Servicios Legales - Estudio Jurídico Sáenz & Asociados</title>
        <meta name="description" content="Servicios legales de Estudio Jurídico Sáenz & Asociados: Civil, Penal, Laboral, Familia, Sucesiones y Derecho Empresarial. Atención en CABA y Provincia de Buenos Aires." />
      </Helmet>

      <div className="service-container">
        <h2>SERVICIOS</h2>

        {/* Botones estilo pestañas */}
        <div className="tabs-container">
          {servicios.map(serv => (
            <button
              key={serv.id}
              className={`tab-button ${activeId === serv.id ? 'active' : ''}`}
              onClick={() => setActiveId(serv.id)}
            >
              <span className="icono" aria-hidden="true">{serv.icon}</span> {serv.title}
            </button>
          ))}
        </div>

        {/* Contenido del servicio seleccionado */}
        {activeService && (
          <div className="info-box">
            <h3>
              <span className="icono" aria-hidden="true">{activeService.icon}</span> {activeService.title}
            </h3>
            <div>{activeService.description}</div>
            <p><strong>Horario de atención:</strong> Lunes a Viernes de 8 a 16 hs</p>

            <p className="turno-text">
              <strong>¿Necesita un turno?</strong>{' '}
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ24zbyvmLApY4I4UFtH7G6WGsdbNjAcFRS9td0VRLi2BShztU9ekmzxQTH5BkSzi9llKUSpyBN-?gv=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                haga clic aquí
              </a>.
            </p>

            <div className="pago-left">
              <span>Pago disponible vía </span>
              <a href="https://www.mercadopago.com.ar/" target="_blank" rel="noopener noreferrer">
                <img src="/mp.png" alt="Logo Mercado Pago" />
              </a>
            </div>

            <div className="tarifario-box">
              <p className="text-center">Consulte el cuadro tarifario según su jurisdicción:</p>
              <div className="text-center">
                <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" className="enlace-tarifario" target="_blank" rel="noopener noreferrer">
                  Provincia de Buenos Aires
                </a>
                <span className="enlace-separator"> | </span>
                <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" className="enlace-tarifario" target="_blank" rel="noopener noreferrer">
                  CABA
                </a>
              </div>

              <div className="text-center mt-3">
                <button className="btn-ver-tarifas" onClick={() => setShowModal(true)}>
                  Ver Tarifas
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Modal de tarifas */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3>Detalle de Tarifas</h3>

            <p><strong>CABA</strong></p>
            <ul>
              <li>Consultas verbales: 0,5 UMA</li>
              <li>Consultas con informe: 1 UMA</li>
              <li>Redacción de cartas documento: 1 UMA</li>
              <li>Estudio o información de actuaciones judiciales: 2 UMA</li>
            </ul>

            <p><strong>Provincia de Buenos Aires</strong></p>
            <ul>
              <li>Consultas verbales: 1 Jus</li>
              <li>Consultas evacuadas por escrito: 2 Jus</li>
              <li>Estudio de actuaciones judiciales o administrativas: 3 Jus</li>
              <li>Asistencia y asesoramiento en actos jurídicos: 3,5 Jus</li>
            </ul>

            <p className="alias-mp"><strong>@estudio.saenz</strong></p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicio;
