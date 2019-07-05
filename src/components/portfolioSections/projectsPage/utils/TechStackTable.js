import React from 'react';
import PropTypes from 'prop-types';

const TechStackTable = props => {
  return (
    <table className="tech-stack-table tablet-hide">
      <thead>
        <tr>
          <th>Tech Stack / Skills</th>
        </tr>
      </thead>
      <tbody>
        {props.techStack.map(item => {
          return (
            <tr>
              <td>{item}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TechStackTable.propTypes = {
  techStack: PropTypes.array.isRequired
};

export default TechStackTable;
