import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import Navbar from "./Navbar";
import banner from "../../assets/banner.jpg";

const Layout = ({ children }) => {
  const location = useLocation();
  const showContent = location.pathname !== "/login";

  return (
    <div className="layout-container">
      {showContent && (
        <>
          <div className="banner">
            <img src={banner} alt="Banner" className="banner-image" />
          </div>

          <Navbar />
        </>
      )}

      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
