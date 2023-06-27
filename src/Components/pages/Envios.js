export default function Envios(prop){

    if(prop.envio===false){
        return(
            <h3>{prop.ciudad} X</h3>
        )
    } else{
        return(
            <h3>{prop.ciudad} ✓</h3>
        )
    }
    }

    