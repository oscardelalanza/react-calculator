import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import {number} from 'prop-types';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  addDigit(buttonName) {
    this.setState(state => {
      let next = state.next || '';

      if (buttonName !== '.') {
        next += buttonName;
      } else if (buttonName === '.' && !next.includes(buttonName)) {
        if (next) {
          next += buttonName;
        } else {
          next = `0${buttonName}`;
        }
      }

      return { next };
    }, () => console.log(this.state));
  }

  handleClick(buttonName) {
    const operators = ['AC', '+/-', '%', '÷', 'X', '-', '+', '='];

    if (operators.includes(buttonName)) {
      // TODO: handle calculations
    } else {
      this.addDigit(buttonName);
    }
  }

  render() {
    const { total, next } = this.state;

    return (
      <div className="app container">
        <Display result={(total || next || 0).toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
