// Options.js
import React from 'react';
import Option from './Option';
import '../css/Options.css';

const Options = ({ onSelect, activeOption }) => {
  const options = [
    { text: 'What is electronics?',   id: 'electronics' },
    { text: 'Basic circuit elements', id: 'elements'    },
    { text: 'Good books to read?',    id: 'books'       }
  ];
  const logo = "./blobs/logo.png"; // Make sure this path is correct
  return (
    <div className="options-container">
      <nav className="options">
        {options.map((option) => (
          <Option 
            key={option.id}
            text={option.text}
            isOpen={activeOption === option.id}
            onClick={() => onSelect(option.id)}
          />
        ))}
      </nav>
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Options;