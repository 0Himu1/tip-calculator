import { useState } from 'react';
import './App.css';
import Calculator from './Components/Calculator';
import Result from './Components/Result';

function App() {
  const state = {
    bill: '0.00',
    people: 1,
    selectedTip: 0,
  };

  const [tipData, setTipData] = useState(state);

  const tipSelector = (n) => {
    const tip = parseInt(n, 10) / 100;
    const currentState = tipData;
    const updatedState = {
      ...currentState,
      selectedTip: tip,
    };
    setTipData(updatedState);
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    const currentState = tipData;
    if (name === 'tip') {
      const tip = parseInt(value, 10) / 100;
      const updatedState = {
        ...currentState,
        selectedTip: tip,
      };
      setTipData(updatedState);
    } else {
      const updatedState = {
        ...currentState,
        [name]: value,
      };
      setTipData(updatedState);
    }
  };

  return (
    <div className="App">
      <Calculator
        handelClick={tipSelector}
        changeHandler={changeHandler}
        tip={tipData.selectedTip}
      />
      <Result state={tipData} />
    </div>
  );
}

export default App;
