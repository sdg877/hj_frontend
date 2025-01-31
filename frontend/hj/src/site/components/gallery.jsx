import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../App.css";
import Spinner from "./Spinner";

const Gallery = ({ endpoint, title }) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/${endpoint}`;
        const response = await axios.get(url);
        setImages(response.data.images || []); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [endpoint]);

  if (loading) {
    return (
      <div>
        <h1 className="gallery-title">{title}</h1>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="gallery-title">{title}</h1>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (images === null) { 
    return null; 
  }

  if (images.length === 0) {
    return (
      <div>
        <h1 className="gallery-title">{title}</h1>
        <p>No images available.</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="gallery-title">{title}</h1>
      <Carousel>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Gallery;
