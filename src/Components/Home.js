import React from 'react'
import Navbar from './Navbar';
import searchbtn from './Assets/Search.jpg';
import logo from'./Assets/Logo.png';
import './Navbar.css';
import News from './Assets/News.jpg';
import WorldNews from './Assets/WorldNews.jpg';
import FakeNews from './Assets/FakeNews.jpg';
import SportsNews from './Assets/SportsNews.jpg';
import LiveStream from './Assets/LiveStream.jpg';
const Home = () => {
  return (
    <>
   
    <div className="searchbtn">
    <button className="search-button"> <img src={searchbtn}></img>Search for anything...
     </button>
    
     <div className="logo">
                <img src={logo}></img> 
            </div>
            </div>
            <div className="header">
    <h1>Explore Channels</h1>
    <p><a>See all</a> </p>

    </div>
    <div className="News">
                <img src={News}></img> 
            </div>
            <div className="WorldNews">
                <img src={WorldNews}></img> 
            </div>
            <div className="FakeNews">
                <img src={FakeNews}></img> 
            </div>
            <div className="SportsNews">
                <img src={SportsNews}></img> 
            </div>
            <div className="LiveStream">
                <img src={LiveStream}></img> 
            </div>
            <Navbar/> 
    </>
    
  )
}

export default Home


    


