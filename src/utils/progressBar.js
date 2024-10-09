/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react';
import * as THREE from 'three';

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ percentage }) => {
  // Función para determinar el color de la barra según el porcentaje
  const getColor = (percentage) => {
    if (percentage < 50) {
      return 0xff0000; // Rojo
    } else if (percentage < 75) {
      return 0xffff00; // Amarillo
    } else {
      return 0x00ff00; // Verde
    }
  };

  return (
    <group>
      <mesh>
        <boxGeometry args={[1, 0.5, 0.1]} />
        <meshPhysicalMaterial color={getColor(percentage)} />
      </mesh>
      <mesh position={[0, 0.5, 0]}>
        <textGeometry args={[`${percentage}%`, { font: 'helvetiker', size: 0.1, height: 0.01 }]} />
        <meshBasicMaterial color={0xffffff} />
      </mesh>
    </group>
  );
};

export default ProgressBar;
