// ORIGINAL VERSION
// import React from "react";
// import cardImage from "../../assets/card.jpg";
// import drawingImage from "../../assets/drawing.jpg";
// import heatherStudio from "../../assets/heather-studio.jpeg";
// import "../../App.css";

// const AboutMe = () => {
//   return (
//     <div className="about-me-container">
//       <div className="about-me-header">
//         <h2 className="about-me-heading">About Heather Treharne Jones</h2>
//       </div>

//       <div className="about-me-content">
//         <div className="text-image-container">
//           <p className="about-me-text">
//             Growing up in South Wales and Tanzania has instilled a love of the
//             natural environment, seascapes and colour. Seascapes of South Wales
//             are currently my source of inspiration. It can be the view from a
//             cliff edge which gives a bird’s eye view of the beach below. Dawn
//             light in a cloudless sky illuminating a cliff line. Wood and
//             detritus discovered along the beach after a storm, asking to be
//             picked up. Large rock formations and slabs, photographed, sketched
//             and painted.
//           </p>
//           <div className="image-container right">
//             <img
//               src={heatherStudio}
//               alt="Heather in her Studio"
//               className="about-main-image"
//             />
//             <p className="image-caption">Heather in her Studio (2025)</p>
//           </div>
//         </div>

//         <div className="text-image-container reverse">
//           <div className="image-container left">
//             <img src={cardImage} alt="Card" className="about-me-image" />
//           </div>
//           <p className="about-me-text">
//             Living in London, I studied Art History at Tate Britain and
//             Sculpture at Camden Arts Centre. I moved to Australia and studied
//             for a BA Fine Art Sculpture at University of New South Wales,
//             Sydney, 1995 – 1997. Participated in ‘Sculpture by the Sea’ Sydney
//             1997. I was appointed inaugural Artist in Residence at Mt Tomah
//             Botanic Garden NSW in 2006 – 2007 Exhibited ‘Eucalypti 103’ –
//             botanical sculptures of gumnuts created in response to World
//             Heritage listing given to the region in 2000. And ‘Where Lightning
//             Strikes’ a sculptural installation at seven sites across the Garden.
//           </p>
//         </div>

//         <div className="text-image-container">
//           <p className="about-me-text">
//             And returning to south Wales – key exhibitions St Donat’s Art Centre
//             2013 ‘The Glamorgan Heritage Coast’ Llanover Hall ‘Open Exhibition’
//             September 2024 Cardiff MADE ‘Winter Arts and Craft’ December 2024 I
//             currently run an art group in Penarth which has been active for five
//             years, teaching mixed media and art history. Previously taught
//             sculpture, drawing, art history and watercolours in Adult Education.
//           </p>
//           <div className="image-container right">
//             <img src={drawingImage} alt="Drawing" className="about-me-image" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;

import React from "react";
import cardImage from "../../assets/card.jpg";
import drawingImage from "../../assets/drawing.jpg";
import heatherStudio from "../../assets/heather-studio.jpeg";
import "../../App.css";

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
            <img src={cardImage} alt="Card" className="about-me-image" />
          </div>
          <p className="about-me-text">
            I studied Art History at Tate Britain and Sculpture at Camden Arts
            Centre before moving to Australia, where I earned a BA in Fine Art
            Sculpture from the University of New South Wales. During my time in
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
            Since returning to South Wales, my work has been exhibited at: 
            <br />
            St Donat’s Art Centre (2013): The Glamorgan Heritage Coast 
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
            <img src={drawingImage} alt="Drawing" className="about-me-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
