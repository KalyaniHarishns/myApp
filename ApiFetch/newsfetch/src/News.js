import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import './slick.css';
import './Sidebar.css';

const App = () => {
  const [channels, setChannels] = useState([]);
  const [todayNews, setTodayNews] = useState([]);
  const [featuredNews, setFeaturedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       
         const channelsResponse = await axios.get('https://newsapi.org/v2/sources?apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
         setChannels(channelsResponse?.data?.sources.slice(0, 6)); 

        const todayNewsResponse = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
        console.log('Today\'s News Response:', todayNewsResponse.data); 
        setTodayNews(todayNewsResponse?.data?.articles.slice(0, 3)); 

        
        const featuredNewsResponse = await axios.get('https://newsapi.org/v2/everything?q=featured&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
        setFeaturedNews(featuredNewsResponse?.data?.articles.slice(0, 3)); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filteredArticles = todayNews.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredNews(filteredArticles);
  };

  const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick}>
        Previous
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick}>
        Next
      </div>
    );
  };

  const carouselSettings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ],
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const displayedNews = searchQuery ? filteredNews : todayNews;
  const topNews = displayedNews.slice(0, 3); 
  const bottomNews = displayedNews.slice(0,3); 

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-actions">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={handleSearchInputChange}
              className="search-input"
            />
            <button onClick={handleSearchButtonClick} className="search-button">Search</button>
          </div>
        </div>
      </header>
      <main className="App-main">
        <section className="section">
          <h2>Explore Channels</h2>
          <div className="channels">
            {loading ? (
              <p>Loading channels...</p>
            ) : (
              <div className="channels-list">
                {channels.map(channel => (
                  <div key={channel.id} className="channel">
                    <a href={`#channel-${channel.id}`} className="channel-link"></a>
                   <img src={`https://via.placeholder.com/150?text=${channel.name}`} alt={channel.name} className="channel-img" />
                    
                    <div className="channel-name">{channel.name}</div>
                    <div className="channel-description">{channel.description}</div>
                    <a href="#see-all" className="see-all-link">See All</a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <h2>Today's Updates</h2>
          <div className="news">
            {loading ? (
              <p>Loading today's news...</p>
            ) : (
              <div className="news-list">
                <div className="news-top">
                  {topNews.map((article, index) => (
                    <div key={index} className="news-item">
                       <img
                        src={article.urlToImage || 'https://via.placeholder.com/150?text=News'}
                        alt={article.title || 'News Image'}
                        className="news-item-img"
                      /> 
                     
                      <h3 className="news-item-title">{article.title}</h3>
                      <p className="news-item-description">{article.description}</p>
                      <a className="news-item-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                  ))}
                </div>
                <div className="news-bottom">
                  {bottomNews.map((article, index) => (
                    <div key={index} className="news-item">
                      <img
                        src={article.urlToImage || 'https://via.placeholder.com/40x20?text=News'}
                        alt={article.title || 'News Image'}
                        className="news-item-img"
                      />
                      <h3 className="news-item-title">{article.title}</h3>
                      <p className="news-item-description">{article.description}</p>
                      <a className="news-item-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section">
          <h2>Featured News</h2>
          <div className="news">
            {loading ? (
              <p>Loading featured news...</p>
            ) : (
              <Slider {...carouselSettings}>
                {featuredNews.map((article, index) => (
                  <div key={index} className="news-item1">
                    <img
                      src={article.urlToImage || 'https://via.placeholder.com/40x20?text=Featured'}
                      alt={article.title || 'Featured Image'}
                      className="news-item-img1"
                    />
                    <h3 className="news-item-title1">{article.title}</h3>
                    <p className="news-item-description1">{article.description}</p>
                    <a className="news-item-link1" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
