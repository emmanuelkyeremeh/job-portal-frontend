import React from 'react';
import { ArrowRight } from './Icons';
import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  arrow = false,
  fullWidth = false,
  type = 'button',
  onClick,
  style,
  className = '',
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={style}
      className={`btn btn-${variant} ${fullWidth ? 'btn-full' : ''} ${className}`}
    >
      <span className="btn-label">{children}</span>
      {arrow && <ArrowRight size={16} stroke={2} color="currentColor" className="btn-arrow" />}
    </button>
  );
}
