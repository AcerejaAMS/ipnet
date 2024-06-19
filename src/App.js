import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Ingresar';
import Crear from './components/CrearCuenta';
import PagPrincipal from './components/Principal';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/crear" element={<Crear/>} />
        <Route path="/pprincipal" element={<PagPrincipal/>} />
      </Routes>
    </Router>
  );
};

export default App;

