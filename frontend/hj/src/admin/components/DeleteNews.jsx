import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../styles/Admin.css"

const DeleteNews = ({ newsItem, onNewsUpdate }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL; 
  const [loading, setLoading] = useState(false);

  const handleDeleteClick = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: Please log in first.");
      }

      const res = await fetch(
        `${backendUrl}/admin/deletenews/${newsItem._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to delete.");
      }

      toast.success("News deleted successfully!");
      onNewsUpdate();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button className="delete-button" onClick={handleDeleteClick} disabled={loading}>
      X
    </button>
  );
};

export default DeleteNews;
