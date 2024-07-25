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
        setChannels(channelsResponse?.data?.sources);

        const todayNewsResponse = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
        setTodayNews(todayNewsResponse?.data?.articles);

        const featuredNewsResponse = await axios.get('https://newsapi.org/v2/everything?q=featured&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
        setFeaturedNews(featuredNewsResponse?.data?.articles);

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
    slidesToShow: 1,
    
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
          <img src="/path-to-your-logo.png" alt="Logo" className="logo" />
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
                    <img src={`https://icons.newschannel.com/ip2/${channel.id}.ico`} alt={channel.name} className="channel-img" />
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
                {(searchQuery ? filteredNews : todayNews).map((article, index) => (
                  <div key={index} className="news-item">
                    <img src="news-item-img"></img>
                    <h3 className="news-item-title">{article.title}</h3>
                    <p className="news-item-description">{article.description}</p>
                    <a className="news-item-link" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    <a href="#see-all" className="see-all-link">See All</a>
                  </div>
                ))}
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
                    <img src="news-item-img"></img>
                    <h3 className="news-item-title1">{article.title}</h3>
                    <p className="news-item-description1">{article.description}</p>
                    <a className="news-item-link1" href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                    <a href="#see-all" className="see-all-link">See All</a>
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