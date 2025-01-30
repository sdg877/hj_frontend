import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Paintings = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/paintings`;

        const response = await axios.get(url);

        setImages(response.data.images || []);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching images:", err);
        setError("Error fetching images.");
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
      <h1 className="gallery-title">Paintings</h1>
      <h5 className='gallery-sub'>Please click on an image to enlarge.</h5>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img
                src={image}
                alt={`Painting ${index + 1}`}
                onClick={() => handleImageClick(image)} 
              />
            </div>
          ))
        ) : (
          <p>No images available for paintings.</p>
        )}
      </div>

      {modalActive && (
        <div className="modal active" onClick={handleCloseModal}>
          <img src={selectedImage} alt="Enlarged Painting" />
        </div>
      )}
    </div>
  );
};

export default Paintings;
