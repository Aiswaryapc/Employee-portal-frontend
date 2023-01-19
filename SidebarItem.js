import Sidebar from "./Sidebar";


function SidebarItem(){
    return(
        <div className="sidebar-item">
            <div className="sidebar-title">
                <span>
                    <i className="bi-bank"></i>
                    Dashboard
                </span>
                <i className="toggle-btn"></i>
            </div>
            <div className="bi-newspaper sidebar-content"> Newsfeed</div> 
            <div className="bi-people sidebar-content">Employee</div>
            <div className="bi-files sidebar-content">Documents</div>
            <div className="bi-rocket sidebar-content">Project</div>
            <div className="bi-cash-stack sidebar-content">Products</div>
            <div className="bi-box-arrow-right sidebar-content"> Logout</div>
        </div>
    )
}
export default SidebarItem;