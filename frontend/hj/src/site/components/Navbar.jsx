//  NAVBAR WITHOUT GALLERY DROPDOWN

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
//           <li key={to} className="navbar-item">
//             <Link to={to} className="navbar-link">
//               {label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  if (location.pathname.startsWith('/login')) {
    return null;
  }

  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/news', label: 'News' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map(({ to, label }) => (
          <li key={to} className="navbar-item">
            {label === 'Gallery' ? (
              // Dropdown for Gallery
              <div
                className="dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link to={to} className="navbar-link">
                  {label}
                </Link>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <ul>
                      <li><Link to="/sculptures" className="dropdown-link">Sculptures</Link></li>
                      <li><Link to="/paintings" className="dropdown-link">Paintings</Link></li>
                      <li><Link to="/cards&prints" className="dropdown-link">Cards & Prints</Link></li>
                      <li><Link to="/textiles" className="dropdown-link">Textiles</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              // Regular links
              <Link to={to} className="navbar-link">
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
