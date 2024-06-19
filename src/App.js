import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Ingresar';
import Crear from './components/CrearCuenta';
import Barra from './components/BarraHerramientas';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/crear" element={<Crear/>} />
        <Route path="/pprincipal" element={[<Barra/>,<Crear/>]} />
      </Routes>
    </Router>
  );
};

export default App;

