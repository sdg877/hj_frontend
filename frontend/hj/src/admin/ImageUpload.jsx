import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        try {
          const response = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/admin/images`, 
            formData,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
        );

            if (response.data && response.data.imageUrl) {
                setMessage(`Image uploaded! URL: ${response.data.imageUrl}`);
            } else if (response.data && response.data.message) {
                setMessage(response.data.message);
            } else {
                setMessage("Upload successful, but URL not received. Check backend logs.");
            }

        } catch (error) {
            console.error('Upload Error:', error);

            if (error.response) {
                setMessage(`Upload failed: ${error.response.status} - ${error.response.data.message || 'Check console for details'}`);
            } else if (error.request) {
                console.error("Request Error:", error.request);
                setMessage("Upload failed: No response from server.");
            } else {
                console.error('Error Message:', error.message);
                setMessage(`Upload failed: ${error.message}`);
            }
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

export default ImageUpload;