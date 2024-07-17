import React from "react";
import {HashRouter as Router, Route, Routes } from "react-router-dom";
import LayoutGPT from "./Components/LayoutGPT/LayoutGPT";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction";
import Skillsets from "./pages/Skillsets/Skillsets";
import Content from "./pages/Content/Content";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <LayoutGPT>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introductions" element={<Introduction />} />
          <Route path="/skillsets" element={<Skillsets />} />
          <Route path="/content" element={<Content />} />
        </Routes>
      </LayoutGPT>
    </Router>
  );
};

export default App;

