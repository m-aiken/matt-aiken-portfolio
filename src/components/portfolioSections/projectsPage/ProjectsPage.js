import React, { Component } from 'react';

import './ProjectsPage.css';
import ProjectTabs from './ProjectTabs';
import DrumMachineProject from './projects/DrumMachineProject';
import NutritionAppProject from './projects/NutritionAppProject';
import AnimalGameProject from './projects/AnimalGameProject';
import WhackAMattProject from './projects/WhackAMattProject';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      classNames: [
        { selected: true },
        { selected: false },
        { selected: false },
        { selected: false }
      ]
    };
  }

  changeProject = e => {
    const { id } = e.target;
    this.setState({
      classNames: this.state.classNames.map((tab, idx) => {
        tab.selected = idx === parseInt(id) ? true : false;
        return tab;
      })
    });
  };

  render() {
    return (
      <section id="projects">
        <ProjectTabs
          changeProject={this.changeProject}
          border={this.state.classNames}
        />
        <div className="project-container">
          <DrumMachineProject show={this.state.classNames[0].selected} />
          <NutritionAppProject show={this.state.classNames[1].selected} />
          <AnimalGameProject show={this.state.classNames[2].selected} />
          <WhackAMattProject show={this.state.classNames[3].selected} />
        </div>
      </section>
    );
  }
}

export default ProjectsPage;
