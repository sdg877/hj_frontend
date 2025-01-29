import React, { useState } from "react";
import { toast } from "react-toastify";

const DeleteNews = ({ newsItem, refreshNews }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
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
      refreshNews();
    } catch (error) {
      console.error("Delete error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={loading}
        className="delete-button"
      >
        X
      </button>
    </div>
  );
};

export default DeleteNews;
