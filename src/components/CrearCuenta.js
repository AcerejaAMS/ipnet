import React from 'react';
import './aparienciaCrearCuenta.css';

const Crear = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const CambioPagina = () =>{
        window.location.href = 'http://localhost:3000/';
    }

    const crearNuevaCuenta = (
        <div>
            <div className="cabecera">
                <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
                <div className="estiloTitulo">IP_Net</div>
            </div>
            <p className="tituloCuerpo">¡¡Regístrate!!</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <p className='opcionalobligatoria'>Información Obligatoria</p>
                    <hr className="linea-estilo" />
                    <div className='nombres'>
                        <input type="text" className="input-style1" placeholder="Nombre. . ."/>
                        <input type="text" className="input-style1" placeholder="Apellido . . ."/>
                    </div>
                    <input type="text" className="input-style" placeholder="Correo Institucional IPN . . ."/>
                    <input type="password" className="input-style" placeholder="Contraseña . . ."/>
                    <input type="password" className="input-style" placeholder="Confirmar contraseña . . ."/>
                </div>
                <div className="entradaInfo">
                    <p className='opcionalobligatoria'>Información Opcional</p>
                    <hr className="linea-estilo" />
                    <div className='nombres'>
                        <input type="text" className="input-style2" placeholder="Dia. . ."/>
                        <input type="text" className="input-style2" placeholder="Mes . . ."/>
                        <input type="text" className="input-style2" placeholder="Año . . ."/>
                    </div>
                    <div className='nombres'>
                        <input type="text" className="input-style1" placeholder="Plantel. . ."/>
                        <input type="text" className="input-style1" placeholder="Carrera . . ."/>
                    </div>
                    <div className='nombres'>
                        <div className='button-sexo'>
                            <label><input type="radio" id='m'/>Mujer</label>
                            <div className='circulo'></div>
                        </div>
                        <div className='button-sexo'>
                            <label><input type="radio"/>Hombre</label>
                            <div className='circulo'></div>
                        </div>
                        <div className='button-sexo'>
                            <label><input type="radio" id='p'/>Personal</label>
                            <div className='circulo'></div>
                        </div>
                            
                    </div>
                </div>
                <button className="buttonCC">Crear Cuenta</button>
                <hr className="lineaBotonCC" />
                <p className='cancelar' onClick={CambioPagina}>Cancelar</p>
            </div>
            <div className="piePagina">
                <p>Avisos de Privacidad</p>
                <p>&nbsp;|&nbsp;</p>
                <p>Términos y condiciones</p>
                <p>&nbsp;|&nbsp;</p>
                <p>Acerca de Nosotros</p>
            </div>
        </div>
    );

    return(crearNuevaCuenta);
};

export default Crear;
