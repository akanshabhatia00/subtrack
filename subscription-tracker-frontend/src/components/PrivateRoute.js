// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("token"); // or use context if you have
  return isLoggedIn ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
