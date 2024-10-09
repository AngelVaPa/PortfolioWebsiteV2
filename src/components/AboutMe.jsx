// eslint-disable-next-line no-unused-vars
import React from 'react';
import RotatingImage from './RotatingImage';
import profileImage from '../images/profile.png'; 
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="py-5 bg-light">    
      <div 
        className="container d-flex flex-column align-items-center justify-content-center" 
        style={{ minHeight: '100vh', position: 'relative', zIndex: 2 
      }}>
        <h2 className="aboutTitle">About Me</h2>
        <RotatingImage src={profileImage} alt="3D Image" />
        <div className="rotate-instruction">
          <span className="rotate-icon">🔄</span>
          <span className="instruction-text">Grab, and spin me!</span>
        </div>
        <div className="text-center about-text"> 
          <p style={{ animationDelay: '1s' }} className="lead">
            I started my professional career in the automotive industry as a CNC machinery and PLC automation programmer at a very early age thanks to the family business.
          </p>
          <p style={{ animationDelay: '6s' }} className="lead">
            Although I still love what I did for so many years, I have always been interested in software programming.
          </p>
          <p style={{ animationDelay: '11s' }} className="lead">
            In 2022, I decided to move to Montreal, QC to study and give myself the opportunity to enter this world, which quickly became my passion.
          </p>
          <p style={{ animationDelay: '16s' }} className="emphText">
            I am currently completing my final semester and now seeking an entry-level position, focusing primarily on backend and web development.
          </p>
          <p style={{ animationDelay: '21s' }} >
            Check out my work experience in detail on&nbsp;
            <a 
              href='https://www.linkedin.com/in/angel-vapa/' 
              className='text-primary' 
              target="_blank" 
              rel='noreferrer'
            >LinkedIn</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
