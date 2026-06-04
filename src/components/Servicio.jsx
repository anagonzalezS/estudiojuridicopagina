import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './Servicio.css';
import {
  FaBalanceScale, FaBriefcase, FaUniversity
} from 'react-icons/fa';

const servicios = [
  {
    id: 1,
    title: 'Derecho Civil y Comercial',
    icon: <FaBalanceScale />,
    description: [
      'Divorcios',
      'Sucesiones',
      'Usucapiones en CABA y Provincia de Buenos Aires',
      'Recupero de Créditos y Ejecuciones',
      'Daños y Perjuicios',
      'Medidas Cautelares',
    ]
  },
  {
    id: 2,
    title: 'Derecho Empresarial',
    icon: <FaBriefcase />,
    description: [
      'Constitución de Sociedades',
      'Acuerdo entre socios',
      'Trámites ante IGJ',
      'Acuerdos laborales',
      'Contratos',
      'Incumplimientos Contractuales',
    ]
  },
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
          content="Servicios legales de Estudio Jurídico Sáenz & Asociados: Derecho Civil y Comercial, Derecho Empresarial. Atención en CABA y Provincia de Buenos Aires."
        />
      </Helmet>

      <div className="service-container">

        <div className="section-header">
          <h2>Servicios</h2>
          <p className="section-subtitle">Asesoramiento jurídico integral en todas las áreas del derecho</p>
        </div>

        {/* TABS — solo 2 ahora, se muestran centrados */}
        <div className="tabs-container tabs-two">
          {servicios.map((serv) => (
            <button
              key={serv.id}
              className={`tab-button ${activeId === serv.id ? 'active' : ''}`}
              onClick={() => setActiveId(serv.id)}
              aria-pressed={activeId === serv.id}
            >
              <span className="tab-icon">{serv.icon}</span>
              <span className="tab-text">{serv.title}</span>
            </button>
          ))}
        </div>

        {activeService && (
          <div className="info-box">

            <div className="info-header">
              <div className="info-icon-wrap">{activeService.icon}</div>
              <div>
                <h3>{activeService.title}</h3>
                <p className="subtitulo">Estudio Jurídico Sáenz <span className="amp">&</span> Asociados</p>
              </div>
            </div>

            <ul className="descripcion">
              {activeService.description.map((item, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="info-contacto">
              <div className="contacto-item">
                <span className="contacto-label">Horario</span>
                <span>Lunes a Viernes · 8 a 16 hs</span>
              </div>
              <div className="contacto-item">
                <span className="contacto-label">Turnos</span>
                <a href="https://wa.me/5491162087349" target="_blank" rel="noopener noreferrer">
                  11-6208-7349
                </a>
              </div>
              <div className="contacto-item">
                <span className="contacto-label">Email</span>
                <a href="mailto:estudio@saenz-asociados.com.ar">
                  estudio@saenz-asociados.com.ar
                </a>
              </div>
            </div>

            <div className="pago-info">
              <h4>Formas de pago</h4>
              <div className="pago-items">
                <div className="pago-item">
                  <img src="/mp.png" alt="Mercado Pago" className="mp-logo" />
                  <span>estudio.saenz</span>
                </div>
                <div className="pago-item">
                  <div className="pago-icon-wrap">
                    <FaUniversity />
                  </div>
                  <span>Transferencia: s.saenz</span>
                </div>
              </div>
            </div>

            <div className="tarifario-box">
              <p>Consulte el cuadro tarifario según su jurisdicción:</p>
              <div className="tarifario-links">
                <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" target="_blank" rel="noopener noreferrer">
                  Provincia de Buenos Aires
                </a>
                <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" target="_blank" rel="noopener noreferrer">
                  CABA
                </a>
              </div>
              <button className="btn-ver-tarifas" onClick={() => setShowModal(true)}>
                Ver tarifas orientativas
              </button>
            </div>

          </div>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowModal(false)} aria-label="Cerrar">×</button>
            <h3>Tarifas orientativas</h3>

            <div className="modal-block">
              <h4>CABA</h4>
              <ol>
                <li>Consultas verbales: 0,5 UMA</li>
                <li>Consultas con informe: 1 UMA</li>
                <li>Redacción de cartas documento: 1 UMA</li>
                <li>Estudio o información de actuaciones judiciales: 2 UMA</li>
              </ol>
            </div>

            <div className="modal-block">
              <h4>Provincia de Buenos Aires</h4>
              <ol>
                <li>Consultas verbales: 1 Jus</li>
                <li>Consultas evacuadas por escrito: 2 Jus</li>
                <li>Estudio de actuaciones judiciales o administrativas: 3 Jus</li>
                <li>Asistencia y asesoramiento en actos jurídicos: 3,5 Jus</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Servicio;
