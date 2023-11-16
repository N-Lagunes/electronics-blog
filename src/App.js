// App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Options from './components/Options';
import InfoSection from './components/InfoSection';

const App = () => {
  const [infoContent, setInfoContent] = useState('');
  const [activeOption, setActiveOption] = useState(null);

  const fetchTextContent = (fileURL, optionId) => {
    if (activeOption === optionId) {
      // If the same option was clicked again, hide the content and reset activeOption
      setInfoContent('');
      setActiveOption(null);
    } else {
      // Otherwise, fetch new content and set the active option
      fetch(fileURL)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(text => {
          setInfoContent(text);
          setActiveOption(optionId);
        })
        .catch(error => {
          console.error("Could not read the file: ", error);
          setInfoContent("Failed to load the file content.");
          setActiveOption(null);
        });
    }
  };

  const handleSelectOption = (optionId) => {
    switch (optionId) {
      case 'electronics':
        fetchTextContent('./blobs/electronics.txt', 'electronics');
        break;
      case 'elements':
        fetchTextContent('./blobs/elements.txt', 'elements'); 
        break;
      case 'books':
        fetchTextContent('./blobs/books.txt', 'books'); 
        break;
      default:
        setInfoContent('');
        setActiveOption(null);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <Options onSelect={handleSelectOption} activeOption={activeOption} />
      <InfoSection content={infoContent} />
    </div>
  );
};

export default App;

