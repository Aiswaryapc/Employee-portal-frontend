import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Authentication/Login';
import SignUp from "./components/Authentication/Signup";
import SideBar from "./components/Nav/SideBar";
import Newsfeed from "./components/NewsFeed/Newsfeed";
import Project from "./components/Project/Project";
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from "./components/Nav/Navbar";
import Employee from "./components/Employee/Employee";
import Stakeholders from "./components/Stakeholders/Stakeholders";
import AddNews from "./components/Admin/AddNews";
import AddProduct from "./components/Admin/AddProduct";
import AddProject from "./components/Admin/AddProject";
import AddStakeholder from "./components/Admin/AddStakeholder";
import ProtectedRoutes from "./InProtectedRoutes";

import Product from "./components/Product/Product";
import Profile from "./components/Profile/Profile";
import Documents from "./components/Documents/Documents";
import AddEmployee from "./components/Admin/AddEmployee";
import Policies from "./components/Policies/Policies";
import EditProfile from "./components/Profile/EditProfile";

function App() {
  
  return (
    
     
      
    <Router>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      
      
      <SideBar />
      {/* <NavBar/> */}
      <Routes>
        
     
      <Route element={<ProtectedRoutes />}>
        
        <Route path="/newsfeed" element={<Newsfeed/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/employee" element={<Employee/>} />
        <Route path="/stakeholders" element={<Stakeholders/>} />

        <Route path="/addNews" element={<AddNews/>} />
        <Route path="/addProduct" element={<AddProduct/>} />
        <Route path="/addProject" element={<AddProject/>} />
        <Route path="/addStakeholder" element={<AddStakeholder/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/docs" element={<Documents/>} />
        <Route path="/addEmployee" element={<AddEmployee/>} />
        <Route path="/policies" element={<Policies/>} />
        <Route path="/editProfile" element={<EditProfile/>} />

       
        
        </Route>
        </Routes>
      </Router>
    
  );
}

export default App;
