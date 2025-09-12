import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-custom">
      <div className="container navbar-flex">
        {/* Logo */}
        <a
          className="navbar-brand"
          href="#inicio"
          onClick={(e) => handleScroll(e, "#inicio")}
        >
          <img
            src="/logoweb.png"
            alt="Logo Estudio Jurídico Sáenz & Asociados"
            className="navbar-logo"
          />
        </a>

        {/* Botón hamburguesa */}
        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menú */}
        <ul className={`navbar-nav ${isOpen ? "show" : ""}`}>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#inicio"
              onClick={(e) => handleScroll(e, "#inicio")}
            >
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#nosotros"
              onClick={(e) => handleScroll(e, "#nosotros")}
            >
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#servicios"
              onClick={(e) => handleScroll(e, "#servicios")}
            >
              Servicios
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
