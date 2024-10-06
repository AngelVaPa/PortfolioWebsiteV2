// eslint-disable-next-line no-unused-vars
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    
    await loadFull(main);
  };

  const particleOptions = {
    background: {
      color: {
        value: "#000000", // Fondo negro
      },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff", // Partículas blancas
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 3,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
    },
  };

  return (
    <Particles id="tsparticles" init={particlesInit} options={particleOptions} />
  );
};

export default ParticlesBackground;
