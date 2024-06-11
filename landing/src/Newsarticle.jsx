import React from 'react';
import newsData from './financials.json';

const NewsArticles = () => {
    return (
        <div className="news">
            <h4>Latest News</h4>
            <div className="news-container">
                {Object.keys(newsData.news).map((articleKey) => {
                    const article = newsData.news[articleKey];
                    return (
                        <div key={articleKey} className="article">
                            <h3>Article {articleKey.replace('article', '')}</h3>
                            <p>Sentiment Score: {article.sentiment.score}</p>
                            <p>Sentiment Value: {article.sentiment.value}</p>
                            <p>Summary: {article.summary}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsArticles;
