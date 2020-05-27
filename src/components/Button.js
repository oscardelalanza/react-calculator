import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name }) {
  return (
    <button type="button" className="button">{name}</button>
  );
}

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
};
