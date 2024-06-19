import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Ingresar';
import Crear from './components/CrearCuenta';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Ingresar />} />
        <Route path="/crear" element={<Crear/>} />
      </Routes>
    </Router>
  );
};

export default App;

