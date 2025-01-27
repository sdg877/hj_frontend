import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import Spinner from "../../site/components/Spinner"; 

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);  

    const emailData = {
      ...formData, 
      from_name: formData.name,
      from_email: formData.email 
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailData, 
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          toast.success('Message sent successfully!');
          setLoading(false);  
        },
        (error) => {
          console.error('Error sending message', error);
          toast.error('Error sending message, please try again.');
          setLoading(false); 
        }
      );
  };

  return (
    <div className="contact-form-container">
      <h2 className="title">Contact Me</h2>

      {loading && <Spinner />}

      <form onSubmit={handleSubmit} className="form">
        <div>
          <label htmlFor="name" className="label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <label htmlFor="email" className="label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div>
          <label htmlFor="message" className="label">Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="textarea"
          />
        </div>
        <div>
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            Send
          </button>
        </div>
      </form>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default ContactMe;
