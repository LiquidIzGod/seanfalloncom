import React, { useState } from "react";
import "./Navbar.css";
import homeIcon from "../../assets/icons/icon_home.png";
import introIcon from "../../assets/icons/icon_introductions.png";
import skillsIcon from "../../assets/icons/icon_skillsets.png";
import contentIcon from "../../assets/icons/icon_content.png";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/" className="nav-link" activeClassName="active">
            <img src={homeIcon} alt="Home" className="nav-icon" />
            <span className="nav-text">Home</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/introductions" className="nav-link" activeClassName="active">
            <img src={introIcon} alt="Introductions" className="nav-icon" />
            <span className="nav-text">Introductions</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/skillsets" className="nav-link" activeClassName="active">
            <img src={skillsIcon} alt="Skillsets" className="nav-icon" />
            <span className="nav-text">Skillsets</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/content" className="nav-link" activeClassName="active">
            <img src={contentIcon} alt="Content" className="nav-icon" />
            <span className="nav-text">Content</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;