import React from 'react';
import MainInputs from './MainInputs';
import TipSelectors from './TipSelectors';
import './Styles/Calculator.css';
import dolar from '../images/icon-dollar.svg';
import person from '../images/icon-person.svg';

export default function Calculator() {
  return (
    <div className="calculator">
      <MainInputs img={dolar} />
      <TipSelectors />
      <MainInputs img={person} />
    </div>
  );
}
