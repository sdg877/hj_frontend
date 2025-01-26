import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newFileName, setNewFileName] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleNameChange = (e) => {
    setNewFileName(e.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized: Please log in first.");
      return;
    }

    // Get the file extension
    const fileExtension = selectedFile.name.split(".").pop();
    const finalFileName = newFileName
      ? `${newFileName}.${fileExtension}`
      : selectedFile.name; // Default to original name if no new name is provided

    // Rename the file
    const renamedFile = new File([selectedFile], finalFileName, { type: selectedFile.type });

    const formData = new FormData();
    formData.append("image", renamedFile);

    try {
      const response = await fetch(`${backendUrl}/admin/images`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        setSelectedFile(null);
        setNewFileName(""); // Clear input after success
        toast.success(`Image uploaded successfully as ${finalFileName}`);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to upload image.");
      }
    } catch (error) {
      toast.error("Error occurred while uploading image.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Upload Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="w-full p-2 border rounded mt-1"
      />

      <input
        type="text"
        placeholder="Enter new file name"
        value={newFileName}
        onChange={handleNameChange}
        className="w-full p-2 border rounded mt-2"
      />

      <button
        onClick={handleUpload}
        className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-700"
      >
        Upload Image
      </button>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default ImageUpload;
