import React from "react";
import cardImage from "../../assets/card.jpg";
import drawingImage from "../../assets/drawing.jpg";
import paintingImage from "../../assets/painting.jpg";
import "../../App.css"; 

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2 className="about-me-heading">
        About The Artist - Heather Treharne Jones
      </h2>

      <div className="about-me-content">
        <div className="text-image-container">
          <p className="about-me-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <div className="image-container right">
            <img src={cardImage} alt="Card" className="about-me-image" />
          </div>
        </div>

        <div className="text-image-container reverse">
          <div className="image-container left">
            <img src={drawingImage} alt="Drawing" className="about-me-image" />
          </div>
          <p className="about-me-text">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Neque porro quisquam
            est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et
            dolore magnam aliquam quaerat voluptatem.
          </p>
        </div>

        <div className="text-image-container">
          <p className="about-me-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <div className="image-container right">
            <img
              src={paintingImage}
              alt="Painting"
              className="about-me-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
