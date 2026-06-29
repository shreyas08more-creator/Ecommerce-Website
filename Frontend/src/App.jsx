import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { supabase } from "./supabase.js"; 

// Component Imports
import { Navbar } from "./Components/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
import { Services } from "./Components/Services.jsx";
import { Blog } from "./Components/Blog.jsx";
import { Contact } from "./Components/Contact.jsx";
import { AddP } from "./Components/AddP.jsx";
import { Login } from "./Pages/Login.jsx";
import { Signup } from "./Pages/Signup.jsx";

// --- The Protected Component Engine ---
const P = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    // Check initial auth status
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    // Listen for auth changes (login/logout events)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Show a loading text while Supabase checks the session status
  if (isAuthenticated === null) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontFamily: "Arial" }}>
        <h3>Verifying session...</h3>
      </div>
    );
  }

  // If logged in, render the page; otherwise, redirect to login page
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

// --- Main App Component ---
export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        {/* Protected Routes */}
        <Route path="/" element={<P><Home /></P>} />
        <Route path="/about" element={<P><About /></P>} />
        <Route path="/services" element={<P><Services /></P>} />
        <Route path="/blog" element={<P><Blog /></P>} />
        <Route path="/contact" element={<P><Contact /></P>} />
        <Route path="/add" element={<P><AddP /></P>} />
        
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}