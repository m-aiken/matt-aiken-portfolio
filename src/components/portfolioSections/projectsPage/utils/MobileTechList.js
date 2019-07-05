import React from 'react';
import PropTypes from 'prop-types';

const MobileTechList = props => {
  return (
    <p className="mobile-tech-list tablet-show">
      <strong>Tech: </strong>
      {props.mobileTechList}
    </p>
  );
};

MobileTechList.propTypes = {
  mobileTechList: PropTypes.string.isRequired
};

export default MobileTechList;
