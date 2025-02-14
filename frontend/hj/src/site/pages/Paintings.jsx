import React from "react";
import Gallery from "./Gallery";
import { Link } from 'react-router-dom';

const Paintings = () => {
  const paintingsDescription = [
    "The Treelines series is mixed media; using collage with watercolours to add definition to forms. The Coastal series is painted in acrylics.",
    "All paintings are available as Giclee prints using a high quality art paper, G.F. Smith Colourplan in ‘natural’ 270g.",
    <span>Please <Link to="/contact" className="contact-link">get in touch</Link> for more information and orders.</span>
  ];

  return (
    <Gallery 
      endpoint="paintings" 
      title="Paintings" 
      description={paintingsDescription} 
    />
  );
};

export default Paintings;