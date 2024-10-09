// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom"; 
import profileImage from '../images/javap_logo.png';
import "../css/NavBar.css"

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={profileImage} alt="Profile" className="javap_logo" />
        </Link>
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
              <Link className="nav-link" to="/aboutMe">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio"> 
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/skills">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
