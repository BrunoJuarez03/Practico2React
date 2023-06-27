 import imagen from './imgs/ian.jpg'
 export function Lateral(prop){

    
    if(prop.dispo === true){
    return(
        <div>
            
            <center>
            <h2>Artista de la semana</h2>
            <img src={imagen} alt="" />
            <h2>{prop.Titulo}</h2>
            <p>{prop.Texto}</p>
            <p>Instrumento: {prop.modelo}</p>
            <p>Modelo Disponible: ✓</p>
            </center>
        </div>
    )
}
else{
    return(
        <div>
            <center><img src={imagen} alt="" />
            <h2>{prop.Titulo}</h2>
            <p>{prop.Texto}</p>
            <p>Instrumento: {prop.modelo} </p>
            <p>Modelo Disponible: X</p>
            </center>
        </div>
    )
}
}