import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

const Textiles = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/gallery/textiles`);
        setImages(response.data.images || []);
        setLoading(false);
      } catch (err) {
        setError("Error fetching images.");
        setLoading(false);
      }
    };

    fetchImages();
  }, []); 

  return (
    <div>
      <h1>Textiles</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Textile ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available for textiles.</p>
        )}
      </div>
    </div>
  );
};

export default Textiles;
