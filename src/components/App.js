import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.clearState = this.clearState.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearState() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  addDigit(buttonName) {
    this.setState(state => {
      let next = state.next || '';

      if (buttonName === '.' && !state.next) {
        next += `0${buttonName}`;
      } else if (buttonName === '.') {
        if (!next.includes('.')) {
          next += buttonName;
        }
      } else {
        next += buttonName;
      }

      return { next };
    });
  }

  handleClick(buttonName) {
    const operators = ['+', '-', 'X', '÷', '%', '=', '+/-'];
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];

    if (buttonName === 'AC') {
      this.clearState();
    } else if (numbers.includes(buttonName)) {
      this.addDigit(buttonName);
    }
  }

  render() {
    const { total, next, operation } = this.state;

    return (
      <div className="app container">
        <Display result={(total || next || 0).toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
