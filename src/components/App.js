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

  handleClick(buttonName) {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    if (numbers.includes(buttonName)) {
      // TODO: update state
    }
  }

  render() {
    return (
      <div className="app container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
