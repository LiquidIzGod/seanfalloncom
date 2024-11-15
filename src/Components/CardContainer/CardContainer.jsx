import React from "react";
import "./CardContainer.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="text-content">
          <h1>Patch Notes</h1>
          <h2>Alpha V0.2.4 - hamburger menu close fix. Global responsiveness added.</h2>
          <h2>Alpha V0.2.3: Logo link, fix blue underline. Navbar black.</h2>
          <h2>Alpha V0.2.2 : Bug fix. Glassy card enlarge causing blurry text.</h2>
          <h2>Alpha V0.2.1 : Global layout fix, max width. Glass card for intro page added.</h2>
          <h2>Alpha V0.2.0 : Added roadmap to home page.</h2>
          <h2>Alpha V0.1.9 7/19/24: Add CSS logo V1. Nav icons, text size change.</h2>
          <h2>Alpha V0.1.8 7/17/24: Content and Skillsets pages added.</h2>
          <h2>Alpha V0.1.7 7/17/24: Introduction: page layout, img scale fix, portrait bg fix.</h2>
          <h2>Alpha V0.1.6 7/16/24: Nav icons, animation. Home bg and coloring.</h2>
          <h2>Alpha V0.1.5 7/15/24: File clean up, minor style changes.</h2>
          <h2>Alpha V0.1.4 7/15/24: Custom domain clear on Githug pages do to deploy fixed. CNAME moved to public.</h2>
          <h2>Alpha V0.1.3 7/15/24: Layout right overflow fixed.</h2>
        </div>
      </div>
      <div className="card">
        <div className="text-content">
          <h1>Roadmap</h1>
          <h2>Global</h2>
          <h3>- Fix typography.</h3>
          <h3>- Add global layout. Research needed to define.</h3>
          <h2>Introductions Page:</h2>
          <h3>- Solve intro page responsive scale issue maybe border-box.</h3>
          <h3>- Add bg card for IntroText.</h3>
          <h2>Navbar hamburger</h2>
          <h3>- Stays open after click. DONE</h3>
          <h3>- Narrow card a bit.</h3>
          <h2>Logo</h2>
          <h3>- Add link back to home page. DONE</h3>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;