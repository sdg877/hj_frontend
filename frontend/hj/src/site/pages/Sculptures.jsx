import Gallery from "../components/Gallery.jsx";
import React from 'react';

const Sculptures = () => {
  const sculpturesDescription = [
    "For these sculptures, I’ve carved alabaster and limestone, assembled found objects from the shoreline, and sculpted in clay.",
    "While these sculptures are not for sale, I do accept commissions for sculptural works.",
    <span>Please <a href='/contact' className='contact-link'>get in touch</a> if you would like a bespoke artwork.</span> // Corrected line
  ];

  return (
    <Gallery 
      endpoint="sculptures"  
      title="Sculptures"   
      description={sculpturesDescription}
    />
  );
};

export default Sculptures;