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
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredImages =
    selectedCategory === ""
      ? images
      : images.filter((image) => image.category === selectedCategory);

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
      <h4>Delete Images</h4>

      {/* Category Dropdown */}
      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="cards">Cards & Prints</option>
          <option value="paintings">Paintings</option>
          <option value="sculptures">Sculptures</option>
          <option value="textiles">Textiles</option>
        </select>
      </div>

      <div className="image-grid">
        {filteredImages.length === 0 ? (
          <p>No images available in this category.</p>
        ) : (
          filteredImages.map((image, index) => (
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

      {imagesLoaded < filteredImages.length && (
        <div>
          <Spinner />
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
