import React from "react";
import "../../App.css";
import collageCards from "../../assets/collage-cards.jpg";
import collagePaintings from "../../assets/collage-paintings.jpg";
import collageSculpture from "/src/assets/collage-sculpture.jpg";
import logo from "../../assets/logo.jpeg";
import logoWriting from "../../assets/logo-writing.jpeg";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="logo-container">
        <img
          src={logoWriting}
          alt="Logo Writing"
          className="homepage-logo-writing"
        />
        <img src={logo} alt="Logo" className="homepage-logo" />
      </div>

      {/* Image Gallery */}
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
          <Link to="/paintings">
            <img
              src={collagePaintings}
              alt="Collage Paintings"
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
      </div>

      <Link to="/about" className="about-link">
        <span className="arrow">&#8595;</span>
      </Link>
    </div>
  );
};

export default Homepage;
