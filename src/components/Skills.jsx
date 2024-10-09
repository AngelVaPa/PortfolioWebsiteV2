// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; 
import RubikCube3D from './RubikCube3D';
import '../css/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});
  
  const apiUrl = 'https://portfoliowebsitev2-api.onrender.com/api/skills';

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    
    fetchSkills();
  }, [apiUrl]);

  const handleShowSkills = () => {
    setShowSkills(true);
  };

  const toggleSection = (section) => {
    setVisibleSections((prev) => ({
      ...prev,
      [section]: !prev[section], 
    }));
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <div 
        className="container d-flex flex-column align-items-center justify-content-center" 
        style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        {!showSkills && (
          <>
            <h2 className="skillsTitle">Skills</h2>
            <RubikCube3D />
            <button className="btn btn-outline-light btn-lg" onClick={handleShowSkills}>
              Show Skills
            </button>
          </>
        )}

        {showSkills && (
          <><div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('programming')}>
                Programming Languages
              </h4>
              {visibleSections['programming'] && (
                <>
                  {skills.filter(skill => skill.category === 'programming').map(skill => (
                    <div key={skill.id}>
                      <span className={`tech-title ${skill.name.replace(/\s+/g, '')}`}>{skill.name}</span>
                      <ProgressBar percentage={parseInt(skill.level)} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('frameworks')}>
                Frameworks & Libraries
              </h4>
              {visibleSections['frameworks'] && (
                <>
                  {skills.filter(skill => skill.category === 'frameworks').map(skill => (
                    <div key={skill.id}>
                      <span className={`tech-title ${skill.name.replace(/\s+/g, '')}`}>{skill.name}</span>
                      <ProgressBar percentage={parseInt(skill.level)} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('webTechnologies')}>
                Web Technologies
              </h4>
              {visibleSections['webTechnologies'] && (
                <>
                  {skills.filter(skill => skill.category === 'webTechnologies').map(skill => (
                    <div key={skill.id}>
                      <span className={`tech-title ${skill.name.replace(/\s+/g, '')}`}>{skill.name}</span>
                      <ProgressBar percentage={parseInt(skill.level)} />
                    </div>
                  ))}
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('learning')}>
                I am learning...
              </h4>
              {visibleSections['learning'] && (
                <div className="learning-container">
                  <ul className="learning-list">
                    <li className='li-learning'>
                      Amazon Web Services online course by 
                      <a href='https://midu.dev/' className='text-primary' target="_blank" rel='noreferrer'>
                      Midudev.
                      </a>
                    </li>
                    <li className='li-learning'>
                      The Git & Github Bootcamp by 
                      <a href='https://www.udemy.com/user/coltsteele/' className='text-primary' target="_blank" rel='noreferrer'>
                      Colt Steele.
                      </a>
                    </li>
                  </ul>
                </div>  
              )}
            </div>
          </div><p className='anotation'>This information was taken from my own API hosted on render.</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
