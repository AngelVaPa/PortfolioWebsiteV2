// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar'; 
import '../css/Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/skills');
        if (!response.ok) {
          throw new Error('Error at loading skills.');
        }
        const data = await response.json();
        setSkills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="skillsTitle">Skills</h2>
        {loading && <p>Loading skills...</p>}
        {error && <p className="text-danger">{error}</p>}
        {skills.map(skill => (
          <div key={skill.id}>
            <span className="tech-title">{skill.name}</span>
            <ProgressBar percentage={parseInt(skill.level)} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
