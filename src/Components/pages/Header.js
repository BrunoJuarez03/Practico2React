import logo from './imgs/Header.jpg'
import './header.css';

function Header1(){
    return(
        <div className='cabecera'>
        <img src={logo} className="imgHeader"alt="" />
        </div>
    )
}
export default Header1;