import React from 'react';
import Input from './Input';
import TipButton from './TipButton';
import './Styles/TipSelectors.css';

export default function TipSelectors({
  title, handelClick, changeHandler, tip,
}) {
  return (
    <div>
      <p className="title">{title}</p>
      <div className="tipButtons">
        <TipButton text="5" handelClick={handelClick} tip={tip} />
        <TipButton text="10" handelClick={handelClick} tip={tip} />
        <TipButton text="15" handelClick={handelClick} tip={tip} />
        <TipButton text="25" handelClick={handelClick} tip={tip} />
        <TipButton text="50" handelClick={handelClick} tip={tip} />
        <Input placeholder="Custom" name="tip" changeHandler={changeHandler} />
      </div>
    </div>
  );
}
