import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const ImageThumbnail = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin/thumbnails`
        );

        setImages(response.data.images);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Failed to load images");
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (imageKey) => {
    console.log("Attempting to delete image with key:", imageKey);

    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        console.log("Decoded Token:", decoded);
      } catch (err) {
        console.error("Invalid Token:", err);
      }
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/admin/deleteimage`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { imageKey },
        }
      );

      console.log("Delete response:", response);

      setImages((prevImages) =>
        prevImages.filter((img) => img.Key === imageKey)
      );
      alert(response.data.message);
    } catch (err) {
      console.error("Error deleting image:", err);
      alert("Failed to delete image");
    }
  };

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Image Thumbnails</h2>
      <div className="image-grid">
        {images.length === 0 ? (
          <p>No images available.</p>
        ) : (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image.url}
                alt={`Image ${index}`}
                className="image-thumbnail"
                onError={(e) => console.error("Image load error:", e)} // Add onError handler
              />
              <p className="image-category">{image.category}</p>
              <button
                onClick={() => handleDelete(image.Key)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ImageThumbnail;
