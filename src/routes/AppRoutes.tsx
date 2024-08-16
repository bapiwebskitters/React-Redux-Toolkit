// src/routes/AppRoutes.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Blogs from "../pages/Blog/List";
import BlogDetails from "../pages/Blog/View";
import Login from "../components/Auth/Login";
import Profile from "../pages/Profile.tsx";
import Settings from "../pages/Settings.tsx";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/features/auth/authSelectors.ts";

const AppRoutes: React.FC = () => {
  // Create a component to wrap the protected routes
  const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({element}) => {
    const user = useSelector(selectUser);
    if (!user) {
      return <Navigate to="/login" />;
    }
    return element;
  };
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path="/login" element={<Login />} />
      {/* Protected Routes */}
      <Route
        path="/my-profile"
        element={<ProtectedRoute element={<Profile />} />}
      />
      <Route
        path="/settings"
        element={<ProtectedRoute element={<Settings />} />}
      />
    </Routes>
  );
};

export default AppRoutes;
