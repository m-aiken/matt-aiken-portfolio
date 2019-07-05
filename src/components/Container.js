import React, { Component } from 'react';
import SmoothScroll from 'smooth-scroll';

import Navbar from './navbar/Navbar';
import HomePage from './portfolioSections/homePage/HomePage';
import ProjectsPage from './portfolioSections/projectsPage/ProjectsPage';
import AboutPage from './portfolioSections/aboutPage/AboutPage';
import ContactPage from './portfolioSections/contactPage/ContactPage';

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500
});

class Container extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage />
      </div>
    );
  }
}

export default Container;
