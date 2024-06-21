import React, { useState } from 'react';
import publicaciones from '../BB_TEMPORAL/publicaciones.json';
import './aparienciaPrincipal.css';

const Principal = () => {
    
    const baseInfo = (
        <div className='panelDerecho'>
            <div className='formaInfo'>
                <input
                    type="text" 
                    className="formaInput" 
                    placeholder="¿Qué estas pensando?"/>
                <hr  className="estiloLinea" />
                <div className='unionBotonesPublicacion'>
                    <p>Adjuntar: </p>
                    <button className='agregados'>Documento</button>
                    <button className='agregados'>Foto/Video</button>
                    <button className='agregados'>URL</button>
                    <button className='publicacion'>Publicar</button>
                </div>
            </div>
        </div>
    );
    return(baseInfo);
};

export default Principal;

