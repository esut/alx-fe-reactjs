import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const isAuthenticated = false; 
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
