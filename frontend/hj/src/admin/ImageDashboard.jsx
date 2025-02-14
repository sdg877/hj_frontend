import React from "react";
import { Link } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import DeleteImages from "./components/DeleteImages";
import "../styles/Admin.css"

const ImageDashboard = () => {
  return (
    <div className="container">
      <div className="header-container">
        <h2 className="news-page-title">Image Management</h2>
        <Link to="/admin/news">
          <button className="dashboard-button-small">
            Go to News Dashboard
          </button>
        </Link>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-panel">
          <div className="section-box">
            <ImageUpload />
          </div>
        </div>
        <div className="dashboard-panel">
          <div className="section-box">
            <DeleteImages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageDashboard;
