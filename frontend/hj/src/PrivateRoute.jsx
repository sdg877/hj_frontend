import React from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwt_decode(token);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
