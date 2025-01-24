import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false); // Track upload state

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select an image.');
            return;
        }

        setLoading(true); // Start loading

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
                setMessage("Upload failed: No response from server.");
            } else {
                setMessage(`Upload failed: ${error.message}`);
            }
        } finally {
            setLoading(false); // Stop loading after upload completes
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
                disabled={loading} // Disable button when loading
                className={`px-4 py-2 rounded transition ${
                    loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"
                }`}
            >
                {loading ? "Uploading..." : "Upload Image"}
            </button>
            {message && <p className="mt-4 text-center">{message}</p>}
        </div>
    );
};

export default ImageUpload;
