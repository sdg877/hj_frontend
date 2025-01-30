import React, { useEffect, useState } from 'react';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/news`);

        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }

        const data = await response.json();

        if (data.news && data.news.length > 0) {
          const sortedNews = data.news[0].newsUpdates.sort(
            (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
          );
          setNews(sortedNews);
        } else {
          setError('No news available');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p className="news-loading">Loading news...</p>;
  }

  if (error) {
    return <p className="news-error">Error: {error}</p>;
  }

  return (
    <div className="news-page-container">
      <h2 className="news-page-title">Latest News</h2>
      <div className="news-page-list">
        {news.length > 0 ? (
          news.map((newsItem) => (
            <div key={newsItem._id} className="news-item">
              <h3 className="news-item-title">{newsItem.title}</h3>
              <p className="news-item-comment">{newsItem.comment}</p>
              <p className="news-item-date">
                <small>{new Date(newsItem.timestamp).toLocaleDateString()}</small>
              </p>
            </div>
          ))
        ) : (
          <p className="news-empty">No news available.</p>
        )}
      </div>
    </div>
  );
};

export default News;
