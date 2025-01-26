// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/news', label: 'News' },
    { to: '/about', label: 'About Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {links.map(({ to, label }) => (
          to !== location.pathname && (
            <li key={to} className="navbar-item">
              <Link to={to} className="navbar-link">
                {label}
              </Link>
            </li>
          )
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
