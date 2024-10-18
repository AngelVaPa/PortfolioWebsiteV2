// eslint-disable-next-line no-unused-vars
import React, {useRef, useEffect} from "react";
import "../css/Home.css"; 
import { typeWriterEffect } from '../utils/typeWriter.js';


const Home = () => {

  const textRef = useRef(null);

  useEffect(() => {
    typeWriterEffect('animated-text', 70); 
  }, []);

  return (
    <div>
      <header className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-3 text-white">Angel Vazquez</h1>
            <p className="lead text-light">Software Developer</p>
            <p id="animated-text" ref={textRef}>Give me a foothold and I will move the world.</p>
            <div className="mt-4">
              <a id="githubBtn" href="https://github.com/JesusVaPa" target="_blank" rel='noreferrer' className="btn btn-outline-light btn-lg"></a>
              <a href="public/documents/Jesus-Vazquez-FlowCV-Resume-20241018.pdf" download className="btn btn-outline-light btn-lg">
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

