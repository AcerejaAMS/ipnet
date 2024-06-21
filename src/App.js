import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ingresar from './components/Modelos/Ingresar';
import Crear from './components/Modelos/CrearCuenta';
import BarraIzq from './components/Modelos/BarraIzquierda';
import Perfil from './components/Modelos/Perfil';
import Principal from './components/Modelos/Principal';
import Comunidades from './components/Modelos/Comunidades';
import Amigos from './components/Modelos/Amigos';
import Noticias from './components/Modelos/Noticias';
import Barra from './components/Modelos/BarraHerramientas';

const App = () => {
  
  const cuerpoInfo = {
    display: 'flex',
    justifyContent: 'space-between',
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

