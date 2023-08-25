import Button from './Button';
import calculate from '../logic/calculate';
import React, { useState } from 'react';

function Calculator() {
  const [operation, setResult] = useState({
    total: null,
    second: null,
    operation: null,
  });
  const [displayValue, setDisplayValue] = useState('');

  return (
    <div className="calc">
      <input className="keys4" value={displayValue} readOnly>0</input>
      <Button text="AC" styling="key1" onClick={handleButtonClick} />
      <Button text="+/-" styling="key1" onClick={handleButtonClick} />
      <Button text="%" styling="key1" onClick={handleButtonClick} />
      <Button text="÷" styling="key1b" onClick={handleButtonClick} />
      <Button text="7" styling="key1" onClick={handleButtonClick} />
      <Button text="8" styling="key1" onClick={handleButtonClick} />
      <Button text="9" styling="key1" onClick={handleButtonClick} />
      <Button text="x" styling="key1b" onClick={handleButtonClick} />
      <Button text="4" styling="key1" onClick={handleButtonClick} />
      <Button text="5" styling="key1" onClick={handleButtonClick} />
      <Button text="6" styling="key1" onClick={handleButtonClick} />
      <Button text="-" styling="key1b" onClick={handleButtonClick} />
      <Button text="1" styling="key1" onClick={handleButtonClick} />
      <Button text="2" styling="key1" onClick={handleButtonClick} />
      <Button text="3" styling="key1" onClick={handleButtonClick} />
      <Button text="+" styling="key1b" onClick={handleButtonClick} />
      <Button text="0" styling="keys2" onClick={handleButtonClick} />
      <Button text="." styling="key1" onClick={handleButtonClick} />
      <Button text="=" styling="key1b" onClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
