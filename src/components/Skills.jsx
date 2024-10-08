// Skills.jsx
import React, { useState } from "react";
import LiquidBars from './LiquidBars';
import "../css/Skills.css";

const Skills = () => {
  const [showSkills, setShowSkills] = useState(false); 

  const handleShowSkills = () => {
    setShowSkills(true); 
  };

  // Porcentajes y colores para cada habilidad
  const skillPercentages = [90, 80, 70, 60, 50];
  const skillColors = ['0xff0000', '0xffff00', '0x00ff00', '0x0000ff', '0xff00ff']; // Colores como strings

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}>
        {!showSkills && (
          <>
            <h2 className="skillsTitle">Skills</h2>
            <LiquidBars percentages={skillPercentages} colors={skillColors} />
            <button 
              className="btn btn-outline-light btn-lg" 
              onClick={handleShowSkills}
            >
              Show Skills
            </button>
          </>
        )}

        {showSkills && (
          <div className="row mt-5">
            {/* Aquí puedes continuar con la lógica para mostrar habilidades */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
