import React from 'react';

function Turno() {
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
                  {/* Inserta aquí el código del botón de programación de citas de Google Calendar */}
                  <a href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ24zbyvmLApY4I4UFtH7G6WGsdbNjAcFRS9td0VRLi2BShztU9ekmzxQTH5BkSzi9llKUSpyBN-?gv=true" className="btn btn-primary">Reservar Turno</a>
                </div>
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
                  <a href="URL_DEL_CUADRO_TARIFARIO" className="btn btn-primary">Ver Cuadro Tarifario</a>
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
