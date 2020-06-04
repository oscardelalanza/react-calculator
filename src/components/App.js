import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// TODO: remove the following comment on the next milestone
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends React.Component {
  render() {
    return (
      <div className="app container">
        <Display />
        <ButtonPanel />
      </div>
    );
  }
}
