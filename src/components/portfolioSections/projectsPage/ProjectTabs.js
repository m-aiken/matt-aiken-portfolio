import React from 'react';
import PropTypes from 'prop-types';

const ProjectTabs = props => {
  return (
    <div className="project-tabs">
      <div
        id="0"
        className={`project-tab ${
          props.border[0].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <h1 id="0" className="tab-letter">
          One
        </h1>
        <h1 id="0" className="tab-number">
          1
        </h1>
      </div>
      <div
        id="1"
        className={`project-tab ${
          props.border[1].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <h1 id="1" className="tab-letter">
          Two
        </h1>
        <h1 id="1" className="tab-number">
          2
        </h1>
      </div>
      <div
        id="2"
        className={`project-tab ${
          props.border[2].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <h1 id="2" className="tab-letter">
          Three
        </h1>
        <h1 id="2" className="tab-number">
          3
        </h1>
      </div>
      <div
        id="3"
        className={`project-tab ${
          props.border[3].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <h1 id="3" className="tab-letter">
          Four
        </h1>
        <h1 id="3" className="tab-number">
          4
        </h1>
      </div>
    </div>
  );
};

ProjectTabs.propTypes = {
  changeProject: PropTypes.func.isRequired,
  border: PropTypes.array.isRequired
};

export default ProjectTabs;
