import React from "react";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
      <h1>Patch Notes</h1>
      <h2>Alpha V1.5 7/16/24: File clean up, minor style changes.</h2>
      <h2>Alpha V1.4 7/16/24: Custom domain clear on Githug pages do to deploy fixed. CNAME moved to public.</h2>
      <h2>Alpha V1.3 7/16/24: Layout right overflow fixed.</h2>
      </div>
      <div className="card">
      <h1>Card 2</h1>
      </div>
    </div>
  );
};

export default CardContainer;