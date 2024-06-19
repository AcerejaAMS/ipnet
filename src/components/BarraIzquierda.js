import React from 'react';
import './aparienciaBarraIzquierda.css';

const BarraIzq = () => {
    const basebarra = (
        <div className="panelIzquierdo">
            <button className="contenedorOpcionesRS">
                <i className="fa-solid fa-user"></i>
                <div>Perfil</div>
            </button>
            <button className="contenedorOpcionesRS">
                <i className="fa-solid fa-house"></i>
                <div>Principal</div>
            </button>
            <button className="contenedorOpcionesRS">
                <i className="fa-solid fa-users"></i>
                <div>Comunidades</div>
            </button>
            <button className="contenedorOpcionesRS">
                <i className="fa-solid fa-address-book"></i>
                <div>Amigos</div>
            </button>
            <button className="contenedorOpcionesRS">
                <i className="fa-solid fa-newspaper"></i>
                <div>Noticias</div>
            </button>
        </div>);

    return(basebarra);
};

export default BarraIzq;