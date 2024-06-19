import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Ingresar';
import Crear from './components/CrearCuenta';
import BarraIzq from './components/BarraIzquierda';
import Informacion from './components/Informacion';
import Barra from './components/BarraHerramientas';

const App = () => {

  const cuerpoInfo = {
    display: 'flex'
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/crear" element={<Crear/>} />
        <Route path="/Principal" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Informacion/></div>]} />
      </Routes>
    </Router>
  );
};

export default App;

