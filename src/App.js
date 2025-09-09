import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Navbar from "./components/principal/Navbar";
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import './App.css';

function App() {
  return (
    <div>
      <Helmet>
        <title>Estudio Jurídico Sáenz & Asociados - Servicios Legales</title>
        <meta
          name="description"
          content="Estudio Jurídico Sáenz & Asociados - Especialistas en Derecho Civil, Penal, Laboral, Familia y Sucesiones. Atención en CABA y Provincia de Buenos Aires."
        />
      </Helmet>

      {/* Header + Navbar */}
      <div className="header-navbar-container">
        <Header />
        <Navbar />
      </div>

      {/* Secciones principales */}
      <section id="inicio">
        <Home />
      </section>

      <section id="nosotros">
        <Nosotros />
      </section>

      <section id="servicios">
        <Servicio />
      </section>

    

      {/* Footer */}
      <Footer />

      {/* Icono WhatsApp flotante */}
      <WhatsappIcon />
    </div>
  );
}

export default App;
