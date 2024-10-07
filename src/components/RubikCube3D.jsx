// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const RubikCube3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); 
    
    // Establecer el color de fondo transparente
    renderer.setClearColor(0x000000, 0); 
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const setSize = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };

    setSize(); 

    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xF7DF1E }), // JavaScript - Amarillo
      new THREE.MeshBasicMaterial({ color: 0xE74C3C }), // Java - Rojo
      new THREE.MeshBasicMaterial({ color: 0x306998 }), // Python - Azul oscuro
      new THREE.MeshBasicMaterial({ color: 0x68217A }), // C# - Cyan oscuro
      new THREE.MeshBasicMaterial({ color: 0x8CC84B }), // Node.js - Verde
      new THREE.MeshBasicMaterial({ color: 0x61DAFB }), // React - Azul claro
    ];       

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 3;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    window.addEventListener('resize', setSize);

    return () => {
      if (mountRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', setSize); // Limpiar el evento al desmontar
    };
  }, []);

  return (
    <div className="rubik-cube-container" ref={mountRef} style={{ width: '100%', height: '400px' }} /> 
  );
};

export default RubikCube3D;
