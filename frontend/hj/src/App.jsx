import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import UploadImages from "./admin/ImageUpload";
import NewsUpdate from './admin/NewsUpdate';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/images" element={<UploadImages />} />
          <Route path="/news" element={<NewsUpdate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
