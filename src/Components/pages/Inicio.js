import './Inicio.css';
import logo from './imgs/Header.jpg'
function Inicio(){
    return(<div className="wrapInicio">
         <center><img src={logo} className="imgLogo"alt="" />
         <div className="textoIntro">
         <p>¡Bienvenidos a nuestra Tienda de Música, donde la magia de la música cobra vida! Somos tu destino definitivo para todo lo relacionado con la música, ofreciendo una amplia gama de instrumentos, accesorios, partituras y mucho más. Nuestro apasionado equipo está aquí para guiarte a través de nuestra cuidadosa selección, asegurándonos de que encuentres el instrumento perfecto que resuene con tus aspiraciones musicales. Desde guitarras hasta teclados, tambores hasta instrumentos de viento metal, tenemos todo lo que necesitas para crear hermosas melodías. ¡Adéntrate y deja que el poder de la música te inspire en tu viaje musical!</p>
         <p>-chatGtp</p>
         </div></center>
    </div>
   
    )
}
export default Inicio;