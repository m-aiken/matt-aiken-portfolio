import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileTechList from '../utils/MobileTechList';
import TechStackTable from '../utils/TechStackTable';
import DemoGitHubLinks from '../utils/DemoGitHubLinks';

class AnimalGameProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDemoLink: 'https://spellthatanimal.com',
      gitHubLink: 'https://github.com/m-aiken/spell_that_animal',
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
        id="project-3-content"
        className={`project-content ${this.props.show ? 'show' : ''}`}
      >
        <div className="project-top">
          <div className="project-image">
            <img
              src="./img/spell_that_animal_screenshot.png"
              alt="spell that animal screenshot"
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
            'Spell that Animal' game. A simple children's game to aid in
            learning to spell. Designed and styled primarily for touch screen
            tablets for the most intuitive user experience but works equally
            well on desktop. Built with React.
          </p>
        </div>
      </div>
    );
  }
}

export default AnimalGameProject;
