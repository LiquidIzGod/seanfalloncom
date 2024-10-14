/* Introduction.jsx v1.0 */
import React from "react";
import "./Introduction.css";
import BgProfile from "../../Components/BgProfile/BgProfile";
import IntroText from "../../Components/IntroText/IntroText";

const Introduction = () => {
  return (
    <div className="introduction">
      <IntroText />
      <BgProfile />
    </div>
  );
};

export default Introduction;