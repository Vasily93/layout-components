import React from 'react';
import PropTypes from 'prop-types';

function Images({ imgURL }) {
  return (
    <div>
      <img src={imgURL}></img>
    </div>
  );
}

Images.propTypes = {
  imgURL: PropTypes.imgURL,
};

export default Images;
