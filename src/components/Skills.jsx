// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; 
import RubikCube3D from './RubikCube3D';
import '../css/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [showSkills, setShowSkills] = useState(false);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const fetchSkills = async () => {
      const response = await fetch('https://portfoliowebsitev2-api.onrender.com');
      const data = await response.json();
      setSkills(data);
    };
    
    fetchSkills();
  }, []);

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
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
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
          <div className="row mt-5">
            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('programming')}>
                Programming Languages
              </h4>
              {visibleSections['programming'] && (
                <>
                  {skills.filter(skill => skill.category === 'programming').map(skill => (
                    <div key={skill.id}>
                      <span className="tech-title">{skill.name}</span>
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
                      <span className="tech-title">{skill.name}</span>
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
                      <span className="tech-title">{skill.name}</span>
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
                <ul>
                  <li className='li-learning'>Amazon Web Services online course by <a href='https://midu.dev/' className='text-primary' target="_blank" rel='noreferrer'>Midudev.</a></li>
                  <li className='li-learning'>The Git & Github Bootcamp by <a href='https://www.udemy.com/user/coltsteele/' className='text-primary' target="_blank" rel='noreferrer'>Colt Steele.</a></li>
                </ul>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
