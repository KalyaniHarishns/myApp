import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/News">
            Home
          </Link>
        </li>
        <li>
          <Link to="/saved">
            Saved
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>
      </ul>

    </div>
   
     
     
     

     </>
  );
};

export default Sidebar;
