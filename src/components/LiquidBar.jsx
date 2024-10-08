/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import { initLiquidBars } from './liquidBarUtils';

const LiquidBars = ({ percentages, colors }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const { scene, camera, renderer } = initLiquidBars(mountRef, percentages, colors);

    window.addEventListener('resize', () => {
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
      camera.left = -1;
      camera.right = 1;
      camera.top = 1;
      camera.bottom = -1;
      camera.updateProjectionMatrix();
    });

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', () => {});
    };
  }, [percentages, colors]);

  return (
    <div className="liquid-bars-container" ref={mountRef} style={{ width: '100%', height: '400px' }} />
  );
};

export default LiquidBars;
