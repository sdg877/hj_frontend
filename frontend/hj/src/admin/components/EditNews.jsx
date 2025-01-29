import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const EditNews = ({ newsItem, onNewsUpdate }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(newsItem.title);
  const [comment, setComment] = useState(newsItem.comment);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTitle(newsItem.title);
    setComment(newsItem.comment);
  }, [newsItem]);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
    setTitle(newsItem.title);
    setComment(newsItem.comment);
  };

  const handleSaveClick = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Unauthorized: Please log in first.");
      }

      const res = await fetch(
        `${backendUrl}/admin/updatenews/${newsItem._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, comment }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Failed to update.");
      }

      toast.success("News updated successfully!");
      setEditMode(false);
      onNewsUpdate();
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {editMode ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button onClick={handleSaveClick} disabled={loading}>
            Save
          </button>
          <button onClick={handleCancelClick} disabled={loading}>
            Cancel
          </button>
        </div>
      ) : (
        <div>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditNews;
