import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';
import 'animate.css/animate.min.css';

function Home() {
  const textoVisible = "Estudio Jurídico Sáenz & Asociados";
  const [typedText, setTypedText] = useState('');
  const typingDelay = 45;
  const erasingDelay = 50;

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    let timeoutId;

    const typeAndErase = () => {
      if (currentIndex === textoVisible.length) isTyping = false;
      else if (currentIndex === 0) isTyping = true;

      if (isTyping) {
        setTypedText(prev => prev + textoVisible[currentIndex]);
        currentIndex++;
      } else {
        setTypedText(prev => prev.slice(0, -1));
        currentIndex--;
      }

      const delay = isTyping ? typingDelay : erasingDelay;
      timeoutId = setTimeout(typeAndErase, delay);
    };

    typeAndErase();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Inicio - Estudio Jurídico Sáenz & Asociados</title>
        <meta
          name="description"
          content="Inicio del sitio web de Estudio Jurídico Sáenz & Asociados, especialistas en Derecho Civil, Penal, Laboral, Familia y Sucesiones."
        />
      </Helmet>

      <div
        id="inicio"
        className="container-fluid position-relative p-0"
        style={{ backgroundImage: 'url("/portada1.png")', minHeight: '100vh' }}
      >
        <div className="overlay"></div>

        <div className="content-center">
          <h1 className="display-1 mb-4 uppercase-text">
            Sáenz & Asociados
          </h1>
          <div className="typed-text-container">
            <p className="lead">
              {typedText}
              <span className="typing-cursor"></span>
            </p>
          </div>
          <a href="#nosotros" className="btn-bienvenido">
            BIENVENIDO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
