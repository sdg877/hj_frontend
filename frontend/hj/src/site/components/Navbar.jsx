import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import banner from "../../assets/banner.jpg"; // Ensure correct path
import "../../App.css";

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
    { to: "/commissions", label: "Commissions" }
  ];

  const isAdmin = location.pathname.startsWith("/admin");
  const links = isAdmin ? adminLinks : [...adminLinks, ...generalLinks];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          ☰
        </button>

        <div className="logo-container">
          <div className="logo-writing">heather treharne jones</div>
        </div>

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
      </div>
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>
    </nav>
  );
};

export default Navbar;
