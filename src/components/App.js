import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      /* empty to avoid linter check */
    };
  }

  render() {
    return (
      <div className="container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
