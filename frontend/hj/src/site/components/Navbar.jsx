// NAVBAR with original logo
// 
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import logoWriting from "../../assets/logo-writing.jpeg";
// import logo from "../../assets/logo.jpeg";

// const Navbar = () => {
//   const location = useLocation();

//   if (location.pathname.startsWith("/login")) {
//     return null;
//   }

//   const links = [
//     { to: "/paintings", label: "Paintings" },
//     { to: "/sculptures", label: "Sculptures" },
//     { to: "/cards", label: "Cards & Prints" },
//     { to: "/news", label: "News" },
//     { to: "/about", label: "About" },
//     { to: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         {links.map(({ to, label }) =>
//           location.pathname !== to ? (
//             <li key={to} className="navbar-item">
//               <Link to={to} className="navbar-link">
//                 {label}
//               </Link>
//             </li>
//           ) : null
//         )}
//       </ul>
//       <div className="logo-container">
//         <img src={logoWriting} alt="Logo Writing" className="logo-writing" />
//         <img src={logo} alt="Logo" className="logo" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const location = useLocation();

  if (location.pathname.startsWith("/login")) {
    return null;
  }

  const adminLinks = [
    { to: "/sculptures", label: "Sculptures" },
    { to: "/cards", label: "Cards & Prints" },
    { to: "/textiles", label: "Textiles" },
    { to: "/paintings", label: "Paintings" },
  ];

  const generalLinks = [
    { to: "/about", label: "About" },
    { to: "/news", label: "News" },
    { to: "/contact", label: "Contact" },
  ];

  const isAdmin = location.pathname.startsWith("/admin");

  const links = isAdmin ? adminLinks : [
    ...adminLinks,
    ...generalLinks,
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
        <div className="logo-writing">htreharnejones</div>
        <img src={logo} alt="Logo" className="logo" />
      </div>
    </nav>
  );
};

export default Navbar;
