/* eslint-disable no-unused-vars */
import React from 'react';
import TipData from './TipData';
import './Styles/Result.css';

export default function Result({ state, reseter }) {
  const { tipPerPerson, totalPerPerson } = state;

  return (
    <div className="tipData">
      <TipData title="Tip Amount" amount={tipPerPerson.toFixed(2)} />
      <TipData title="Total" amount={totalPerPerson.toFixed(2)} />
      <button className="resetButton" type="submit" onClick={reseter}>RESET</button>
    </div>
  );
}
