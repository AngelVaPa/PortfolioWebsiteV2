// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../css/Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5 bg-light">    
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        <h2 className="portfolioTitle">Portfolio</h2>
        <div className="project-container">
          <div className="project">
            <a id="portfolioV1" href="https://portfoliov1.angelvapa.com/" target="_blank" rel='noreferrer' className="thumbnail btn btn-outline-light btn-lg"></a>
            <p className='prj-title'>Portfolio V1</p>
          </div>
          <div className="project">
            <a id="techBooksV1" href="https://github.com/JesusVaPa/TechBooksV1/" target="_blank" rel='noreferrer' className="thumbnail btn btn-outline-light btn-lg"></a>
            <p className='prj-title'>TechBooks V1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
