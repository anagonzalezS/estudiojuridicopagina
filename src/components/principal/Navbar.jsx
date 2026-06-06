import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ];

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
            src="/logo-azul.png"
            alt="Estudio Sáenz & Asociados"
            className="navbar-logo"
          />
        </a>

        <ul className="navbar-nav">
          {navLinks.map(({ href, label }) => (
            <li className="nav-item" key={href}>
              <a className="nav-link" href={href} onClick={(e) => handleScroll(e, href)}>
                {label}
              </a>
            </li>
          ))}
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
          {navLinks.map(({ href, label }) => (
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