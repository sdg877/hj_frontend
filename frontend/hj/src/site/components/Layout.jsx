import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import banner from "../../assets/banner.jpg";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const showContent = location.pathname !== "/login";
  const navbarRef = useRef(null); 

  useEffect(() => {

    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      document.documentElement.style.setProperty('--navbar-height', `${navbarHeight}px`);
    }
  }, []); 


  return (
    <div className="layout-container">
      {showContent && (
        <>
          <Navbar ref={navbarRef} /> 
          <div className="banner">
            <img src={banner} alt="Banner" className="banner-image" />
          </div>
        </>
      )}
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default Layout;