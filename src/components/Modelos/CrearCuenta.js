import React, { useEffect } from 'react';
import './aparienciaCrearCuenta.css';
import Swal from 'sweetalert2'


function changeColorDanger(field, type){
    let getFieldId = document.getElementById(field);
    if(type === 'input'){
        getFieldId.style.borderBottom = "1px solid red";
        getFieldId.style.color = "red";
        getFieldId.parentNode.children[0].style.color="red";
        getFieldId.parentNode.parentNode.children[0].children[0].style.color = "red";
    } 
}


function changeColorSuccess(field, type){
    let getFieldId = document.getElementById(field);
    if(type === 'input'){
        getFieldId.style.borderBottom = "1px solid #2ED197";
        getFieldId.style.color = "#2ED197";
        getFieldId.parentNode.children[0].style.color="#2ED197";
        getFieldId.parentNode.parentNode.children[0].children[0].style.color = "#2ED197";
    } 
}


const Crear = () => {
    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const CambioPagina = () => {
        window.location.href = 'http://localhost:3000/';
    };

    useEffect(() => {
        const inputs = document.querySelectorAll(".form-control");

        inputs.forEach(input => {
            input.addEventListener("blur", (e) => {
                const label = e.target.previousElementSibling;
                if (label.classList.contains('animateLabel') && e.target.value === "") {
                    label.classList.remove('animateLabel');
                }
            });

            input.addEventListener("focus", (e) => {
                const label = e.target.previousElementSibling;
                if (!label.classList.contains('animateLabel')) {
                    label.classList.add('animateLabel');
                }
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            inputs.forEach(input => {
                input.removeEventListener("blur", (e) => {
                    const label = e.target.previousElementSibling;
                    if (label.classList.contains('animateLabel') && e.target.value === "") {
                        label.classList.remove('animateLabel');
                    }
                });

                input.removeEventListener("focus", (e) => {
                    const label = e.target.previousElementSibling;
                    if (!label.classList.contains('animateLabel')) {
                        label.classList.add('animateLabel');
                    }
                });
            });
        };
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formElements = e.target.elements;
        const userEmail = formElements[0].value;
        const username = formElements[1].value;
        const password = formElements[2].value;
        const passwordConfirm = formElements[3].value;

        try {
            await conEmail(userEmail);
            changeColorSuccess('emailRegister', 'input');
            document.getElementById('alertRegisterEmail').innerHTML = "";
            
            await conUser(username);
            changeColorSuccess('usernameRegister', 'input');
            document.getElementById('alertRegisterUsername').innerHTML = "";
            
            await conPassword(password, passwordConfirm);
            changeColorSuccess('passwordRegister', 'input');
            changeColorSuccess('passwordRegisterConfirm', 'input');
            document.getElementById('alertRegisterPassword').innerHTML = "";
            
            addUser([userEmail, username, password]);
        } catch (error) {
            console.log(error);
            if (error === 'email') {
                changeColorDanger('emailRegister', 'input');
                document.getElementById('alertRegisterEmail').innerHTML = "El correo se encuentra en uso";
            } else if (error === 'username') {
                changeColorDanger('usernameRegister', 'input');
                document.getElementById('alertRegisterUsername').innerHTML = "El usuario se encuentra en uso";
            } else {
                changeColorDanger('passwordRegister', 'input');
                changeColorDanger('passwordRegisterConfirm', 'input');
                document.getElementById('alertRegisterPassword').innerHTML = "Las contraseñas no coinciden";
            }
        }
    };

    const conEmail = (email) => {
        return new Promise((resolve, reject) => {
            let requestEmail = new XMLHttpRequest();
            requestEmail.open('POST', '/auth/confirmEmail');
            requestEmail.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            requestEmail.responseType = 'text';
            requestEmail.send('email=' + email);
            requestEmail.onload = () => {
                if (requestEmail.response === "") {
                    resolve(email);
                } else {
                    reject('email');
                }
            };
        });
    };

    const conUser = (username) => {
        return new Promise((resolve, reject) => {
            let requestUsername = new XMLHttpRequest();
            requestUsername.open('POST', '/redsocial/auth/confirmUsername');
            requestUsername.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            requestUsername.send('user=' + username);
            requestUsername.onload = () => {
                if (requestUsername.response === "") {
                    resolve(username);
                } else {
                    reject('username');
                }
            };
        });
    };

    const conPassword = (password, passwordConfirm) => {
        return new Promise((resolve, reject) => {
            let requestPassword = new XMLHttpRequest();
            requestPassword.open('POST', '/redsocial/auth/confirmPassword');
            requestPassword.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            requestPassword.send('password=' + password + '&passwordConfirm=' + passwordConfirm);
            requestPassword.onload = () => {
                if (requestPassword.response === 1) {
                    resolve(password);
                } else {
                    reject('password');
                }
            };
        });
    };

    const addUser = (data) => {
        let requestAddUser = new XMLHttpRequest();
        requestAddUser.open('POST', '/redsocial/auth/addUser');
        requestAddUser.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        requestAddUser.send('email=' + data[0] + '&user=' + data[1] + '&password=' + data[2]);
        requestAddUser.onload = () => {
            if (requestAddUser.response === 1) {
                document.getElementById("registerForm").reset();
                document.getElementById("form_register").style.display = "none";
                document.getElementById("form_login").style.display = "block";
            }
        };
    };
    const juanito= () =>{
        Swal.fire({
            title: '¿Easter Egg?',
            text: 'Hola juanito',
            showCancelButton: false,
            confirmButtonText: 'Hola',
            confirmButtonColor: '#0084B4',
            width: '400px',
          });
    }
    return (
        <div>
            <div className="cabecera">
                <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
                <div className="estiloTitulo">IP_Net</div>
            </div>
            <p className="tituloCuerpo" onClick={juanito}>¡¡Regístrate!!</p>
            <div className="cuerpo">
                <div className="entradaInfo">
                    <p className='opcionalobligatoria'>Información Obligatoria</p>
                    <hr className="linea-estilo" />
                    <div className='nombres'>
                        <div className="form-container">
                            <label className="labelInput">Nombre. . .</label>
                            <input type="text" className="input-style1 form-control" />
                        </div>
                        <div className="form-container">
                            <label className="labelInput">Apellido . . .</label>
                            <input type="text" className="input-style1 form-control" />
                        </div>
                    </div>
                    <div className="form-container">
                        <label className="labelInput">Correo Institucional IPN . . .</label>
                        <input type="text" className="input-style form-control" />
                    </div>
                    <div className="form-container">
                        <label className="labelInput">Contraseña . . .</label>
                        <input type="password" className="input-style form-control" />
                    </div>
                    <div className="form-container">
                        <label className="labelInput">Confirmar contraseña . . .</label>
                        <input type="password" className="input-style form-control" />
                    </div>
                </div>
                <div className="entradaInfo">
                    <p className='opcionalobligatoria'>Información Opcional</p>
                    <hr className="linea-estilo" />
                    <div className='nombres'>
                        <div className="form-container">
                            <label className="labelInput">Dia. . .</label>
                            <input type="text" className="input-style2 form-control" />
                        </div>
                        <div className="form-container">
                            <label className="labelInput">Mes . . .</label>
                            <input type="text" className="input-style2 form-control" />
                        </div>
                        <div className="form-container">
                            <label className="labelInput">Año . . .</label>
                            <input type="text" className="input-style2 form-control" />
                        </div>
                    </div>
                    <div className='nombres'>
                        <div className="form-container">
                            <label className="labelInput">Plantel. . .</label>
                            <input type="text" className="input-style1 form-control" />
                        </div>
                        <div className="form-container">
                            <label className="labelInput">Carrera . . .</label>
                            <input type="text" className="input-style1 form-control" />
                        </div>
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
};

export default Crear;
