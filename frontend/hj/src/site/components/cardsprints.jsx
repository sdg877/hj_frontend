import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../App.css";

const Cardsprints = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/cardsprints`;

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

  return (
    <div>
      <h1>Cards & Prints</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Category ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available for cardsprints.</p>
        )}
      </div>
    </div>
  );
};

export default Cardsprints;
