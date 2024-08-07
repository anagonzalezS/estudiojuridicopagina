import React from 'react';
import Header from './components/Header';
import Navbar from './components/principal/Navbar'; // Corregido el nombre del componente NavBar a Navbar
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Servicio from './components/Servicio';
import Administracion from './components/Administracion'
import Turno from './components/Turno';
import Footer from './components/Footer';
import Planificacion from './components/Planificacion';
import WhatsappIcon from './components/WhatsappIcon'; // Importa el componente WhatsappIcon

function App() {
  return (
    <div>
      <Header />
      <Navbar /> {/* Cambiado a Navbar en lugar de NavBar */}
      <Home />
      <Nosotros />
      <Servicio />
      <Turno />

      <Administracion />

      <Planificacion/>
     
      <Footer />
      <WhatsappIcon /> {/* Agrega el ícono flotante WhatsappIcon aquí */}
    </div>
  );
}

export default App;