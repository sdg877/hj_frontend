import React, { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div className="login-form-container">
      <p className="admin-warning">
        If you are not the site owner, you are in the wrong place! <br /><br />
        Please go to <a href="/">the main site</a>.
        <br /><br />
      </p>

      <form onSubmit={handleLogin} className="contact-form">
        <div className="form-field">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-field">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>

        <div className="form-field">
          <button type="submit" className="form-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
