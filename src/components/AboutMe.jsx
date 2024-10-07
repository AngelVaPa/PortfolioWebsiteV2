// eslint-disable-next-line no-unused-vars
import React from 'react';
import RotatingImage from './RotatingImage'; 
import '../css/AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="py-5 bg-light">    
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <h2 className="aboutTitle">About Me</h2>
        <RotatingImage src="src/images/profile.png" alt="3D Image" />
        <div className="text-center">
          <p className="lead">
            I started my professional career in the automotive industry as a CNC machinery and PLC automation programmer at a very early age thanks to the family business.
            Although I still love what I did for so many years, I have always been interested in software programming. In 2022, I decided to move to Montreal, QC to study and give myself the opportunity to enter this world, which quickly became my passion.
          </p>
          <p className="emphText">
            I am currently completing my final semester and now seeking an entry-level position, focusing primarily on backend and web development.
          </p>
          <p>
            Check out my work experience in detail on&nbsp;
            <a href='https://www.linkedin.com/in/angel-vapa/' className='text-primary' target="_blank" rel='noreferrer'>LinkedIn</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
