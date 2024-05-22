import React from 'react';
import './Navbar.css'; // Asegúrate de tener este archivo CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <img src="/logoweb.png" alt="Logo" style={{ width: '140px', height: 'auto' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-label" style={{ marginLeft: '5px' }}>Menú</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">INICIO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">NOSOTROS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">SERVICIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#turno">TURNO</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tarifa">TARIFA</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planificacion">PLANIFICACION FINANCIERA</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
// Agregar el código JavaScript al final del componente Navbar
document.addEventListener("DOMContentLoaded", function () {
  // Activar el menú desplegable al hacer clic en el botón del menú
  document.querySelector(".navbar-toggler").addEventListener("click", function () {
    document.querySelector("#navbarSupportedContent").classList.toggle("show");
  });
});
export default Navbar;