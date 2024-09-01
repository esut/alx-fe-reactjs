import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return true; 
};

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/" />;
};

export default ProtectedRoute;
