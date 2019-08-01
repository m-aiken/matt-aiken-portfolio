import React, { Component } from 'react';

import './Navbar.css';

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      sideMenu: false
    };
  }

  handleSideMenu = e => {
    const { id } = e.target;
    this.setState({ sideMenu: id === 'open' ? true : false });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="hamburger-container">
          <button className="hamburger" id="open" onClick={this.handleSideMenu}>
            &#9776;
          </button>
        </div>
        <div className="navbar-dummy-div" />
        <ul className="main-nav">
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
            <a
              href="https://github.com/m-aiken"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github" />
            </a>
          </li>
          <li>
            <a
              href="./docs/matthew_aiken_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
        </ul>
        {/* Side menu for mobile */}
        <div
          className="side-nav"
          style={this.state.sideMenu ? { width: '180px' } : { width: '0' }}
          id="side-menu"
        >
          <button
            className="close-button"
            id="close"
            onClick={this.handleSideMenu}
          >
            &times;
          </button>
          <a href="#home" onClick={this.handleSideMenu}>
            Home
          </a>
          <a href="#projects" onClick={this.handleSideMenu}>
            Projects
          </a>
          <a href="#about" onClick={this.handleSideMenu}>
            About
          </a>
          <a href="#contact" onClick={this.handleSideMenu}>
            Contact
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
