import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./admin/Dashboard.jsx";
import UploadImages from "./admin/components/ImageUpload.jsx";
import NewsUpdate from "./admin/components/NewsUpdate.jsx";
import AboutMe from "./site/pages/AboutMe.jsx";
import ContactMe from "./site/pages/ContactMe.jsx";
import Gallery from "./site/pages/Gallery.jsx";
import Sculptures from "./site/components/sculptures.jsx";
import Paintings from "./site/components/paintings.jsx";
import Cards from "./site/components/cards.jsx";
import Textiles from "./site/components/textiles.jsx";
import Homepage from "./site/pages/Homepage.jsx";
import News from "./site/pages/News.jsx";
import Login from "./admin/components/Login.jsx";
import ImageThumbnail from "./admin/components/ImageThumbnail.jsx";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../src/site/components/Navbar.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/images"
            element={
              <PrivateRoute>
                <UploadImages />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/news"
            element={
              <PrivateRoute>
                <NewsUpdate />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/thumnails"
            element={
              <PrivateRoute>
                <ImageThumbnail />
              </PrivateRoute>
            }
          />

          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sculptures" element={<Sculptures />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/textiles" element={<Textiles />} />

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
