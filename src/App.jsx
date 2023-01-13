/* eslint-disable react/no-this-in-sfc */
import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Result from './Components/Result';

function App() {
  const state = {
    bill: '',
    people: 1,
    selectedTip: 0,
    tipPerPerson: 0,
    totalPerPerson: 0,
  };

  const [tipData, setTipData] = useState(state);

  const calculateTip = (currentData) => {
    const { bill, selectedTip, people } = currentData;
    const newState = {
      ...currentData,
      tipPerPerson: (bill * selectedTip) / people,
      totalPerPerson: (bill + (bill * selectedTip)) / people,
    };
    setTipData(newState);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const currentState = tipData;
    if (name === 'tip') {
      const tip = parseInt(value, 10) / 100;
      calculateTip({ ...currentState, selectedTip: tip });
    } else {
      calculateTip({ ...currentState, [name]: parseFloat(value) });
    }
  };

  const tipSelector = (n) => {
    const tip = parseInt(n, 10) / 100;
    const currentState = tipData;
    const updatedState = {
      ...currentState,
      selectedTip: tip,
    };
    calculateTip(updatedState);
  };

  const reseter = () => {
    calculateTip(state);
  };

  return (
    <div className="App">
      <Calculator
        handelClick={tipSelector}
        changeHandler={changeHandler}
        tip={tipData.selectedTip}
        state={tipData}
      />
      <Result state={tipData} reseter={reseter} />
    </div>
  );
}

export default App;
