import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../../App.css";
import Spinner from "../components/Spinner";
import { Link } from 'react-router-dom'; 

const Cards = () => {
  const [images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const endpoint = "cards"; 

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const url = `${import.meta.env.VITE_BACKEND_URL}/gallery/${endpoint}`;
        const response = await axios.get(url);

        setImages(response.data.images || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchImages();
  }, [endpoint]);

  return (
    <div>
      <h1 className="gallery-title">Cards & Prints</h1> 

      <div className="card-info">
        <h5 className="card-info-title">Seascapes of the South Wales Heritage Coastline</h5>
        <p>
          These images are available as both cards and prints. Card size is 14 x
          14 cm and they are printed on FSC paper and blank for your own
          message.
        </p>
        <p>
          Giglee prints are made to 14 x 14 cm and are supplied with mount
          card to fit frames measuring 20 x20 cm.
          <br />
          They are printed on G.F. Smith Colourplan, high quality art paper
          270g, in ‘natural’ (off white).
        </p>
        <p>
          Larger size prints are available for St. Donat’s Bay Autumn and St.
          Donat’s Bay Summer, which will fit an A4 size frame. 
          <br/><br/>
          Please <Link to="/contact" className="contact-link">get in touch</Link> to order.
        </p>
      </div>

      {loading && <Spinner />} 
      {error && <p>Error: {error}</p>} 
      {!loading && !error && images && images.length > 0 && ( 
        <Carousel>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.url} alt={`Image ${index}`} />
              {image.text && <p className="image-description">{image.text}</p>}
            </div>
          ))}
        </Carousel>
      )}
      {!loading && !error && (!images || images.length === 0) && (
        <p>No images available.</p>
      )}
    </div>
  );
};

export default Cards;