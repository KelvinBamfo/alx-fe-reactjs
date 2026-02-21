import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication check
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
