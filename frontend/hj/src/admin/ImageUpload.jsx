import React, { useState } from 'react';
import axios from 'axios';

const UploadImages = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post(
        'http://localhost:5000/api/upload', // Update with your backend upload endpoint
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      setMessage(`Image uploaded successfully! URL: ${response.data.url}`);
    } catch (error) {
      console.error('Upload failed:', error);
      setMessage('Failed to upload the image. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Upload Images</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="border p-2 rounded"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Upload Image
      </button>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default UploadImages;
