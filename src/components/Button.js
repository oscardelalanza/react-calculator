import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  render() {
    return (
      <button className="button">{this.props.name}</button>
    );
  }
}

Button.defaultProps = {
  name: '',
};

Button.propTypes = {
  name: PropTypes.string,
};
