import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Gallery.css"; 
import Spinner from "./Spinner"; 

const Gallery = ({ endpoint, title, description }) => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const carouselProps = {
    showThumbs: false,
    emulateTouch: true,
    infiniteLoop: true,
    showStatus: false,
    showArrows: true,
    useKeyboardArrows: true,
    swipeable: true,
    onChange: (index) => setCurrentIndex(index),
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/${endpoint}`;
        const response = await axios.get(url);

        console.log("Fetched images from API:", response.data);

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

  useEffect(() => {
    if (images && carouselRef.current) {
      const handleImageLoad = () => {
        if (typeof carouselRef.current.update === "function") {
          carouselRef.current.update();
        } else {
          window.dispatchEvent(new Event("resize")); 
        }
      };

      images.forEach((image, index) => {
        const imgElement = document.querySelector(`.slide img[alt="Image ${index}"]`);
        if (imgElement) {
          if (imgElement.complete) {
            handleImageLoad();
          } else {
            imgElement.onload = handleImageLoad;
          }
        }
      });
    }
  }, [images]);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">{title}</h1>

      <div className="gallery-info">
        {description &&
          description.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
      </div>

      {loading && <Spinner />}
      {error && <p className="gallery-error">Error: {error}</p>}

      {!loading && !error && images && images.length > 0 ? (
        <div className="carousel-container">
          <Carousel ref={carouselRef} {...carouselProps} key={images.length}>
            {images.map((image, index) => (
              <div key={index} className="slide">
                <div className="slide-content">
                  <img
                    src={image.url}
                    alt={`Image ${index}`}
                    className="gallery-image"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        !loading && !error && <p className="gallery-empty">No images available.</p>
      )}

      {images && images[currentIndex] && (
        <p className="image-description">{images[currentIndex].text}</p>
      )}
    </div>
  );
};

export default Gallery;