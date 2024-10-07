// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";  
import Skills from "./components/Skills";  
import AboutMe from "./components/AboutMe";  
import ParticlesBackground from "./components/ParticlesBackground"; 
import NavBar from "./components/NavBar";
import './App.css';  

const App = () => {
  return (
    <Router>
      {/* Particles as Background */}
      <ParticlesBackground />   
      <NavBar/>    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/aboutMe" element={<AboutMe />} />
      </Routes>
    </Router>
  );
};

export default App;
