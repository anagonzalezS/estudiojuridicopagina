import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import './Home.css';

function Home() {
  const textoVisible = "Estudio Jurídico Integral";
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let isTyping = true;
    let timeoutId;
    let cancelled = false;

    const typeAndErase = () => {
      if (cancelled) return;

      if (currentIndex === textoVisible.length) isTyping = false;
      else if (currentIndex === 0) isTyping = true;

      if (isTyping) {
        setTypedText(textoVisible.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setTypedText(textoVisible.slice(0, currentIndex - 1));
        currentIndex--;
      }

      timeoutId = setTimeout(typeAndErase, isTyping ? 55 : 35);
    };

    timeoutId = setTimeout(typeAndErase, 300);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <title>Inicio - Estudio Jurídico Sáenz & Asociados</title>
        <meta
          name="description"
          content="Estudio Jurídico Sáenz & Asociados, especialistas en Derecho Civil, Penal, Laboral, Familia y Sucesiones."
        />
      </Helmet>

      <section
        id="inicio"
        className="hero-section"
        style={{ backgroundImage: 'url("/portada1.png")' }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 className="hero-title">Sáenz &amp; Asociados</h1>
          <p className="hero-subtitle">
            {typedText}
            <span className="typing-cursor" />
          </p>
          <a href="#nosotros" className="btn-bienvenido">
            Bienvenido
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;