import React, { useState, useEffect } from 'react';
import './Turno.css'; // Archivo de estilos personalizados
import WOW from 'wowjs';
import 'animate.css/animate.min.css';

function Turno() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow', // Clase CSS aplicada a elementos WOW
      animateClass: 'animated', // Clase CSS para las animaciones de WOW
      offset: 0, // Distancia en píxeles para activar la animación
      mobile: false, // Desactiva las animaciones en dispositivos móviles
      live: true // Detecta cambios en el DOM y activa las animaciones
    });
    wow.init();
  }, []);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleReserve = () => {
    setModalVisible(false);
    window.location.href = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ24zbyvmLApY4I4UFtH7G6WGsdbNjAcFRS9td0VRLi2BShztU9ekmzxQTH5BkSzi9llKUSpyBN-?gv=true";
  };

  return (
    <section id="turno" className="turno-section" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg wow fadeInUp">
              <div className="card-body">
                <h2 className="card-title text-center">Reservas de Turnos</h2>
                <p className="card-text text-center">¿Necesita un turno? Haga clic en el botón a continuación para reservar su turno en el calendario de Google.</p>
                <div className="text-center">
                  <button onClick={handleOpenModal} className="btn btn-primary">Reservar Turno</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div className={`modal ${modalVisible ? 'd-block' : 'd-none'}`} tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Información Importante</h5>
                <button type="button" className="btn-close" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body">
                <p>Estás queriendo agendar un turno. Recuerda que el valor de CABA es de:</p>
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
                <p>Mi alias de Mercado Pago: <strong>@estudio.saenz</strong></p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setModalVisible(false)}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleReserve}>Continuar para Reservar</button>
              </div>
            </div>
          </div>
        </div> {/* Cierre del modal */}

        {/* Sección de Tarifa */}
        <section id="tarifa" className="tarifa-section">
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card p-3 shadow-lg">
                  <div className="card-body">
                    <h2 className="card-title text-center">Consulte el Cuadro Tarifario</h2>
                    <p className="card-text text-center">Consulte el cuadro tarifario de consultas según su jurisdicción.</p>
                    <div className="text-center">
                      <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" className="enlace-tarifario">Ver Cuadro Tarifario Provincia</a>
                      <span className="enlace-separator"> {/* Separador */} | </span>
                      <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" className="enlace-tarifario">Ver Cuadro Tarifario CABA</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> 
      </div>
    </section> 
)}

export default Turno;
