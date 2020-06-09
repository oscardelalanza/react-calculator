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
  }

  clearState() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  handleClick(buttonName) {
    const operators = ['+', '-', 'X', '÷', '%', '=', 'AC', '+/-'];

    if (buttonName === 'AC') {
      this.clearState();
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
