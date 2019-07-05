import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="hamburger-container">
        <span className="open-slide mobile-show">
          <button className="hamburger">&#9776;</button>
        </span>
      </div>
      <div className="mobile-show" />
      <ul className="main-nav mobile-hide">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <ul className="nav-links">
        <li>
          <a href="https://github.com/m-aiken" target="_blank">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="documents/draft_cv.pdf" target="_blank">
            CV
          </a>
        </li>
      </ul>
      {/* Side menu for mobile */}
      <div className="side-nav" id="side-menu">
        <button className="close-button">&times;</button>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
