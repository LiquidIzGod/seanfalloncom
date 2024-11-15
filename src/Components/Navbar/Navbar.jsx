import React, { useState } from "react";
import "./Navbar.css";
import homeIcon from "../../assets/icons/icon_home.png";
import introIcon from "../../assets/icons/icon_introductions.png";
import skillsIcon from "../../assets/icons/icon_skillsets.png";
import contentIcon from "../../assets/icons/icon_content.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    if (window.innerWidth <= 768) {
      setTimeout(() => {
        setIsOpen(false); // Close the menu after the delay
        navigate(path); // Navigate to the selected page
      }, 300); // Delay of 300ms for the animation
    } else {
      navigate(path); // For desktop, navigate immediately
    }
  };

  return (
    <nav className="navbar">
      <div className="hamburger" onClick={toggleMenu}>
        &#9776; {/* Hamburger icon */}
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => handleLinkClick("/")}
          >
            <img src={homeIcon} alt="Home" className="nav-icon" />
            <span className="nav-text">Home</span>
          </span>
        </li>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => handleLinkClick("/introductions")}
          >
            <img src={introIcon} alt="Introductions" className="nav-icon" />
            <span className="nav-text">Introductions</span>
          </span>
        </li>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => handleLinkClick("/skillsets")}
          >
            <img src={skillsIcon} alt="Skillsets" className="nav-icon" />
            <span className="nav-text">Skillsets</span>
          </span>
        </li>
        <li className="nav-item">
          <span
            className="nav-link"
            onClick={() => handleLinkClick("/content")}
          >
            <img src={contentIcon} alt="Content" className="nav-icon" />
            <span className="nav-text">Content</span>
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
