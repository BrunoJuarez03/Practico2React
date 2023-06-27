import Envios from "./Envios";
function Info(){
    return(<>
        <h2>Direccion: Barrio xxxx xxxx manzana x casa x entre calles xxx y xxxx</h2>
        <h2>Horarios de apuertura: </h2>
        <p>Lunes 08:00 - 12:30 y 16:00 - 20:00</p>
        <p>Martes 08:00 - 12:30 y 16:00 - 20:00</p>
        <p>Miercoles 08:00 - 12:30 y 16:00 - 20:00</p>
        <p>Jueves 08:00 - 12:30 y 16:00 - 20:00</p>
        <p>Viernes 09:00 - 13:30 y 17:00 - 21:00</p>
        <p>Sabado 10:00 - 14:00 </p>
        <p>Domingos No abre.</p>
        <h2>Los envios se realizan a:</h2>
        <Envios ciudad="Lules" envio={true}></Envios>
        <Envios ciudad="San Miguel" envio={true}></Envios>
        <Envios ciudad="Famailla" envio={false}></Envios>
        <Envios ciudad="Monteros" envio={false}></Envios>
        <Envios ciudad="Yerba Buena" envio={true}></Envios>
        </>
    )
}
export default Info;