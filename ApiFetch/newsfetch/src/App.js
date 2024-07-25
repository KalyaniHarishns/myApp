


import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar.js';
import News from'./News.js';
import './Sidebar.css';


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Sidebar/>}/>
      <Route path="/news" element={<News/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
