import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Home from './Components/Home';

import Explore from './Components/Explore';
import Saved from './Components/Saved';
import Dashboard from './Components/Dashboard';


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Explore" element={<Explore/>}/>
        <Route path="/Saved" element={<Saved/>}/>
       
        <Route path="/dashboard" element={<Dashboard/>}/>
        
      
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;

