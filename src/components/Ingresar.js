import React from 'react';
import './aparienciaIngresar.css';

const Ingresar = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const CambioPagina_CrearCuenta = () =>{
        window.location.href = 'http://localhost:3000/crear';
    }

    const CambioPagina_OlvidarContrasena = () =>{
        window.location.href = 'http://localhost:3000/crear';
    }

    const iniciarSesion = (
        <div>
            <div className="cabecera">
                <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
                <div className="estiloTitulo">IP_Net</div>
            </div>
            <p className="tituloCuerpo">Iniciar sesión</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <input type="text " className="input-style" placeholder="Correo electrónico . . ."/>
                    <input type="password" className="input-style" placeholder="Contraseña . . ."/>
                    <button className="button-styleIS">Ingresar</button>
                    <p className='contrasenaOlvidadada' onClick={CambioPagina_OlvidarContrasena}>¿Olvidaste la Contraseña?</p>
                    <hr className="linea-estilo" />
                    <button className="button-styleCC" onClick={CambioPagina_CrearCuenta}>Crear Cuenta Nueva</button>
                </div>
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
    return(iniciarSesion);
};

export default Ingresar;
