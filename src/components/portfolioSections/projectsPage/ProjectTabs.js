import React from 'react';
import PropTypes from 'prop-types';

const ProjectTabs = props => {
  return (
    <div className="project-tabs">
      <div
        id="project-1"
        className={`project-tab ${
          props.border[0].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <img src="./img/drum_machine_logo.png" alt="drum machine logo" id="0" />
      </div>
      <div
        id="project-2"
        className={`project-tab ${
          props.border[1].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <img
          src="./img/nutritionchecker_logo.png"
          alt="nutrition checker logo"
          id="1"
        />
      </div>
      <div
        id="project-3"
        className={`project-tab ${
          props.border[2].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <img
          src="./img/spell_that_animal_logo.png"
          alt="spell that animal logo"
          id="2"
        />
      </div>
      <div
        id="project-4"
        className={`project-tab ${
          props.border[3].selected ? 'tab-border' : ''
        }`}
        onClick={props.changeProject}
      >
        <img src="./img/whackamatt_logo.png" alt="whack a matt logo" id="3" />
      </div>
    </div>
  );
};

ProjectTabs.propTypes = {
  changeProject: PropTypes.func.isRequired,
  border: PropTypes.array.isRequired
};

export default ProjectTabs;
