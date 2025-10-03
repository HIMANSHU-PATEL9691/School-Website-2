import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="site-name">
          Smart Vidyalaya
        </Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </div>

      {/* Navbar Links */}
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/admissions">Admissions</Link>
        <Link to="/academics">Academics</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/notice">Notice Board</Link>
        <Link to="/events">Events</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/admin">Admin Panel</Link>
      </div>
    </nav>
  );
};

export default Navbar;
