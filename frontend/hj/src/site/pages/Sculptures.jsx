import Gallery from "../components/Gallery.jsx";
import React from 'react';

const Sculptures = () => {
  const sculpturesDescription = [
    "For these sculptures, I’ve carved alabaster and limestone, assembled found objects from the shoreline, and sculpted in clay. While these sculptures are not for sale, I do accept commissions for sculptural works. Please get in touch if you would like a bespoke artwork."
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
