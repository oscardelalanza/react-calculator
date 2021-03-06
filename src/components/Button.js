import React from 'react';
import PropTypes from 'prop-types';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clickHandler, name } = this.props;
    clickHandler(name);
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
      <button type="button" className={buttonClass} onClick={this.handleClick}>{name}</button>
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
  clickHandler: PropTypes.func.isRequired,
};
