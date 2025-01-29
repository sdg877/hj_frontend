import React from 'react';
import '../../App.css'; 

import banner from '../../assets/banner.jpg'; 

const Layout = ({ children }) => {
  return (
    <div>
      {/* Banner Image */}
      <div className="banner">
        <img src={banner} alt="Banner" className="banner-image" />
      </div>

  
      <nav className="navbar">

      </nav>

      {/* Page Content */}
      <div className="content">
        {children} 
      </div>
    </div>
  );
};

export default Layout;
