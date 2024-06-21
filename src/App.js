import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Ingresar';
import Crear from './components/CrearCuenta';
import BarraIzq from './components/BarraIzquierda';
import Perfil from './components/Perfil';
import Principal from './components/Principal';
import Comunidades from './components/Comunidades';
import Amigos from './components/Amigos';
import Noticias from './components/Noticias';
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
        <Route path="/principal" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Principal/></div>]} />
        <Route path="/perfil" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Perfil/></div>]} />
        <Route path="/comunidades" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Comunidades/></div>]} />
        <Route path="/amigos" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Amigos/></div>]} />
        <Route path="/noticias" element={[<Barra/>,<div style={cuerpoInfo}><BarraIzq/><Noticias/></div>]} />
      </Routes>
    </Router>
  );
};

export default App;

