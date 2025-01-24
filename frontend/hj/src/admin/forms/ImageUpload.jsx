import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = () => {
  const [file, setFile] = useState(null);
  const [newFileName, setNewFileName] = useState(""); 
  const [loading, setLoading] = useState(false); 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setNewFileName(e.target.value); 
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select an image.");
      return;
    }

    const timestamp = Date.now();
    const fileExtension = file.name.split(".").pop(); 
    const finalFileName = newFileName
      ? `${newFileName}.${fileExtension}` 
      : `${timestamp}.${fileExtension}`; 

    const renamedFile = new File([file], finalFileName, { type: file.type });

    const formData = new FormData();
    formData.append("image", renamedFile); 

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/images`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data && response.data.imageUrl) {
        toast.success(`File uploaded: ${finalFileName}`);
      } else if (response.data && response.data.message) {
        toast.warning(response.data.message);
      } else {
        toast.info("Upload successful, but URL not received. Check backend logs.");
      }
    } catch (error) {
      console.error("Upload Error:", error);

      if (error.response) {
        toast.error(
          `Upload failed: ${error.response.status} - ${
            error.response.data.message || "Check console for details"
          }`
        );
      } else if (error.request) {
        toast.error("Upload failed: No response from server.");
      } else {
        toast.error(`Upload failed: ${error.message}`);
      }
    } finally {
      setLoading(false); 
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

      <div className="mt-4">
        <input
          type="text"
          placeholder="Enter new file name"
          value={newFileName}
          onChange={handleNameChange}
          className="border p-2 rounded"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={loading} 
        className={`px-4 py-2 rounded transition ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-700"
        }`}
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>

  
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default ImageUpload;
