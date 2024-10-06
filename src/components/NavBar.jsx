 // eslint-disable-next-line no-unused-vars
import React from "react";
import profileImage from '../images/javap_logo.png';
import "../css/NavBar.css"

const NavBar = () => {
return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div className="container">
    <a className="navbar-brand" href="/">
        <img src={profileImage} alt="Profile" className="javap_logo" />
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
            <a className="nav-link" href="about">
            About Me
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="portfolio">
            Portfolio
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="skills">
            Skills
            </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="contact">
            Contact
            </a>
        </li>
        </ul>
    </div>
    </div>
    </nav>
    );
};
    
export default NavBar;