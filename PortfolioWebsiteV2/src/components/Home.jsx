// eslint-disable-next-line no-unused-vars
import React from "react";
import Particles from "react-tsparticles";

const Home = () => {
  const particleOptions = {
    background: {
      color: {
        value: "#000000",
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
        value: "#ffffff",
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
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Angel Vazquez
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Particles Background */}
      <Particles id="tsparticles" options={particleOptions} />

      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-3 text-white">Angel Vazquez</h1>
            <p className="lead text-light">iOS & Flutter Developer</p>
            <div className="mt-4">
              <a href="#portfolio" className="btn btn-primary btn-lg me-3">
                View My Work
              </a>
              <a href="/path/to/cv.pdf" className="btn btn-outline-light btn-lg">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
