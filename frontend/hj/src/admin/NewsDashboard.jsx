import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditNews from "./components/EditNews";
import DeleteNews from "./components/DeleteNews";
import NewsUpdate from "./components/NewsUpdate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsDashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newsUpdated, setNewsUpdated] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${backendUrl}/news`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to fetch news.");
      }

      const data = await res.json();

      if (data.news && Array.isArray(data.news)) {
        const allNewsItems = data.news.flatMap((newsDoc) => newsDoc.newsUpdates);
        setNewsItems(allNewsItems);
      } else if (data.newsItem && Array.isArray(data.newsItem)) {
        setNewsItems(data.newsItem);
      } else if (data.newsItem) {
        setNewsItems([data.newsItem]);
      } else {
        console.error("Unexpected data structure from backend:", data);
        setError("Unexpected data from the server.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(err.message);
    } finally {
      setLoading(false);
      setNewsUpdated(false);
    }
  };

  useEffect(() => {
    fetchNews();

    const interval = setInterval(() => {
      fetchNews();
    }, 5000);

    return () => clearInterval(interval);
  }, [backendUrl, newsUpdated]);

  return (
    <div className="container">
      <h2 className="news-page-title">News Management</h2>
      <div className="section-box">
        <NewsUpdate onNewsAdded={() => setNewsUpdated(true)} />
      </div>
      {loading && <div>Loading news...</div>}
      {error && <div>Error: {error}</div>}
      {newsItems.map((newsItem) => (
        <div key={newsItem._id} className="section-box">
          <h3 className="news-item-title">{newsItem.title}</h3>
          <EditNews newsItem={newsItem} onNewsUpdate={() => setNewsUpdated(true)} />
          <DeleteNews newsItem={newsItem} refreshNews={() => setNewsUpdated(true)} />
        </div>
      ))}
      <ToastContainer />
      <div className="button-container">
        <Link to="/admin/images">
          <button className="navigate-button">Go to Image Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default NewsDashboard;
