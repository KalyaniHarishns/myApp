import React, { useState, useEffect } from 'react';

// Mock API endpoint for news updates
const API_ENDPOINT = 'https://api.example.com/news-updates'; // Replace with your actual API endpoint

const App = () => {
  const [savedChannels, setSavedChannels] = useState([]);
  const [newsChannels] = useState([
    { id: 1, name: 'CNN' },
    { id: 2, name: 'BBC' },
    { id: 3, name: 'Al Jazeera' },
    // Add more channels if needed
  ]);
  
  const [updates, setUpdates] = useState({}); // Track updates for each channel
  const [loading, setLoading] = useState(false); // Loading state for API calls
  const [error, setError] = useState(null); // Error state for API calls

  useEffect(() => {
    // Load saved channels from localStorage
    const storedChannels = JSON.parse(localStorage.getItem('savedChannels')) || [];
    setSavedChannels(storedChannels);

    // Fetch news updates from the API
    const fetchUpdates = async () => {
      setLoading(true);
      try {
        const response = await fetch(API_ENDPOINT);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Assuming the API returns data in the format { channelId: [updates] }
        setUpdates(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
  }, []);

  const handleSaveChannel = (channel) => {
    const newSavedChannels = [...savedChannels, channel];
    setSavedChannels(newSavedChannels);
    localStorage.setItem('savedChannels', JSON.stringify(newSavedChannels));
  };

  const handleRemoveChannel = (id) => {
    const updatedChannels = savedChannels.filter(channel => channel.id !== id);
    setSavedChannels(updatedChannels);
    localStorage.setItem('savedChannels', JSON.stringify(updatedChannels));
  };

  return (
    <div>
      <h1>News Channels</h1>
      <div>
        {newsChannels.map((channel) => (
          <div key={channel.id}>
            <span>{channel.name}</span>
            <button onClick={() => handleSaveChannel(channel)}>Save</button>
          </div>
        ))}
      </div>

      <h2>Saved Channels</h2>
      <div>
        {loading && <p>Loading updates...</p>}
        {error && <p>Error fetching updates: {error}</p>}
        {savedChannels.length === 0 ? (
          <p>No channels saved.</p>
        ) : (
          savedChannels.map((channel) => (
            <div key={channel.id}>
              <h3>{channel.name}</h3>
              <button onClick={() => handleRemoveChannel(channel.id)}>Remove</button>
              <div>
                {updates[channel.id] ? (
                  <ul>
                    {updates[channel.id].map((update, index) => (
                      <li key={index}>{update}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No updates available.</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
