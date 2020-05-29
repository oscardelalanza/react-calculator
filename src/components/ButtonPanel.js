import React from 'react';
import Button from './Button';

export default function ButtonPanel() {
  return (
    <div className="button-panel">
      <div className="group group-1">
        <Button name="AC" />
        <Button name="+\-" />
        <Button name="%" />
        <Button name="÷" color="btn-orange" />
      </div>

      <div className="group group-2">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="X" color="btn-orange" />
      </div>

      <div className="group group-3">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" color="btn-orange" />
      </div>

      <div className="group group-4">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" color="btn-orange" />
      </div>

      <div className="group group-5">
        <Button name="0" width="btn-50" />
        <Button name="." />
        <Button name="=" color="btn-orange" />
      </div>
    </div>
  );
}
