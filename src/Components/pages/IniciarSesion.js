import {useState} from "react";
import {useNavigate } from "react-router-dom";



function IniciarSeion(){

    const Ir = useNavigate();
    const [Usuario, setUsuario]=useState("");
    const [Contraseña, setContraseña]=useState("");
    
    const getUserData = () =>{
        return localStorage.getItem('Usuario');
    }
    const getPassData = () =>{
        return localStorage.getItem('Pass');
    }

    
    const submitcoso = async (e) => {
         e.preventDefault();
         if(Usuario.length===0||Contraseña.length===0){alert("error, rellene ambos campos")} else  {
        
         if(Usuario === getUserData() && Contraseña === getPassData()){ 
            localStorage.setItem('Token', "Sesion Iniciada");
            Ir('/Inicio');}
        }
        }

        

    return(<><form>
    <h2>Iniciar sesion</h2>
        <input 
            type="text" 
            onChange={(e)=>setUsuario(e.target.value)}
            autoComplete="off"
            placeholder="Usuario"
        />
      <p></p>
        <input 
            type="password" 
            onChange={(e)=>setContraseña(e.target.value)}
            autoComplete="off"
            placeholder="Contraseña"
        />
        <p></p>
        <input type="button" value="Confirmar Inicio" onClick={submitcoso} />
    </form>
</>
    )
    
}
export default IniciarSeion;