
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';
import globe from './globe.jpg';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true); 
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); 
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen); 
  };

  return (
    <>{!isSidebarOpen ? 
    <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar" style={{backgroundColor: 'black'}}></div>
          <div className="bar" style={{backgroundColor: 'black'}}></div>
          <div className="bar" style={{backgroundColor: 'black'}}></div>
        </div> :
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h1>DAILY</h1>
        <div className="globe">
          <img src={globe} alt='Globe' />
        </div>
        <div className="hamburger" onClick={toggleSidebar}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/News">Home</Link> 
        </li>
        <li>
          <Link to="/saved">Saved</Link>
         
        </li>
        <li>
          <Link to="/Explore">Explore</Link>
        </li>
        <li>
          <Link to="/Notifications">Notifications </Link>
        </li>
        <li>
          <Link to="/Settings">Settings </Link>
        </li>
        <li>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>}
    </>
  );
};

export default Sidebar;
