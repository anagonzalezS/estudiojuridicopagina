import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/principal/Navbar";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Contacto from './components/Contacto';

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
        <Route
          path="/"
          element={
            <div>
              <Navbar />

              <section id="inicio">
                <Home />
              </section>

              <section id="nosotros">
                <Nosotros />
              </section>

              <section id="servicios">
                <Servicio />
              </section>

              <section id="contacto">
                <Contacto />
              </section>

              <Footer />
              <WhatsappIcon />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;