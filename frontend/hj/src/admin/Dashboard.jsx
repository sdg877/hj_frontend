import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="dashboard-title">Hi Heather. Welcome To Your Dashboard.
      </h2>
      <div className="dashboard-container">
        <button
          className="dashboard-button"
          onClick={() => navigate("/admin/images")}
        >
          Images
        </button>
        <button
          className="dashboard-button"
          onClick={() => navigate("/admin/news")}
        >
          News
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
