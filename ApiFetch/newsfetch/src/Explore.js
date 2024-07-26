import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const App = () => {
    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedChannel, setSelectedChannel] = useState(null); // State for selected channel
    const [news, setNews] = useState([]); // State for news articles
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const channelsResponse = await axios.get('https://newsapi.org/v2/sources?apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1');
                setChannels(channelsResponse?.data?.sources);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleChannelClick = async (channelId) => {
     
         try {
             const newsResponse = await axios.get(`https://newsapi.org/v2/everything?sources=${channelId}&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1`);
             setNews(newsResponse?.data?.articles);
             setSelectedChannel(channelId);
         } catch (error) {
             console.error('Error fetching news:', error);
         }
     };

    const handleExplore = () => {
        navigate('/Explore'); 
    };

    return (
        <section className="section">
            <h2>Explore Channels</h2>
            <div className="channels">
                {loading ? (
                    <p>Loading channels...</p>
                ) : (
                    <div className="channels-list">
                        {channels.map(channel => (
                            <div key={channel.id} className="channel">
                                <a href={`#channel-${channel.id}`} className="channel-link" onClick={() => handleChannelClick(channel.id)}>
                                    <img
                                        src={`https://via.placeholder.com/150?text=${channel.name}`}
                                        alt={channel.name}
                                        className="channel-img"
                                    />
                                    <div className="channel-name">{channel.name}</div>
                                    {/* <div className="channel-description">{channel.description}</div> */}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="submit" onClick={handleExplore}>
              
            </div>

            {selectedChannel && (
                <div className="news-section">
                    <h3>News from {channels.find(channel => channel.id === selectedChannel)?.name}</h3>
                    <div className="news-list">
                        {news.length === 0 ? (
                            <p>No news available.</p>
                        ) : (
                            news.map((article, index) => (
                                <div key={index} className="news-article">
                                    <h4>{article.title}</h4>
                                    {/* <p>{article.description}</p> */}
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};


export default App;
