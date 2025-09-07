import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar navbar-custom">
      <div className="container navbar-flex">
        {/* Logo */}
        <a className="navbar-brand" href="#top">
          <img
            src="/logoweb.png"
            alt="Logo de Estudio Sáenz & Asociados"
            className="navbar-logo"
          />
        </a>

        {/* Botón menú móvil */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-label">Menú</span>
        </button>

        {/* Menú */}
        <ul className={`navbar-nav ${isOpen ? "show" : ""}`}>
          <li className="nav-item">
            <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nosotros">Nosotros</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#servicios">Servicios</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
