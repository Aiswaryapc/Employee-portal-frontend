import React from 'react'
import './NavBar.css';
import axislogo from "../img/axislogo.png";

function NavBar() {
  return (
    <div className='navbar'>
        
        <img  className="logo" src={axislogo} alt="axis logo" />
        <div className="navbuttons">
        <button className='button' >Login</button>
        <button className='button' >Contact us</button>
        </div>
       
    </div>
  )
}

export default NavBar
