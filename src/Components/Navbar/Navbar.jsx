import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      
      
      <Link to='/' onClick={()=>{setMenu("women")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>De todo un un poquito</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        {/* <li onClick={()=>{setMenu("shop")}}><Link to='/'>Inicio</Link>{menu==="shop"?<hr/>:<></>}</li> */}
        {/* <li onClick={()=>{setMenu("mens")}}><Link to='/mens'>Hombre</Link>{menu==="mens"?<hr/>:<></>}</li> */}
        {/* <li onClick={()=>{setMenu("womens")}}><Link to="womens">Mujer</Link>{menu==="womens"?<hr/>:<></>}</li> */}
        {/* <li onClick={()=>{setMenu("accessories")}}><Link to='/accessories'>Accesorios</Link>{menu==="accessories"?<hr/>:<></>}</li> */}
      </ul>
      {/* <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div> */}
    </div>
  )
}

export default Navbar
