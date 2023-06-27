import { useEffect,  useState } from "react";
import {useNavigate } from "react-router-dom";
function Usuario(){



    const Ir = useNavigate();
    const [contra, setContra]=useState("*********");
    const [sesionlog, setSesion]=useState("");
    

    const getSesionData = () =>{
        return localStorage.getItem('Token');
    }

    const getUserData = () =>{
        return localStorage.getItem('Usuario');
    }
    const getPassData = () =>{
        return localStorage.getItem('Pass');
    }

    useEffect(()=>{
        setSesion(getSesionData());
    }, []);

    const usuario=getUserData();
    
    const evento = ()=> {setContra(getPassData())};

    const eventoCierre = () => {
       localStorage.removeItem('Token');
        Ir('/IniciarSesion');}
    console.log(getSesionData());
    console.log(sesionlog)
    if(sesionlog === "Sesion Iniciada"){
        return(
            <> 
            <h2>Usuario: {usuario}</h2>
            <h3>Contraseña: {contra} </h3>
            <input type="button" value="Revelar Contraseña" onClick={evento} />
            <input type="button" value="Cerrar sesion" onClick={eventoCierre} />
            
            </>
        )
    }else{
        return(
            <> 
            <h2>Sesion no iniciada...{localStorage.getItem('ContraseñaDelUsuario')}</h2>
            
            </>
        )
    }
    
}

export default Usuario;