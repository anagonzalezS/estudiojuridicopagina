import React from 'react';
import './Navbar.css'; // Asegúrate de tener este archivo CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <img src="/logoweb.png" alt="Logo" className="navbar-logo" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-label">Menú</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#inicio">inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios">servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#turno">turnos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tarifa">tarifas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#administracion">Administración de consorcios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planificacion">planificacion financiera</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
