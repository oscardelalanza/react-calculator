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
    this.addDigit = this.addDigit.bind(this);
    this.clearState = this.clearState.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.handleResult = this.handleResult.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
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

  addOperation(buttonName) {
    this.setState(state => {
      let total;
      const next = null;
      const operation = buttonName;

      if (state.next) {
        total = state.next;
      } else if (state.total && !state.next) {
        total = state.total;
      } else {
        total = '0';
      }

      return { total, next, operation };
    }, () => console.log(this.state));
  }

  clearState() {
    this.setState(() => ({
      total: null,
      next: null,
      operation: null,
    }));
  }

  handleCalculate(buttonName) {
    this.setState(state => {
      const { total, next, operation } = calculate(state, buttonName);

      return { total, next, operation };
    }, () => console.log(this.state));
  }

  handleClick(buttonName) {
    const operators = ['%', '÷', 'X', '-', '+'];
    const calculateTriggers = ['=', '+/-'];

    if (operators.includes(buttonName)) {
      this.addOperation(buttonName);
    } else if (buttonName === 'AC') {
      this.clearState();
    } else if (calculateTriggers.includes(buttonName)) {
      this.handleCalculate(buttonName);
    } else {
      this.addDigit(buttonName);
    }
  }

  handleResult() {
    let result = '0';
    const { total, next, operation } = this.state;

    if ((!total && !operation && next) || (total && next && operation)) {
      result = next;
    } else if (total && !next && !operation) {
      result = total;
    }

    return result;
  }

  render() {
    return (
      <div className="app container">
        <Display result={this.handleResult()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
