import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileTechList from '../utils/MobileTechList';
import TechStackTable from '../utils/TechStackTable';
import DemoGitHubLinks from '../utils/DemoGitHubLinks';

class NutritionAppProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDemoLink: 'http://checkyourmeals.com/',
      gitHubLink: 'https://github.com/m-aiken/nutrition-checker',
      techStack: [
        'React',
        'JavaScript',
        'REST functionality',
        'Bootstrap 4',
        'HTML5',
        'CSS3',
        'Tested with Jest & Enzyme'
      ],
      mobileTechList:
        'React, JavaScript, REST functionality, Bootstrap 4, HTML5, CSS3, Jest, Enzyme'
    };
  }

  static propTypes = {
    show: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        id="project-2-content"
        className={`project-content ${this.props.show ? 'show' : ''}`}
      >
        <div className="project-top">
          <div className="project-image">
            <img
              src="./img/nutritionchecker_screenshot.png"
              alt="nutrition checker screenshot"
            />
          </div>
          <div className="table_and_links">
            <MobileTechList mobileTechList={this.state.mobileTechList} />
            <TechStackTable techStack={this.state.techStack} />
            <DemoGitHubLinks
              projectDemoLink={this.state.projectDemoLink}
              gitHubLink={this.state.gitHubLink}
            />
          </div>
        </div>
        <div className="project-description">
          <p>
            The Nutrition Checker app helps you to easily retrieve the
            nutritional information associated with your favourite recipes.
            Simply enter the ingredients with quantity or weight and the values
            will be calculated. A RESTful application that makes use of the{' '}
            <a href="https://developer.edamam.com/" target="_blank">
              Edamam API
            </a>
            . Built with React, styled with Bootstrap.
          </p>
        </div>
      </div>
    );
  }
}

export default NutritionAppProject;
