import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import "./Header.css"; // Ensure this CSS file includes the styles for the logo

const Header = () => {
  return (
    <header className="header">
      <NavLink to="/" className="logo"> {/* Wrap the logo in a NavLink */}
        <div className="circle">
          <div className="brackets">
            <span className="curly-bracket left-bracket">{'{'}</span>
            <span className="s">S</span>
            <span className="curly-bracket right-bracket">{'}'}</span>
          </div>
        </div>
        <div className="background-symbols">
          <span className="symbol">&lt;/&gt;</span>
          <span className="symbol">&#123;...&#125;</span>
        </div>
      </NavLink>
      <Navbar /> {/* Include Navbar here */}
    </header>
  );
};

export default Header;