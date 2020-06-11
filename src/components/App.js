import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

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
      const total = state.next;
      const next = null;
      const operation = buttonName;

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

  handleClick(buttonName) {
    const operators = ['%', '÷', 'X', '-', '+'];
    const calculateTriggers = ['=', '+/-'];

    if (operators.includes(buttonName)) {
      this.addOperation(buttonName);
    } else if (buttonName === 'AC') {
      this.clearState();
    } else if (calculateTriggers.includes(buttonName)) {
      // TODO: call calculate
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
