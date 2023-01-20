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

const Sidebar = () => {
  return (
    
    <div
      style={{ display: 'flex', height: '75vh', overflow: 'scroll initial' ,marginLeft:'5rem',marginTop:'5rem',marginBottom:'5rem',position:'fixed'}}
    >
      <CDBSidebar textColor="#692038" backgroundColor="#F0E5EB">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/newsfeed"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Sidebar
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/newsfeed" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">NewsFeed</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/employee" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Employees</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Documents</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Managers
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
               Products
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/project" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Projects
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/stakeholders" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Stakeholders
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
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




