import React from 'react';
import '../styles/PageSpinner.css';

const PageSpinner = () => (
  <div className="ps-overlay">
    <div className="ps-content">
      {/* Spinning ring */}
      <div className="ps-ring">
        <div className="ps-ring-inner" />
      </div>
      {/* Coffee cup icon in center */}
      <div className="ps-icon">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke="#E32636" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
          <line x1="6" y1="1" x2="6" y2="4"/>
          <line x1="10" y1="1" x2="10" y2="4"/>
          <line x1="14" y1="1" x2="14" y2="4"/>
        </svg>
      </div>
    </div>
    <p className="ps-label">DOKI CAFÉ</p>
  </div>
);

export default PageSpinner;