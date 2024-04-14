import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white" role="navigation">
  <div className="container">
    <a className="navbar-brand" href="#top">
      <img src="/logoweb.png" alt="Logo" style={{ width: '140px', height: 'auto' }} />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#top">INICIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#about">NOSOTROS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#service">SERVICIOS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link font-weight-bold" href="#contact">CONTACTO</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
