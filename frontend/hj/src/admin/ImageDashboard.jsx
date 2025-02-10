import React from "react";
import { Link } from "react-router-dom";
import ImageUpload from "./components/ImageUpload";
import DeleteImages from "./components/DeleteImages";

const ImageDashboard = () => {
  return (
    <div className="container">
      <h2>Image Management</h2>
      <div className="section-box">
        <ImageUpload />
      </div>
      <div className="section-box">
        <DeleteImages />
      </div>
      <div>
        <Link to="/admin/news">
          <button className="dashboard-button-small">Go to News Dashboard</button>
        </Link>
      </div>
    </div>
  );
};

export default ImageDashboard;
