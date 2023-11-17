// Option.js
import React from 'react';
import '../css/Option.css'
const Option = ({ text, onClick, isOpen }) => {
  const triangleChar = isOpen ? '▼' : '▶';

  return (
    <div className="option" onClick={onClick}>
      <span className="triangle">{triangleChar}</span>
      <span>{text}</span>
    </div>
  );
};

export default Option;
