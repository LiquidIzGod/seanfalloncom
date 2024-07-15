import React from "react";
import "./LayoutGPT.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LayoutGPT = ({ children, showFooter = true }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
};

export default LayoutGPT;