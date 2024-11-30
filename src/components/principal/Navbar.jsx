import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#top">
          <img src="/logoweb.png" alt="Logo de Estudio Saenz y Asociados" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-label">Menú</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto"> {/* Cambié ml-auto por mx-auto */}
            <li className="nav-item">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                type="button"
                id="navbarDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Servicios
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#servicios">Nuestros Servicios</a>
                <a className="dropdown-item" href="#administracion">Administración de Consorcios</a>
                <a className="dropdown-item" href="#planificacion">Planificación Financiera</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#turno">Turnos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tarifa">Tarifas</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
