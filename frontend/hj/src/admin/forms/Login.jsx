// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/login`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem("token", data.token); 
//         navigate("/admin");
//       } else {
//         alert("Login failed");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <form className="bg-white p-6 rounded shadow-md" onSubmit={handleLogin}>
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="text"
//           className="border p-2 rounded mb-2 w-full"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <input
//           type="password"
//           className="border p-2 rounded mb-2 w-full"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3500/admin/login", { username, password });
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem("token", token);

      // Redirect to the admin dashboard
      navigate("/admin");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
