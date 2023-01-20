import React from 'react'
import './NavBar.css';
import axislogo from "../img/axislogo.png";
import SideBar from './SideBar';

function NavBar() {
  return (
    <nav className="navbar navbars navbar-expand-lg fixed-top">
    
        
        {/* <img  className="logo" src={axislogo} alt="axis logo" /> */}
        <div className="navbuttons">
        <div className='button' >Login </div>
        <div className='button' >Contact us</div>
        </div>
        <div>
          </div>
          
       </nav>
      
    
    
  )
}

export default NavBar