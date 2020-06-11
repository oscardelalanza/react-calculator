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
    this.addOperator = this.addOperator.bind(this);
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

  addOperator(buttonName) {
    this.setState(() => ({ operation: buttonName }), () => console.log(this.state));
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
      this.addOperator(buttonName);
    } else if (buttonName === 'AC') {
      this.clearState();
    } else if (calculateTriggers.includes(buttonName)) {
      // TODO: call calculate
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
