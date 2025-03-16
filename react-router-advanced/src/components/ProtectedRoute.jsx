// src/components/ProtectedRoute.jsx
import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const isAuthenticated = false; // Change this to simulate auth state

  return (
    <Route
      {...rest}
      element={isAuthenticated ? element : <Redirect to="/login" />}
    />
  );
};

export default ProtectedRoute;
