import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import EditNews from "./components/EditNews"; 
import NewsUpdate from "./components/NewsUpdate";
import { ToastContainer, toast } from "react-toastify";
import "../styles/Admin.css"
import "react-toastify/dist/ReactToastify.css";

const NewsDashboard = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${backendUrl}/news`);
      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to fetch news.");
      }
      const data = await res.json();

      if (data && (data.news || data.newsItem)) {  
        const news = data.news || [data.newsItem];

        const allNewsItems = Array.isArray(news) 
          ? news.flatMap(item => item.newsUpdates || (item.newsItem ? [item.newsItem] : [])) 
          : (news.newsUpdates || (news.newsItem ? [news.newsItem] : [])); 

        setNewsItems(allNewsItems);
      } else {
        console.error("Unexpected data structure from backend:", data);
        setError("Unexpected data from the server.");
      }
    } catch (err) {
      console.error("Error fetching news:", err);
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [backendUrl]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const handleNewsAdded = useCallback((newNewsItem) => {
    fetchNews();
    toast.success("News added successfully!");
  }, [fetchNews]);

  const reversedNewsItems = [...newsItems].reverse();

  return (
    <div className="container">
      <div className="header-container">
        <h2 className="news-page-title">News Management</h2>
        <Link to="/dashboard/images">
          <button className="dashboard-button-small">
            Go to Image Dashboard
          </button>
        </Link>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="section-box">
            <h3>Add News</h3>
            <NewsUpdate onNewsAdded={handleNewsAdded} />
          </div>
        </div>
        <div className="dashboard-panel">
          <div className="section-box">
            <h3>Existing News Updates</h3>
            {loading && <div>Loading news...</div>}
            {error && <div>Error: {error}</div>} 
            {newsItems.length === 0 && !loading && !error ? ( 
              <p>No news added</p>
            ) : null} 
            {reversedNewsItems.map((newsItem) => (
              <div key={newsItem._id} className="section-box">
                <h3 className="news-item-title">{newsItem.title}</h3>
                <p className="news-item-comment">{newsItem.comment}</p>
                <EditNews newsItem={newsItem} onNewsUpdate={fetchNews} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default NewsDashboard;
