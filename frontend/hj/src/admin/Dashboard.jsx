import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css"

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="dashboard-title">
        Welcome back, Heather! <br /><br />
        This is your exclusive admin dashboard.
      </h2>
      <div className="dashboard-container">
        <button
          className="dashboard-button"
          onClick={() => navigate("/admin/images")}
        >
          Manage Images
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/admin/news")}
        >
          Manage News
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
