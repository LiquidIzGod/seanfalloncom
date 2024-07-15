import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutGPT from "./Components/LayoutGPT/LayoutGPT";
import Home from "./pages/Home/Home";
import Introduction from "./pages/Introduction/Introduction";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <LayoutGPT>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introductions" element={<Introduction />} />
        </Routes>
      </LayoutGPT>
    </Router>
  );
};

export default App;

