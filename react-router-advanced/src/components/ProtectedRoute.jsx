// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

// Mock Authentication Hook
const useAuth = () => {
  // Simulate user authentication (change this according to your auth logic)
  const user = { loggedIn: false }; // Change this flag to true when authenticated

  return user;
};

const ProtectedRoute = ({ element }) => {
  const user = useAuth(); // Get user from auth hook

  // If not authenticated, redirect to login (or any other page)
  if (!user.loggedIn) {
    return <Navigate to="/login" />;
  }

  return element; // Render the protected component if user is authenticated
};

export default ProtectedRoute;
