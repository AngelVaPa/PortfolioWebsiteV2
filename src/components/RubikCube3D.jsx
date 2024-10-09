// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';
import javascriptLogo from '../images/javascript.svg';
import javaLogo from '../images/java.svg';
import csharpLogo from '../images/csharp.svg';
import nodejsLogo from '../images/nodejs.svg';
import pythonLogo from '../images/python.svg';
import reactLogo from '../images/react.svg';
import * as THREE from 'three';

const RubikCube3D = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

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

    const loader = new THREE.TextureLoader();
    const materials = [
      new THREE.MeshBasicMaterial({ map: loader.load(javascriptLogo) }), 
      new THREE.MeshBasicMaterial({ map: loader.load(javaLogo) }),       
      new THREE.MeshBasicMaterial({ map: loader.load(pythonLogo) }),     
      new THREE.MeshBasicMaterial({ map: loader.load(csharpLogo) }),   
      new THREE.MeshBasicMaterial({ map: loader.load(nodejsLogo) }),     
      new THREE.MeshBasicMaterial({ map: loader.load(reactLogo) }),    
    ];

    const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    camera.position.z = 3;

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
      window.removeEventListener('resize', setSize);
    };
  }, []);

  return (
    <div className="rubik-cube-container" ref={mountRef} style={{ width: '100%', height: '400px' }} /> 
  );
};

export default RubikCube3D;
