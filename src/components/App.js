import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

export default function App() {
  return (
    <div className="container">
      <Display result={0} />
      <ButtonPanel />
    </div>
  );
}
