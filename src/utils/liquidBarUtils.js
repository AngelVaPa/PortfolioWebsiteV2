// liquidBarUtils.js
import * as THREE from 'three';

export const initLiquidBars = (mountRef, percentages, colors) => {
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
  mountRef.current.appendChild(renderer.domElement);

  camera.position.z = 2;

  // Shader de fragmento personalizado para el líquido dentro de la barra
  const fragmentShader = `
    uniform float uTime;
    uniform float uPercentage;
    void main() {
      vec2 uv = gl_FragCoord.xy / vec2(100.0, 50.0); // Ajustar dimensiones para barra horizontal
      float wave = sin(uv.x * 10.0 + uTime) * 0.05; // Onda en el líquido

      // Definir el área de la barra en función del porcentaje
      if (uv.x < uPercentage) {
        vec3 liquidColor = vec3(${color}); // Color del líquido

        // Añadir variación de color con movimiento
        liquidColor.r += 0.1 * sin(uv.y * 10.0 + uTime);
        liquidColor.g += 0.1 * cos(uv.x * 10.0 + uTime);
        liquidColor.b += 0.1 * sin(uv.x * 10.0 + uTime);

        gl_FragColor = vec4(liquidColor + wave, 1.0); // Aplicar el movimiento
      } else {
        discard; // Fuera del área de la barra
      }
    }
  `;

  // Crear las barras líquidas
  percentages.forEach((percentage, index) => {
    const liquidMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPercentage: { value: percentage / 100 },
      },
      fragmentShader,
    });

    const geometry = new THREE.PlaneGeometry(2, 0.5); // Barra horizontal
    const liquidMesh = new THREE.Mesh(geometry, liquidMaterial);
    liquidMesh.position.set(0, index * -0.7, 0); // Espaciado vertical
    scene.add(liquidMesh);

    // Efecto de vidrio transparente
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xaaaaaa,
      transparent: true,
      opacity: 0.2,
      roughness: 0.1,
      metalness: 0.9,
      reflectivity: 0.5,
      transmission: 0.8,
    });

    const glassGeometry = new THREE.BoxGeometry(2.2, 0.55, 0.1); // Un poco más grande que la barra
    const glassMesh = new THREE.Mesh(glassGeometry, glassMaterial);
    glassMesh.position.set(0, index * -0.7, 0.01); // Asegúrate de que esté delante de la barra líquida
    scene.add(glassMesh);
  });

  const animate = () => {
    requestAnimationFrame(animate);
    liquidMaterial.uniforms.uTime.value += 0.05; // Animar el líquido
    renderer.render(scene, camera);
  };

  animate();

  return { scene, camera, renderer };
};
