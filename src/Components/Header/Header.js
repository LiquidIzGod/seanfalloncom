import React from "react";
import Navbar from "../Navbar/Navbar"; // Import Navbar
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Logo</div>
      <Navbar /> {/* Include Navbar here */}
    </header>
  );
};

export default Header;