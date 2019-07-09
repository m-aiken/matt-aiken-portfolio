import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MobileTechList from '../utils/MobileTechList';
import TechStackTable from '../utils/TechStackTable';
import DemoGitHubLinks from '../utils/DemoGitHubLinks';

class DrumMachineProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectDemoLink: 'http://drummachine.live/',
      gitHubLink: 'https://github.com/m-aiken/react-drum-machine-v1',
      techStack: [
        'React with Context API',
        'JavaScript',
        'Tone.js',
        'Bootstrap 4',
        'HTML5',
        'CSS3',
        'Tested with Jest & Enzyme'
      ],
      mobileTechList:
        'React with Context API, JavaScript, Tone.js, Bootstrap 4, HTML5, CSS3, Jest, Enzyme'
    };
  }

  static propTypes = {
    show: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        id="project-1-content"
        className={`project-content ${this.props.show ? 'show' : ''}`}
      >
        <div className="project-top">
          <div className="project-image">
            <img src="./img/drum_machine.png" alt="drum machine screenshot" />
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
            A 10 sound Drum Machine with 16-step sequencer. Pitch, reverb and
            volume controls for each sound and global controls for master
            volume, BPM adjustment and sequencer start/stop. Made with React
            utilising the{' '}
            <a href="https://tonejs.github.io/" target="_blank">
              Tone.js
            </a>{' '}
            library, a library centered around audio/synthesizer creation.
          </p>
        </div>
      </div>
    );
  }
}

export default DrumMachineProject;
