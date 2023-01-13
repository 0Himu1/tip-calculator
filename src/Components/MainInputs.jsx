import React from 'react';
import Input from './Input';
import './Styles/MainInput.css';

export default function MainInputs({
  Icon,
  title,
  placeholder,
  changeHandler,
  name,
  value,
}) {
  return (
    <div className="mainInput">
      <p className="title">{title}</p>
      <div className="inputBox">
        <div className="img">
          <Icon />
        </div>
        <Input
          placeholder={placeholder}
          changeHandler={changeHandler}
          name={name}
          value={value}
        />
      </div>
    </div>
  );
}
