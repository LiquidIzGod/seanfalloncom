import React from "react";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
      <h1>Patch Notes</h1>
      <h2>Alpha V1.9 7/19/24: Add CSS logo V1. Nav icons, text size change.</h2>
      <h2>Alpha V1.8 7/17/24: Content and Skillsets pages added.</h2>
      <h2>Alpha V1.7 7/17/24: Introduction: page layout, img scale fix, portrait bg fix.</h2>
      <h2>Alpha V1.6 7/16/24: Nav icons, animation. Home bg and coloring.</h2>
      <h2>Alpha V1.5 7/15/24: File clean up, minor style changes.</h2>
      <h2>Alpha V1.4 7/15/24: Custom domain clear on Githug pages do to deploy fixed. CNAME moved to public.</h2>
      <h2>Alpha V1.3 7/15/24: Layout right overflow fixed.</h2>
      </div>
      <div className="card">
      <h1>Card 2</h1>
      </div>
    </div>
  );
};

export default CardContainer;