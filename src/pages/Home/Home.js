import React from "react";
import MainContent from "../../Components/MainContent/MainContent";
import Banner from "../../Components/Banner/Banner";
import CardContainer from "../../Components/CardContainer/CardContainer"; // Correct path
import "./Home.css";

const Home = () => {
  return (
    <MainContent>
      <Banner />
      <CardContainer />
      <h1>This is the Home Page Component with MainContent, Banner, and CardContainer</h1>
    </MainContent>
  );
};

export default Home;
