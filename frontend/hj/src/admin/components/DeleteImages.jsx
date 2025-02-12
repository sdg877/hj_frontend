import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../site/components/Spinner";

const DeleteImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
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
        prevImages.filter((img) => img.url !== imageUrl)
      );
      toast.success(response.data.message);
    } catch (err) {
      console.error("Error deleting image:", err);
      toast.error("Failed to delete image");
    }
  };

  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1);
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      </div>
    );
  }

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Delete Images</h2>
      <div className="image-grid">
        {images.length === 0 ? (
          <p>No images available.</p>
        ) : (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-thumbnail-container">
                <img
                  src={image.url}
                  alt={`Image ${index}`}
                  className="image-thumbnail"
                  loading="lazy"
                  onError={(e) => console.error("Image load error:", e)}
                  onLoad={handleImageLoad}
                />
              </div>
              <p className="image-category">{image.category}</p>
              <button
                onClick={() => handleDelete(image.url)}
                className="delete-button-images"
              >
                X
              </button>
            </div>
          ))
        )}
      </div>

      {imagesLoaded < images.length && (
        <div>
          <div>
            <Spinner />
          </div>
        </div>
      )}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default DeleteImages;
