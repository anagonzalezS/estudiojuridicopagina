import React from 'react';
import { FaBalanceScale, FaGavel, FaBriefcase, FaEnvelope, FaPhone } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            {/* Navbar con logo y portada */}
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <a className="navbar-brand" href="#inicio">
                        <img src="/logoweb.png" alt="Logo del Estudio" width="120" height="auto" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#inicio">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#nosotros">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#servicios">Servicios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
  
           {/* Portada con imagen mejorada */}
<div id="inicio" className="container-fluid position-relative p-0">
    <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <img src="/portada.png" alt="Portada del Estudio" className="img-fluid w-100" style={{ objectFit: 'cover', minHeight: '100vh' }} />
    <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
        <h1 className="display-1">Estudio Jurídico Saenz & Asociados</h1>
        <p className="lead">Somos un estudio de abogacía profesionales comprometidos con la justicia la verdad y a la disposición de nuestros clientes.</p>
        <a href="#contacto" className="btn btn-primary btn-lg">Contactar</a>
    </div>
            </div>
        {/* seccion nosotros */}

{/* seccion nosotros */}
<div id="nosotros" className="container mt-5">
  <div className="row align-items-center">
    {/* Columna para la imagen */}
    <div className="col-md-6">
      <img src="/equipo.png" alt="Equipo Responsable" className="img-fluid mb-4" />
    </div>
    {/* Columna para el texto */}
    <div className="col-md-6">
      <div className="text-center">
        <h2 className="mb-4">Nosotros</h2>
      </div>
      <p className="lead mb-4">Equipo responsable, inspirados en brindar soluciones legales efectivas.</p>
      <p className="text-muted">
        Somos un equipo de abogados comprometidos con la excelencia en la prestación de servicios legales. Nos enfocamos en brindar soluciones efectivas y personalizadas a nuestros clientes, tanto empresas como particulares, en diversas áreas del derecho. Nuestra experiencia y dedicación nos permiten ofrecer asesoramiento jurídico integral, representación legal en litigios y gestión de trámites legales de forma eficiente y ética.
      </p>
    </div>
  </div>
</div>



{/* Sección de Servicios */}
<div id="servicios" className="container-fluid bg-dark text-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-4">
                        <h2>SERVICIOS</h2>
                        <h3>Áreas de trabajo</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="text-center">
                            <FaBalanceScale size={50} color="white" className="icon" />
                            <h5 className="card-title">Derecho Civil</h5>
                            <p className="card-text text-white">Asesoramiento y representación legal en asuntos civiles, contratos, propiedad, familia, sucesiones, etc.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="text-center">
                            <FaGavel size={50} color="white" className="icon" />
                            <h5 className="card-title">Derecho Penal</h5>
                            <p className="card-text text-white">Defensa legal en procesos penales, delitos, querellas, recursos, derecho penitenciario, entre otros.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                         <div className="text-center">
                            <FaBriefcase size={50} color="white" className="icon" />
                            <h5 className="card-title">Derecho Laboral</h5>
                            <p className="card-text text-white">Asesoramiento y representación en conflictos laborales, despidos, contratos laborales, seguridad social, etc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

           {/* Sección de formulario de contacto */}
           <div id="contacto" className="container-fluid full-width-bg mt-5 pb-5 bg-light">
    <div className="row">
        <div className="col-md-8 offset-md-2">
            <h2 className="text-center mb-4">Contacto</h2>
            <p className="text-center">Escríbenos tu consulta</p>
            <p className="text-center">Completa el siguiente formulario con tus datos y te responderemos a la brevedad.</p>
            <form>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    </div>
</div>


            {/* Footer */}
            <footer id="footer" className="bg-dark text-light py-5">
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <p>Estudio Saenz & Asociados</p>
            </div>
            <div className="col-md-4">
                <p className="headFooter">Secciones</p>
                <div className="row">
                <div className="col-6">
                                    <a href="#inicio" className="footerItem btn-inicio text-decoration-none text-blue d-block py-1 text-white">Inicio</a>
                                    <a href="#servicios" className="footerItem btn-servicios text-decoration-none text-blue d-block py-1 text-white">Servicios</a>
                                    <a href="#contacto" className="footerItem btn-Contactar text-decoration-none text-blue d-block py-1 text-white">Contacto</a>
                                </div>

                    <div className="col-6">
                    <a href="#nosotros" className="footerItem btn-nosotros text-white">Nosotros</a>

                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <p className="headFooter">Datos de contacto</p>
                <p className="footerItem">
                    <span className="icon-text">
                        <span className="icon">
                            <FaEnvelope />
                        </span>
                        <span>estudio@gmail.com</span>
                    </span>
                </p>
                <p className="footerItem">
                    <span className="icon-text">
                        <span className="icon">
                            <FaPhone />
                        </span>
                        <span>+54 11 3943-6391</span>
                    </span>
                </p>
            </div>
        </div>
    </div>
</footer>
        </div>
    );
}

export default Home;