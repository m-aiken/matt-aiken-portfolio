import React from 'react';
import PropTypes from 'prop-types';

const DemoGitHubLinks = props => {
  return (
    <div className="project-buttons">
      <button>
        <a href={props.projectDemoLink} target="_blank">
          Demo
        </a>
      </button>
      <button>
        <a href={props.gitHubLink} target="_blank">
          GitHub
        </a>
      </button>
    </div>
  );
};

DemoGitHubLinks.propTypes = {
  projectDemoLink: PropTypes.string.isRequired,
  gitHubLink: PropTypes.string.isRequired
};

export default DemoGitHubLinks;
