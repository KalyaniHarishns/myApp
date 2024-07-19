


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NewsItem from './Newsitem'



const NewsChannel = () => {
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
          try{
            const response = await axios.get(`https://newsapi.org/v2/everything?q=politics&apiKey=eb1be1c8ad3c4d948afcf48ca3908dc1`)
            setArticles(response?.data?.articles)
        } catch(e) {
          console.log(e);
        }
      }

        getArticles()
    }, [])
    return (
        <div>
            {articles.map((article,index) => {
                return <NewsItem key={index}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage} 
                    />
                
            })}
        </div>
    )
}

export default NewsChannel
