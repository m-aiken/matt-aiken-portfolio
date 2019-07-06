import React from 'react';

import './HomePage.css';

const HomePage = () => {
  return (
    <section id="home">
      <h1>Matt Aiken</h1>
      <p>Web Developer</p>
      <p>Brighton, UK</p>
      <div className="home-links">
        <div>
          <a href="#projects">
            <i className="fas fa-project-diagram" />
            Projects
          </a>
        </div>
        <div>
          <a href="https://github.com/m-aiken" target="_blank">
            <i className="fab fa-github" />
            GitHub
          </a>
        </div>
        <div>
          <a href="documents/draft_cv.pdf" target="_blank">
            <i className="far fa-file" />
            CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
