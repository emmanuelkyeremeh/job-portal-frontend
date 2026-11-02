import React from 'react';
import './Pill.css';

export default function Pill({ children, className = '' }) {
  return (
    <div className={`pill ${className}`}>
      <span className="pill-dot" />
      <span className="pill-text">{children}</span>
    </div>
  );
}
