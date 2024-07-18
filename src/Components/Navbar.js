import React from 'react';
import './Navbar.css';

import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="side-nav">
      <div className="nav-item">
        <ul>
          <li><a href="https://tracxn.com/d/companies/immensphere/">
            DashBoard
          </a>
          </li>
          <li>
            
           < a onClick={()=>navigate('./')}>Home</a>
             
          </li>
          <li>
            <a href="https://immensphere.com/about-us/">
              Explore
            </a>
          </li>
          <li>
            <a href="https://immensphere.com/#homeOurService">
              Saved</a>
          </li>

        </ul>
      </div>



    </div>


  );
};

export default Navbar;
