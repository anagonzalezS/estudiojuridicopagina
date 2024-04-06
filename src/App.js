import React from 'react';
import Header from './components/Header';
import Navbar from './components/principal/Navbar'; // Corregido el nombre del componente NavBar a Navbar
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsappIcon from './components/WhatsappIcon'; // Importa el componente WhatsappIcon
function App() {
  return (
    <div>
      <Header />
      <Navbar /> {/* Cambiado a Navbar en lugar de NavBar */}
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
      <WhatsappIcon /> {/* Agrega el ícono flotante WhatsappIcon aquí */}
    </div>
  );
}

export default App;
