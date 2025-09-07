import React from 'react';
import Header from './components/Header';
import Navbar from './components/principal/Navbar';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon';
import './App.css';

function App() {
  return (
    <div>
      <div className="header-navbar-container">
      <div className="header-section">
        <Header />
      </div>
      <div className="navbar-section">
        <Navbar />
      </div>
    </div>

      <div className="home-section">
        <Home />
      </div>
      <div className="nosotros-section">
        <Nosotros />
      </div>
      <div className="servicio-section">
        <Servicio />
      </div>
      <div className="footer-section">
        <Footer />
      </div>

      <WhatsappIcon />
    </div>
  );
}

export default App;
