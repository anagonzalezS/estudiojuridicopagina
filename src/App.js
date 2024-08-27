import React from 'react';
import Header from './components/Header';
import Navbar from './components/principal/Navbar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Administracion from './components/Administracion';
import Turno from './components/Turno';
import Footer from './components/Footer';
import Planificacion from './components/Planificacion';
import WhatsappIcon from './components/WhatsappIcon';
import './App.css'; // Importa el archivo CSS

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="home-section">
        <Home />
      </div>
      <div className="nosotros-section">
        <Nosotros />
      </div>
      <div className="servicio-section">
        <Servicio />
      </div>
      <div className="turno-section">
        <Turno />
      </div>
      <div className="administracion-section">
        <Administracion />
      </div>
      <div className="planificacion-section">
        <Planificacion />
      </div>
      <div className="footer-section">
        <Footer />
      </div>
      <WhatsappIcon />
    </div>
  );
}

export default App;
