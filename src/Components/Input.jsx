import React from 'react';
import './Styles/Input.css';

export default function Input({ placeholder, name, changeHandler }) {
  return (
    <input
      type="number"
      name={name}
      placeholder={placeholder || '0.00'}
      onChange={changeHandler}
    />
  );
}
