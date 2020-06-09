import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends React.Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    return (
      <div className="button-panel">
        <div className="group group-1">
          <Button name="AC" color="btn-gray" />
          <Button name="+\-" color="btn-gray" />
          <Button name="%" color="btn-gray" />
          <Button name="÷" />
        </div>

        <div className="group group-2">
          <Button name="7" color="btn-gray" />
          <Button name="8" color="btn-gray" />
          <Button name="9" color="btn-gray" />
          <Button name="X" />
        </div>

        <div className="group group-3">
          <Button name="4" color="btn-gray" />
          <Button name="5" color="btn-gray" />
          <Button name="6" color="btn-gray" />
          <Button name="-" />
        </div>

        <div className="group group-4">
          <Button name="1" color="btn-gray" />
          <Button name="2" color="btn-gray" />
          <Button name="3" color="btn-gray" />
          <Button name="+" />
        </div>

        <div className="group group-5">
          <Button name="0" color="btn-gray" wide />
          <Button name="." color="btn-gray" />
          <Button name="=" />
        </div>
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
