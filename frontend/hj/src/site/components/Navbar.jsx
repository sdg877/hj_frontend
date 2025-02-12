import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  if (location.pathname.startsWith("/login")) {
    return null;
  }

  const adminLinks = [
    { to: "/sculptures", label: "Sculptures" },
    { to: "/cards", label: "Cards & Prints" },
    { to: "/textiles", label: "Textiles" },
    { to: "/paintings", label: "Paintings" },
    { to: "/news", label: "News" },
  ];

  const generalLinks = [
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isAdmin = location.pathname.startsWith("/admin");

  const links = isAdmin ? adminLinks : [...adminLinks, ...generalLinks];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        ☰
      </button>

      <ul className={`navbar-list ${isMenuOpen ? "open" : ""}`}>
        {links.map(({ to, label }) =>
          location.pathname !== to ? (
            <li key={to} className="navbar-item">
              <Link
                to={to}
                className="navbar-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ) : null
        )}
      </ul>

      <div className="logo-container">
        <div className="logo-writing">heather treharne jones</div>
      </div>
    </nav>
  );
};

export default Navbar;