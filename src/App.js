import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/principal/Navbar";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Contacto from './components/Contacto';
import AdminTestimonios from './components/AdminTestimonios';

import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import './App.css';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Estudio Jurídico Sáenz & Asociados - Servicios Legales</title>
        <meta
          name="description"
          content="Estudio Jurídico Sáenz & Asociados - Especialistas en Derecho Civil, Penal, Laboral, Familia y Sucesiones. Atención en CABA y Provincia de Buenos Aires."
        />
      </Helmet>

      <Routes>
        {/* Ruta pública */}
        <Route
          path="/"
          element={
            <div>
              <div className="header-navbar-container">
                <Navbar />
              </div>

              <section id="inicio">
                <Home />
              </section>

              <section id="nosotros">
                <Nosotros />
              </section>

              <section id="servicios">
                <Servicio />
              </section>

              <section id="testimonios">
                <Contacto />
              </section>

              <Footer />
              <WhatsappIcon />
            </div>
          }
        />

        {/* Ruta privada para la abogada */}
        <Route path="/admin-testimonios" element={<AdminTestimonios />} />
      </Routes>
    </Router>
  );
}

export default App;
