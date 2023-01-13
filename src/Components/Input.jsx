import React from 'react';
import './Styles/Input.css';

export default function Input({
  placeholder, name, changeHandler, value,
}) {
  return (
    <input
      type="number"
      name={name}
      value={value}
      placeholder={placeholder || '0.00'}
      onChange={changeHandler}
    />
  );
}
