import React, { useState } from 'react';
import './App.css';

export function numberDigitsCount(number) {
  return String(number).length;
}

export function convertBinaryToDecimal(binaryNumber) {
  let numDigits = numberDigitsCount(binaryNumber);
  let decimalNumber = 0;

  let digitPosition = 0;

  for (let i = numDigits - 1; i >= 0; i--) {
    decimalNumber += (Number(String(binaryNumber).charAt(digitPosition)) * Math.pow(2, i));
    digitPosition++;
  }

  return decimalNumber;
}

function App() {

  const [binaryNumber, setBinaryNumber] = useState(null);
  const [decimalNumber, setDecimalNumber] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = (e) => {
    if (!binaryNumber) {
      return alert("Empty number not allowed!");
    }
    e.preventDefault()
    setDecimalNumber(convertBinaryToDecimal(binaryNumber))
    setShowResult(true)
  }

  const handleKeyDown = (e) => {
    const keyCode = e.keyCode || e.which
    if (keyCode !== 48 && keyCode !== 49 && keyCode !== 8) {
      e.preventDefault()
    }
  }

  return (
    <div className="App">
      <h1>
        Binary To Decimal Converter
      </h1>
      {!showResult ?
        <form onSubmit={handleSubmit}>
          <label for="binary">Binary:</label><br />
          <input
            type="number"
            id="binaryNumber"
            value={binaryNumber}
            onKeyDown={handleKeyDown}
            onChange={(e) => setBinaryNumber(e.target.value)}
          />
          <br />
          <input type="submit" value="Convert" />
        </form>
        :
        <>
          <h2>Result: {decimalNumber}</h2>
          <button onClick={() => setShowResult(false)}>Try again</button>
        </>
      }
    </div>
  );
}

export default App;
