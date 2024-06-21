import React, { useState } from 'react';
import './aparienciaIngresar.css';
import usuarios from './BB_TEMPORAL/usuarios.json';
import Swal from 'sweetalert2'

const Ingresar = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const CambioPagina_CrearCuenta = () =>{
        window.location.href = 'http://localhost:3000/crear';
    }

    const CambioPagina_OlvidarContrasena = () =>{
        Swal.fire({
            title: '¿Contraseña olvidada?',
            text: 'Ingresa tu correo y te mandaremos la contraseña',
            showCancelButton: true,
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#0084B4',
            cancelButtonText: 'Cancelar',
            cancelButtonColor: '#CC0033',
            input: 'text',
            inputPlaceholder: 'Igrese su correo registrado',
            width: '400px',
          });
    }

    const IntentoIngreso = (e) => {
        e.preventDefault();
        let llaveAceptacion_Correo=false;
        let llaveAceptacion_Contrasena=false;
        let indiceBusqueda=-1;
        
        console.log(usuarios)
        let temp;

        for(let step = 0; step < usuarios.length; step++){
            temp=usuarios[step];
            if(temp.correo === correo){
                llaveAceptacion_Correo=true;
                indiceBusqueda=step;
                break;
            }
        }

        temp=usuarios[indiceBusqueda];
        if(llaveAceptacion_Correo === true && temp.contrasenia === contrasena){
            llaveAceptacion_Contrasena=true;
        }

        if(llaveAceptacion_Contrasena === true){
            window.location.href = 'http://localhost:3000/principal';
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Correo o Contraseña erroneos',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#3085d6',
                showCancelButton: false,
                width: '400px',
              });
        }
      };

    const iniciarSesion = (
        <div>
            <div className="cabecera">
                <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
                <div className="estiloTitulo">IP_Net</div>
            </div>
            <p className="tituloCuerpo">Iniciar sesión</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <form onSubmit={IntentoIngreso} className='tamanio'>
                        <input
                            type="text " 
                            className="input-style" 
                            placeholder="Correo electrónico . . ."
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}/>
                        <input
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}/>
                        <button className="button-styleIS">Ingresar</button>
                    </form>
                    <p className='contrasenaOlvidadada' onClick={CambioPagina_OlvidarContrasena}>¿Olvidaste la Contraseña?</p>
                    <hr className="linea-estilo" />
                    <button className="button-styleCC"  onClick={CambioPagina_CrearCuenta}>Crear Cuenta Nueva</button>
                    
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
