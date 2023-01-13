/* eslint-disable no-unused-vars */
import React from 'react';
import TipData from './TipData';
import './Styles/Result.css';

export default function Result({ state }) {
  const { bill: billnumber, people: peoplenumber, selectedTip: tipnumber } = state;
  const bill = parseFloat(billnumber);
  const tip = parseFloat(tipnumber);
  const people = parseFloat(peoplenumber);

  const tipPerPerson = (bill * tip) / people;
  const totalPerPerson = (bill + (bill * tip)) / people;
  return (
    <div className="tipData">
      <TipData title="Tip Amount" amount={tipPerPerson.toFixed(2)} />
      <TipData title="Total" amount={totalPerPerson.toFixed(2)} />
      <button className="resetButton" type="submit">RESET</button>
    </div>
  );
}
