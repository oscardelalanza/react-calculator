import React from 'react';

export default class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    return (
      <div className="display">
        {this.state.result}
      </div>
    );
  }
}
