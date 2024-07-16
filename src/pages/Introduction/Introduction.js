import React from "react";
import "./Introduction.css";
import ImageComponent from "./ImageComponent";
import TextComponent from "./TextComponent";

const Introduction = () => {
  return (
    <div className="introduction">
      <TextComponent />
      <ImageComponent />
    </div>
  );
};

export default Introduction;