import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileTechList from '../utils/MobileTechList';
import TechStackTable from '../utils/TechStackTable';
import DemoGitHubLinks from '../utils/DemoGitHubLinks';

class WhackAMattProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDemoLink: 'https://www.google.com/',
      gitHubLink: 'https://github.com/m-aiken/whack-a-matt',
      techStack: [
        'React',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tested with Jest & Enzyme'
      ],
      mobileTechList: 'React, JavaScript, HTML5, CSS3, Jest, Enzyme'
    };
  }

  static propTypes = {
    show: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        id="project-4-content"
        className={`project-content ${this.props.show ? 'show' : ''}`}
      >
        <div className="project-top">
          <div className="project-image">
            <img
              src="./img/whack_a_matt_screenshot.png"
              alt="whack a matt game screenshot"
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
          <p>A simple 'Whack-A-Matt' game, built with React.</p>
        </div>
      </div>
    );
  }
}

export default WhackAMattProject;
