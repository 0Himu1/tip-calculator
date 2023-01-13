/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Styles/TipButton.css';

export default function TipButton({ text, handelClick, tip }) {
  const selectedTip = parseFloat(text) / 100;
  return (
    <div className={`button ${tip === selectedTip ? 'active' : ''}`} onClick={() => handelClick(text)}>
      {`${text}%`}
    </div>
  );
}
