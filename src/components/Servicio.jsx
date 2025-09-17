import React, { useState } from 'react'; 
import { Helmet } from 'react-helmet';
import './Servicio.css';
import {
  FaBalanceScale, FaGavel, FaBriefcase, FaUsers,
  FaBookOpen, FaUniversity
} from 'react-icons/fa';

const servicios = [
  { id: 1, title: 'Derecho Civil', icon: <FaBalanceScale />, description: [
    'Usucapiones en CABA y Provincia de Buenos Aires',
    'Accidentes de Tránsito',
    'Incumplimientos Contractuales'
  ] },
  { id: 2, title: 'Derecho Penal', icon: <FaGavel />, description: [
    'Asistencia en comisarías y fiscalías',
    'Defensa en todo tipo de delitos',
    'Confidencialidad y acompañamiento personalizado'
  ] },
  { id: 3, title: 'Derecho de Familia', icon: <FaUsers />, description: [
    'Divorcios unilaterales',
    'Divorcio presentación en conjunto',
    'Alimentos',
    'Compensación económica',
    'Adopción',
    'Determinación de la capacidad'
  ] },
  { id: 4, title: 'Derecho Sucesorio', icon: <FaBookOpen />, description: [
    'Sucesiones Ab intestato y testamentarias',
    'Partición de Herencia',
    'Planificación Hereditaria',
    'Acciones de colación y reducción',
    'Redacción de Testamentos',
    'Ampliación de Declaratoria Herederos'

  ] },
  { id: 5, title: 'Derecho Empresarial', icon: <FaBriefcase />, description: [
    'Constitución de Sociedades',
    'Acuerdo entre socios',
    'Trámites ante IGJ',
    'Acuerdos laborales',
    'Contratos',
  ] },
];

function Servicio() {
  const [activeId, setActiveId] = useState(servicios[0].id);
  const [showModal, setShowModal] = useState(false);
  const activeService = servicios.find((s) => s.id === activeId);

  return (
    <section id="servicios" className="service-section">
      <Helmet>
        <title>Servicios Legales - Estudio Jurídico Sáenz & Asociados</title>
        <meta
          name="description"
          content="Servicios legales de Estudio Jurídico Sáenz & Asociados: Civil, Penal, Laboral, Familia, Sucesiones y Derecho Empresarial. Atención en CABA y Provincia de Buenos Aires."
        />
      </Helmet>

      <div className="service-container">
        <h2>SERVICIOS</h2>

        {/* Tabs */}
        <div className="tabs-container">
          {servicios.map((serv) => (
            <button
              key={serv.id}
              className={`tab-button ${activeId === serv.id ? 'active' : ''}`}
              onClick={() => setActiveId(serv.id)}
            >
              <span className="icono">{serv.icon}</span>
              {serv.title}
            </button>
          ))}
        </div>

        {/* Info box */}
        {activeService && (
          <div className="info-box">
            <h3>
              <span className="icono">{activeService.icon}</span>
              {activeService.title}
            </h3>
            <h4 className="subtitulo">Estudio Jurídico Sáenz & Asociados</h4>

            <ul className="descripcion centrado">
              {activeService.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <p><strong>Horario de atención:</strong> Lunes a Viernes de 8 a 16 hs</p>

            <p className="turno-text">
              <strong>¿Necesita un turno?</strong>{' '}
              <a href="https://wa.me/5491162087349" target="_blank" rel="noopener noreferrer">
                11-6208-7349
              </a>
            </p>

            <div className="contacto-info">
              <p>
                Consultas: <a href="mailto:estudio@saenz-asociados.com.ar">estudio@saenz-asociados.com.ar</a>
              </p>
            </div>

            {/* Formas de Pago */}
            <div className="pago-info">
              <h4>Formas de Pago</h4>
              <div className="pago-items">
                <div className="pago-item">
                  <img src="/mp.png" alt="Mercado Pago" className="mp-logo" />
                  <span>Mercado Pago: estudio.saenz</span>
                </div>
                <div className="pago-item">
                  <FaUniversity className="icono-pago" />
                  <span>Transferencias: s.saenz</span>
                </div>
              </div>
            </div>

            {/* Tarifario */}
            <div className="tarifario-box">
              <p>Consulte el cuadro tarifario según su jurisdicción:</p>
              <div>
                <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" target="_blank" rel="noopener noreferrer">
                  Provincia de Buenos Aires
                </a> |{' '}
                <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" target="_blank" rel="noopener noreferrer">
                  CABA
                </a>
              </div>
              <button className="btn-ver-tarifas" onClick={() => setShowModal(true)}>
                Ver Tarifas
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Tarifario */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)}>×</button>
            <h3>Detalle de Tarifas</h3>

            <p><strong>CABA</strong></p>
            <ol>
              <li>Consultas verbales: 0,5 UMA</li>
              <li>Consultas con informe: 1 UMA</li>
              <li>Redacción de cartas documento: 1 UMA</li>
              <li>Estudio o información de actuaciones judiciales: 2 UMA</li>
            </ol>

            <p><strong>Provincia de Buenos Aires</strong></p>
            <ol>
              <li>Consultas verbales: 1 Jus</li>
              <li>Consultas evacuadas por escrito: 2 Jus</li>
              <li>Estudio de actuaciones judiciales o administrativas: 3 Jus</li>
              <li>Asistencia y asesoramiento en actos jurídicos: 3,5 Jus</li>
            </ol>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicio;
