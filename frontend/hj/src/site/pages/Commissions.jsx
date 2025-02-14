import React from "react";
import { Link } from "react-router-dom";
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
            I have worked on various commissions and enjoy collaborating with clients to bring their ideas to life, creating unique and personalized artworks.
            <br /><br />
            Recently, I was commissioned by Katherine Pooley Design Studio to create a diptych on canvas. The brief called for a geometric design, with images and swatches provided for precise color matching. Using acrylic paint, I layered colors to achieve subtle blends and depth.
          </p>
        </div>

        <div className="text-image-container">
          <p className="commissions-text">
            For a nature-inspired project, a client requested a pair of lovebirds made from recycled materials. To achieve this, I assembled scrap metals to form the birds and mounted them on driftwood.
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
            Another commission allowed me to work directly in the landscape. The brief was to integrate a bird sculpture within a woodland setting. I constructed a metal base and used wire to secure pine cones and seed pods, with most of the materials sourced from the garden.
            <br /><br />
            If you’re interested in commissioning a piece, please <Link to="/contact" className="contact-link">get in touch</Link> to discuss your ideas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commissions;