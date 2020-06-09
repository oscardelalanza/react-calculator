import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { clickHandler } = this.props;
    clickHandler(buttonName);
  }

  render() {
    const groups = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', 'X'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];

    return (
      <div className="button-panel">
        {groups.map((buttons, index) => (
          <div className={`group group-${index + 1}`} key={`group${index + 1}`}>
            {buttons.map(value => {
              let button = '';

              if (value === '0') {
                button = <Button key={value} name={value} wide color="btn-gray" clickHandler={this.handleClick} />;
              } else if (['÷', 'X', '-', '+', '='].includes(value)) {
                button = <Button key={value} name={value} clickHandler={this.handleClick} />;
              } else {
                button = <Button key={value} name={value} color="btn-gray" clickHandler={this.handleClick} />;
              }

              return button;
            })}
          </div>
        ))}
      </div>
    );
  }
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
