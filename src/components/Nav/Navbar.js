import React from 'react'
import './NavBar.css';
import axislogo from "../img/axislogo.png";

import { Link } from "react-router-dom";
function NavBar() {

  const logout = () => {  localStorage.clear();
    window.location.href = '/';
  };
  return (
    <nav className="navbar navbars navbar-expand-lg fixed-top">
    <div className="navbuttons12"> AXIS SARAL</div>
        
        {/* <img  className="logo" src={axislogo} alt="axis logo" /> */}
        <div className="navbuttons">
        <Link style={{textDecoration: 'none'}} to="/"  >
                <span className="button" onClick={logout}>Logout</span>
              </Link>
        {/* <div className='button' >Contact us</div> */}
        </div>
        <div>
          </div>
          
       </nav>
      
    
    
  )
}

export default NavBar