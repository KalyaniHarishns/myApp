 import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import './Login.css'
 
 const Login = () => {const [action, setAction] = useState("SignUp");
  const navigate = useNavigate(); 

return(
      <div className="LoginContainer">
          <div className="header">
              <div className="text">Login</div>
             </div>
           
        <div className="inputs">
  {action==="Login"?<div></div>: 
     <div className="input">
       
      <input placeholder="Email" type="Email-id"/>
  </div>}
  <div className="input">
      <input placeholder="Password" type="Password"/>
  </div>
</div>

<div className="submit-container">

<div className={action==="SignUp"?"submit gray":"submit"}onClick={()=>navigate('/')}>Login</div>
  
   
</div>
</div> 


   )

 

 }
 
 export default Login
 