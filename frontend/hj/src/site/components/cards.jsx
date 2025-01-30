import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";
import Spinner from "./Spinner"; 

const Cards = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/cards`;

        const response = await axios.get(url);

        setImages(response.data.images || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("Error fetching categories.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalActive(true);
  };

  const handleCloseModal = () => {
    setModalActive(false);
  };

  return (
    <div>
      <h1 className="gallery-title">Cards & Prints</h1>
      <h5 className="gallery-sub">Please click on an image to enlarge.</h5>

      {loading && <Spinner />} 

      {error && <p>{error}</p>}

      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image}
                alt={`Category ${index + 1}`}
                onClick={() => handleImageClick(image)}
                loading="eager" 
                onLoad={() => setLoading(false)} 
                style={loading ? { display: "none" } : {}} 
              />
            </div>
          ))
        ) : (
          <p>No images available for cards/prints.</p>
        )}
      </div>

      {modalActive && (
        <div className="modal active" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Enlarged Category" />
        </div>
      )}
    </div>
  );
};

export default Cards;
