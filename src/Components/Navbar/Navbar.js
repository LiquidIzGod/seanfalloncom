import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/introductions">Introductions</a>
        </li>
        <li>
          <a href="/skillsets">Skillsets</a>
        </li>
        <li>
          <a href="/content">Content</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;