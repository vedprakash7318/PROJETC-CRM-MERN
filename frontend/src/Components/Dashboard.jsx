import React from 'react'
import './CSS/Dashboard.css'
import {NavLink, useNavigate} from 'react-router-dom'
const Dashboard = ({children}) => {
    const naviagate=useNavigate()
    const routes=[
        {
            title:"Home",
            path:"/",
        },
        {
            title:"Form",
            path:"/form"
        },
        {
            title:"Products",
            path:"/product"
        }
    ]
    const handleLogout=()=>{
        // localStorage.removeItem("token")
        localStorage.clear()
        naviagate('/')
    }
  return (
    <>
    <div className='dashboard-outer'>
        <div className="sidebar">
            <div className='logo'>DASHBOARD</div>
            {routes.map((item)=>{
                return(
                <NavLink
                key={item.path}
                className='sidebar-item'
                to={item.path}
                >
                {item.title}
                </NavLink>
            )})}
        </div>
        <div className="main-content">
            <div className="header">
                <button className='logout-btn' onClick={handleLogout}>Logout</button>
            </div>
            <div className="content">
                {children}
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard