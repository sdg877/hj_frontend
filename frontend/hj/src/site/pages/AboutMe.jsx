import React from "react";
import drawingImage from "../../assets/drawing.jpg";
import heatherStudio from "../../assets/heather-studio.jpeg";
import sculptureByTheSea from "../../assets/sculpture-by-the-sea.jpg";
import gumnuts from "../../assets/gumnuts.jpg"; 
import ships from "../../assets/ships.jpg"
import "../../styles/AboutCommissions.css";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-header">
        <h2 className="about-me-heading">About Heather Treharne Jones</h2>
      </div>

      <div className="about-me-content">
        <div className="text-image-container">
          <p className="about-me-text">
            Growing up in South Wales and Tanzania gave me a deep appreciation
            for the natural world—its colours, textures, and shifting
            landscapes. Today, the seascapes of South Wales continue to inspire
            my work. Whether it's the view from a cliff edge, the soft light of
            dawn on rugged coastlines, or the weathered driftwood found after a
            storm, I am drawn to capturing nature’s raw beauty.
          </p>
          <div className="image-container right">
            <img
              src={heatherStudio}
              alt="Heather in her Studio"
              className="about-main-image"
            />
            <p className="image-caption">Heather in her Studio (2025)</p>
          </div>
        </div>

        <div className="text-image-container reverse">
          <div className="image-container left">
            <img src={sculptureByTheSea} alt="Sculpture By The Sea" className="about-me-image" />
            <p className="image-caption">Sculpture By The Sea</p>
          </div>
          <p className="about-me-text">
            I studied Art History at Tate Britain and Sculpture at Camden Arts
            Centre before moving to Australia, where I earned a BA in Fine Art
            Sculpture from the University of New South Wales (1995-1997). During my time in
            Sydney, I participated in ‘Sculpture by the Sea’ (1997), an
            experience that shaped my approach to large-scale outdoor
            installations. Later, as the inaugural Artist in Residence at Mt
            Tomah Botanic Garden (2006–2007), I explored botanical themes,
            creating sculptural works such as Eucalypti 103 and Where Lightning
            Strikes, a multi-site installation inspired by the region’s World
            Heritage listing.
          </p>
        </div>

        <div className="text-image-container">
          <p className="about-me-text">
            Since returning to South Wales, I have exhibited in various galleries including:
            <br />
            St Donat’s Art Centre (2013): The Glamorgan Heritage Coast 
            <br />
            Butetown History and Art Centre (2013): We Draw
            <br />
            Llanover Hall (September 2024): Open Exhibition 
            <br />
            Cardiff MADE (December 2024): Winter Arts and Craft 
            <br /><br />
            Alongside my practice, I run a mixed-media and
            art history group in Penarth, which has been active for five years.
            My teaching experience includes sculpture, drawing, art history, and
            watercolours in adult education.
          </p>
          <div className="image-container right">
            <img src={gumnuts} alt="Clay Pieces" className="about-me-image" />
            <p className="image-caption">Mt Tomah 'Eucalypti 103'</p>
          </div>
        </div>

        <div className="text-image-container">
          <div className="image-container left">
            <img src={drawingImage} alt="Drawing" className="about-me-image-small" /> 
            <p className="image-caption">We Draw</p>

          </div>
          <div className="image-container right">
            <img src={ships} alt="Ships" className="about-me-image-small" /> 
            <p className="image-caption">Where Lightning Strikes </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
