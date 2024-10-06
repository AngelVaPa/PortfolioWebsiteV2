// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import RubikCube3D from './RubikCube3D';
import "../css/Skills.css";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false); // Estado para controlar la visibilidad de las habilidades

  const handleShowSkills = () => {
    setShowSkills(true); // Cambia el estado a verdadero al hacer clic
  };

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        {!showSkills && (
          <>
            <h2 className="text-center mb-5">Skills</h2>
            <RubikCube3D />
            <button 
              className="btn btn-primary mt-4" 
              onClick={handleShowSkills}
            >
              Show Skills
            </button>
          </>
        )}

        {showSkills && (
          <div className="row mt-5">
            {/* Programming Languages */}
            <div className="col-lg-6 mb-4">
              <h4 className="text-primary">Programming Languages</h4>
              <ul className="list-group">
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">Swift</li>
                <li className="list-group-item">Dart</li>
                <li className="list-group-item">Java</li>
                <li className="list-group-item">C#</li>
              </ul>
            </div>

            {/* Frameworks & Libraries */}
            <div className="col-lg-6 mb-4">
              <h4 className="text-primary">Frameworks & Libraries</h4>
              <ul className="list-group">
                <li className="list-group-item">React</li>
                <li className="list-group-item">Flutter</li>
                <li className="list-group-item">Node.js</li>
                <li className="list-group-item">Firebase</li>
                <li className="list-group-item">Bootstrap</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="col-lg-6 mb-4">
              <h4 className="text-primary">Tools</h4>
              <ul className="list-group">
                <li className="list-group-item">Git</li>
                <li className="list-group-item">GitHub</li>
                <li className="list-group-item">Android Studio</li>
                <li className="list-group-item">Xcode</li>
                <li className="list-group-item">Visual Studio Code</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="col-lg-6 mb-4">
              <h4 className="text-primary">Databases</h4>
              <ul className="list-group">
                <li className="list-group-item">Firestore</li>
                <li className="list-group-item">MySQL</li>
                <li className="list-group-item">PostgreSQL</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
