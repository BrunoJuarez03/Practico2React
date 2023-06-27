import { useEffect, useState } from 'react';
import './Productos.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Productos(prop){
    const Ir = useNavigate();
    const [datos, setDatos]=useState([""]);
    console.log(prop.numId);
    var num = prop.numId;
    

    useEffect(()=>{
        axios.get(`http://localhost:3001/Instrumentos/${num}`).then((res)  => {
            setDatos(res.data.respuesta[0]);
            console.log();
        });
    }, [num]);
    return(
    <div className='tarjeta' onClick={()=>Ir(`/prod/${num}`)}>
        <center><img src={prop.img} alt="" className='img' /></center>
        <h2>{datos.modelo}</h2>
        <p>{datos.marca}</p>
        <p>${datos.precio}</p>
    </div>
    )
}
export default Productos;