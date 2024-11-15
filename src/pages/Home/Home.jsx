// Home.js
import React from "react";
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import CardContainer from "../../Components/CardContainer/CardContainer";
import HomeGraphic from "../../Components/HomeGraphic/HomeGraphic";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <MainContent>
        <Banner />
        <HomeGraphic />
        <CardContainer />
        <h1>This is the Home Page Component with MainContent, Banner, and CardContainer</h1>
      </MainContent>
    </div>
  );
};

export default Home;
