import React from 'react';
import './Navbar.css'; // Asegúrate de tener este archivo CSS

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
              <a className="nav-link" href="#inicio" onClick={() => document.querySelector('.navbar-toggler').click()}>Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#nosotros" onClick={() => document.querySelector('.navbar-toggler').click()}>Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#servicios" onClick={() => document.querySelector('.navbar-toggler').click()}>Servicios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#turno" onClick={() => document.querySelector('.navbar-toggler').click()}>Turnos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tarifa" onClick={() => document.querySelector('.navbar-toggler').click()}>Tarifas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#administracion" onClick={() => document.querySelector('.navbar-toggler').click()}>Administración de Consorcios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#planificacion" onClick={() => document.querySelector('.navbar-toggler').click()}>Planificación Financiera</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
