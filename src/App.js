// App.js
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navbar from './components/Navbar';
import Options from './components/Options';
import InfoSection from './components/InfoSection';

const App = () => {
  const [infoContent, setInfoContent] = useState('');
  const [activeOption, setActiveOption] = useState(null);
  const [activeTitle, setActiveTitle] = useState(''); // State for the active title


  
  const fetchTextContent = (filePath, optionId) => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        setInfoContent(text);
        // Set the title based on the optionId
        const title = options.find(option => option.id === optionId)?.text || '';
        setActiveTitle(title);
      })
      .catch(error => {
        console.error("Could not read the file: ", error);
        setInfoContent("Failed to load the file content.");
      });
  };

  const handleSelectOption = (optionId) => {
    // If the same option was clicked again, toggle the content visibility
    if (activeOption === optionId) {
      setInfoContent('');
      setActiveOption(null);
      setActiveTitle('');
    } else {
      setActiveOption(optionId); // Set the new active option
      // Construct the file path based on the optionId
      const filePath = `/blobs/${optionId}.txt`;
      fetchTextContent(filePath, optionId);
    }
  };
  
  // Define your options here or import them from another module
  const options = [
    { text: 'What is electronics?',   id: 'electronics' },
    { text: 'Basic circuit elements', id: 'elements'    },
    { text: 'Good books to read?',    id: 'books'       }
  ];

  return (
    <div className="App">
      <Navbar />
      <Options onSelect={handleSelectOption} activeOption={activeOption} />
      {/*<InfoSection content={infoContent} />*/} 
      <CSSTransition
        in={!!infoContent} // Use 'infoContent' here
        timeout={500} 
        classNames="info-section"
        unmountOnExit
      >
         <InfoSection content={infoContent} title={activeTitle} />
      </CSSTransition>

    </div>
  );
};

export default App;

