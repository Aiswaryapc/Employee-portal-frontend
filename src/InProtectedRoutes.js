import { Navigate,Outlet } from "react-router-dom";


const auth = () =>{
    return localStorage.getItem("role")
}

const ProtectedRoutes = () => {
 
    const authh = auth();
    return (authh ? <Outlet /> :  <Navigate to="/" />)
}
export default ProtectedRoutes;
