import React from "react";
import commission1 from "../../assets/commission1.jpg";
import commission2 from "../../assets/commission2.jpg";
import commission3 from "../../assets/commission3.jpg";
import "../../App.css";

const Commissions = () => {
  return (
    <div className="commissions-container">
      <div className="commissions-header">
        <h2 className="commissions-heading">Commissions</h2>
      </div>

      <div className="commissions-content">
        <div className="text-image-container reverse">
          <div className="image-container left">
            <img
              src={commission1}
              alt="Geometric Diptych Commission"
              className="commissions-main-image"
            />
            <p className="image-caption">Geometric Diptych Commission</p>
          </div>
          <p className="commissions-text">
            I have worked on a number of commissions and enjoy discussing ideas and
            collaborating with clients to create original and personalised artworks.
            <br /><br />
            Recently, I was commissioned by Katherine Pooley Design Studio to create a
            diptych on canvas. The brief was a geometric design with images and swatches
            provided for colour matching. Working in acrylic paint and layering to create a subtle
            blend of colour and varying shades.
          </p>
        </div>

        <div className="text-image-container">
          <p className="commissions-text">
            And on a bird theme...<br /><br />
            The client had requested a pair of lovebirds, with the brief to use recycled materials.
            So for this, I assembled scrap metals to create the birds and mounted them on
            driftwood.
          </p>
          <div className="image-container right">
            <img
              src={commission2}
              alt="Lovebirds Commission"
              className="commissions-main-image"
            />
            <p className="image-caption">Lovebirds Commission</p>
          </div>
        </div>

        <div className="text-image-container reverse">
          <div className="image-container left">
            <img
              src={commission3}
              alt="Woodland Bird Commission"
              className="commissions-main-image"
            />
            <p className="image-caption">Woodland Bird Commission</p>
          </div>
          <p className="commissions-text">
            Here was an opportunity to work directly in the landscape. The brief for this bird was
            to integrate it within a woodland setting. I constructed a metal base and wire to hold
            pine cones and seed pods. Most of the materials were found in the garden.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commissions;