// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ProgressBar from './ProgressBar'; 
import RubikCube3D from './RubikCube3D';
import '../css/Skills.css';

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [visibleSections, setVisibleSections] = useState({}); 

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
        style={{ minHeight: '100vh', position: 'relative', zIndex: 2 
      }}>
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
                  <br/>
                  <span className="tech-title" style={{ color: "#F7DF1E" }}>JavaScript</span>
                  <ProgressBar percentage={80} />
                  <span className="tech-title" style={{ color: "#3178C6 " }}>TypeScript</span>
                  <ProgressBar percentage={80} />
                  <span className='tech-title' style={{ color: "#68217A" }}>C#</span>
                  <ProgressBar percentage={70} />
                  <span className='tech-title' style={{ color: "#00B4AB" }}>Dart</span>
                  <ProgressBar percentage={70} />
                  <span className='tech-title' style={{ color: "#E74C3C" }}>Java</span>
                  <ProgressBar percentage={70} />
                  <span className='tech-title' style={{ color: "#306998" }}>Python</span>
                  <ProgressBar percentage={65} />
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('frameworks')}>
                Frameworks & Libraries
              </h4>
              {visibleSections['frameworks'] && (
                <>
                  <br/>
                  <span className="tech-title" style={{ color: "#61DAFB" }}>React</span>
                  <ProgressBar percentage={80} />
                  <span className='tech-title' style={{ color: "#ffffff" }}>Express</span>
                  <ProgressBar percentage={80} />
                  <span className='tech-title' style={{ color: "#512BD4" }}>ASP.NET Core</span>
                  <ProgressBar percentage={70} />
                  <span className='tech-title' style={{ color: "#02569B" }}>Flutter</span>
                  <ProgressBar percentage={70} />
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('webTechnologies')}>
                Web Technologies
              </h4>
              {visibleSections['webTechnologies'] && (
                <>
                  <br/>
                  <span className="tech-title" style={{ color: "#E34F26" }}>HTML</span>
                  <ProgressBar percentage={85} />
                  <span className="tech-title" style={{ color: "#1572B6" }}>CSS</span>
                  <ProgressBar percentage={80} />
                  <span className="tech-title" style={{ color: "#563D7C" }}>Bootstrap</span>
                  <ProgressBar percentage={75} />
                  <span className="tech-title" style={{ color: "#00758F" }}>MySQL</span>
                  <ProgressBar percentage={70} />
                </>
              )}
            </div>

            <div className="col-lg-6 mb-4">
              <h4 className="div-title" onClick={() => toggleSection('learning')}>
                I am learning...
              </h4>
              {visibleSections['learning'] && (
                <>
                  <br/>
                  <li className='li-learning'>Amazon Web Services online course by <a href='https://midu.dev/' className='text-primary' target="_blank" rel='noreferrer'>Midudev.</a></li>
                  <li className='li-learning'>The Git & Github Bootcamp by <a href='https://www.udemy.com/user/coltsteele/' className='text-primary' target="_blank" rel='noreferrer'>Colt Steele.</a></li>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
