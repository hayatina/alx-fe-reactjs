// src/pages/Profile.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails"; // Assume it's a default export
import ProfileSettings from "./ProfileSettings"; // Assume it's a default export

// Default export for Profile
const Profile = () => {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
