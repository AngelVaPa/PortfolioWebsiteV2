// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import '../css/ProgressBar.css'; 

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ percentage }) => {
  const barRef = useRef(null);

  useEffect(() => {
    let startColor = [255, 165, 0]; 
    let endColor = [0, 128, 255]; 
    const interval = setInterval(() => {
      const colorChange = startColor.map((start, index) =>
        Math.floor(start + (endColor[index] - start) * (Math.random() * 0.05))
      );
      if (barRef.current) {
        barRef.current.style.backgroundColor = `rgb(${colorChange.join(',')})`;
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-container">
      <div className="progress-bar" ref={barRef} style={{ width: `${percentage}%` }}>
        <span className="progress-text">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
