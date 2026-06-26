import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar.jsx";
import { Home } from "./Components/Home.jsx";
import { About } from "./Components/About.jsx";
import { Services } from "./Components/Services.jsx";
import { Blog } from "./Components/Blog.jsx";
import { Contact } from "./Components/Contact.jsx";
import { AddP } from "./Components/AddP.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add" element={<AddP />} />
      </Routes>
    </>
  );
}