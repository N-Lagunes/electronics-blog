// Options.js
import React from 'react';
import Option from './Option';

const Options = ({ onSelect, activeOption }) => {
  const options = [
    { text: 'What is electronics?',   id: 'electronics' },
    { text: 'Basic circuit elements', id: 'elements'    },
    { text: 'Good books to read?',    id: 'books'       }
  ];

  return (
    <nav>
      {options.map((option) => (
        <Option 
          key={option.id}
          text={option.text}
          isOpen={activeOption === option.id}
          onClick={() => onSelect(option.id)}
        />
      ))}
    </nav>
  );
};

export default Options;

