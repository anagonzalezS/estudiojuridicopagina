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

    return () => clearTimeout(timeoutId); // Limpiamos el timeout al desmontar
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
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
        <div className="position-absolute top-50 start-50 translate-middle text-center text-light">
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh', minWidth: '320px' }}>
            <h1 className="display-1 mb-4 wow fadeIn uppercase-text" style={{ fontSize: '52px', marginBottom: '0', minHeight: '52px' }}>
              Sáenz & Asociados
            </h1>
            <div className="typed-text-container">
              <p className="lead">
                {typedText}
                <span className="typing-cursor"></span>
              </p>
            </div>
            <a href="#nosotros" className="btn btn-outline-light btn-lg mt-3" style={{ minHeight: '50px', lineHeight: '1' }}>BIENVENIDO</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
