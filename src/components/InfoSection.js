// InfoSection.js
import React from 'react';
import '../css/InfoSection.css'; // This import should be at the top

const InfoSection = ({ content, title }) => {
  return (
    <div className="info-section">
      {title && <h2 className="info-title">{title}</h2>}
      <p className="info-content">{content}</p>
    </div>
  );
};

export default InfoSection;
