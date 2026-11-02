import React from 'react';
import './Checkbox.css';

export default function Checkbox({
  id,
  name,
  checked,
  onChange,
  children,
  size = 13,
  className = '',
}) {
  return (
    <label htmlFor={id} className={`checkbox-label size-${size} ${className}`}>
      <input
        type="checkbox"
        id={id}
        name={name || id}
        checked={checked}
        onChange={onChange}
        className="checkbox-input"
      />
      <span className="checkbox-custom">
        <svg viewBox="0 0 16 16" className="checkbox-check" aria-hidden="true">
          <polyline points="3.5 8 6.5 11 12.5 5" fill="none" stroke="#17332A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      {children && <span className="checkbox-text">{children}</span>}
    </label>
  );
}
