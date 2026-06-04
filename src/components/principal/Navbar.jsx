import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">
        <a
          className="navbar-brand"
          href="#inicio"
          onClick={(e) => handleScroll(e, "#inicio")}
        >
          <img
            src="/muestra.png"
            alt="Sáenz & Asociados"
            className="navbar-logo"
          />
        </a>

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

        <button
          className={`navbar-toggler ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`navbar-dropdown ${isOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a
              href="#inicio"
              onClick={(e) => handleScroll(e, "#inicio")}
            >
              Inicio
            </a>
          </li>

          <li>
            <a
              href="#nosotros"
              onClick={(e) => handleScroll(e, "#nosotros")}
            >
              Nosotros
            </a>
          </li>

          <li>
            <a
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