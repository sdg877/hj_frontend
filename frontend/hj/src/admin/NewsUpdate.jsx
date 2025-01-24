import { useState } from "react";
import React from "react";

const NewsUpdate = () => {
  const [newsUpdates, setNewsUpdates] = useState([]); // Default to empty array
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUpdate = { title, comment };

    try {
      const response = await fetch(`${backendUrl}/admin/news`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUpdate),
      });

      if (response.ok) {
        setTitle("");
        setComment("");
        alert("News update added successfully!"); // Temporary confirmation
      } else {
        console.error("Failed to add news update");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add News Update</h2>

      {/* Form to add a news update */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 border rounded mt-1 focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add News
        </button>
      </form>

      {/* Prevent errors if newsUpdates is undefined */}
      {newsUpdates && newsUpdates.length > 0 ? (
        <ul className="space-y-4">
          {newsUpdates.map((update, index) => (
            <li key={index} className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold text-lg">{update.title}</h3>
              {update.comment && <p className="text-gray-700">{update.comment}</p>}
              <p className="text-sm text-gray-500">
                {new Date(update.timestamp).toLocaleDateString("en-GB")}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No news updates available.</p>
      )}
    </div>
  );
};

export default NewsUpdate;
