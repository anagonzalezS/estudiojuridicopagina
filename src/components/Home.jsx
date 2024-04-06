import React, { useEffect, useState } from 'react';
import './Home.css'; // Importa tus estilos personalizados aquí
import 'animate.css/animate.min.css'; // Importa la animación CSS si es necesario

function Home() {
  const textoVisible = "Haga su consulta Estudio Jurídico Saenz & Asociados";
  const [typedText, setTypedText] = useState('');
  const typingDelay = 100; // Delay entre cada letra
  const erasingDelay = 50; // Delay entre el borrado de letras

  useEffect(() => {
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
          <div className="d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh', minWidth: '320px' }}> {/* Tamaño mínimo para evitar cambios bruscos */}
            {/* Contenedor centrado verticalmente */}
            <h1 className="display-1 mb-4 wow fadeIn" style={{ fontSize: '52px', fontFamily: 'inherit', marginBottom: '0', minHeight: '52px' }}>SAENZ & ASOCIADOS</h1>
            <div className="typed-text-container" style={{ position: 'relative', width: '100%', textAlign: 'center', marginBottom: '20px', minHeight: '50px' }}> {/* Tamaño fijo para el contenedor */}
              <p className="lead" style={{ fontSize: '20px', margin: '0' }}>{typedText}</p> {/* Reducir el tamaño de la fuente */}
            </div>
            <a href="#contact" className="btn btn-outline-light btn-lg mt-3" style={{ minHeight: '50px', lineHeight: '1' }}>Contactar</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
