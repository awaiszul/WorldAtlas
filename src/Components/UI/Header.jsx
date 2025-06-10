import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="Navbar">    <header className="header">
      <div className="logo">
        <Link to="/" className="logo-link">
          WorldAtlas
        </Link>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/country" className="nav-link">
          Country
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </header>
    </div>

  );
};
