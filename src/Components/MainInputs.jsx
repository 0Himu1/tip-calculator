import React from 'react';
import './Styles/MainInput.css';

export default function MainInputs({ img }) {
  return (
    <div>
      <p className="title">Bill</p>
      <div className="inputBox">
        <div className="img">{img}</div>
        <input type="number" placeholder="0.00" />
      </div>
    </div>
  );
}
