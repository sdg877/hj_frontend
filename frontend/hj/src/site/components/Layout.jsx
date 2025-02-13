import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const location = useLocation();
  const showContent = location.pathname !== "/login";

  return (
    <div className="layout-container">
      {showContent && <Navbar />}
      <main className="content">{children}</main>
    </div>
  );
};

export default Layout;
