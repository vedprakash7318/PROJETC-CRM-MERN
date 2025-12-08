import React, { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Users,
  ChevronDown
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import './CSS/Dashboard.css';

const Dashboard = ({ children }) => {

  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [routes, setRoutes] = useState([]); 

  const dropdownRef = useRef(null);
  const supperAdmin = [
    { label: 'Dashboard', path: '/supper-dashboard' },
    { label: 'Country', path: '/country' },
    { label: 'State', path: '/state' },
    { label: 'City', path: '/city' },
    { label: 'Manage Admin', path: '/manage-admin' },
  ];
  
  const Admin = [
    { label: 'Leads', path: '/leads' },
    { label: 'Admin Main', path: '/main-page' },
    { label: 'Admin Ved', path: '/ved' },
    { label: 'Admin Product', path: '/product' },
  ];

  const Employee = [
    { label: 'Employee Main', path: '/main-page' },
    { label: 'Employee Profile', path: '/profile' },
    { label: 'Employee Product', path: '/product' },
  ];

  // Apply role-based menu
  useEffect(() => {
    const role = localStorage.getItem('role');

    if (role === 'supper_admin') setRoutes(supperAdmin);
    else if (role === 'admin') setRoutes(Admin);
    else setRoutes(Employee);
  }, []);

  // Logout 
  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Mobile check
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);


  return (
    <div className="dashboard">

      {/* Overlay */}
      {isSidebarOpen && isMobile && (
        <div className="overlay" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'} ${isMobile ? 'mobile' : ''}`}>
        <div className="sidebar-content">

          <div className="sidebar-header">
            {isSidebarOpen && (
              <div className="logo">
                <div className="logo-icon">D</div>
                <h2>Dashboard</h2>
              </div>
            )}
            {!isSidebarOpen && !isMobile && (
              <div className="logo-icon">D</div>
            )}
          </div>

          {/* ⭐ ROLE BASED MENU LIST */}
          <nav className="nav">
            <ul>
              {routes.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-btn ${isActive ? 'active' : ''} ${!isSidebarOpen ? 'collapsed' : ''}`
                    }
                    onClick={() => isMobile && setIsSidebarOpen(false)}
                  >
                    <Users className="nav-icon" />
                    {isSidebarOpen && <span>{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {isSidebarOpen && (
            <div className="sidebar-footer">
              <div className="upgrade-banner">
                <button onClick={handleLogout}>Logout</button>
              </div>
            </div>
          )}

        </div>
      </aside>

      {/* Main Content */}
      <div className={`main ${isSidebarOpen && !isMobile ? 'expanded' : isMobile ? 'mobile' : 'collapsed'}`}>

        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="header-left">
              <button className="menu-btn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? <X /> : <Menu />}
              </button>
              <h1 className="title">Welcome Back!</h1>
            </div>

            {/* Dropdown */}
            <div className="header-right" ref={dropdownRef}>
              <div className="user" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <div className="avatar">AD</div>
                <div className="user-info">
                  <p>Admin</p>
                  <p>Panel</p>
                </div>
                <ChevronDown />
              </div>

              {isDropdownOpen && (
                <div className="dropdown-menu">
                  <ul>
                    <li onClick={() => navigate("/profile")}>Profile</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>
    </div>
  );
};

export default Dashboard;
