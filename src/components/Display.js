import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ result }) {
  return (
    <div className="display">
      {result}
    </div>
  );
}

Display.defaultProps = {
  result: 0,
};

Display.propTypes = {
  result: PropTypes.string,
};
