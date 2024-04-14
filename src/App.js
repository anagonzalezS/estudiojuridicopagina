import React from 'react';
import Home from './components/Home'; // Importa el componente Home desde su ubicación
import Header from './components/Header'
const App = () => {
  return (
    <div>
      <Header/>

      <Home /> {/* Renderiza el componente Home */}
    </div>
  );
}

export default App;
