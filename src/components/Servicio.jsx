import React, { useState } from 'react';
import './Servicio.css';
import { 
  FaBalanceScale, FaGavel, FaBriefcase, FaHome, FaUsers, FaChild, 
  FaFileSignature, FaHandshake, FaGlobe, FaBookOpen, FaFileAlt, FaUserPlus 
} from 'react-icons/fa';

const servicios = [
  { id: 1, title: 'Derecho Civil', icon: <FaBalanceScale />, description: 'Defensa y asesoramiento en todos los aspectos del Derecho Civil.' },
  { id: 2, title: 'Derecho Penal', icon: <FaGavel />, description: 'Representación legal en casos penales y delitos.' },
  { id: 3, title: 'Derecho Laboral', icon: <FaBriefcase />, description: 'Asesoramiento en relaciones laborales y conflictos sindicales.' },
  { id: 4, title: 'Usucapión', icon: <FaHome />, description: 'Gestión de trámites legales relacionados con la usucapión de inmuebles.' },
  { id: 5, title: 'Derecho de Familia', icon: <FaUsers />, description: 'Asesoramiento legal en cuestiones familiares como adopciones, tenencia y alimentos.' },
  { id: 6, title: 'Régimen de visitas', icon: <FaChild />, description: 'Acompañamiento legal en procesos de régimen de visitas y custodia.' },
  { id: 7, title: 'Divorcios unilaterales', icon: <FaFileSignature />, description: 'Trámites y representación en divorcios unilaterales.' },
  { id: 8, title: 'Divorcios presentación conjunta', icon: <FaHandshake />, description: 'Gestión de divorcios por presentación conjunta de manera ágil y efectiva.' },
  { id: 9, title: 'Divorcios celebrados en el exterior', icon: <FaGlobe />, description: 'Asesoramiento y trámites de divorcios realizados fuera del país.' },
  { id: 10, title: 'Sucesiones Abintestato', icon: <FaBookOpen />, description: 'Tramitación de sucesiones sin testamento, representando a los herederos.' },
  { id: 11, title: 'Testamentarias', icon: <FaFileAlt />, description: 'Asesoramiento y gestión en sucesiones con testamento.' },
  { id: 12, title: 'Ampliación de Declaratoria Herederos', icon: <FaUserPlus />, description: 'Gestión de trámites para la ampliación de declaratoria de herederos.' },
];

function Servicio() {
  const [activeId, setActiveId] = useState(servicios[0].id);
  const activeService = servicios.find(s => s.id === activeId);

  return (
    <section id="servicios" className="service-section">
      <div className="container">
        <h2 className="text-center mb-4">SERVICIOS</h2>

        {/* Botones estilo pestañas */}
        <div className="tabs-container">
          {servicios.map(serv => (
            <button
              key={serv.id}
              className={`tab-button ${activeId === serv.id ? 'active' : ''}`}
              onClick={() => setActiveId(serv.id)}
            >
              <span className="icono">{serv.icon}</span> {serv.title}
            </button>
          ))}
        </div>

        {/* Contenido del servicio seleccionado */}
        {activeService && (
          <div className="info-box">
            <h3>
              <span className="icono">{activeService.icon}</span> {activeService.title}
            </h3>
            <p>{activeService.description}</p>
            <p><strong>Horario de atención:</strong> Lunes a Viernes, 8 a 18 hs</p>
            
            <p className="turno-text">
              <strong>¿Necesita un turno?</strong>{' '}
              <a 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ24zbyvmLApY4I4UFtH7G6WGsdbNjAcFRS9td0VRLi2BShztU9ekmzxQTH5BkSzi9llKUSpyBN-?gv=true" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                haga clic aquí
              </a>
            </p>

            {/* Cuadro Tarifario */}
            <div className="tarifario-box">
              <p className="text-center">Consulte el cuadro tarifario de consultas según su jurisdicción.</p>
              <div className="text-center">
                <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" className="enlace-tarifario" aria-label="Ver Cuadro Tarifario Provincia" target="_blank" rel="noopener noreferrer">
                  Ver Cuadro Tarifario Provincia
                </a>
                <span className="enlace-separator"> | </span>
                <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" className="enlace-tarifario" aria-label="Ver Cuadro Tarifario CABA" target="_blank" rel="noopener noreferrer">
                  Ver Cuadro Tarifario CABA
                </a>
              </div>

              {/* NUEVO BLOQUE DE TARIFAS DETALLADAS */}
              <div className="detalle-tarifario">
                <p>Recuerda que el valor de CABA es de:</p>
                <ul>
                  <li>Consultas verbales: 0,5 uma</li>
                  <li>Consultas con informe: 1 uma</li>
                  <li>Redacción de cartas documento: 1 uma</li>
                  <li>Estudio o información de actuaciones judiciales y/o adm.: 2 uma</li>
                </ul>

                <p>Provincia de Buenos Aires:</p>
                <ul>
                  <li>Consultas verbales: 1 Jus</li>
                  <li>Consultas evacuadas por escrito: 2 Jus</li>
                  <li>Estudio o información de actuaciones judiciales o administrativas: 3 Jus</li>
                  <li>Asistencia y asesoramiento del cliente en la realización de actos jurídicos: 3,5 Jus</li>
                </ul>

                <p> Mercado Pago: <strong>@estudio.saenz</strong></p>
              </div>
            </div>

            {/* Pago por Mercado Pago */}
            <div className="pago-mp">
              <p>Pagos disponibles vía Mercado Pago</p>
              <img 
                src="/mp.png" 
                alt="Mercado Pago" 
                style={{height: '40px'}}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Servicio;
