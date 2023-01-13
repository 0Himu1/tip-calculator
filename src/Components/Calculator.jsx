import React from 'react';
import MainInputs from './MainInputs';
import TipSelectors from './TipSelectors';
import './Styles/Calculator.css';
import DollerIcon from './Icons/DollerIcon';
import PersonIcon from './Icons/PersonIcon';

export default function Calculator({
  handelClick, changeHandler, tip, state,
}) {
  const { bill, people } = state;
  return (
    <div className="calculator">
      <MainInputs
        Icon={DollerIcon}
        title="Bill"
        name="bill"
        changeHandler={changeHandler}
        value={bill}
      />
      <TipSelectors
        title="Select Tip %"
        handelClick={handelClick}
        changeHandler={changeHandler}
        tip={tip}
      />
      <MainInputs
        Icon={PersonIcon}
        title="Number of People"
        name="people"
        value={people}
        changeHandler={changeHandler}
      />
    </div>
  );
}
