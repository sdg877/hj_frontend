// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const Navbar = () => {
//   const location = useLocation();

//   if (location.pathname.startsWith('/login')) {
//     return null;
//   }

//   const links = [
//     { to: '/', label: 'Home' },
//     { to: '/gallery', label: 'Gallery' },
//     { to: '/news', label: 'News' },
//     { to: '/about', label: 'About' },
//     { to: '/contact', label: 'Contact' },
//   ];

//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         {links.map(({ to, label }) => (
//           location.pathname !== to && (
//             <li key={to} className="navbar-item">
//               <Link to={to} className="navbar-link">
//                 {label}
//               </Link>
//             </li>
//           )
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import logoWriting from "../../assets/logo-writing.jpeg";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/login")) {
    return null;
  }

  const links = [
    { to: "/", label: "Home" },
    { to: "/gallery", label: "Gallery" },
    { to: "/news", label: "News" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map(({ to, label }) =>
          location.pathname !== to ? (
            <li key={to} className="navbar-item">
              <Link to={to} className="navbar-link">
                {label}
              </Link>
            </li>
          ) : null
        )}
      </ul>
      <div className="logo-container">
        <img src={logoWriting} alt="Logo Writing" className="logo-writing" />
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;