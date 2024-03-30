import React, { useEffect, useState } from 'react';
import './Home.css';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';

function Home() {
  const textoVisible = "Haga su consulta estudio juridico contable";
  const [typedText, setTypedText] = useState('');
  const typingDelay = 100; // Delay entre cada letra
  const erasingDelay = 50; // Delay entre el borrado de letras

  useEffect(() => {
    new WOW.WOW().init(); // Inicializar la biblioteca WOW

    let currentIndex = 0;
    let isTyping = true;

    const typeAndErase = () => {
      if (currentIndex === textoVisible.length) {
        isTyping = false;
      } else if (currentIndex === 0) {
        isTyping = true;
      }

      if (isTyping) {
        setTypedText(prevText => prevText + textoVisible[currentIndex]);
        currentIndex++;
      } else {
        setTypedText(prevText => prevText.slice(0, -1));
        currentIndex--;
      }

      const delay = isTyping ? typingDelay : erasingDelay;

      setTimeout(typeAndErase, delay);
    };

    typeAndErase();

  }, []);

  return (
    <div>
      <div id="inicio" className="container-fluid position-relative p-0" style={{ backgroundImage: 'url("/portada.png")', minHeight: '100vh' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}> {/* Contenedor centrado */}
            <h1 id="typing-effect" className="display-1 mb-4 wow fadeIn" style={{ fontSize: '52px', fontFamily: 'inherit' }}>SAENZ & ASOCIADOS</h1>
            <p className="lead mb-4">{typedText}</p>
            <a href="#contacto" className="btn btn-outline-light btn-lg mt-3">Contactar</a> {/* Añade un poco de margen arriba (mt-3) */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
