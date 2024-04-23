import React, { useState } from 'react';
import './Turno.css'; // Archivo de estilos personalizados

function Turno() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleReserve = () => {
    setModalVisible(false);
    window.location.href = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ24zbyvmLApY4I4UFtH7G6WGsdbNjAcFRS9td0VRLi2BShztU9ekmzxQTH5BkSzi9llKUSpyBN-?gv=true";
  };

  return (
    <section className="mt-3">
      <div className="container" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-center">Reservas de Turnos</h2>
                <p className="card-text text-center">¿Necesita un turno? Haga clic en el botón a continuación para reservar su turno en el calendario de Google.</p>
                <div className="text-center">
                  <button onClick={handleOpenModal} className="btn btn-primary">Reservar Turno</button>
                </div>
              </div>
            </div>
          </div>
        </div> {/* Cierre del primer bloque de row y col */}

        {/* Modal */}
        <div className={`modal ${modalVisible ? 'd-block' : 'd-none'}`} tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Información Importante</h5>
                <button type="button" className="btn-close" onClick={() => setModalVisible(false)}></button>
              </div>
              <div className="modal-body" style={{ color: 'black' }}>
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
        </div> {/* Cierre del primer bloque de row y col */}

        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            <div className="card p-3 shadow-lg">
              <div className="card-body">
                <h2 className="card-title text-center">Consulte el Cuadro Tarifario</h2>
                <p className="card-text text-center">Consulte el cuadro tarifario de consultas según su jurisdicción.</p>
                <div className="text-center">
              <a href="https://www.cajaabogados.org.ar/noticia.php?n=24" className="btn btn-primary me-2">Ver Cuadro Tarifario Provincia</a>
              <a href="https://www.cpacf.org.ar/noticia/5201/valores-uma-pjn-ley-27423" className="btn btn-primary">Ver Cuadro Tarifario CABA</a>
            </div>

              </div>
            </div>
          </div>
        </div> {/* Cierre del segundo bloque de row y col */}
      </div> {/* Cierre del contenedor con fondo blanco */}
    </section>
  );
}

export default Turno;
