import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


 function Registrarse(){

    const [pass, setPass]=useState("");
    const [user, setUser]=useState("");
    const [token, settoken]=useState(false);
    const navegar = useNavigate();

    

    const clickHandler = async () =>{
        if(user.length>0 && pass.length>0){
        localStorage.setItem('Usuario', user);
        localStorage.setItem('Pass', pass);
        localStorage.setItem('Token', token);
        navegar('/Inicio');
        }
    }
    useEffect (()=>{
        localStorage.clear();
        settoken("Sesion Iniciada");
    }, [])

    return(<><form>
        <h2>Registrarse</h2>
            <input 
                type="text" 
                onChange={(e)=>setUser(e.target.value)}
                autoComplete="off"
                placeholder="Usuario"
            />
          <p></p>
            <input 
                type="password" 
                onChange={(e)=>setPass(e.target.value)}
                autoComplete="off"
                placeholder="Contraseña"
            />
            <p></p>
            <input type="button" value="Confirmar" onClick={clickHandler} />
        </form>
    </>
        )
}

export default Registrarse;