// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RubikCube3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Crear la escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    
    // Establecer el color de fondo transparente
    renderer.setClearColor(0x000000, 0); 
    mountRef.current.appendChild(renderer.domElement);

    // Función para establecer el tamaño del renderer
    const setSize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    setSize(); // Ajusta el tamaño inicial

    // Crear geometría del cubo y materiales
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Frente
      new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Atrás
      new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Arriba
      new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Abajo
      new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Izquierda
      new THREE.MeshBasicMaterial({ color: 0x00ffff }), // Derecha
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 3; // Ajusta la posición de la cámara

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Manejo del tamaño de la ventana
    window.addEventListener('resize', setSize); // Usar la función setSize

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', setSize); // Limpiar el evento al desmontar
    };
  }, []);

  return (
    <div className="rubik-cube-container" ref={mountRef} style={{ width: '100%', height: '400px' }} /> // Ajusta el alto según sea necesario
  );
};

export default RubikCube3D;
