import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

const Sculptures = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/gallery/sculptures`);
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
      <h1>Sculptures</h1>
      {loading && <p>Loading images...</p>}
      {error && <p>{error}</p>}
      <div className="image-gallery">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`Sculpture ${index + 1}`} />
            </div>
          ))
        ) : (
          <p>No images available for sculptures.</p>
        )}
      </div>
    </div>
  );
};

export default Sculptures;
