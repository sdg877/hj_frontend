import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";

import banner from "../../assets/banner.jpg";

const Layout = ({ children }) => {
  const location = useLocation();

  const showBanner = location.pathname !== "/";
  return (
    <div>
      {showBanner && (
        <div className="banner">
          <img src={banner} alt="Banner" className="banner-image" />
        </div>
      )}

      <nav className="navbar"></nav>

      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
