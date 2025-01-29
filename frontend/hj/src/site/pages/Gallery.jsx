import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Explore My Artwork</h2>
      <h5>Click on the image to see the full collection for this category.</h5>
      <div className="gallery-grid">
        <div className="gallery-item">
          <Link to="/cards">
            <img
              src="/src/assets/collage-cards.jpg"
              alt="Collage of Cards"
              className="gallery-image"
            />
          </Link>
          <h3 className="gallery-item-title">Cards & Prints</h3>
        </div>
        <div className="gallery-item">
          <Link to="/paintings">
            <img
              src="/src/assets/collage-paintings.jpg"
              alt="Collage of Paintings"
              className="gallery-image"
            />
          </Link>
          <h3 className="gallery-item-title">Paintings</h3>
        </div>
        <div className="gallery-item">
          <Link to="/sculptures">
            <img
              src="/src/assets/collage-sculpture.jpg"
              alt="Collage of Sculptures"
              className="gallery-image"
            />
          </Link>
          <h3 className="gallery-item-title">Sculptures</h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
