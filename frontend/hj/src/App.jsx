import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';

import UploadImages from "./admin/ImageUpload";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/images" element={<UploadImages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
