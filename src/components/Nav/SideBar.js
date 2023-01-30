import React from 'react'
import styles from"./SideBar.module.css";
import { List ,Users,Box,FolderPlus, Home} from 'react-feather';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { FcManager } from "react-icons/fc";
import { GrStakeholder } from "react-icons/gr";

const Sidebar = () => {
  return (
    
    <div
      style={{ display: 'flex', height: '75vh', overflow: 'scroll initial' ,marginLeft:'5rem',marginTop:'8rem',marginBottom:'5rem',position:'fixed'}}
    >
      <CDBSidebar textColor="#692038" backgroundColor="#F0E5EB">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/newsfeed"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Dashboard
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/newsfeed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">NewsFeed</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/docs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Documents</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users" >
             
                Managers
              </CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/product" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="list">
               Products
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/project" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Projects
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/stakeholders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">
             
                Stakeholders
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/policies" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">
                Company Policies
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">
                Profile
              </CDBSidebarMenuItem>
            </NavLink>

            
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Axis Bank
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    
  );
};

export default Sidebar;




