import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  const handleDelete = async (imageUrl) => { 

    const token = localStorage.getItem("token");
    if (token) {
      try {
        jwtDecode(token);
      } catch (err) {
        console.error("Invalid Token:", err);
      }
    }

    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/admin/delete`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { imageUrl }, 
        }
      );

      setImages((prevImages) =>
        prevImages.filter((img) => img.url !== imageUrl) // Filter by URL
      );

      toast.success(response.data.message);
    } catch (err) {
      console.error("Error deleting image:", err);
      toast.error("Failed to delete image");

      if (err.response) {
        console.error("Response data:", err.response.data);
        console.error("Response status:", err.response.status);
        console.error("Response headers:", err.response.headers);
      } else if (err.request) {
        console.error("Request:", err.request);
      } else {
        console.error("Error message:", err.message);
      }
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
              <img src={image.url} alt={`Image ${index}`} className="image-thumbnail" onError={(e) => console.error("Image load error:", e)} />
              <p className="image-category">{image.category}</p>
              <button onClick={() => handleDelete(image.url)} className="delete-button"> 
                X
              </button>
            </div>
          ))
        )}
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

export default ImageThumbnail;