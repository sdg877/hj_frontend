import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from './admin/Dashboard.jsx'
import UploadImages from "./admin/forms/ImageUpload";
import NewsUpdate from "./admin/forms/NewsUpdate";
import AboutMe from "./site/pages/AboutMe.jsx";
import ContactMe from "./site/pages/ContactMe.jsx";
import Gallery from "./site/pages/Gallery.jsx";
import Homepage from "./site/pages/Homepage.jsx";
import News from "./site/pages/News.jsx";
import Login from "./admin/forms/Login.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/images" element={<UploadImages />} />
          <Route path="/admin/news" element={<NewsUpdate />} />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
