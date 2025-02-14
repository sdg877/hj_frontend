import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/Admin.css"

import drawingImage from "../../assets/drawing.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/login`,
        { username, password }
      );
      const token = response.data.token;

      localStorage.setItem("token", token);
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div
        className="login-image"
        style={{ backgroundImage: `url(${drawingImage})` }}
      ></div>

      <div className="login-form-container">
        <p className="login-warning">
          If you are not the site owner, you are in the wrong place! <br />
          <br />
          Please go to <a href="/">the main site</a>.
          <br />
          <br />
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <div className="login-form-field">
            <label htmlFor="username" className="login-form-label">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="login-form-input"
            />
          </div>

          <div className="login-form-field">
            <label htmlFor="password" className="login-form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="login-form-input"
            />
          </div>

          <div className="login-form-field">
            <button type="submit" className="login-form-button">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
