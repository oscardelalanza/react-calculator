import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, color, wide }) {
  let buttonClass = 'button';

  if (color) {
    buttonClass += ` ${color}`;
  }

  if (wide) {
    buttonClass += ' btn-50';
  }

  return (
    <button type="button" className={buttonClass}>{name}</button>
  );
}

Button.defaultProps = {
  name: '',
  color: '',
  wide: false,
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
