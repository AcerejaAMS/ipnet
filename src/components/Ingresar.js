import React from 'react';


const Ingresar = () => {

    const cabecera = {
        display: 'flex',
        height: '180px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px'
    };

    const piePagina = {
        display: 'flex',
        backgroundColor: '#CC0033',
        borderColor: '#CC0033',
        height: '50px',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const cuerpo = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }

    const entradaInfo = {
        display: 'flex',
        borderRadius: '20px',
        border: '5px solid #CC0033',
        width:'600px',
        height:'600px',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'50px',
        flexDirection: 'column'
    }

    const verImg = {
        height: '150px',
        padding: '10px',
    };

    const estiloTitulo = {
        fontFamily: 'ADLaM Display',
        fontSize: '100px',
        color: '#990026',
        marginLeft: '10px',
        position: 'relative',
      };

    return(
        <div>
            <div style={cabecera}>
                <img src={`${process.env.PUBLIC_URL}/logoPW.png`} alt='IPN' style={verImg}></img>
                <div style={estiloTitulo}>IP_Net</div>
            </div>
            <div style={cuerpo}>
                <div style={entradaInfo}>
                    <p>Avisos de Privacidad</p>
                    <p>&nbsp;|&nbsp;</p>
                    <p>Términos y condiciones</p>
                    <p>&nbsp;|&nbsp;</p>
                    <p>Acerca de Nosotros</p>
                </div>
            </div>
            <div style={piePagina}>
                <p>Avisos de Privacidad</p>
                <p>&nbsp;|&nbsp;</p>
                <p>Términos y condiciones</p>
                <p>&nbsp;|&nbsp;</p>
                <p>Acerca de Nosotros</p>
            </div>
        </div>
    );
};

export default Ingresar;
