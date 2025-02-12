import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "../../App.css";
import Spinner from "../../site/components/Spinner";
import "react-toastify/dist/ReactToastify.css";

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      toast.error("Please select a file first.");
      return;
    }
    if (!category) {
      toast.error("Please select a category.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Unauthorized: Please log in first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("category", category);
    if (description) {
      formData.append("description", description);
    }

    setUploading(true);

    try {
      const response = await fetch(`${backendUrl}/admin/images`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        toast.success("Image uploaded successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Failed to upload image.");
      }
    } catch (error) {
      toast.error("Error occurred while uploading image.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="image-upload-container">
      <h2 className="title">Upload Image</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file-input"
        disabled={uploading}
      />

      <select
        value={category}
        onChange={handleCategoryChange}
        className="category-select"
        disabled={uploading}
      >
        <option value="">Select Category</option>
        <option value="paintings">Paintings</option>
        <option value="cards">Cards & Prints</option>
        <option value="sculptures">Sculptures</option>
        <option value="textiles">Textiles</option>
      </select>

      <textarea
        value={description}
        onChange={handleDescriptionChange}
        className="description-input"
        placeholder="Enter optional description..."
        disabled={uploading}
      ></textarea>

      <button
        onClick={handleUpload}
        className="upload-button"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Image"}
      </button>

      {uploading && <Spinner />}

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default ImageUpload;
