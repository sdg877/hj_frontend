import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../App.css"; 
import Spinner from "./Spinner"; 

const Gallery = ({ endpoint, title, description }) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/${endpoint}`; 
        const response = await axios.get(url);

        const processedImages = response.data.images.map((img) => ({
          ...img,
          text: img.text ? decodeURIComponent(img.text) : "",
        }));

        setImages(processedImages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [endpoint]);

  return (
    <div>
      <h1 className="gallery-title">{title}</h1>

      <div className="gallery-info">
        {description && description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {loading && <Spinner />}
      {error && <p>Error: {error}</p>}
      {!loading && !error && images && images.length > 0 && (
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={`Image ${index}`} />
              {image.text && <p className="image-description">{image.text}</p>}
            </div>
          ))}
        </Carousel>
      )}
      {!loading && !error && (!images || images.length === 0) && (
        <p>No images available.</p>
      )}
    </div>
  );
};

export default Gallery;