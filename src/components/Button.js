import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let buttonClass = 'button';
    const { color, wide, name } = this.props;

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
