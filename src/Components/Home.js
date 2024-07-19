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
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NewsChannel from './NewsChannel';

const Home = () => {
    
  return (
    <>
 
    <div className="searchbtn">
    <button className="search-button"> <img src={searchbtn}></img>Search for anything...
     </button>
     </div>
     <div className="logo">
                <img src={logo}></img> 
                </div>
                <div className='container'> 
            <div className="header1">
           
            <h1>Explore Channels</h1>
    {/* <p><a>See all</a> </p> */}
    </div>
   
    <div className="News">
  <Link to="https://newsapi.org">  <img src={News}></img> </Link>
                {/* <img src={News}></img>  */}
                
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
           
            <div className="header2">
            <h2>Today's Headlines</h2>
            <p>See all</p>
            </div>
            </div>
            <Navbar/> 
            <NewsChannel/>
            
    </>
    
  )
}

export default Home


    


