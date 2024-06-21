import React, { useState } from 'react';
import './aparienciaCrearCuenta.css';
import usuarios from './BB_TEMPORAL/usuarios.json';
import Swal from 'sweetalert2'

const Crear = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [contraInic, setContraInic] = useState('');
    const [contraConf, setContraConf] = useState('');
    let [fechaNacimiento, setFechaNacimiento] = useState('');
    let [plantel, setPlantel] = useState('');
    let [carrera, setCarrera] = useState('');
    let sexo;
    
    const eleccionSexo = (opc) =>{
        switch(opc){
            case "M":
                sexo='mujer'
                break;
            case "H":
                sexo='hombre'
                break;
            default:
                sexo='personal'
                break;
        }
    };


    const Creacion = (e) =>{
        e.preventDefault();
        if(nombre && apellido && correo && contraInic && contraConf){
            let temp;
            for(let step = 0; step < usuarios.length; step++){
                temp=usuarios[step];
                if(temp.correo === correo){
                    Swal.fire({
                        title: 'Error',
                        text: 'El correo ya esta registrado',
                        confirmButtonText: 'Aceptar',
                        confirmButtonColor: '#0084B4',
                        showCancelButton: false,
                        width: '400px',
                    });
                    return;
                }
            }

            if(!plantel){
                plantel = "Desconocido";
            }

            if(!carrera){
                carrera = "Desconocido";
            }

            if(!fechaNacimiento){
                fechaNacimiento  = "0000-00-00";
            }

            if(!sexo){
                sexo = "personal";
            }

            let fechaRegistro;
            let fechaActual = new Date();
            fechaRegistro = `${fechaActual.getFullYear()}-${fechaActual.getMonth()}-${fechaActual.getDay()}`;



            usuarios.push({
                "ID_usuario": usuarios.length + 1,
                "apellido": apellido,
                "correo": correo,
                "contrasenia": contraConf,
                "plantel": plantel,
                "carrera": carrera,
                "sexo": sexo,
                "fecha_nacimiento": fechaNacimiento,
                "fecha_registro": fechaRegistro,
                "lista_amigos": [],
                "lista_comunidades": [],
                "lista_publicaciones": []
            });

            /*En realidad no lo crea */
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Perfecto!!, Se ha registrado correctamente",
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                showCancelButton: false,
              });
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Faltan datos obligatorios',
                confirmButtonText: 'Aceptar',
                confirmButtonColor: '#0084B4',
                showCancelButton: false,
                width: '400px',
              });
        }
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
                <form className='tamanio' onSubmit={Creacion}>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Obligatoria</p>
                        <hr className="linea-estilo" />
                        <div className='nombres'>
                            <input
                                type="text" 
                                className="input-style1" 
                                placeholder="Nombre. . ."
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Apellido . . ."
                                value={apellido}
                                onChange={(e) => setApellido(e.target.value)}/>
                        </div>
                        <input 
                            type="text" 
                            className="input-style" 
                            placeholder="Correo Institucional IPN . . ."
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Contraseña . . ."
                            value={contraInic}
                            onChange={(e) => setContraInic(e.target.value)}/>
                        <input 
                            type="password" 
                            className="input-style" 
                            placeholder="Confirmar contraseña . . ."
                            value={contraConf}
                            onChange={(e) => setContraConf(e.target.value)}/>
                    </div>
                    <div className="entradaInfo">
                        <p className='opcionalobligatoria'>Información Opcional</p>
                        <hr className="linea-estilo" />
                        <input 
                            type="date" 
                            className="input-style" 
                            placeholder="Fecha de nacimiento . . ."
                            value={fechaNacimiento}
                            onChange={(e) => setFechaNacimiento(e.target.value)}/>
                        <div className='nombres'>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Plantel. . ."
                                value={plantel}
                                onChange={(e) => setPlantel(e.target.value)}/>
                            <input 
                                type="text" 
                                className="input-style1" 
                                placeholder="Carrera . . ."
                                value={carrera}
                                onChange={(e) => setCarrera(e.target.value)}/>
                        </div>
                        <div className='nombres'>
                            <div className='button-sexo' onClick={() => eleccionSexo("M")}>
                                <label><input type="radio"/>Mujer</label>
                                <div className='circulo'></div>
                            </div>
                            <div className='button-sexo' onClick={() => eleccionSexo("H")}>
                                <label><input type="radio"/>Hombre</label>
                                <div className='circulo'></div>
                            </div>
                            <div className='button-sexo' onClick={() => eleccionSexo("P")}>
                                <label><input type="radio"/>Personal</label>
                                <div className='circulo'></div>
                            </div>
                                
                        </div>
                    </div>
                    <button className="buttonCC">Crear Cuenta</button>
                </form>    
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
