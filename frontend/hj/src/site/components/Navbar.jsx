import React from "react";
import { Link, useLocation } from "react-router-dom";

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
    { to: "/news", label: "News" }
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
      </div>
    </nav>
  );
};

export default Navbar;
