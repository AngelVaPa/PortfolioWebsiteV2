/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// RotatingImage.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import '../css/RotatingImage.css';

const RotatingImage = ({ src, alt }) => {
  const imageRef = useRef(null);
  let isDragging = false;
  let startX, startY;
  let rotationX = 0, rotationY = 0;

  useEffect(() => {
    const image = imageRef.current;

    const onMouseDown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      image.style.cursor = 'grabbing'; // Cambia el cursor mientras se arrastra
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;

      rotationX += deltaY * 0.5; // Ajusta la rotación vertical
      rotationY += deltaX * 0.5; // Ajusta la rotación horizontal

      image.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

      startX = e.clientX;
      startY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      image.style.cursor = 'grab'; // Cambia el cursor de vuelta
    };

    image.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    return () => {
      image.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div className="image-container">
      <img src={src} alt={alt} className="rotate-image" ref={imageRef} />
    </div>
  );
};

export default RotatingImage;
