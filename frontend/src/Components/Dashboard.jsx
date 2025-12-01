import React, { useEffect, useState } from 'react'
import './CSS/Dashboard.css'
import {NavLink, useNavigate} from 'react-router-dom'
const Dashboard = ({children}) => {
    const naviagate=useNavigate()
    const [routes,setRoutes]=useState(null)
   
    useEffect(()=>{
    const role= localStorage.getItem('role')
         if(role=='supper_admin'){
        setRoutes(supperAdmin)
    }
    else if(role=='admin'){
        setRoutes(Admin)
    }
    else{
        setRoutes(Employee)
    }
    },[])
    const supperAdmin=[
        {
            title:"Dashboard",
            path:"/supper-dashboard",
        },
        {
            title:"Country",
            path:"/country"
        },
        {
            title:"Manage Admin",
            path:"/manage-admin"
        }
    ]
    const Admin=[
        {
            title:"Admin",
            path:"/main-page",
        },
        {
            title:"Adminved",
            path:"/ved"
        },
        {
            title:"Admin",
            path:"/product"
        }
    ]
    const Employee=[
        {
            title:"Employee",
            path:"/main-page",
        },
        {
            title:"Employee",
            path:"/profile"
        },
        {
            title:"Employee",
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
            {routes?.map((item)=>{
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