import React, { useState } from "react";
import { toast } from "react-toastify";
import "../../App.css";
import "react-toastify/dist/ReactToastify.css";

const NewsUpdate = ({ onNewsAdded }) => {
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized: Please log in first.");
      return;
    }

    const newUpdate = { title, comment };

    try {
      const response = await fetch(`${backendUrl}/admin/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newUpdate),
      });

      if (response.ok) {
        setTitle("");
        setComment("");
        try {
          const newNewsItem = await response.json();
          if (onNewsAdded) {
            onNewsAdded(newNewsItem); 
          }
        } catch (jsonError) {
          console.error("Error parsing JSON:", jsonError);
          toast.error("An error occurred while processing the response.");
        }
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to add news update.");
      }
    } catch (error) {
      toast.error("Error occurred while adding news update.");
    }
  };

  return (
    <div className="news-update-container">
      <form onSubmit={handleSubmit} className="news-form">
        <div className="form-group">
          <label className="label">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label className="label">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            className="input-field"
          ></textarea>
        </div>
        <div className="button-wrapper">
          <button type="submit" className="submit-button">
            Add News
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsUpdate;
