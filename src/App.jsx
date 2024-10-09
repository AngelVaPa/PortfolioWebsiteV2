// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";  
import Skills from "./components/Skills";  
import AboutMe from "./components/AboutMe";  
import Contact from "./components/Contact";  
import ParticlesBackground from "./components/ParticlesBackground"; 
import NavBar from "./components/NavBar";
import './App.css';  
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <Router>
      <ParticlesBackground />   
      <NavBar/>    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
};

export default App;
