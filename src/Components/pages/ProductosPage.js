import Productos from "./Productos";
import SG from './imgs/sg.jpg';
import STRAT from './imgs/Strat.jpg';
import PBASS from './imgs/pbass.jpg';
import JAZZ from './imgs/jazzmaster.jpg';
function ProductosPage(){
    return(
        <div >
            <h2>Instrumentos</h2>
        <Productos numId="1" img={SG} ></Productos>
        <Productos numId="3" img={STRAT}></Productos>
        <Productos numId="4" img={PBASS}></Productos>
        <Productos numId="7" img={JAZZ}></Productos>
        <Productos numId="2" img={STRAT}></Productos>
        </div>
    )
}
export default ProductosPage;