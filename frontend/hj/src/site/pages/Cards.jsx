import React from "react";
import Gallery from './Gallery';
import { Link } from 'react-router-dom';

const Cards = () => {
  const cardsDescription = [
    "These images are available as both cards and prints. Card size is 14 x 14 cm and they are printed on FSC paper and blank for your own message.",
    "Giglee prints are made to 14 x 14 cm and are supplied with mount card to fit frames measuring 20 x20 cm. They are printed on G.F. Smith Colourplan, high quality art paper 270g, in ‘natural’ (off white).",
    "Larger size prints are available for St. Donat’s Bay Autumn and St. Donat’s Bay Summer, which will fit an A4 size frame.",
    <span>Please <Link to="/contact" className="contact-link">get in touch</Link> to order.</span> 
  ];

  return (
    <Gallery
      endpoint="cards"
      title="Cards & Prints"
      description={cardsDescription}
    />
  );
};

export default Cards;