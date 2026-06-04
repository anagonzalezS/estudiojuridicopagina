import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className={`navbar-custom ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        <a
          className="navbar-brand"
          href="#inicio"
          onClick={(e) => handleScroll(e, "#inicio")}
          aria-label="Estudio Sáenz & Asociados - Inicio"
        >
          <img
            src={isMobile ? "/logo-desktop.png" : "/logo.png"}
            alt="Estudio Sáenz & Asociados"
            className="navbar-logo"
          />
        </a>

        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#inicio" onClick={(e) => handleScroll(e, "#inicio")}>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#nosotros" onClick={(e) => handleScroll(e, "#nosotros")}>
              Nosotros
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#servicios" onClick={(e) => handleScroll(e, "#servicios")}>
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
          {[
            { href: "#inicio", label: "Inicio" },
            { href: "#nosotros", label: "Nosotros" },
            { href: "#servicios", label: "Servicios" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleScroll(e, href)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
