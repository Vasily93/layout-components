import React from 'react';
import PropTypes from 'prop-types';

function Buttons({ button }) {
  return (
    <p><button type='click'>{button}</button></p>
  );
}

Buttons.propTypes = {
  button: PropTypes.button
};

export default Buttons;
