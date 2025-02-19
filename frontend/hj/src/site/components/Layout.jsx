import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import Navbar from "./Navbar";
import banner from "../../assets/banner.jpg";

const Layout = ({ children }) => {
  const location = useLocation();
  const showContent = location.pathname !== "/login";
  const showBanner =
    location.pathname !== "/" && location.pathname !== "/login";

  return (
    <div className="layout-container">
      {showBanner && (
        <div className="banner">
          <img src={banner} alt="Banner" className="banner-image" />
        </div>
      )}

      {showContent && <Navbar />}

      <main className="content">{children}</main>

      <footer className="footer">© 2025 Heather Treharne Jones</footer>
    </div>
  );
};

export default Layout;
