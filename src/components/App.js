import React from 'react';
import Display from './Display';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Display result={0} />
        <ButtonPanel />
      </div>
    );
  }
}
