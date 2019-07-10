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
          <span className="open-slide">
            <button
              className="hamburger"
              id="open"
              onClick={this.handleSideMenu}
            >
              &#9776;
            </button>
          </span>
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
        <div
          className="side-nav"
          style={this.state.sideMenu ? { width: '220px' } : { width: '0' }}
          id="side-menu"
        >
          <button
            className="close-button"
            id="close"
            onClick={this.handleSideMenu}
          >
            &times;
          </button>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
