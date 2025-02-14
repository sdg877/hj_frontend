import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DeleteNews from "./DeleteNews";
import "../../styles/Admin.css"

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
    <div className="edit-news-form">
      {editMode && (
        <div className="edit-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} className="form-textarea" />
          </div>
        </div>
      )}
      <div className="button-group">
        {editMode ? (
          <>
            <button className="admin-button" onClick={handleSaveClick} disabled={loading}>Save</button>
            <button className="admin-button" onClick={handleCancelClick} disabled={loading}>Cancel</button>
            <DeleteNews newsItem={newsItem} onNewsUpdate={onNewsUpdate} />
          </>
        ) : (
          <>
            <button className="admin-button" onClick={handleEditClick}>Edit</button>
            <DeleteNews newsItem={newsItem} onNewsUpdate={onNewsUpdate} />
          </>
        )}
      </div>
    </div>
  );
};

export default EditNews;