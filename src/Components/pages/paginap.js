import { useState,  useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Sg from './imgs/sg.jpg';
import STRAT from './imgs/Strat.jpg';
import PBASS from './imgs/pbass.jpg';
import JAZZ from './imgs/jazzmaster.jpg';
import './Productos.css';
function PaginaP() {
    const idd = useParams();
    console.log(idd.id);
    const[Data, setDatos]=useState("");

    useEffect(()=>{
        axios.get(`http://localhost:3001/Instrumentos/${idd.id}`).then((res)  => {
            setDatos(res.data.respuesta[0]);
            console.log();
        });
    }, [idd.id]);
    
    var imgselect = "";

    if(Data.modelo==="Sg"){imgselect=Sg}
    if(Data.modelo==="Stratocaster"){imgselect=STRAT}
    if(Data.modelo==="P-bass"){imgselect=PBASS}
    if(Data.modelo==="JazzMaster"){imgselect=JAZZ}
     

    return(
        <div className="ProductoPagina">
        <div className="box1">
        <img src={imgselect} alt=""
        className="imgpag" />
        </div>
        <div className="box2">
        <h1>{Data.intrumento} - {Data.modelo} {Data.marca}</h1>
        <h2>${Data.precio}</h2>
        <p>Disponibles: {Data.cantidad}</p>
        </div>
        </div>
    )
}
export default PaginaP;