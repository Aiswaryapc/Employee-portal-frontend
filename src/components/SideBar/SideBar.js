import React from 'react'
import "./SideBar.css";
import { List ,Users,Box,FolderPlus, Home} from 'react-feather';

function SideBar() {
  return (
    <div className='sidebar'>
       <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h1 className='sidebarTitle'>
                Dashboard
            </h1>
            <ul className='sidebarList'>
            <li className='sidebarListItems active'>
                    <Home/>
                    Home
                </li>
                <li className='sidebarListItems'>
                    <Users/>
                    Employees
                </li>
                <li className='sidebarListItems'>
                    <Box/>
                    Products
                    
                </li>
                <li className='sidebarListItems'>
                    <FolderPlus/>
                    Projects
                </li>
                <li className='sidebarListItems'>
                    <FolderPlus/>
                    Projects
                </li>
                <li className='sidebarListItems'>
                    <FolderPlus/>
                    Projects
                </li>
            </ul>
        </div>
       </div>



        
      
    </div>
  )
}

export default SideBar
