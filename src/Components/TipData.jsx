import React from 'react';
import './Styles/TipData.css';

export default function TipData({ title, amount }) {
  return (
    <div className="dataBox">
      <div className="text">
        <h2>{title}</h2>
        <p>/ person</p>
      </div>
      <h1>{`$${amount}`}</h1>
    </div>
  );
}
