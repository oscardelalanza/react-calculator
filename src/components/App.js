import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
