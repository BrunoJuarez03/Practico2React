import { Link } from "react-router-dom";
import './pages/header.css'
function Menu(){
    return(
        <div >
            <nav  >
                <ul >
                <li><Link className="NavText" to={"/Inicio"}>Inicio</Link></li>
               <li> <Link className="NavText" to={"/Productos"}>Productos</Link></li>
               <li> <Link className="NavText" to={"/Contacto"}>Contacto</Link> </li> 
               <li><Link className="NavText" to={"/Info"}>Info</Link></li> 
               <li> <Link className="NavText" to={"/Usuario"}>Usuario</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default Menu;