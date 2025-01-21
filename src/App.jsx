// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Verification from "./pages/Verification";
import SelectionPage from "./pages/Select_option";
import Citizenship from "./pages/Citizenship";
import License from "./pages/License";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/verification" element={<Verification/>} />
        <Route path="/select-option" element={<SelectionPage/>} />
        <Route path="/citizenship" element={<Citizenship/>} />
        <Route path="/license" element={<License/>} />
      </Routes>
    </Router>
  );
};

export default App;
