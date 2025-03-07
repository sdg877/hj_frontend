import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./admin/Dashboard.jsx";
import NewsDashboard from "./admin/NewsDashboard.jsx";
import ImageDashboard from "./admin/ImageDashboard.jsx";
import UploadImages from "./admin/components/ImageUpload.jsx";
import NewsUpdate from "./admin/components/NewsUpdate.jsx";
import AboutMe from "./site/pages/AboutMe.jsx";
import ContactMe from "./site/pages/ContactMe.jsx";
import Commissions from "./site/pages/Commissions.jsx";
import Sculptures from "./site/pages/Sculptures.jsx";
import Paintings from "./site/pages/Paintings.jsx";
import Cards from "./site/pages/Cards.jsx";
import Textiles from "./site/pages/Textiles.jsx";
import Homepage from "./site/pages/Homepage.jsx";
import News from "./site/pages/News.jsx";
import Login from "./admin/components/Login.jsx";
import DeleteImages from "./admin/components/DeleteImages.jsx";
import PrivateRoute from "./PrivateRoute";
import Navbar from "../src/site/components/Navbar.jsx";
import DeleteNews from "./admin/components/DeleteNews.jsx";
import Layout from "./site/components/Layout.jsx";

function App() {
  return (
    <Router>
      <Layout>
        <AppRoutes />
      </Layout>
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation(); 
  return (
    <div className="App">


      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/images"
          element={
            <PrivateRoute>
              <ImageDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/addimages"
          element={
            <PrivateRoute>
              <UploadImages />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/news"
          element={
            <PrivateRoute>
              <NewsDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/thumbnails"
          element={
            <PrivateRoute>
              <DeleteImages />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/addnews"
          element={
            <PrivateRoute>
              <NewsUpdate />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard/delete"
          element={
            <PrivateRoute>
              <DeleteNews />
            </PrivateRoute>
          }
        />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/textiles" element={<Textiles />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/newsupdates" element={<News />} />
        <Route path="/commissions" element={<Commissions />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
