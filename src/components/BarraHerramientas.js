import React from 'react';
import './aparienciaBarraHerramientas.css';

const Barra = () => {
    const basebarra = (
        <header>
            <div className="logo">
                <img src="logoPW.png" alt='Logo'/>
                <div className="busquedaContenedor">
                    <input type="text" className="busquedaEntrada" placeholder="Buscar en IP_Net . . ."/>
                </div>
            </div>
            <div>
                <button className='botonesHerramientas'>
                    <i className="fa-solid fa-bell"></i>
                </button>
                <button className='botonesHerramientas'>
                    <i className="fa-solid fa-message"></i>
                </button>
                <button className='botonesHerramientas'>
                    <i className="fa-solid fa-gear"></i>
                </button>
            </div>
        </header>);
    return(basebarra);
};

export default Barra;