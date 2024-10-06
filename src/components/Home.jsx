// eslint-disable-next-line no-unused-vars
import React, {useRef, useEffect} from "react";
import ParticlesBackground from "./ParticlesBackground";
import "../css/Home.css"; // Importa el CSS
import { typeWriterEffect } from './typeWriter.js';


const Home = () => {

  const textRef = useRef(null);

  useEffect(() => {
    typeWriterEffect('animated-text', 70); 
  }, []);

  return (
    <div>
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-3 text-white">Angel Vazquez</h1>
            <p className="lead text-light">Software Developer</p>
            <span id="animated-text" ref={textRef}>Give me a foothold and I will move the world.</span>
            <div className="mt-4">
              <a href="#portfolio" className="btn btn-primary btn-lg me-3">
                View My Work
              </a>
              <a href="/path/to/cv.pdf" className="btn btn-outline-light btn-lg">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;

