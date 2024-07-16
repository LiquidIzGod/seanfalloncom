import React from "react";
import "./BgProfile.css";
import profileImage from "../../assets/images/Me_cropped.png"; // Import the image

const BgProfile = () => {
  return (
    <div className="bg-profile-container">
      <img src={profileImage} alt="Sean Fallon" className="profile-image" /> {/* Use the imported image */}
    </div>
  );
};

export default BgProfile;