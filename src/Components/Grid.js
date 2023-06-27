import { Route, Routes } from 'react-router-dom';
import './Grid.css';
import Menu from './Menu';
import Inicio from './pages/Inicio.js';
import Info from './pages/Info.js';
import Contacto from './pages/Contacto.js';
import Usuario from './pages/Usuario.js';
import { Lateral } from './pages/Lateral';

import ProductosPage from './pages/ProductosPage';
import Registrarse from './pages/register';
import IniciarSeion from './pages/IniciarSesion';
import Header1 from './pages/Header';
import PaginaP from './pages/paginap';

function Grid()
{
    var textolateral = "Ian MacKaye, es un músico estadounidense, conocido por ser el fundador y el dueño de Dischord Records, un sello discográfico de música hardcore y por ser integrante de varias de las más importantes bandas de los movimientos hardcore y post hardcore como The Teen Idles, Minor Threat, Embrace y Fugazi.";
    return(
        <>
        <div className="grid-Layout">
        <div class="caja1"><Header1></Header1></div>
        <div class="caja2">
            <Routes>
                <Route path='/' element={<Registrarse></Registrarse>}></Route>
                <Route path='/Inicio' element={<Inicio></Inicio>}></Route>
                
                <Route path='/Productos' element={
                <ProductosPage></ProductosPage>
                }>

                </Route>
                <Route path='/Contacto' element={<Contacto></Contacto>}></Route>
                <Route path='/Info' element={<Info></Info>}></Route>
                <Route path='/Usuario' element={<Usuario></Usuario>}></Route>
                <Route path='/IniciarSesion' element={<IniciarSeion></IniciarSeion>}></Route>
                <Route path='/prod/:id' element={<PaginaP></PaginaP>}></Route>
                
            </Routes>
        </div>
        <div class="caja3"><Lateral Titulo="Ian Mackaye" modelo="Guitarra - SG" dispo={true} Texto={textolateral}/></div>
        <div class="caja4">Juarez Bruno Com.3 Programacion 3</div>
        <div class="caja5"><Menu></Menu></div>
        </div>
        </>
    )
}
export default Grid;