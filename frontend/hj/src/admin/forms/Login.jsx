import React, { useState } from "react";
import '../../App.css'
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
    <div className="login-container">
      <h2 className="title">Admin Login</h2>

      <p className="admin-warning">
        If you are not the site owner, you are in the wrong place! <br/>
        Please go to <a href="/">the main site</a>.
      </p>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label className="label">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <div className="form-group">
          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input-field"
          />
        </div>

        <button
          type="submit"
          className="submit-button"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
