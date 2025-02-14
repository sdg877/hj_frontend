import React from "react";
import "../../styles/Homepage.css";
import collageCards from "../../assets/collage-cards.jpg";
import collagePaintings from "../../assets/collage-paintings.jpg";
import collageSculpture from "/src/assets/collage-sculpture.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="image-gallery-homepage">
        <div className="image-item">
          <Link to="/cards">
            <img
              src={collageCards}
              alt="Collage Cards"
              className="homepage-image"
            />
          </Link>
        </div>
        <div className="image-item">
          <Link to="/sculptures">
            <img
              src={collageSculpture}
              alt="Collage Sculpture"
              className="homepage-image"
            />
          </Link>
        </div>
        <div className="image-item">
          <Link to="/paintings">
            <img
              src={collagePaintings}
              alt="Collage Paintings"
              className="homepage-image"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
