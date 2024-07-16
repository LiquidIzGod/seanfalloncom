import React, { useState } from "react";
import "./Navbar.css";
import homeIcon from "../../assets/icons/icon_home.png";
import introIcon from "../../assets/icons/icon_introductions.png";
import skillsIcon from "../../assets/icons/icon_skillsets.png";
import contentIcon from "../../assets/icons/icon_content.png";

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
        <li className="nav-item">
          <a href="/" className="nav-link">
            <img src={homeIcon} alt="Home" className="nav-icon" />
            <span className="nav-text">Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/introductions" className="nav-link">
            <img src={introIcon} alt="Introductions" className="nav-icon" />
            <span className="nav-text">Introductions</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/skillsets" className="nav-link">
            <img src={skillsIcon} alt="Skillsets" className="nav-icon" />
            <span className="nav-text">Skillsets</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="/content" className="nav-link">
            <img src={contentIcon} alt="Content" className="nav-icon" />
            <span className="nav-text">Content</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;