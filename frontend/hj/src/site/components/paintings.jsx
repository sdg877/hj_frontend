import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Paintings = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  return (
    <div>
      <h1>Paintings</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Painting ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available for paintings.</p>
        )}
      </div>
    </div>
  );
};

export default Paintings;
