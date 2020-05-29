import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, width }) {
  let buttonClass = 'button';

  if (color) {
    buttonClass += ` ${color}`;
  }

  if (width) {
    buttonClass += ` ${width}`;
  }

  return (
    <button type="button" className={buttonClass}>{name}</button>
  );
}

Button.defaultProps = {
  name: '',
  color: '',
  width: '',
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
};
